import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { LawsuitRole, EditableLawsuitRole, LawsuitRoleId } from "./LawsuitRole";
import { QLawsuitRole, qLawsuitRole, QLawsuitRoleId } from "./QLawsuitRole";
import { LawsuitService } from "../lawsuit/LawsuitService";
import { LawsuitPartyService } from "../lawsuit_party/LawsuitPartyService";
import { RoleTemplateService } from "../role_template/RoleTemplateService";

export class LawsuitRoleService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LawsuitRole,
  EditableLawsuitRole,
  QLawsuitRole
> {
  private _Lawsuit?: LawsuitService<ClientType>;
  private _LawsuitParty?: LawsuitPartyService<ClientType>;
  private _RoleTemplate?: RoleTemplateService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitRole);
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public LawsuitParty(): LawsuitPartyService<ClientType> {
    if (!this._LawsuitParty) {
      const { client, path } = this.__base;
      this._LawsuitParty = new LawsuitPartyService(
        client,
        path,
        "LawsuitParty"
      );
    }

    return this._LawsuitParty;
  }

  public RoleTemplate(): RoleTemplateService<ClientType> {
    if (!this._RoleTemplate) {
      const { client, path } = this.__base;
      this._RoleTemplate = new RoleTemplateService(
        client,
        path,
        "RoleTemplate"
      );
    }

    return this._RoleTemplate;
  }
}

export class LawsuitRoleCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LawsuitRole,
  EditableLawsuitRole,
  QLawsuitRole,
  LawsuitRoleId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitRole, new QLawsuitRoleId(name));
  }
}
