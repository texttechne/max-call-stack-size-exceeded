import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  AnswerEnlargement,
  EditableAnswerEnlargement,
  AnswerEnlargementId,
} from "./AnswerEnlargement";
import {
  QAnswerEnlargement,
  qAnswerEnlargement,
  QAnswerEnlargementId,
} from "./QAnswerEnlargement";
import { LitigationService } from "../litigation/LitigationService";
import { PartyService } from "../party/PartyService";

export class AnswerEnlargementService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AnswerEnlargement,
  EditableAnswerEnlargement,
  QAnswerEnlargement
> {
  private _Litigation?: LitigationService<ClientType>;
  private _Party?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAnswerEnlargement);
  }

  public Litigation(): LitigationService<ClientType> {
    if (!this._Litigation) {
      const { client, path } = this.__base;
      this._Litigation = new LitigationService(client, path, "Litigation");
    }

    return this._Litigation;
  }

  public Party(): PartyService<ClientType> {
    if (!this._Party) {
      const { client, path } = this.__base;
      this._Party = new PartyService(client, path, "Party");
    }

    return this._Party;
  }
}

export class AnswerEnlargementCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AnswerEnlargement,
  EditableAnswerEnlargement,
  QAnswerEnlargement,
  AnswerEnlargementId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAnswerEnlargement,
      new QAnswerEnlargementId(name)
    );
  }
}
