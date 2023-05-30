export abstract class WatchedList {
  public currentItems: any[];
  private initial: any[];
  private new: any[];
  private removed: any[];

  constructor(initialItems?: any[]) {
    this.currentItems = initialItems ? initialItems : [];
    this.initial = initialItems ? initialItems : [];
    this.new = [];
    this.removed = [];
  }

  abstract compareItems(a: any, b: any): boolean;

  public getItems(): any[] {
    return this.currentItems;
  }

  public getNewItems(): any[] {
    return this.new;
  }

  public getRemovedItems(): any[] {
    return this.removed;
  }

  private isCurrentItem(item: any): boolean {
    return (
      this.currentItems.filter((v: any) => this.compareItems(item, v))
        .length !== 0
    );
  }

  private isNewItem(item: any): boolean {
    return this.new.filter((v: any) => this.compareItems(item, v)).length !== 0;
  }

  private isRemovedItem(item: any): boolean {
    return (
      this.removed.filter((v: any) => this.compareItems(item, v)).length !== 0
    );
  }

  private removeFromNew(item: any): void {
    this.new = this.new.filter((v) => !this.compareItems(v, item));
  }

  private removeFromCurrent(item: any): void {
    this.currentItems = this.currentItems.filter(
      (v) => !this.compareItems(item, v)
    );
  }

  private removeFromRemoved(item: any): void {
    this.removed = this.removed.filter((v) => !this.compareItems(item, v));
  }

  private wasAddedInitially(item: any): boolean {
    return (
      this.initial.filter((v: any) => this.compareItems(item, v)).length !== 0
    );
  }

  public exists(item: any): boolean {
    return this.isCurrentItem(item);
  }

  public add(item: any): void {
    if (this.isRemovedItem(item)) {
      this.removeFromRemoved(item);
    }

    if (!this.isNewItem(item) && !this.wasAddedInitially(item)) {
      this.new.push(item);
    }

    if (!this.isCurrentItem(item)) {
      this.currentItems.push(item);
    }
  }

  public remove(item: any): void {
    this.removeFromCurrent(item);

    if (this.isNewItem(item)) {
      this.removeFromNew(item);
      return;
    }

    if (!this.isRemovedItem(item)) {
      this.removed.push(item);
    }
  }
}
