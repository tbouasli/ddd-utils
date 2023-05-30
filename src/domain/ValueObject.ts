import { shallowEqual } from "shallow-equal-object";

/**
 * @desc ValueObjects are objects that we determine their
 * equality through their structural property.
 */

export abstract class ValueObject {
  public equals(vo?: ValueObject): boolean {
    const thisAttributes = Object.values(this);
    const voAttributes = Object.values(vo);

    if (vo === null || vo === undefined) {
      return false;
    }
    if (voAttributes === undefined) {
      return false;
    }
    return shallowEqual(thisAttributes, voAttributes);
  }
}
