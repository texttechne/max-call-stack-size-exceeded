import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QBooleanPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QReportFirm } from "../report_firm/QReportFirm";
import { ReportId } from "./Report";

export class QReport extends QueryObject {
  public readonly ReportId = new QNumberPath(this.withPrefix("ReportId"));
  public readonly Name = new QStringPath(this.withPrefix("Name"));
  public readonly Description = new QStringPath(this.withPrefix("Description"));
  public readonly URL = new QStringPath(this.withPrefix("URL"));
  public readonly AllFirmFlag = new QBooleanPath(
    this.withPrefix("AllFirmFlag")
  );
  public readonly ReportFirms = new QEntityCollectionPath(
    this.withPrefix("ReportFirms"),
    () => QReportFirm
  );
}

export const qReport = new QReport();

export class QReportId extends QId<ReportId> {
  private readonly params = [new QNumberParam("ReportId")];

  getParams() {
    return this.params;
  }
}
