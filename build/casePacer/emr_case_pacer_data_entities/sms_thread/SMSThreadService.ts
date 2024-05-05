import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { SMSThread, EditableSMSThread, SMSThreadId } from "./SMSThread";
import { QSMSThread, qSMSThread, QSMSThreadId } from "./QSMSThread";
import { ContactInfoService } from "../contact_info/ContactInfoService";
import { LawsuitService } from "../lawsuit/LawsuitService";
import { TwilioPhoneService } from "../twilio_phone/TwilioPhoneService";
import { SMSMessageId } from "../sms_message/SMSMessage";
import { QSMSMessageId } from "../sms_message/QSMSMessage";
import {
  SMSMessageService,
  SMSMessageCollectionService,
} from "../sms_message/SMSMessageService";

export class SMSThreadService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SMSThread,
  EditableSMSThread,
  QSMSThread
> {
  private _ContactInfo?: ContactInfoService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;
  private _TwilioPhone?: TwilioPhoneService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSMSThread);
  }

  public ContactInfo(): ContactInfoService<ClientType> {
    if (!this._ContactInfo) {
      const { client, path } = this.__base;
      this._ContactInfo = new ContactInfoService(client, path, "ContactInfo");
    }

    return this._ContactInfo;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public TwilioPhone(): TwilioPhoneService<ClientType> {
    if (!this._TwilioPhone) {
      const { client, path } = this.__base;
      this._TwilioPhone = new TwilioPhoneService(client, path, "TwilioPhone");
    }

    return this._TwilioPhone;
  }

  public SMSMessages(): SMSMessageCollectionService<ClientType>;
  public SMSMessages(id: SMSMessageId): SMSMessageService<ClientType>;
  public SMSMessages(id?: SMSMessageId | undefined) {
    const fieldName = "SMSMessages";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SMSMessageCollectionService(client, path, fieldName)
      : new SMSMessageService(
          client,
          path,
          new QSMSMessageId(fieldName).buildUrl(id)
        );
  }
}

export class SMSThreadCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SMSThread,
  EditableSMSThread,
  QSMSThread,
  SMSThreadId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSMSThread, new QSMSThreadId(name));
  }
}
