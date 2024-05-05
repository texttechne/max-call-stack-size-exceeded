import { LawsuitParty } from "../lawsuit_party/LawsuitParty";

export interface PlaintiffLawsuitParty {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PlaintiffLawsuitPartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPartyId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HipaaComplianceRcvd` |
   * | Type | `Edm.DateTimeOffset` |
   */
  HipaaComplianceRcvd: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalInventorySentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  MedicalInventorySentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalInventoryReceivedFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  MedicalInventoryReceivedFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TreatmentReleaseDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  TreatmentReleaseDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Injury` |
   * | Type | `Edm.String` |
   */
  Injury: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ThankYouLtrSentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ThankYouLtrSentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementProcessSentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  SettlementProcessSentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitParty` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  LawsuitParty?: LawsuitParty | null;
}

export type PlaintiffLawsuitPartyId =
  | number
  | { PlaintiffLawsuitPartyId: number };

export interface EditablePlaintiffLawsuitParty
  extends Pick<PlaintiffLawsuitParty, "MedicalInventoryReceivedFlag">,
    Partial<
      Pick<
        PlaintiffLawsuitParty,
        | "LawsuitPartyId"
        | "HipaaComplianceRcvd"
        | "MedicalInventorySentDate"
        | "TreatmentReleaseDate"
        | "Injury"
        | "ThankYouLtrSentDate"
        | "SettlementProcessSentDate"
      >
    > {}
