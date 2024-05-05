import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  SecurityRule,
  EditableSecurityRule,
  SecurityRuleId,
} from "./SecurityRule";
import { QSecurityRule, qSecurityRule, QSecurityRuleId } from "./QSecurityRule";
import { AccessLevelService } from "../access_level/AccessLevelService";
import { SecurityPathService } from "../security_path/SecurityPathService";

export class SecurityRuleService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SecurityRule,
  EditableSecurityRule,
  QSecurityRule
> {
  private _CreateAccessLevel?: AccessLevelService<ClientType>;
  private _DeleteAccessLevel?: AccessLevelService<ClientType>;
  private _EditAccessLevel?: AccessLevelService<ClientType>;
  private _ReadAccessLevel?: AccessLevelService<ClientType>;
  private _SecurityPath?: SecurityPathService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSecurityRule);
  }

  public CreateAccessLevel(): AccessLevelService<ClientType> {
    if (!this._CreateAccessLevel) {
      const { client, path } = this.__base;
      this._CreateAccessLevel = new AccessLevelService(
        client,
        path,
        "CreateAccessLevel"
      );
    }

    return this._CreateAccessLevel;
  }

  public DeleteAccessLevel(): AccessLevelService<ClientType> {
    if (!this._DeleteAccessLevel) {
      const { client, path } = this.__base;
      this._DeleteAccessLevel = new AccessLevelService(
        client,
        path,
        "DeleteAccessLevel"
      );
    }

    return this._DeleteAccessLevel;
  }

  public EditAccessLevel(): AccessLevelService<ClientType> {
    if (!this._EditAccessLevel) {
      const { client, path } = this.__base;
      this._EditAccessLevel = new AccessLevelService(
        client,
        path,
        "EditAccessLevel"
      );
    }

    return this._EditAccessLevel;
  }

  public ReadAccessLevel(): AccessLevelService<ClientType> {
    if (!this._ReadAccessLevel) {
      const { client, path } = this.__base;
      this._ReadAccessLevel = new AccessLevelService(
        client,
        path,
        "ReadAccessLevel"
      );
    }

    return this._ReadAccessLevel;
  }

  public SecurityPath(): SecurityPathService<ClientType> {
    if (!this._SecurityPath) {
      const { client, path } = this.__base;
      this._SecurityPath = new SecurityPathService(
        client,
        path,
        "SecurityPath"
      );
    }

    return this._SecurityPath;
  }
}

export class SecurityRuleCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SecurityRule,
  EditableSecurityRule,
  QSecurityRule,
  SecurityRuleId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSecurityRule, new QSecurityRuleId(name));
  }
}
