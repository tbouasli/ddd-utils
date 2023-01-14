import { UniqueIdentifier } from './UniqueIdentifier';

const isEntity = (v: any): v is Entity<any> => {
  return v instanceof Entity;
};

/**
 * @desc Entities are objects that we determine their
 * equality through their unique identifier.
 */

export abstract class Entity<T> {
  protected readonly _id: UniqueIdentifier;
  public readonly props: T;

  constructor(props: T, id?: string) {
    this._id = id ? new UniqueIdentifier(id) : new UniqueIdentifier();
    this.props = props;
  }

  get id(): UniqueIdentifier {
    return this._id;
  }

  public equals(object?: Entity<T>): boolean {
    if (object == null || object == undefined) {
      return false;
    }

    if (this === object) {
      return true;
    }

    if (!isEntity(object)) {
      return false;
    }

    return this._id.equals(object._id);
  }
}
