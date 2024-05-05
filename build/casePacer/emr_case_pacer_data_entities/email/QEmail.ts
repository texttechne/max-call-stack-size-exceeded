import {
  QueryObject,
  QNumberPath,
  QDateTimeOffsetPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QFirm } from "../firm/QFirm";
import { QRecordFile } from "../record_file/QRecordFile";
import { EmailId } from "./Email";

export class QEmail extends QueryObject {
  public readonly EmailId = new QNumberPath(this.withPrefix("EmailId"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly RecordFileId = new QNumberPath(
    this.withPrefix("RecordFileId")
  );
  public readonly EmailDate = new QDateTimeOffsetPath(
    this.withPrefix("EmailDate")
  );
  public readonly EmailSubject = new QStringPath(
    this.withPrefix("EmailSubject")
  );
  public readonly EmailFrom = new QStringPath(this.withPrefix("EmailFrom"));
  public readonly EmailTo = new QStringPath(this.withPrefix("EmailTo"));
  public readonly EmailCc = new QStringPath(this.withPrefix("EmailCc"));
  public readonly EmailBcc = new QStringPath(this.withPrefix("EmailBcc"));
  public readonly EmailAttCount = new QNumberPath(
    this.withPrefix("EmailAttCount")
  );
  public readonly EmailSize = new QNumberPath(this.withPrefix("EmailSize"));
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly RecordFile = new QEntityPath(
    this.withPrefix("RecordFile"),
    () => QRecordFile
  );
}

export const qEmail = new QEmail();

export class QEmailId extends QId<EmailId> {
  private readonly params = [new QNumberParam("EmailId")];

  getParams() {
    return this.params;
  }
}
