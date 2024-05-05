import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Record, EditableRecord, RecordId } from "./Record";
import { QRecord, qRecord, QRecordId } from "./QRecord";
import { FirmService } from "../firm/FirmService";
import { PartyService } from "../party/PartyService";
import { LawsuitService } from "../lawsuit/LawsuitService";
import { RecordFileService } from "../record_file/RecordFileService";
import { RecordSubtypeService } from "../record_subtype/RecordSubtypeService";
import { RecordTypeService } from "../record_type/RecordTypeService";
import { AlertId } from "../alert/Alert";
import { QAlertId } from "../alert/QAlert";
import { AlertService, AlertCollectionService } from "../alert/AlertService";
import { DocumentId } from "../document/Document";
import { QDocumentId } from "../document/QDocument";
import {
  DocumentService,
  DocumentCollectionService,
} from "../document/DocumentService";
import { SMSAttachmentId } from "../sms_attachment/SMSAttachment";
import { QSMSAttachmentId } from "../sms_attachment/QSMSAttachment";
import {
  SMSAttachmentService,
  SMSAttachmentCollectionService,
} from "../sms_attachment/SMSAttachmentService";
import { TrialPleadingId } from "../trial_pleading/TrialPleading";
import { QTrialPleadingId } from "../trial_pleading/QTrialPleading";
import {
  TrialPleadingService,
  TrialPleadingCollectionService,
} from "../trial_pleading/TrialPleadingService";

export class RecordService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Record, EditableRecord, QRecord> {
  private _Firm?: FirmService<ClientType>;
  private _ImportingUser?: PartyService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;
  private _Plaintiff?: PartyService<ClientType>;
  private _Contact?: PartyService<ClientType>;
  private _RecordFile?: RecordFileService<ClientType>;
  private _RecordSubtype?: RecordSubtypeService<ClientType>;
  private _RecordType?: RecordTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qRecord);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public ImportingUser(): PartyService<ClientType> {
    if (!this._ImportingUser) {
      const { client, path } = this.__base;
      this._ImportingUser = new PartyService(client, path, "ImportingUser");
    }

    return this._ImportingUser;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public Plaintiff(): PartyService<ClientType> {
    if (!this._Plaintiff) {
      const { client, path } = this.__base;
      this._Plaintiff = new PartyService(client, path, "Plaintiff");
    }

    return this._Plaintiff;
  }

  public Contact(): PartyService<ClientType> {
    if (!this._Contact) {
      const { client, path } = this.__base;
      this._Contact = new PartyService(client, path, "Contact");
    }

    return this._Contact;
  }

  public RecordFile(): RecordFileService<ClientType> {
    if (!this._RecordFile) {
      const { client, path } = this.__base;
      this._RecordFile = new RecordFileService(client, path, "RecordFile");
    }

    return this._RecordFile;
  }

  public RecordSubtype(): RecordSubtypeService<ClientType> {
    if (!this._RecordSubtype) {
      const { client, path } = this.__base;
      this._RecordSubtype = new RecordSubtypeService(
        client,
        path,
        "RecordSubtype"
      );
    }

    return this._RecordSubtype;
  }

  public RecordType(): RecordTypeService<ClientType> {
    if (!this._RecordType) {
      const { client, path } = this.__base;
      this._RecordType = new RecordTypeService(client, path, "RecordType");
    }

    return this._RecordType;
  }

  public Alerts(): AlertCollectionService<ClientType>;
  public Alerts(id: AlertId): AlertService<ClientType>;
  public Alerts(id?: AlertId | undefined) {
    const fieldName = "Alerts";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AlertCollectionService(client, path, fieldName)
      : new AlertService(client, path, new QAlertId(fieldName).buildUrl(id));
  }

  public Documents(): DocumentCollectionService<ClientType>;
  public Documents(id: DocumentId): DocumentService<ClientType>;
  public Documents(id?: DocumentId | undefined) {
    const fieldName = "Documents";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DocumentCollectionService(client, path, fieldName)
      : new DocumentService(
          client,
          path,
          new QDocumentId(fieldName).buildUrl(id)
        );
  }

  public SMSAttachments(): SMSAttachmentCollectionService<ClientType>;
  public SMSAttachments(id: SMSAttachmentId): SMSAttachmentService<ClientType>;
  public SMSAttachments(id?: SMSAttachmentId | undefined) {
    const fieldName = "SMSAttachments";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SMSAttachmentCollectionService(client, path, fieldName)
      : new SMSAttachmentService(
          client,
          path,
          new QSMSAttachmentId(fieldName).buildUrl(id)
        );
  }

  public TrialPleadings(): TrialPleadingCollectionService<ClientType>;
  public TrialPleadings(id: TrialPleadingId): TrialPleadingService<ClientType>;
  public TrialPleadings(id?: TrialPleadingId | undefined) {
    const fieldName = "TrialPleadings";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TrialPleadingCollectionService(client, path, fieldName)
      : new TrialPleadingService(
          client,
          path,
          new QTrialPleadingId(fieldName).buildUrl(id)
        );
  }
}

export class RecordCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Record,
  EditableRecord,
  QRecord,
  RecordId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qRecord, new QRecordId(name));
  }
}
