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
import { QFirm } from "../firm/QFirm";
import { QParty } from "../party/QParty";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QRecordFile } from "../record_file/QRecordFile";
import { QRecordSubtype } from "../record_subtype/QRecordSubtype";
import { QRecordType } from "../record_type/QRecordType";
import { QAlert } from "../alert/QAlert";
import { QDocument } from "../document/QDocument";
import { QSMSAttachment } from "../sms_attachment/QSMSAttachment";
import { QTrialPleading } from "../trial_pleading/QTrialPleading";
import { RecordId } from "./Record";

export class QRecord extends QueryObject {
  public readonly RecordId = new QNumberPath(this.withPrefix("RecordId"));
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly PlaintiffPartyId = new QNumberPath(
    this.withPrefix("PlaintiffPartyId")
  );
  public readonly ContactPartyId = new QNumberPath(
    this.withPrefix("ContactPartyId")
  );
  public readonly RecordName = new QStringPath(this.withPrefix("RecordName"));
  public readonly RecordTypeId = new QNumberPath(
    this.withPrefix("RecordTypeId")
  );
  public readonly ImportDate = new QDateTimeOffsetPath(
    this.withPrefix("ImportDate")
  );
  public readonly RequestDate = new QDateTimeOffsetPath(
    this.withPrefix("RequestDate")
  );
  public readonly Signed = new QBooleanPath(this.withPrefix("Signed"));
  public readonly ImportingUserId = new QNumberPath(
    this.withPrefix("ImportingUserId")
  );
  public readonly RecordSubtypeId = new QNumberPath(
    this.withPrefix("RecordSubtypeId")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly RecordFileId = new QNumberPath(
    this.withPrefix("RecordFileId")
  );
  public readonly DocuSignJson = new QStringPath(
    this.withPrefix("DocuSignJson")
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly ImportingUser = new QEntityPath(
    this.withPrefix("ImportingUser"),
    () => QParty
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly Plaintiff = new QEntityPath(
    this.withPrefix("Plaintiff"),
    () => QParty
  );
  public readonly Contact = new QEntityPath(
    this.withPrefix("Contact"),
    () => QParty
  );
  public readonly RecordFile = new QEntityPath(
    this.withPrefix("RecordFile"),
    () => QRecordFile
  );
  public readonly RecordSubtype = new QEntityPath(
    this.withPrefix("RecordSubtype"),
    () => QRecordSubtype
  );
  public readonly RecordType = new QEntityPath(
    this.withPrefix("RecordType"),
    () => QRecordType
  );
  public readonly Alerts = new QEntityCollectionPath(
    this.withPrefix("Alerts"),
    () => QAlert
  );
  public readonly Documents = new QEntityCollectionPath(
    this.withPrefix("Documents"),
    () => QDocument
  );
  public readonly SMSAttachments = new QEntityCollectionPath(
    this.withPrefix("SMSAttachments"),
    () => QSMSAttachment
  );
  public readonly TrialPleadings = new QEntityCollectionPath(
    this.withPrefix("TrialPleadings"),
    () => QTrialPleading
  );
}

export const qRecord = new QRecord();

export class QRecordId extends QId<RecordId> {
  private readonly params = [new QNumberParam("RecordId")];

  getParams() {
    return this.params;
  }
}
