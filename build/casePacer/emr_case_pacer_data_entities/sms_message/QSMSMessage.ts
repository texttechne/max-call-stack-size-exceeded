import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QDateTimeOffsetPath,
  QBooleanPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QCasePacerUser } from "../case_pacer_user/QCasePacerUser";
import { QSMSThread } from "../sms_thread/QSMSThread";
import { QSMSAttachment } from "../sms_attachment/QSMSAttachment";
import { SMSMessageId } from "./SMSMessage";

export class QSMSMessage extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly TwilioSMSId = new QStringPath(this.withPrefix("TwilioSMSId"));
  public readonly SMSThreadId = new QNumberPath(this.withPrefix("SMSThreadId"));
  public readonly Timestamp = new QDateTimeOffsetPath(
    this.withPrefix("Timestamp")
  );
  public readonly Body = new QStringPath(this.withPrefix("Body"));
  public readonly WasSent = new QBooleanPath(this.withPrefix("WasSent"));
  public readonly Price = new QNumberPath(this.withPrefix("Price"));
  public readonly FirmSenderPartyId = new QNumberPath(
    this.withPrefix("FirmSenderPartyId")
  );
  public readonly CasePacerUser = new QEntityPath(
    this.withPrefix("CasePacerUser"),
    () => QCasePacerUser
  );
  public readonly SMSThread = new QEntityPath(
    this.withPrefix("SMSThread"),
    () => QSMSThread
  );
  public readonly SMSAttachments = new QEntityCollectionPath(
    this.withPrefix("SMSAttachments"),
    () => QSMSAttachment
  );
}

export const qSMSMessage = new QSMSMessage();

export class QSMSMessageId extends QId<SMSMessageId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}
