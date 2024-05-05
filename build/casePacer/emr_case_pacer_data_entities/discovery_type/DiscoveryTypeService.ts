import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  DiscoveryType,
  EditableDiscoveryType,
  DiscoveryTypeId,
} from "./DiscoveryType";
import {
  QDiscoveryType,
  qDiscoveryType,
  QDiscoveryTypeId,
} from "./QDiscoveryType";
import { DiscoveryId } from "../discovery/Discovery";
import { QDiscoveryId } from "../discovery/QDiscovery";
import {
  DiscoveryService,
  DiscoveryCollectionService,
} from "../discovery/DiscoveryService";

export class DiscoveryTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  DiscoveryType,
  EditableDiscoveryType,
  QDiscoveryType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDiscoveryType);
  }

  public Discoveries(): DiscoveryCollectionService<ClientType>;
  public Discoveries(id: DiscoveryId): DiscoveryService<ClientType>;
  public Discoveries(id?: DiscoveryId | undefined) {
    const fieldName = "Discoveries";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DiscoveryCollectionService(client, path, fieldName)
      : new DiscoveryService(
          client,
          path,
          new QDiscoveryId(fieldName).buildUrl(id)
        );
  }
}

export class DiscoveryTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  DiscoveryType,
  EditableDiscoveryType,
  QDiscoveryType,
  DiscoveryTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDiscoveryType, new QDiscoveryTypeId(name));
  }
}
