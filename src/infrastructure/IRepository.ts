export interface iRepository<IAggregateRoot> {
    save(aggregateRoot: IAggregateRoot): Promise<void>;
    getById(id: string): Promise<IAggregateRoot>;
}
