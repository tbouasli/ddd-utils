import { AggregateRoot } from '..';

export interface iMapper<IPersistence, IAggregateRoot extends AggregateRoot<any>> {
    toPersistence(aggregateRoot: IAggregateRoot): IPersistence;
    toDomain(persistence: IPersistence): IAggregateRoot;
}
