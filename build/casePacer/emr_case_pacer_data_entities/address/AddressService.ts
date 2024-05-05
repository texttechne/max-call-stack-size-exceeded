import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Address, EditableAddress, AddressId } from "./Address";
import { QAddress, qAddress, QAddressId } from "./QAddress";
import { AddressTypeService } from "../address_type/AddressTypeService";
import { CPDirectMedicalProviderId } from "../cp_direct_medical_provider/CPDirectMedicalProvider";
import { QCPDirectMedicalProviderId } from "../cp_direct_medical_provider/QCPDirectMedicalProvider";
import {
  CPDirectMedicalProviderService,
  CPDirectMedicalProviderCollectionService,
} from "../cp_direct_medical_provider/CPDirectMedicalProviderService";
import { PartyAddressId } from "../party_address/PartyAddress";
import { QPartyAddressId } from "../party_address/QPartyAddress";
import {
  PartyAddressService,
  PartyAddressCollectionService,
} from "../party_address/PartyAddressService";

export class AddressService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Address, EditableAddress, QAddress> {
  private _AddressType?: AddressTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAddress);
  }

  public AddressType(): AddressTypeService<ClientType> {
    if (!this._AddressType) {
      const { client, path } = this.__base;
      this._AddressType = new AddressTypeService(client, path, "AddressType");
    }

    return this._AddressType;
  }

  public CPDirectMedicalProviders(): CPDirectMedicalProviderCollectionService<ClientType>;
  public CPDirectMedicalProviders(
    id: CPDirectMedicalProviderId
  ): CPDirectMedicalProviderService<ClientType>;
  public CPDirectMedicalProviders(id?: CPDirectMedicalProviderId | undefined) {
    const fieldName = "CPDirectMedicalProviders";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectMedicalProviderCollectionService(client, path, fieldName)
      : new CPDirectMedicalProviderService(
          client,
          path,
          new QCPDirectMedicalProviderId(fieldName).buildUrl(id)
        );
  }

  public PartyAddresses(): PartyAddressCollectionService<ClientType>;
  public PartyAddresses(id: PartyAddressId): PartyAddressService<ClientType>;
  public PartyAddresses(id?: PartyAddressId | undefined) {
    const fieldName = "PartyAddresses";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PartyAddressCollectionService(client, path, fieldName)
      : new PartyAddressService(
          client,
          path,
          new QPartyAddressId(fieldName).buildUrl(id)
        );
  }
}

export class AddressCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Address,
  EditableAddress,
  QAddress,
  AddressId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAddress, new QAddressId(name));
  }
}
