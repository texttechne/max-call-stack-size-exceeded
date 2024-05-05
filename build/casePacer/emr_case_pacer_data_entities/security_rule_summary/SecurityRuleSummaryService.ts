import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  SecurityRuleSummary,
  EditableSecurityRuleSummary,
  SecurityRuleSummaryId,
} from "./SecurityRuleSummary";
import {
  QSecurityRuleSummary,
  qSecurityRuleSummary,
  QSecurityRuleSummaryId,
} from "./QSecurityRuleSummary";
import { FirmService } from "../firm/FirmService";
import { CasePacerUserService } from "../case_pacer_user/CasePacerUserService";
import { SecurityPathService } from "../security_path/SecurityPathService";
import { AccessLevelService } from "../access_level/AccessLevelService";

export class SecurityRuleSummaryService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SecurityRuleSummary,
  EditableSecurityRuleSummary,
  QSecurityRuleSummary
> {
  private _Firm?: FirmService<ClientType>;
  private _CasePacerUser?: CasePacerUserService<ClientType>;
  private _SecurityPath?: SecurityPathService<ClientType>;
  private _ReadAccessLevel?: AccessLevelService<ClientType>;
  private _CreateAccessLevel?: AccessLevelService<ClientType>;
  private _EditAccessLevel?: AccessLevelService<ClientType>;
  private _DeleteAccessLevel?: AccessLevelService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSecurityRuleSummary);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
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
}

export class SecurityRuleSummaryCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SecurityRuleSummary,
  EditableSecurityRuleSummary,
  QSecurityRuleSummary,
  SecurityRuleSummaryId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qSecurityRuleSummary,
      new QSecurityRuleSummaryId(name)
    );
  }
}
