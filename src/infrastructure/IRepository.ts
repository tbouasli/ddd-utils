export interface iRepository<IAggregateRoot> {
    save(aggregateRoot: IAggregateRoot): Promise<void>;
}
