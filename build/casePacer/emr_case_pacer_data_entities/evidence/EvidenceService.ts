import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Evidence, EditableEvidence, EvidenceId } from "./Evidence";
import { QEvidence, qEvidence, QEvidenceId } from "./QEvidence";
import { LawsuitService } from "../lawsuit/LawsuitService";

export class EvidenceService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  Evidence,
  EditableEvidence,
  QEvidence
> {
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qEvidence);
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }
}

export class EvidenceCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Evidence,
  EditableEvidence,
  QEvidence,
  EvidenceId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qEvidence, new QEvidenceId(name));
  }
}
