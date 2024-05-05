import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  CaseMenuItem,
  EditableCaseMenuItem,
  CaseMenuItemId,
} from "./CaseMenuItem";
import { QCaseMenuItem, qCaseMenuItem, QCaseMenuItemId } from "./QCaseMenuItem";
import { CaseMenuGroupService } from "../case_menu_group/CaseMenuGroupService";
import { CaseMenuTabService } from "../case_menu_tab/CaseMenuTabService";
import { FirmService } from "../firm/FirmService";
import { LawsuitTypeService } from "../lawsuit_type/LawsuitTypeService";

export class CaseMenuItemService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CaseMenuItem,
  EditableCaseMenuItem,
  QCaseMenuItem
> {
  private _CaseMenuGroup?: CaseMenuGroupService<ClientType>;
  private _CaseMenuTab?: CaseMenuTabService<ClientType>;
  private _Firm?: FirmService<ClientType>;
  private _LawsuitType?: LawsuitTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCaseMenuItem);
  }

  public CaseMenuGroup(): CaseMenuGroupService<ClientType> {
    if (!this._CaseMenuGroup) {
      const { client, path } = this.__base;
      this._CaseMenuGroup = new CaseMenuGroupService(
        client,
        path,
        "CaseMenuGroup"
      );
    }

    return this._CaseMenuGroup;
  }

  public CaseMenuTab(): CaseMenuTabService<ClientType> {
    if (!this._CaseMenuTab) {
      const { client, path } = this.__base;
      this._CaseMenuTab = new CaseMenuTabService(client, path, "CaseMenuTab");
    }

    return this._CaseMenuTab;
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public LawsuitType(): LawsuitTypeService<ClientType> {
    if (!this._LawsuitType) {
      const { client, path } = this.__base;
      this._LawsuitType = new LawsuitTypeService(client, path, "LawsuitType");
    }

    return this._LawsuitType;
  }
}

export class CaseMenuItemCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CaseMenuItem,
  EditableCaseMenuItem,
  QCaseMenuItem,
  CaseMenuItemId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCaseMenuItem, new QCaseMenuItemId(name));
  }
}
