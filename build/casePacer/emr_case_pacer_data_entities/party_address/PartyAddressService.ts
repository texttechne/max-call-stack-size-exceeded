import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  PartyAddress,
  EditablePartyAddress,
  PartyAddressId,
} from "./PartyAddress";
import { QPartyAddress, qPartyAddress, QPartyAddressId } from "./QPartyAddress";
import { AddressService } from "../address/AddressService";
import { PartyService } from "../party/PartyService";

export class PartyAddressService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  PartyAddress,
  EditablePartyAddress,
  QPartyAddress
> {
  private _Address?: AddressService<ClientType>;
  private _Party?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPartyAddress);
  }

  public Address(): AddressService<ClientType> {
    if (!this._Address) {
      const { client, path } = this.__base;
      this._Address = new AddressService(client, path, "Address");
    }

    return this._Address;
  }

  public Party(): PartyService<ClientType> {
    if (!this._Party) {
      const { client, path } = this.__base;
      this._Party = new PartyService(client, path, "Party");
    }

    return this._Party;
  }
}

export class PartyAddressCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  PartyAddress,
  EditablePartyAddress,
  QPartyAddress,
  PartyAddressId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPartyAddress, new QPartyAddressId(name));
  }
}
