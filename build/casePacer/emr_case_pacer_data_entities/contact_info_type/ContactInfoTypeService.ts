import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  ContactInfoType,
  EditableContactInfoType,
  ContactInfoTypeId,
} from "./ContactInfoType";
import {
  QContactInfoType,
  qContactInfoType,
  QContactInfoTypeId,
} from "./QContactInfoType";
import { ContactInfoId } from "../contact_info/ContactInfo";
import { QContactInfoId } from "../contact_info/QContactInfo";
import {
  ContactInfoService,
  ContactInfoCollectionService,
} from "../contact_info/ContactInfoService";

export class ContactInfoTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  ContactInfoType,
  EditableContactInfoType,
  QContactInfoType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qContactInfoType);
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

export class ContactInfoTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ContactInfoType,
  EditableContactInfoType,
  QContactInfoType,
  ContactInfoTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qContactInfoType,
      new QContactInfoTypeId(name)
    );
  }
}
