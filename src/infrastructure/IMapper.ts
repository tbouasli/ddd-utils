export interface iMapper<IPersistence, IAggregateRoot> {
    toPersistence(aggregateRoot: IAggregateRoot): IPersistence;
    toDomain(persistence: IPersistence): IAggregateRoot;
}
