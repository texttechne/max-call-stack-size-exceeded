import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  CasePacerUserIntegrationToken,
  EditableCasePacerUserIntegrationToken,
  CasePacerUserIntegrationTokenId,
} from "./CasePacerUserIntegrationToken";
import {
  QCasePacerUserIntegrationToken,
  qCasePacerUserIntegrationToken,
  QCasePacerUserIntegrationTokenId,
} from "./QCasePacerUserIntegrationToken";
import { CasePacerUserService } from "../case_pacer_user/CasePacerUserService";

export class CasePacerUserIntegrationTokenService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CasePacerUserIntegrationToken,
  EditableCasePacerUserIntegrationToken,
  QCasePacerUserIntegrationToken
> {
  private _CasePacerUser?: CasePacerUserService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCasePacerUserIntegrationToken);
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

export class CasePacerUserIntegrationTokenCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CasePacerUserIntegrationToken,
  EditableCasePacerUserIntegrationToken,
  QCasePacerUserIntegrationToken,
  CasePacerUserIntegrationTokenId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCasePacerUserIntegrationToken,
      new QCasePacerUserIntegrationTokenId(name)
    );
  }
}
