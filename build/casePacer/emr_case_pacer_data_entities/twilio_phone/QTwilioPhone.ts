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
import { QFirm } from "../firm/QFirm";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QSMSThread } from "../sms_thread/QSMSThread";
import { TwilioPhoneId } from "./TwilioPhone";

export class QTwilioPhone extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly TwilioPhoneSid = new QStringPath(
    this.withPrefix("TwilioPhoneSid")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly PhoneNumber = new QStringPath(this.withPrefix("PhoneNumber"));
  public readonly DateCreated = new QDateTimeOffsetPath(
    this.withPrefix("DateCreated")
  );
  public readonly DateDeactivated = new QDateTimeOffsetPath(
    this.withPrefix("DateDeactivated")
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly SMSThreads = new QEntityCollectionPath(
    this.withPrefix("SMSThreads"),
    () => QSMSThread
  );
}

export const qTwilioPhone = new QTwilioPhone();

export class QTwilioPhoneId extends QId<TwilioPhoneId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}
