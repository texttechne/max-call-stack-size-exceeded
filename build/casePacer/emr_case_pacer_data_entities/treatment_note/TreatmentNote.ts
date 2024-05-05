import { MedicalProvider } from "../medical_provider/MedicalProvider";

export interface TreatmentNote {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TreatmentNotesId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TreatmentNotesId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalProviderId` |
   * | Type | `Edm.Int32` |
   */
  MedicalProviderId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NoteDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  NoteDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Notes` |
   * | Type | `Edm.String` |
   */
  Notes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalProvider` |
   * | Type | `Emr.CasePacer.Data.Entities.MedicalProvider` |
   */
  MedicalProvider?: MedicalProvider | null;
}

export type TreatmentNoteId = number | { TreatmentNotesId: number };

export interface EditableTreatmentNote
  extends Pick<TreatmentNote, "NoteDate">,
    Partial<Pick<TreatmentNote, "MedicalProviderId" | "Notes">> {}
