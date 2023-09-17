export interface iRepository<IAggregateRoot> {
    save(aggregateRoot: IAggregateRoot): Promise<void> | void;
    getById(id: string): Promise<IAggregateRoot> | IAggregateRoot;
}
