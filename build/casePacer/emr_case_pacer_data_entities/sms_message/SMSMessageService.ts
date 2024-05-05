import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { SMSMessage, EditableSMSMessage, SMSMessageId } from "./SMSMessage";
import { QSMSMessage, qSMSMessage, QSMSMessageId } from "./QSMSMessage";
import { CasePacerUserService } from "../case_pacer_user/CasePacerUserService";
import { SMSThreadService } from "../sms_thread/SMSThreadService";
import { SMSAttachmentId } from "../sms_attachment/SMSAttachment";
import { QSMSAttachmentId } from "../sms_attachment/QSMSAttachment";
import {
  SMSAttachmentService,
  SMSAttachmentCollectionService,
} from "../sms_attachment/SMSAttachmentService";

export class SMSMessageService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SMSMessage,
  EditableSMSMessage,
  QSMSMessage
> {
  private _CasePacerUser?: CasePacerUserService<ClientType>;
  private _SMSThread?: SMSThreadService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSMSMessage);
  }

  public CasePacerUser(): CasePacerUserService<ClientType> {
    if (!this._CasePacerUser) {
      const { client, path } = this.__base;
      this._CasePacerUser = new CasePacerUserService(
        client,
        path,
        "CasePacerUser"
      );
    }

    return this._CasePacerUser;
  }

  public SMSThread(): SMSThreadService<ClientType> {
    if (!this._SMSThread) {
      const { client, path } = this.__base;
      this._SMSThread = new SMSThreadService(client, path, "SMSThread");
    }

    return this._SMSThread;
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
}

export class SMSMessageCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SMSMessage,
  EditableSMSMessage,
  QSMSMessage,
  SMSMessageId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSMSMessage, new QSMSMessageId(name));
  }
}
