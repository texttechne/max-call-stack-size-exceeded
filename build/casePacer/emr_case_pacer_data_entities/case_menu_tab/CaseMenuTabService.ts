import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { CaseMenuTab, EditableCaseMenuTab, CaseMenuTabId } from "./CaseMenuTab";
import { QCaseMenuTab, qCaseMenuTab, QCaseMenuTabId } from "./QCaseMenuTab";
import { CaseMenuItemId } from "../case_menu_item/CaseMenuItem";
import { QCaseMenuItemId } from "../case_menu_item/QCaseMenuItem";
import {
  CaseMenuItemService,
  CaseMenuItemCollectionService,
} from "../case_menu_item/CaseMenuItemService";
import { RecordSubtypeId } from "../record_subtype/RecordSubtype";
import { QRecordSubtypeId } from "../record_subtype/QRecordSubtype";
import {
  RecordSubtypeService,
  RecordSubtypeCollectionService,
} from "../record_subtype/RecordSubtypeService";

export class CaseMenuTabService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CaseMenuTab,
  EditableCaseMenuTab,
  QCaseMenuTab
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCaseMenuTab);
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

  public RecordSubtypes(): RecordSubtypeCollectionService<ClientType>;
  public RecordSubtypes(id: RecordSubtypeId): RecordSubtypeService<ClientType>;
  public RecordSubtypes(id?: RecordSubtypeId | undefined) {
    const fieldName = "RecordSubtypes";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RecordSubtypeCollectionService(client, path, fieldName)
      : new RecordSubtypeService(
          client,
          path,
          new QRecordSubtypeId(fieldName).buildUrl(id)
        );
  }
}

export class CaseMenuTabCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CaseMenuTab,
  EditableCaseMenuTab,
  QCaseMenuTab,
  CaseMenuTabId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCaseMenuTab, new QCaseMenuTabId(name));
  }
}
