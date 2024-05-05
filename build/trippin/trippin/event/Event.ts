import { PlanItem } from "../plan_item/PlanItem";
import {
  EventLocation,
  EditableEventLocation,
} from "../event_location/EventLocation";

export interface Event extends PlanItem {
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OccursAt` |
   * | Type | `Trippin.EventLocation` |
   */
  OccursAt: EventLocation | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Description` |
   * | Type | `Edm.String` |
   */
  Description: string | null;
}

export interface EditableEvent
  extends Pick<Event, "StartsAt" | "EndsAt" | "Duration">,
    Partial<Pick<Event, "ConfirmationCode" | "Description">> {
  OccursAt?: EditableEventLocation | null;
}
