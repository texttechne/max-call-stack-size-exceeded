import { CPDirectMedicalProvider } from "../cp_direct_medical_provider/CPDirectMedicalProvider";

export interface CPDirectTreatmentNote {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectMedicalProviderId` |
   * | Type | `Edm.Int32` |
   */
  CPDirectMedicalProviderId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Note` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Note: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TreatmentDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  TreatmentDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectMedicalProvider` |
   * | Type | `Emr.CasePacer.Data.Entities.CPDirectMedicalProvider` |
   */
  CPDirectMedicalProvider?: CPDirectMedicalProvider | null;
}

export type CPDirectTreatmentNoteId = number | { Id: number };

export interface EditableCPDirectTreatmentNote
  extends Pick<CPDirectTreatmentNote, "Note" | "TreatmentDate">,
    Partial<Pick<CPDirectTreatmentNote, "CPDirectMedicalProviderId">> {}
