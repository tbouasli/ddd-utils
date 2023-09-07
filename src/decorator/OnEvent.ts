import { DomainEvents, IDomainEvent } from '@/domain';

/**
 * Decorator function for registering a handler for a DomainEvent.
 * @param eventClassName The name of the DomainEvent class.
 */
export function OnEvent(eventClassName: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        DomainEvents.register(originalMethod, eventClassName);

        return descriptor;
    };
}
