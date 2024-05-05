import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { AddressType, EditableAddressType, AddressTypeId } from "./AddressType";
import { QAddressType, qAddressType, QAddressTypeId } from "./QAddressType";
import { AddressId } from "../address/Address";
import { QAddressId } from "../address/QAddress";
import {
  AddressService,
  AddressCollectionService,
} from "../address/AddressService";

export class AddressTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AddressType,
  EditableAddressType,
  QAddressType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAddressType);
  }

  public Addresses(): AddressCollectionService<ClientType>;
  public Addresses(id: AddressId): AddressService<ClientType>;
  public Addresses(id?: AddressId | undefined) {
    const fieldName = "Addresses";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AddressCollectionService(client, path, fieldName)
      : new AddressService(
          client,
          path,
          new QAddressId(fieldName).buildUrl(id)
        );
  }
}

export class AddressTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AddressType,
  EditableAddressType,
  QAddressType,
  AddressTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAddressType, new QAddressTypeId(name));
  }
}
