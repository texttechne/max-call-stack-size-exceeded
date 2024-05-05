import { Lawsuit } from "../lawsuit/Lawsuit";

export interface LawsuitRecordRequest {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitRecordRequestId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  LawsuitRecordRequestId: number;
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
   * | Name | `OrderNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  OrderNumber: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OrderContents` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  OrderContents: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsComplete` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  IsComplete: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LastChecked` |
   * | Type | `Edm.DateTimeOffset` |
   */
  LastChecked: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
}

export type LawsuitRecordRequestId =
  | number
  | { LawsuitRecordRequestId: number };

export interface EditableLawsuitRecordRequest
  extends Pick<
      LawsuitRecordRequest,
      "OrderNumber" | "OrderContents" | "IsComplete"
    >,
    Partial<Pick<LawsuitRecordRequest, "LawsuitId" | "LastChecked">> {}
