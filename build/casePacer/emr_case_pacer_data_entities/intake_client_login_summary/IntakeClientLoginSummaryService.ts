import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  IntakeClientLoginSummary,
  EditableIntakeClientLoginSummary,
  IntakeClientLoginSummaryId,
} from "./IntakeClientLoginSummary";
import {
  QIntakeClientLoginSummary,
  qIntakeClientLoginSummary,
  QIntakeClientLoginSummaryId,
} from "./QIntakeClientLoginSummary";
import { IntakeClientLoginService } from "../intake_client_login/IntakeClientLoginService";
import { FirmService } from "../firm/FirmService";
import { LawsuitService } from "../lawsuit/LawsuitService";

export class IntakeClientLoginSummaryService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  IntakeClientLoginSummary,
  EditableIntakeClientLoginSummary,
  QIntakeClientLoginSummary
> {
  private _IntakeClientLogin?: IntakeClientLoginService<ClientType>;
  private _Firm?: FirmService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qIntakeClientLoginSummary);
  }

  public IntakeClientLogin(): IntakeClientLoginService<ClientType> {
    if (!this._IntakeClientLogin) {
      const { client, path } = this.__base;
      this._IntakeClientLogin = new IntakeClientLoginService(
        client,
        path,
        "IntakeClientLogin"
      );
    }

    return this._IntakeClientLogin;
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }
}

export class IntakeClientLoginSummaryCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  IntakeClientLoginSummary,
  EditableIntakeClientLoginSummary,
  QIntakeClientLoginSummary,
  IntakeClientLoginSummaryId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qIntakeClientLoginSummary,
      new QIntakeClientLoginSummaryId(name)
    );
  }
}
