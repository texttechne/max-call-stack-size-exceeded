import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  LawsuitTypeTickler,
  EditableLawsuitTypeTickler,
  LawsuitTypeTicklerId,
} from "./LawsuitTypeTickler";
import {
  QLawsuitTypeTickler,
  qLawsuitTypeTickler,
  QLawsuitTypeTicklerId,
} from "./QLawsuitTypeTickler";
import { LawsuitTypeService } from "../lawsuit_type/LawsuitTypeService";
import { RoleTemplateService } from "../role_template/RoleTemplateService";
import { TicklerTemplateService } from "../tickler_template/TicklerTemplateService";

export class LawsuitTypeTicklerService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LawsuitTypeTickler,
  EditableLawsuitTypeTickler,
  QLawsuitTypeTickler
> {
  private _LawsuitType?: LawsuitTypeService<ClientType>;
  private _RoleTemplate?: RoleTemplateService<ClientType>;
  private _TicklerTemplate?: TicklerTemplateService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitTypeTickler);
  }

  public LawsuitType(): LawsuitTypeService<ClientType> {
    if (!this._LawsuitType) {
      const { client, path } = this.__base;
      this._LawsuitType = new LawsuitTypeService(client, path, "LawsuitType");
    }

    return this._LawsuitType;
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

  public TicklerTemplate(): TicklerTemplateService<ClientType> {
    if (!this._TicklerTemplate) {
      const { client, path } = this.__base;
      this._TicklerTemplate = new TicklerTemplateService(
        client,
        path,
        "TicklerTemplate"
      );
    }

    return this._TicklerTemplate;
  }
}

export class LawsuitTypeTicklerCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LawsuitTypeTickler,
  EditableLawsuitTypeTickler,
  QLawsuitTypeTickler,
  LawsuitTypeTicklerId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qLawsuitTypeTickler,
      new QLawsuitTypeTicklerId(name)
    );
  }
}
