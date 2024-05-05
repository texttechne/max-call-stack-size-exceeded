import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  IntakeClientSession,
  EditableIntakeClientSession,
  IntakeClientSessionId,
} from "./IntakeClientSession";
import {
  QIntakeClientSession,
  qIntakeClientSession,
  QIntakeClientSessionId,
} from "./QIntakeClientSession";
import { IntakeClientLoginService } from "../intake_client_login/IntakeClientLoginService";

export class IntakeClientSessionService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  IntakeClientSession,
  EditableIntakeClientSession,
  QIntakeClientSession
> {
  private _IntakeClientLogin?: IntakeClientLoginService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qIntakeClientSession);
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

export class IntakeClientSessionCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  IntakeClientSession,
  EditableIntakeClientSession,
  QIntakeClientSession,
  IntakeClientSessionId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qIntakeClientSession,
      new QIntakeClientSessionId(name)
    );
  }
}
