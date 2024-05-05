import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  DiscoveryLitigationAssn,
  EditableDiscoveryLitigationAssn,
  DiscoveryLitigationAssnId,
} from "./DiscoveryLitigationAssn";
import {
  QDiscoveryLitigationAssn,
  qDiscoveryLitigationAssn,
  QDiscoveryLitigationAssnId,
} from "./QDiscoveryLitigationAssn";
import { DiscoveryService } from "../discovery/DiscoveryService";
import { LitigationService } from "../litigation/LitigationService";

export class DiscoveryLitigationAssnService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  DiscoveryLitigationAssn,
  EditableDiscoveryLitigationAssn,
  QDiscoveryLitigationAssn
> {
  private _Discovery?: DiscoveryService<ClientType>;
  private _Litigation?: LitigationService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDiscoveryLitigationAssn);
  }

  public Discovery(): DiscoveryService<ClientType> {
    if (!this._Discovery) {
      const { client, path } = this.__base;
      this._Discovery = new DiscoveryService(client, path, "Discovery");
    }

    return this._Discovery;
  }

  public Litigation(): LitigationService<ClientType> {
    if (!this._Litigation) {
      const { client, path } = this.__base;
      this._Litigation = new LitigationService(client, path, "Litigation");
    }

    return this._Litigation;
  }
}

export class DiscoveryLitigationAssnCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  DiscoveryLitigationAssn,
  EditableDiscoveryLitigationAssn,
  QDiscoveryLitigationAssn,
  DiscoveryLitigationAssnId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qDiscoveryLitigationAssn,
      new QDiscoveryLitigationAssnId(name)
    );
  }
}
