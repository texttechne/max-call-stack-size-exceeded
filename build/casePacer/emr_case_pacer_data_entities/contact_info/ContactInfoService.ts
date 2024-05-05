import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { ContactInfo, EditableContactInfo, ContactInfoId } from "./ContactInfo";
import { QContactInfo, qContactInfo, QContactInfoId } from "./QContactInfo";
import { ContactInfoTypeService } from "../contact_info_type/ContactInfoTypeService";
import { ContactTypeService } from "../contact_type/ContactTypeService";
import { PartyService } from "../party/PartyService";
import { SMSThreadId } from "../sms_thread/SMSThread";
import { QSMSThreadId } from "../sms_thread/QSMSThread";
import {
  SMSThreadService,
  SMSThreadCollectionService,
} from "../sms_thread/SMSThreadService";

export class ContactInfoService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  ContactInfo,
  EditableContactInfo,
  QContactInfo
> {
  private _ContactInfoType?: ContactInfoTypeService<ClientType>;
  private _ContactType?: ContactTypeService<ClientType>;
  private _Party?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qContactInfo);
  }

  public ContactInfoType(): ContactInfoTypeService<ClientType> {
    if (!this._ContactInfoType) {
      const { client, path } = this.__base;
      this._ContactInfoType = new ContactInfoTypeService(
        client,
        path,
        "ContactInfoType"
      );
    }

    return this._ContactInfoType;
  }

  public ContactType(): ContactTypeService<ClientType> {
    if (!this._ContactType) {
      const { client, path } = this.__base;
      this._ContactType = new ContactTypeService(client, path, "ContactType");
    }

    return this._ContactType;
  }

  public Party(): PartyService<ClientType> {
    if (!this._Party) {
      const { client, path } = this.__base;
      this._Party = new PartyService(client, path, "Party");
    }

    return this._Party;
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

export class ContactInfoCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ContactInfo,
  EditableContactInfo,
  QContactInfo,
  ContactInfoId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qContactInfo, new QContactInfoId(name));
  }
}
