import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  SecurityUserGroupAssign,
  EditableSecurityUserGroupAssign,
  SecurityUserGroupAssignId,
} from "./SecurityUserGroupAssign";
import {
  QSecurityUserGroupAssign,
  qSecurityUserGroupAssign,
  QSecurityUserGroupAssignId,
} from "./QSecurityUserGroupAssign";
import { SecurityUserGroupService } from "../security_user_group/SecurityUserGroupService";
import { CasePacerUserService } from "../case_pacer_user/CasePacerUserService";

export class SecurityUserGroupAssignService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SecurityUserGroupAssign,
  EditableSecurityUserGroupAssign,
  QSecurityUserGroupAssign
> {
  private _SecurityUserGroup?: SecurityUserGroupService<ClientType>;
  private _CasePacerUser?: CasePacerUserService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSecurityUserGroupAssign);
  }

  public SecurityUserGroup(): SecurityUserGroupService<ClientType> {
    if (!this._SecurityUserGroup) {
      const { client, path } = this.__base;
      this._SecurityUserGroup = new SecurityUserGroupService(
        client,
        path,
        "SecurityUserGroup"
      );
    }

    return this._SecurityUserGroup;
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

export class SecurityUserGroupAssignCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SecurityUserGroupAssign,
  EditableSecurityUserGroupAssign,
  QSecurityUserGroupAssign,
  SecurityUserGroupAssignId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qSecurityUserGroupAssign,
      new QSecurityUserGroupAssignId(name)
    );
  }
}
