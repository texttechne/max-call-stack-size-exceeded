import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  DiscoveryTarget,
  EditableDiscoveryTarget,
  DiscoveryTargetId,
} from "./DiscoveryTarget";
import {
  QDiscoveryTarget,
  qDiscoveryTarget,
  QDiscoveryTargetId,
} from "./QDiscoveryTarget";
import { DiscoveryId } from "../discovery/Discovery";
import { QDiscoveryId } from "../discovery/QDiscovery";
import {
  DiscoveryService,
  DiscoveryCollectionService,
} from "../discovery/DiscoveryService";

export class DiscoveryTargetService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  DiscoveryTarget,
  EditableDiscoveryTarget,
  QDiscoveryTarget
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDiscoveryTarget);
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

export class DiscoveryTargetCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  DiscoveryTarget,
  EditableDiscoveryTarget,
  QDiscoveryTarget,
  DiscoveryTargetId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qDiscoveryTarget,
      new QDiscoveryTargetId(name)
    );
  }
}
