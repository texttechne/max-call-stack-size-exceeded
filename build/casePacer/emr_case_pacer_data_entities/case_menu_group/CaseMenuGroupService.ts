import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  CaseMenuGroup,
  EditableCaseMenuGroup,
  CaseMenuGroupId,
} from "./CaseMenuGroup";
import {
  QCaseMenuGroup,
  qCaseMenuGroup,
  QCaseMenuGroupId,
} from "./QCaseMenuGroup";
import { CaseMenuItemId } from "../case_menu_item/CaseMenuItem";
import { QCaseMenuItemId } from "../case_menu_item/QCaseMenuItem";
import {
  CaseMenuItemService,
  CaseMenuItemCollectionService,
} from "../case_menu_item/CaseMenuItemService";

export class CaseMenuGroupService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CaseMenuGroup,
  EditableCaseMenuGroup,
  QCaseMenuGroup
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCaseMenuGroup);
  }

  public CaseMenuItems(): CaseMenuItemCollectionService<ClientType>;
  public CaseMenuItems(id: CaseMenuItemId): CaseMenuItemService<ClientType>;
  public CaseMenuItems(id?: CaseMenuItemId | undefined) {
    const fieldName = "CaseMenuItems";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CaseMenuItemCollectionService(client, path, fieldName)
      : new CaseMenuItemService(
          client,
          path,
          new QCaseMenuItemId(fieldName).buildUrl(id)
        );
  }
}

export class CaseMenuGroupCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CaseMenuGroup,
  EditableCaseMenuGroup,
  QCaseMenuGroup,
  CaseMenuGroupId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCaseMenuGroup, new QCaseMenuGroupId(name));
  }
}
