import { UniqueIdentifier } from "./UniqueIdentifier";

const isEntity = (v: any): v is Entity<any> => {
  return v instanceof Entity;
};

/**
 * @desc Entities are objects that we determine their
 * equality through their unique identifier.
 */

export abstract class Entity<T> {
  protected readonly _id: UniqueIdentifier;

  constructor(id?: string) {
    this._id = id ? new UniqueIdentifier(id) : new UniqueIdentifier();
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
    } else if (typeof entityOrString === "string") {
      return this._id.equals(new UniqueIdentifier(entityOrString));
    }

    return false;
  }
}
