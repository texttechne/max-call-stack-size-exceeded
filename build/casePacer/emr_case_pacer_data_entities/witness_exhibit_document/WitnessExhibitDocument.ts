import { Lawsuit } from "../lawsuit/Lawsuit";
import { WitnessExhibitDocumentParty } from "../witness_exhibit_document_party/WitnessExhibitDocumentParty";
import { WitnessExhibitDocumentStandardExhibit } from "../witness_exhibit_document_standard_exhibit/WitnessExhibitDocumentStandardExhibit";
import { WitnessExhibitDocumentStandardWitness } from "../witness_exhibit_document_standard_witness/WitnessExhibitDocumentStandardWitness";
import { WitnessExhibitDocumentTrialExhibit } from "../witness_exhibit_document_trial_exhibit/WitnessExhibitDocumentTrialExhibit";

export interface WitnessExhibitDocument {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocumentId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  WitnessExhibitDocumentId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntroParagraph` |
   * | Type | `Edm.String` |
   */
  IntroParagraph: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartiesSectionOrder` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PartiesSectionOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessesSectionOrder` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  WitnessesSectionOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProvidersSectionOrder` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ProvidersSectionOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmployersSectionOrder` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  EmployersSectionOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OtherWitnessesSectionOrder` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  OtherWitnessesSectionOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StandardWitnessesSectionOrder` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  StandardWitnessesSectionOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocumentParties` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.WitnessExhibitDocumentParty)` |
   */
  WitnessExhibitDocumentParties?: Array<WitnessExhibitDocumentParty>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocumentStandardExhibits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.WitnessExhibitDocumentStandardExhibit)` |
   */
  WitnessExhibitDocumentStandardExhibits?: Array<WitnessExhibitDocumentStandardExhibit>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocumentStandardWitnesses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.WitnessExhibitDocumentStandardWitness)` |
   */
  WitnessExhibitDocumentStandardWitnesses?: Array<WitnessExhibitDocumentStandardWitness>;
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

export type WitnessExhibitDocumentId =
  | number
  | { WitnessExhibitDocumentId: number };

export interface EditableWitnessExhibitDocument
  extends Pick<
      WitnessExhibitDocument,
      | "PartiesSectionOrder"
      | "WitnessesSectionOrder"
      | "ProvidersSectionOrder"
      | "EmployersSectionOrder"
      | "OtherWitnessesSectionOrder"
      | "StandardWitnessesSectionOrder"
    >,
    Partial<Pick<WitnessExhibitDocument, "LawsuitId" | "IntroParagraph">> {}
