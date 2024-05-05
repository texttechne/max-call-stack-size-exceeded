import { PlanItem } from "../plan_item/PlanItem";

export interface PublicTransportation extends PlanItem {
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SeatNumber` |
   * | Type | `Edm.String` |
   */
  SeatNumber: string | null;
}

export interface EditablePublicTransportation
  extends Pick<PublicTransportation, "StartsAt" | "EndsAt" | "Duration">,
    Partial<Pick<PublicTransportation, "ConfirmationCode" | "SeatNumber">> {}
