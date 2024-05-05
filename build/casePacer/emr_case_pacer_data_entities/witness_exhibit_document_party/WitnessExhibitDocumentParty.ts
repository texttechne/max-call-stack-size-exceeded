import { Party } from "../party/Party";
import { WitnessExhibitDocument } from "../witness_exhibit_document/WitnessExhibitDocument";

export interface WitnessExhibitDocumentParty {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocumentPartiesId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  WitnessExhibitDocumentPartiesId: number;
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
   * | Name | `PartyId` |
   * | Type | `Edm.Int32` |
   */
  PartyId: number | null;
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
   * | Name | `Party` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Party?: Party | null;
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

export type WitnessExhibitDocumentPartyId =
  | number
  | { WitnessExhibitDocumentPartiesId: number };

export interface EditableWitnessExhibitDocumentParty
  extends Pick<WitnessExhibitDocumentParty, "WitnessExhibitPartyType">,
    Partial<
      Pick<WitnessExhibitDocumentParty, "WitnessExhibitDocumentId" | "PartyId">
    > {}
