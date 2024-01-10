export interface iRepository<IAggregateRoot> {
    save(aggregateRoot: IAggregateRoot): Promise<void> | void;
    getById(id: string): Promise<IAggregateRoot | undefined> | IAggregateRoot | undefined;
}
