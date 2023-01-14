import { UniqueIdentifier } from '../UniqueIdentifier';

/**
 * @desc Interface for Domain Events
 * @link https://khalilstemmler.com/articles/typescript-domain-driven-design/chain-business-logic-domain-events/
 * @author khalilstemmler
 */

export interface IDomainEvent {
  dateTimeOccurred: Date;
  getAggregateId(): UniqueIdentifier;
}
