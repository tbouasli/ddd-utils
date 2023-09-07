import { v4 as uuid, validate } from 'uuid';

/**
 * @desc UniqueIdentifiers are objects that we determine their
 * equality by their value, not by their reference.
 */

export class UniqueIdentifier {
    private readonly _id: string;

    constructor(id?: string) {
        if (id && !validate(id)) {
            throw new Error('Invalid id');
        }

        this._id = id || uuid();
    }

    get value(): string {
        return this._id;
    }

    equals(id?: UniqueIdentifier): boolean {
        if (id === null || id === undefined) {
            return false;
        }

        if (!(id instanceof UniqueIdentifier)) {
            return false;
        }

        return this.value === id.value;
    }
}
