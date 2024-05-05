import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  DiscoveryRecipientType,
  EditableDiscoveryRecipientType,
  DiscoveryRecipientTypeId,
} from "./DiscoveryRecipientType";
import {
  QDiscoveryRecipientType,
  qDiscoveryRecipientType,
  QDiscoveryRecipientTypeId,
} from "./QDiscoveryRecipientType";
import { DiscoveryId } from "../discovery/Discovery";
import { QDiscoveryId } from "../discovery/QDiscovery";
import {
  DiscoveryService,
  DiscoveryCollectionService,
} from "../discovery/DiscoveryService";

export class DiscoveryRecipientTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  DiscoveryRecipientType,
  EditableDiscoveryRecipientType,
  QDiscoveryRecipientType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDiscoveryRecipientType);
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

export class DiscoveryRecipientTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  DiscoveryRecipientType,
  EditableDiscoveryRecipientType,
  QDiscoveryRecipientType,
  DiscoveryRecipientTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qDiscoveryRecipientType,
      new QDiscoveryRecipientTypeId(name)
    );
  }
}
