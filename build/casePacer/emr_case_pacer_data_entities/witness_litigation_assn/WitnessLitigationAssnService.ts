import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  WitnessLitigationAssn,
  EditableWitnessLitigationAssn,
  WitnessLitigationAssnId,
} from "./WitnessLitigationAssn";
import {
  QWitnessLitigationAssn,
  qWitnessLitigationAssn,
  QWitnessLitigationAssnId,
} from "./QWitnessLitigationAssn";
import { LitigationService } from "../litigation/LitigationService";
import { WitnessService } from "../witness/WitnessService";

export class WitnessLitigationAssnService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  WitnessLitigationAssn,
  EditableWitnessLitigationAssn,
  QWitnessLitigationAssn
> {
  private _Litigation?: LitigationService<ClientType>;
  private _Witness?: WitnessService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qWitnessLitigationAssn);
  }

  public Litigation(): LitigationService<ClientType> {
    if (!this._Litigation) {
      const { client, path } = this.__base;
      this._Litigation = new LitigationService(client, path, "Litigation");
    }

    return this._Litigation;
  }

  public Witness(): WitnessService<ClientType> {
    if (!this._Witness) {
      const { client, path } = this.__base;
      this._Witness = new WitnessService(client, path, "Witness");
    }

    return this._Witness;
  }
}

export class WitnessLitigationAssnCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  WitnessLitigationAssn,
  EditableWitnessLitigationAssn,
  QWitnessLitigationAssn,
  WitnessLitigationAssnId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qWitnessLitigationAssn,
      new QWitnessLitigationAssnId(name)
    );
  }
}
