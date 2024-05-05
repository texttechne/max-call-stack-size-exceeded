import { Litigation } from "../litigation/Litigation";
import { Party } from "../party/Party";

export interface Complaint {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ComplaintElementId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ComplaintElementId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ElementNumber` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ElementNumber: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ElementText` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ElementText: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ElementPartyId` |
   * | Type | `Edm.Int32` |
   */
  ElementPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ElementPartyTypeId` |
   * | Type | `Edm.Int32` |
   */
  ElementPartyTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LitigationId` |
   * | Type | `Edm.Int32` |
   */
  LitigationId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Litigation` |
   * | Type | `Emr.CasePacer.Data.Entities.Litigation` |
   */
  Litigation?: Litigation | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Party` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Party?: Party | null;
}

export type ComplaintId = number | { ComplaintElementId: number };

export interface EditableComplaint
  extends Pick<Complaint, "ElementNumber" | "ElementText">,
    Partial<
      Pick<Complaint, "ElementPartyId" | "ElementPartyTypeId" | "LitigationId">
    > {}
