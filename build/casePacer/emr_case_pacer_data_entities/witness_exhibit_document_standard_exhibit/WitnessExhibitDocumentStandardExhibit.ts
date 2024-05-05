import { StandardExhibit } from "../standard_exhibit/StandardExhibit";
import { WitnessExhibitDocument } from "../witness_exhibit_document/WitnessExhibitDocument";

export interface WitnessExhibitDocumentStandardExhibit {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocumentStandardExhibitsId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  WitnessExhibitDocumentStandardExhibitsId: number;
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
   * | Name | `StandardExhibitId` |
   * | Type | `Edm.Int32` |
   */
  StandardExhibitId: number | null;
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
   * | Name | `StandardExhibit` |
   * | Type | `Emr.CasePacer.Data.Entities.StandardExhibit` |
   */
  StandardExhibit?: StandardExhibit | null;
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

export type WitnessExhibitDocumentStandardExhibitId =
  | number
  | { WitnessExhibitDocumentStandardExhibitsId: number };

export interface EditableWitnessExhibitDocumentStandardExhibit
  extends Pick<
      WitnessExhibitDocumentStandardExhibit,
      "WitnessExhibitPartyType"
    >,
    Partial<
      Pick<
        WitnessExhibitDocumentStandardExhibit,
        "WitnessExhibitDocumentId" | "StandardExhibitId"
      >
    > {}
