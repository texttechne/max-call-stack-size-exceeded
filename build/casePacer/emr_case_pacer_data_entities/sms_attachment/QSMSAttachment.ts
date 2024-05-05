import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QRecord } from "../record/QRecord";
import { QSMSMessage } from "../sms_message/QSMSMessage";
import { SMSAttachmentId } from "./SMSAttachment";

export class QSMSAttachment extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly SMSMessageId = new QNumberPath(
    this.withPrefix("SMSMessageId")
  );
  public readonly RecordId = new QNumberPath(this.withPrefix("RecordId"));
  public readonly ContentType = new QStringPath(this.withPrefix("ContentType"));
  public readonly Record = new QEntityPath(
    this.withPrefix("Record"),
    () => QRecord
  );
  public readonly SMSMessage = new QEntityPath(
    this.withPrefix("SMSMessage"),
    () => QSMSMessage
  );
}

export const qSMSAttachment = new QSMSAttachment();

export class QSMSAttachmentId extends QId<SMSAttachmentId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}
