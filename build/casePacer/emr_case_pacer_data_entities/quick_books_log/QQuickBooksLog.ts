import {
  QueryObject,
  QNumberPath,
  QDateTimeOffsetPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QFirm } from "../firm/QFirm";
import { QuickBooksLogId } from "./QuickBooksLog";

export class QQuickBooksLog extends QueryObject {
  public readonly QBLogId = new QNumberPath(this.withPrefix("QBLogId"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly EntryDate = new QDateTimeOffsetPath(
    this.withPrefix("EntryDate")
  );
  public readonly EntryType = new QStringPath(this.withPrefix("EntryType"));
  public readonly ActivityDescription = new QStringPath(
    this.withPrefix("ActivityDescription")
  );
  public readonly RelatedEntityType = new QStringPath(
    this.withPrefix("RelatedEntityType")
  );
  public readonly RelatedId = new QNumberPath(this.withPrefix("RelatedId"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
}

export const qQuickBooksLog = new QQuickBooksLog();

export class QQuickBooksLogId extends QId<QuickBooksLogId> {
  private readonly params = [new QNumberParam("QBLogId")];

  getParams() {
    return this.params;
  }
}
