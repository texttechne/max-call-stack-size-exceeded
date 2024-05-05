import { Firm } from "../firm/Firm";
import { WitnessExhibitDocumentStandardWitness } from "../witness_exhibit_document_standard_witness/WitnessExhibitDocumentStandardWitness";

export interface StandardWitness {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StandardWitnessId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  StandardWitnessId: number;
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
   * | Name | `StandardWitnessName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  StandardWitnessName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Sequence` |
   * | Type | `Edm.Byte` |
   */
  Sequence: number | null;
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
   * | Name | `WitnessExhibitDocumentStandardWitnesses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.WitnessExhibitDocumentStandardWitness)` |
   */
  WitnessExhibitDocumentStandardWitnesses?: Array<WitnessExhibitDocumentStandardWitness>;
}

export type StandardWitnessId = number | { StandardWitnessId: number };

export interface EditableStandardWitness
  extends Pick<StandardWitness, "StandardWitnessName">,
    Partial<Pick<StandardWitness, "FirmPartyId" | "Sequence">> {}
