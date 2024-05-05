import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  MedicalEvaluation,
  EditableMedicalEvaluation,
  MedicalEvaluationId,
} from "./MedicalEvaluation";
import {
  QMedicalEvaluation,
  qMedicalEvaluation,
  QMedicalEvaluationId,
} from "./QMedicalEvaluation";
import { LawsuitPartyService } from "../lawsuit_party/LawsuitPartyService";
import { LawsuitService } from "../lawsuit/LawsuitService";

export class MedicalEvaluationService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  MedicalEvaluation,
  EditableMedicalEvaluation,
  QMedicalEvaluation
> {
  private _DoctorLawsuitParty?: LawsuitPartyService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;
  private _PrepByLawsuitParty?: LawsuitPartyService<ClientType>;
  private _RequestorLawsuitParty?: LawsuitPartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qMedicalEvaluation);
  }

  public DoctorLawsuitParty(): LawsuitPartyService<ClientType> {
    if (!this._DoctorLawsuitParty) {
      const { client, path } = this.__base;
      this._DoctorLawsuitParty = new LawsuitPartyService(
        client,
        path,
        "DoctorLawsuitParty"
      );
    }

    return this._DoctorLawsuitParty;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public PrepByLawsuitParty(): LawsuitPartyService<ClientType> {
    if (!this._PrepByLawsuitParty) {
      const { client, path } = this.__base;
      this._PrepByLawsuitParty = new LawsuitPartyService(
        client,
        path,
        "PrepByLawsuitParty"
      );
    }

    return this._PrepByLawsuitParty;
  }

  public RequestorLawsuitParty(): LawsuitPartyService<ClientType> {
    if (!this._RequestorLawsuitParty) {
      const { client, path } = this.__base;
      this._RequestorLawsuitParty = new LawsuitPartyService(
        client,
        path,
        "RequestorLawsuitParty"
      );
    }

    return this._RequestorLawsuitParty;
  }
}

export class MedicalEvaluationCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  MedicalEvaluation,
  EditableMedicalEvaluation,
  QMedicalEvaluation,
  MedicalEvaluationId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qMedicalEvaluation,
      new QMedicalEvaluationId(name)
    );
  }
}
