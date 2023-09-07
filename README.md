# DDD Utils

This npm package provides a set of utilities for building domain-driven design (DDD) applications. It includes essential classes and interfaces for defining aggregates, entities, value objects, domain events, decorators, use cases, and error handling. These utilities are designed to help you structure your application's domain logic effectively.

## Installation

You can install this package via npm:

```bash
npm install @thomasbouasli/ddd-utils
```

## How to use this package

If you are starting out with DDD or want to learn more about it, I recommend reading [@stemmlerjs](https://github.com/stemmlerjs) excellent articles found on [khalilstemmler.com](https://khalilstemmler.com/) and watching [@CodeOpinion](https://www.youtube.com/@CodeOpinion) youtube channel, which contains many helpful videos.

## Usage

### Aggregate Root

```javascript
import { AggregateRoot, Entity, UniqueIdentifier, DomainEvents } from '@thomasbouasli/ddd-utils';

class MyAggregate extends AggregateRoot<MyAggregateProps> {
  // Your custom methods and properties here

  public someAction() {
    // Perform actions and raise domain events if needed
    const domainEvent = new MyDomainEvent(/* event data */);
    this.addDomainEvent(domainEvent);
  }
}

// Usage example
const myAggregate = new MyAggregate(/* aggregate properties */);
myAggregate.someAction();

// Access domain events raised by the aggregate
const domainEvents = myAggregate.domainEvents;
```

### Entity

```javascript
import { Entity, UniqueIdentifier } from '@thomasbouasli/ddd-utils';

class MyEntity extends Entity<MyEntityProps> {
  // Your custom methods and properties here
}

// Usage example
const myEntity = new MyEntity(/* entity properties */);
const entityId = myEntity.id;

// Check equality of entities
const isEqual = myEntity.equals(anotherEntity);
```

### Value Object

```javascript
import { ValueObject } from '@thomasbouasli/ddd-utils';

class MyValueObject extends ValueObject<MyValueObjectProps> {
  // Your custom methods and properties here
}

// Usage example
const valueObject1 = new MyValueObject(/* value object properties */);
const valueObject2 = new MyValueObject(/* value object properties */);

// Check equality of value objects
const isEqual = valueObject1.equals(valueObject2);
```

### Domain Events

```javascript
import { DomainEvents, IDomainEvent } from '@thomasbouasli/ddd-utils';

// Register a handler for a specific domain event
DomainEvents.register((event: MyDomainEvent) => {
  // Handle the domain event
}, 'MyDomainEventClassName');

// Dispatch domain events
DomainEvents.dispatch(new MyDomainEvent(/* event data */));

// Dispatch domain events for a specific aggregate
DomainEvents.dispatchEventsForAggregate(aggregateId);
```

### Decorators

```javascript
import { OnEvent } from '@thomasbouasli/ddd-utils';

class MyEventHandler {
  @OnEvent('MyDomainEventClassName')
  handleMyDomainEvent(event: MyDomainEvent) {
    // Handle the domain event
  }
}
```

### Use Cases

```javascript
import { IUseCase } from '@thomasbouasli/ddd-utils';

class MyUseCase implements IUseCase<MyRequest, MyResponse> {
  async execute(request: MyRequest): Promise<MyResponse> {
    // Implement your use case logic
  }
}
```

### Errors

```javascript
import { ApplicationError, DomainValidationError, Either, left, right } from '@thomasbouasli/ddd-utils';

// Custom application error
throw new ApplicationError('An error occurred in the application.');

// Custom domain validation error
throw new DomainValidationError('Validation failed for a domain entity.');

// Either monad for error handling
const result: Either<ErrorType, SuccessType> = left(new ErrorType('Error message'));
```

### Infrastructure

```javascript
import { iMapper, iRepository } from '@thomasbouasli/ddd-utils';

// Define a custom mapper for persistence
class MyMapper implements iMapper<PersistenceType, AggregateType> {
  toPersistence(aggregateRoot: AggregateType): PersistenceType {
    // Map aggregate to persistence data
  }

  toDomain(persistence: PersistenceType): AggregateType {
    // Map persistence data to aggregate
  }
}

// Define a custom repository
class MyRepository implements iRepository<AggregateType> {
  async save(aggregateRoot: AggregateType): Promise<void> {
    // Save the aggregate to the database or storage
  }
}
```

## License

This package is licensed under the MIT License.

## Acknowledgments

This package is inspired by domain-driven design principles and patterns. It aims to provide a foundation for building robust and maintainable domain logic in your applications.