import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { TwilioPhone, EditableTwilioPhone, TwilioPhoneId } from "./TwilioPhone";
import { QTwilioPhone, qTwilioPhone, QTwilioPhoneId } from "./QTwilioPhone";
import { FirmService } from "../firm/FirmService";
import { LawsuitService } from "../lawsuit/LawsuitService";
import { SMSThreadId } from "../sms_thread/SMSThread";
import { QSMSThreadId } from "../sms_thread/QSMSThread";
import {
  SMSThreadService,
  SMSThreadCollectionService,
} from "../sms_thread/SMSThreadService";

export class TwilioPhoneService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TwilioPhone,
  EditableTwilioPhone,
  QTwilioPhone
> {
  private _Firm?: FirmService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTwilioPhone);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public SMSThreads(): SMSThreadCollectionService<ClientType>;
  public SMSThreads(id: SMSThreadId): SMSThreadService<ClientType>;
  public SMSThreads(id?: SMSThreadId | undefined) {
    const fieldName = "SMSThreads";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SMSThreadCollectionService(client, path, fieldName)
      : new SMSThreadService(
          client,
          path,
          new QSMSThreadId(fieldName).buildUrl(id)
        );
  }
}

export class TwilioPhoneCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TwilioPhone,
  EditableTwilioPhone,
  QTwilioPhone,
  TwilioPhoneId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTwilioPhone, new QTwilioPhoneId(name));
  }
}
