import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  CPDirectPushToken,
  EditableCPDirectPushToken,
  CPDirectPushTokenId,
} from "./CPDirectPushToken";
import {
  QCPDirectPushToken,
  qCPDirectPushToken,
  QCPDirectPushTokenId,
} from "./QCPDirectPushToken";
import { IntakeClientLoginService } from "../intake_client_login/IntakeClientLoginService";

export class CPDirectPushTokenService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CPDirectPushToken,
  EditableCPDirectPushToken,
  QCPDirectPushToken
> {
  private _IntakeClientLogin?: IntakeClientLoginService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCPDirectPushToken);
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

export class CPDirectPushTokenCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CPDirectPushToken,
  EditableCPDirectPushToken,
  QCPDirectPushToken,
  CPDirectPushTokenId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCPDirectPushToken,
      new QCPDirectPushTokenId(name)
    );
  }
}
