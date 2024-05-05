import { LawsuitParty } from "../lawsuit_party/LawsuitParty";

export interface DefendantAttorney {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefendantAttorneyID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DefendantAttorneyID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefendantLawsuitPartyID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DefendantLawsuitPartyID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyLawsuitPartyID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AttorneyLawsuitPartyID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Attorney` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  Attorney?: LawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Defendant` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  Defendant?: LawsuitParty | null;
}

export type DefendantAttorneyId = number | { DefendantAttorneyID: number };

export interface EditableDefendantAttorney
  extends Pick<
    DefendantAttorney,
    "DefendantLawsuitPartyID" | "AttorneyLawsuitPartyID"
  > {}
