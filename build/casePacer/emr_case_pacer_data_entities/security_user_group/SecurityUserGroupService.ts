import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  SecurityUserGroup,
  EditableSecurityUserGroup,
  SecurityUserGroupId,
} from "./SecurityUserGroup";
import {
  QSecurityUserGroup,
  qSecurityUserGroup,
  QSecurityUserGroupId,
} from "./QSecurityUserGroup";
import { FirmService } from "../firm/FirmService";
import { SecurityUserGroupAssignId } from "../security_user_group_assign/SecurityUserGroupAssign";
import { QSecurityUserGroupAssignId } from "../security_user_group_assign/QSecurityUserGroupAssign";
import {
  SecurityUserGroupAssignService,
  SecurityUserGroupAssignCollectionService,
} from "../security_user_group_assign/SecurityUserGroupAssignService";

export class SecurityUserGroupService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SecurityUserGroup,
  EditableSecurityUserGroup,
  QSecurityUserGroup
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSecurityUserGroup);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public SecurityUserGroupAssigns(): SecurityUserGroupAssignCollectionService<ClientType>;
  public SecurityUserGroupAssigns(
    id: SecurityUserGroupAssignId
  ): SecurityUserGroupAssignService<ClientType>;
  public SecurityUserGroupAssigns(id?: SecurityUserGroupAssignId | undefined) {
    const fieldName = "SecurityUserGroupAssigns";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SecurityUserGroupAssignCollectionService(client, path, fieldName)
      : new SecurityUserGroupAssignService(
          client,
          path,
          new QSecurityUserGroupAssignId(fieldName).buildUrl(id)
        );
  }
}

export class SecurityUserGroupCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SecurityUserGroup,
  EditableSecurityUserGroup,
  QSecurityUserGroup,
  SecurityUserGroupId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qSecurityUserGroup,
      new QSecurityUserGroupId(name)
    );
  }
}
