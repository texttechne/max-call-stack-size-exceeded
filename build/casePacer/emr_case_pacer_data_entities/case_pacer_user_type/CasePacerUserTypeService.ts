import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  CasePacerUserType,
  EditableCasePacerUserType,
  CasePacerUserTypeId,
} from "./CasePacerUserType";
import {
  QCasePacerUserType,
  qCasePacerUserType,
  QCasePacerUserTypeId,
} from "./QCasePacerUserType";
import { PartyId } from "../party/Party";
import { QPartyId } from "../party/QParty";
import {
  CasePacerUserService,
  CasePacerUserCollectionService,
} from "../case_pacer_user/CasePacerUserService";

export class CasePacerUserTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CasePacerUserType,
  EditableCasePacerUserType,
  QCasePacerUserType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCasePacerUserType);
  }

  public CasePacerUsers(): CasePacerUserCollectionService<ClientType>;
  public CasePacerUsers(id: PartyId): CasePacerUserService<ClientType>;
  public CasePacerUsers(id?: PartyId | undefined) {
    const fieldName = "CasePacerUsers";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CasePacerUserCollectionService(client, path, fieldName)
      : new CasePacerUserService(
          client,
          path,
          new QPartyId(fieldName).buildUrl(id)
        );
  }
}

export class CasePacerUserTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CasePacerUserType,
  EditableCasePacerUserType,
  QCasePacerUserType,
  CasePacerUserTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCasePacerUserType,
      new QCasePacerUserTypeId(name)
    );
  }
}
