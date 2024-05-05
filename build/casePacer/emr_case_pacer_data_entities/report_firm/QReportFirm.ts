import {
  QueryObject,
  QNumberPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QFirm } from "../firm/QFirm";
import { QReport } from "../report/QReport";
import { ReportFirmId } from "./ReportFirm";

export class QReportFirm extends QueryObject {
  public readonly ReportFirmId = new QNumberPath(
    this.withPrefix("ReportFirmId")
  );
  public readonly ReportId = new QNumberPath(this.withPrefix("ReportId"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly Report = new QEntityPath(
    this.withPrefix("Report"),
    () => QReport
  );
}

export const qReportFirm = new QReportFirm();

export class QReportFirmId extends QId<ReportFirmId> {
  private readonly params = [new QNumberParam("ReportFirmId")];

  getParams() {
    return this.params;
  }
}
