import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QBooleanPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QContactInfoType } from "../contact_info_type/QContactInfoType";
import { QContactType } from "../contact_type/QContactType";
import { QParty } from "../party/QParty";
import { QSMSThread } from "../sms_thread/QSMSThread";
import { ContactInfoId } from "./ContactInfo";

export class QContactInfo extends QueryObject {
  public readonly ContactInfoId = new QNumberPath(
    this.withPrefix("ContactInfoId")
  );
  public readonly ContactInfoTypeId = new QNumberPath(
    this.withPrefix("ContactInfoTypeId")
  );
  public readonly ContactValue = new QStringPath(
    this.withPrefix("ContactValue")
  );
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly ContactTypeId = new QNumberPath(
    this.withPrefix("ContactTypeId")
  );
  public readonly UseForNotification = new QBooleanPath(
    this.withPrefix("UseForNotification")
  );
  public readonly IsDeleted = new QBooleanPath(this.withPrefix("IsDeleted"));
  public readonly IsPrimary = new QBooleanPath(this.withPrefix("IsPrimary"));
  public readonly Description = new QStringPath(this.withPrefix("Description"));
  public readonly E164Value = new QStringPath(this.withPrefix("E164Value"));
  public readonly ContactInfoType = new QEntityPath(
    this.withPrefix("ContactInfoType"),
    () => QContactInfoType
  );
  public readonly ContactType = new QEntityPath(
    this.withPrefix("ContactType"),
    () => QContactType
  );
  public readonly Party = new QEntityPath(
    this.withPrefix("Party"),
    () => QParty
  );
  public readonly SMSThreads = new QEntityCollectionPath(
    this.withPrefix("SMSThreads"),
    () => QSMSThread
  );
}

export const qContactInfo = new QContactInfo();

export class QContactInfoId extends QId<ContactInfoId> {
  private readonly params = [new QNumberParam("ContactInfoId")];

  getParams() {
    return this.params;
  }
}
