import { ReportFirm } from "../report_firm/ReportFirm";

export interface Report {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReportId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ReportId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Name` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Name: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Description` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Description: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `URL` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  URL: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AllFirmFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  AllFirmFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReportFirms` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ReportFirm)` |
   */
  ReportFirms?: Array<ReportFirm>;
}

export type ReportId = number | { ReportId: number };

export interface EditableReport
  extends Pick<Report, "Name" | "Description" | "URL" | "AllFirmFlag"> {}
