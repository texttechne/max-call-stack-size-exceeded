import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { ContactType, EditableContactType, ContactTypeId } from "./ContactType";
import { QContactType, qContactType, QContactTypeId } from "./QContactType";
import { ContactInfoId } from "../contact_info/ContactInfo";
import { QContactInfoId } from "../contact_info/QContactInfo";
import {
  ContactInfoService,
  ContactInfoCollectionService,
} from "../contact_info/ContactInfoService";

export class ContactTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  ContactType,
  EditableContactType,
  QContactType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qContactType);
  }

  public ContactInfoes(): ContactInfoCollectionService<ClientType>;
  public ContactInfoes(id: ContactInfoId): ContactInfoService<ClientType>;
  public ContactInfoes(id?: ContactInfoId | undefined) {
    const fieldName = "ContactInfoes";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ContactInfoCollectionService(client, path, fieldName)
      : new ContactInfoService(
          client,
          path,
          new QContactInfoId(fieldName).buildUrl(id)
        );
  }
}

export class ContactTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ContactType,
  EditableContactType,
  QContactType,
  ContactTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qContactType, new QContactTypeId(name));
  }
}
