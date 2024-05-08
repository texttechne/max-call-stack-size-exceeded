import { Person } from "../person/Person";
import { PlanItem } from "../plan_item/PlanItem";

export interface Trip {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TripId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TripId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShareId` |
   * | Type | `Edm.Guid` |
   * | Nullable | `false` |
   */
  ShareId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Name` |
   * | Type | `Edm.String` |
   */
  Name: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Budget` |
   * | Type | `Edm.Single` |
   * | Nullable | `false` |
   */
  Budget: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Description` |
   * | Type | `Edm.String` |
   */
  Description: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Tags` |
   * | Type | `Collection(Edm.String)` |
   */
  Tags: Array<string>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StartsAt` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  StartsAt: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EndsAt` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  EndsAt: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TripPeople` |
   * | Type | `Collection(Trippin.Person)` |
   */
  TripPeople?: Array<Person>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlanItems` |
   * | Type | `Collection(Trippin.PlanItem)` |
   */
  PlanItems?: Array<PlanItem>;
}

export type TripId = number | { TripId: number };

export interface EditableTrip
  extends Pick<Trip, "ShareId" | "Budget" | "StartsAt" | "EndsAt">,
    Partial<Pick<Trip, "Name" | "Description" | "Tags">> {}
