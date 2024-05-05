import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  DepositionLitigationAssn,
  EditableDepositionLitigationAssn,
  DepositionLitigationAssnId,
} from "./DepositionLitigationAssn";
import {
  QDepositionLitigationAssn,
  qDepositionLitigationAssn,
  QDepositionLitigationAssnId,
} from "./QDepositionLitigationAssn";
import { DepositionService } from "../deposition/DepositionService";
import { LitigationService } from "../litigation/LitigationService";

export class DepositionLitigationAssnService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  DepositionLitigationAssn,
  EditableDepositionLitigationAssn,
  QDepositionLitigationAssn
> {
  private _Deposition?: DepositionService<ClientType>;
  private _Litigation?: LitigationService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDepositionLitigationAssn);
  }

  public Deposition(): DepositionService<ClientType> {
    if (!this._Deposition) {
      const { client, path } = this.__base;
      this._Deposition = new DepositionService(client, path, "Deposition");
    }

    return this._Deposition;
  }

  public Litigation(): LitigationService<ClientType> {
    if (!this._Litigation) {
      const { client, path } = this.__base;
      this._Litigation = new LitigationService(client, path, "Litigation");
    }

    return this._Litigation;
  }
}

export class DepositionLitigationAssnCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  DepositionLitigationAssn,
  EditableDepositionLitigationAssn,
  QDepositionLitigationAssn,
  DepositionLitigationAssnId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qDepositionLitigationAssn,
      new QDepositionLitigationAssnId(name)
    );
  }
}
