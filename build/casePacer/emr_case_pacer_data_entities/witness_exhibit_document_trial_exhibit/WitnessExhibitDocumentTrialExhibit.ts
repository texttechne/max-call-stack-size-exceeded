import { TrialExhibit } from "../trial_exhibit/TrialExhibit";
import { WitnessExhibitDocument } from "../witness_exhibit_document/WitnessExhibitDocument";

export interface WitnessExhibitDocumentTrialExhibit {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocumentTrialExhibitsId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  WitnessExhibitDocumentTrialExhibitsId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocumentId` |
   * | Type | `Edm.Int32` |
   */
  WitnessExhibitDocumentId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialExhibitId` |
   * | Type | `Edm.Int32` |
   */
  TrialExhibitId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitPartyType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  WitnessExhibitPartyType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialExhibit` |
   * | Type | `Emr.CasePacer.Data.Entities.TrialExhibit` |
   */
  TrialExhibit?: TrialExhibit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocument` |
   * | Type | `Emr.CasePacer.Data.Entities.WitnessExhibitDocument` |
   */
  WitnessExhibitDocument?: WitnessExhibitDocument | null;
}

export type WitnessExhibitDocumentTrialExhibitId =
  | number
  | { WitnessExhibitDocumentTrialExhibitsId: number };

export interface EditableWitnessExhibitDocumentTrialExhibit
  extends Pick<WitnessExhibitDocumentTrialExhibit, "WitnessExhibitPartyType">,
    Partial<
      Pick<
        WitnessExhibitDocumentTrialExhibit,
        "WitnessExhibitDocumentId" | "TrialExhibitId"
      >
    > {}
