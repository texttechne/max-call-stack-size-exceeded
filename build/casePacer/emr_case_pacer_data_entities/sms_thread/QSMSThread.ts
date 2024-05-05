import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QDateTimeOffsetPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QContactInfo } from "../contact_info/QContactInfo";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QTwilioPhone } from "../twilio_phone/QTwilioPhone";
import { QSMSMessage } from "../sms_message/QSMSMessage";
import { SMSThreadId } from "./SMSThread";

export class QSMSThread extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly TwilioPhoneId = new QNumberPath(
    this.withPrefix("TwilioPhoneId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly ContactInfoId = new QNumberPath(
    this.withPrefix("ContactInfoId")
  );
  public readonly PhoneNumber = new QStringPath(this.withPrefix("PhoneNumber"));
  public readonly LastReceived = new QDateTimeOffsetPath(
    this.withPrefix("LastReceived")
  );
  public readonly ContactInfo = new QEntityPath(
    this.withPrefix("ContactInfo"),
    () => QContactInfo
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly TwilioPhone = new QEntityPath(
    this.withPrefix("TwilioPhone"),
    () => QTwilioPhone
  );
  public readonly SMSMessages = new QEntityCollectionPath(
    this.withPrefix("SMSMessages"),
    () => QSMSMessage
  );
}

export const qSMSThread = new QSMSThread();

export class QSMSThreadId extends QId<SMSThreadId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}
