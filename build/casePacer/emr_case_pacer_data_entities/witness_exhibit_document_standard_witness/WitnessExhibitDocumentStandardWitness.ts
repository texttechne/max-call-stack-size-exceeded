import { StandardWitness } from "../standard_witness/StandardWitness";
import { WitnessExhibitDocument } from "../witness_exhibit_document/WitnessExhibitDocument";

export interface WitnessExhibitDocumentStandardWitness {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocumentStandardWitnessesId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  WitnessExhibitDocumentStandardWitnessesId: number;
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
   * | Name | `StandardWitnessId` |
   * | Type | `Edm.Int32` |
   */
  StandardWitnessId: number | null;
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
   * | Name | `StandardWitness` |
   * | Type | `Emr.CasePacer.Data.Entities.StandardWitness` |
   */
  StandardWitness?: StandardWitness | null;
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

export type WitnessExhibitDocumentStandardWitnessId =
  | number
  | { WitnessExhibitDocumentStandardWitnessesId: number };

export interface EditableWitnessExhibitDocumentStandardWitness
  extends Pick<
      WitnessExhibitDocumentStandardWitness,
      "WitnessExhibitPartyType"
    >,
    Partial<
      Pick<
        WitnessExhibitDocumentStandardWitness,
        "WitnessExhibitDocumentId" | "StandardWitnessId"
      >
    > {}
