import { Firm } from "../firm/Firm";
import { Report } from "../report/Report";

export interface ReportFirm {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReportFirmId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ReportFirmId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReportId` |
   * | Type | `Edm.Int32` |
   */
  ReportId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  FirmId: number;
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
   * | Name | `Report` |
   * | Type | `Emr.CasePacer.Data.Entities.Report` |
   */
  Report?: Report | null;
}

export type ReportFirmId = number | { ReportFirmId: number };

export interface EditableReportFirm
  extends Pick<ReportFirm, "FirmId">,
    Partial<Pick<ReportFirm, "ReportId">> {}
