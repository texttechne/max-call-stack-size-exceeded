import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  CPDirectMessage,
  EditableCPDirectMessage,
  CPDirectMessageId,
} from "./CPDirectMessage";
import {
  QCPDirectMessage,
  qCPDirectMessage,
  QCPDirectMessageId,
} from "./QCPDirectMessage";
import { CasePacerUserService } from "../case_pacer_user/CasePacerUserService";
import { IntakeClientLawsuitService } from "../intake_client_lawsuit/IntakeClientLawsuitService";
import { IntakeClientLoginService } from "../intake_client_login/IntakeClientLoginService";

export class CPDirectMessageService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CPDirectMessage,
  EditableCPDirectMessage,
  QCPDirectMessage
> {
  private _CasePacerUser?: CasePacerUserService<ClientType>;
  private _IntakeClientLawsuit?: IntakeClientLawsuitService<ClientType>;
  private _IntakeClientLogin?: IntakeClientLoginService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCPDirectMessage);
  }

  public CasePacerUser(): CasePacerUserService<ClientType> {
    if (!this._CasePacerUser) {
      const { client, path } = this.__base;
      this._CasePacerUser = new CasePacerUserService(
        client,
        path,
        "CasePacerUser"
      );
    }

    return this._CasePacerUser;
  }

  public IntakeClientLawsuit(): IntakeClientLawsuitService<ClientType> {
    if (!this._IntakeClientLawsuit) {
      const { client, path } = this.__base;
      this._IntakeClientLawsuit = new IntakeClientLawsuitService(
        client,
        path,
        "IntakeClientLawsuit"
      );
    }

    return this._IntakeClientLawsuit;
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
}

export class CPDirectMessageCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CPDirectMessage,
  EditableCPDirectMessage,
  QCPDirectMessage,
  CPDirectMessageId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCPDirectMessage,
      new QCPDirectMessageId(name)
    );
  }
}
