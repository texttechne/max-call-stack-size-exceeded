import { Firm } from "../firm/Firm";
import { Trial } from "../trial/Trial";
import { WitnessExhibitDocumentTrialExhibit } from "../witness_exhibit_document_trial_exhibit/WitnessExhibitDocumentTrialExhibit";

export interface TrialExhibit {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialExhibitId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TrialExhibitId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Description` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Description: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialId` |
   * | Type | `Edm.Int32` |
   */
  TrialId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  FirmId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Trial` |
   * | Type | `Emr.CasePacer.Data.Entities.Trial` |
   */
  Trial?: Trial | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocumentTrialExhibits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.WitnessExhibitDocumentTrialExhibit)` |
   */
  WitnessExhibitDocumentTrialExhibits?: Array<WitnessExhibitDocumentTrialExhibit>;
}

export type TrialExhibitId = number | { TrialExhibitId: number };

export interface EditableTrialExhibit
  extends Pick<TrialExhibit, "Description" | "FirmId">,
    Partial<Pick<TrialExhibit, "TrialId">> {}
