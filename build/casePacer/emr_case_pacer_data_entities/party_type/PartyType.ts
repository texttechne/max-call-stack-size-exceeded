import { Party } from "../party/Party";

export interface PartyType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PartyTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  PartyTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ValidParties` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ValidParties: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Parties` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Party)` |
   */
  Parties?: Array<Party>;
}

export type PartyTypeId = number | { PartyTypeId: number };

export interface EditablePartyType
  extends Pick<PartyType, "PartyTypeName" | "ValidParties"> {}
