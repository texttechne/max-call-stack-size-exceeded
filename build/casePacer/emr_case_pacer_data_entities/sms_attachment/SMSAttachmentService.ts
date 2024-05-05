import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  SMSAttachment,
  EditableSMSAttachment,
  SMSAttachmentId,
} from "./SMSAttachment";
import {
  QSMSAttachment,
  qSMSAttachment,
  QSMSAttachmentId,
} from "./QSMSAttachment";
import { RecordService } from "../record/RecordService";
import { SMSMessageService } from "../sms_message/SMSMessageService";

export class SMSAttachmentService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SMSAttachment,
  EditableSMSAttachment,
  QSMSAttachment
> {
  private _Record?: RecordService<ClientType>;
  private _SMSMessage?: SMSMessageService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSMSAttachment);
  }

  public Record(): RecordService<ClientType> {
    if (!this._Record) {
      const { client, path } = this.__base;
      this._Record = new RecordService(client, path, "Record");
    }

    return this._Record;
  }

  public SMSMessage(): SMSMessageService<ClientType> {
    if (!this._SMSMessage) {
      const { client, path } = this.__base;
      this._SMSMessage = new SMSMessageService(client, path, "SMSMessage");
    }

    return this._SMSMessage;
  }
}

export class SMSAttachmentCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SMSAttachment,
  EditableSMSAttachment,
  QSMSAttachment,
  SMSAttachmentId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSMSAttachment, new QSMSAttachmentId(name));
  }
}
