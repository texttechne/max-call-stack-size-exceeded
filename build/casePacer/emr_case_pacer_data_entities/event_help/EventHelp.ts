import { CasePacerUser } from "../case_pacer_user/CasePacerUser";

export interface EventHelp {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyQuickEntryComplete` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  PartyQuickEntryComplete: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUser` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  CasePacerUser?: CasePacerUser | null;
}

export type EventHelpId = number | { PartyId: number };

export interface EditableEventHelp
  extends Pick<EventHelp, "PartyQuickEntryComplete"> {}
