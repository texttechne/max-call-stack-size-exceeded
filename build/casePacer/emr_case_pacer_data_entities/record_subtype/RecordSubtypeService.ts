import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  RecordSubtype,
  EditableRecordSubtype,
  RecordSubtypeId,
} from "./RecordSubtype";
import {
  QRecordSubtype,
  qRecordSubtype,
  QRecordSubtypeId,
} from "./QRecordSubtype";
import { FirmService } from "../firm/FirmService";
import { CaseMenuTabService } from "../case_menu_tab/CaseMenuTabService";
import { RecordTypeService } from "../record_type/RecordTypeService";
import { RecordId } from "../record/Record";
import { QRecordId } from "../record/QRecord";
import {
  RecordService,
  RecordCollectionService,
} from "../record/RecordService";
import { RecordFolderId } from "../record_folder/RecordFolder";
import { QRecordFolderId } from "../record_folder/QRecordFolder";
import {
  RecordFolderService,
  RecordFolderCollectionService,
} from "../record_folder/RecordFolderService";

export class RecordSubtypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  RecordSubtype,
  EditableRecordSubtype,
  QRecordSubtype
> {
  private _Firm?: FirmService<ClientType>;
  private _CaseMenuTab?: CaseMenuTabService<ClientType>;
  private _RecordType?: RecordTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qRecordSubtype);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public CaseMenuTab(): CaseMenuTabService<ClientType> {
    if (!this._CaseMenuTab) {
      const { client, path } = this.__base;
      this._CaseMenuTab = new CaseMenuTabService(client, path, "CaseMenuTab");
    }

    return this._CaseMenuTab;
  }

  public RecordType(): RecordTypeService<ClientType> {
    if (!this._RecordType) {
      const { client, path } = this.__base;
      this._RecordType = new RecordTypeService(client, path, "RecordType");
    }

    return this._RecordType;
  }

  public Records(): RecordCollectionService<ClientType>;
  public Records(id: RecordId): RecordService<ClientType>;
  public Records(id?: RecordId | undefined) {
    const fieldName = "Records";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RecordCollectionService(client, path, fieldName)
      : new RecordService(client, path, new QRecordId(fieldName).buildUrl(id));
  }

  public RecordFolders(): RecordFolderCollectionService<ClientType>;
  public RecordFolders(id: RecordFolderId): RecordFolderService<ClientType>;
  public RecordFolders(id?: RecordFolderId | undefined) {
    const fieldName = "RecordFolders";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RecordFolderCollectionService(client, path, fieldName)
      : new RecordFolderService(
          client,
          path,
          new QRecordFolderId(fieldName).buildUrl(id)
        );
  }
}

export class RecordSubtypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  RecordSubtype,
  EditableRecordSubtype,
  QRecordSubtype,
  RecordSubtypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qRecordSubtype, new QRecordSubtypeId(name));
  }
}
