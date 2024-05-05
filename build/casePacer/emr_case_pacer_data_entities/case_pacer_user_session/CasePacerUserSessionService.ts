import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  CasePacerUserSession,
  EditableCasePacerUserSession,
  CasePacerUserSessionId,
} from "./CasePacerUserSession";
import {
  QCasePacerUserSession,
  qCasePacerUserSession,
  QCasePacerUserSessionId,
} from "./QCasePacerUserSession";
import { CasePacerUserService } from "../case_pacer_user/CasePacerUserService";

export class CasePacerUserSessionService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CasePacerUserSession,
  EditableCasePacerUserSession,
  QCasePacerUserSession
> {
  private _CasePacerUser?: CasePacerUserService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCasePacerUserSession);
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
}

export class CasePacerUserSessionCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CasePacerUserSession,
  EditableCasePacerUserSession,
  QCasePacerUserSession,
  CasePacerUserSessionId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCasePacerUserSession,
      new QCasePacerUserSessionId(name)
    );
  }
}
