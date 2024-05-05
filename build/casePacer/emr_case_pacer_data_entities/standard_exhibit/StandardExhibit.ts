import { Firm } from "../firm/Firm";
import { WitnessExhibitDocumentStandardExhibit } from "../witness_exhibit_document_standard_exhibit/WitnessExhibitDocumentStandardExhibit";

export interface StandardExhibit {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StandardExhibitId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  StandardExhibitId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmPartyId` |
   * | Type | `Edm.Int32` |
   */
  FirmPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StandardExhibitName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  StandardExhibitName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Sequence` |
   * | Type | `Edm.Int16` |
   * | Nullable | `false` |
   */
  Sequence: number;
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
   * | Name | `WitnessExhibitDocumentStandardExhibits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.WitnessExhibitDocumentStandardExhibit)` |
   */
  WitnessExhibitDocumentStandardExhibits?: Array<WitnessExhibitDocumentStandardExhibit>;
}

export type StandardExhibitId = number | { StandardExhibitId: number };

export interface EditableStandardExhibit
  extends Pick<StandardExhibit, "StandardExhibitName" | "Sequence">,
    Partial<Pick<StandardExhibit, "FirmPartyId">> {}
