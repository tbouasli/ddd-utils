import { validate } from 'class-validator';

import { DomainValidationError, Either, left, right } from '../errors/index';
import { UniqueIdentifier } from './unique-identifier';

const isEntity = (v: any): v is Entity<any> => {
    return v instanceof Entity;
};

/**
 * @desc Entities are objects that we determine their
 * equality through their unique identifier.
 */

export abstract class Entity<T> {
    protected readonly _id: UniqueIdentifier;

    constructor(props: T, id?: string) {
        this._id = id ? new UniqueIdentifier(id) : new UniqueIdentifier();
        Object.assign(this, props);
    }

    get id(): UniqueIdentifier {
        return this._id;
    }

    public equals(entityOrString?: Entity<T> | string): boolean {
        if (entityOrString == null || entityOrString == undefined) {
            return false;
        }

        const isAnEntity = isEntity(entityOrString);

        if (isAnEntity) {
            return this._id.equals(entityOrString._id);
        } else if (typeof entityOrString === 'string') {
            return this._id.equals(new UniqueIdentifier(entityOrString));
        }

        return false;
    }

    protected async validate(): Promise<Either<DomainValidationError, void>> {
        const errors = await validate(this);

        if (errors.length > 0) {
            const firstConstraint = Object.values(errors[0].constraints)[0];
            return left(new DomainValidationError(firstConstraint));
        }

        return right(null);
    }
}
