import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  RecordFolder,
  EditableRecordFolder,
  RecordFolderId,
} from "./RecordFolder";
import { QRecordFolder, qRecordFolder, QRecordFolderId } from "./QRecordFolder";
import { FirmService } from "../firm/FirmService";
import { LawsuitService } from "../lawsuit/LawsuitService";
import { RecordSubtypeService } from "../record_subtype/RecordSubtypeService";
import { RecordTypeService } from "../record_type/RecordTypeService";
import { RecordFileId } from "../record_file/RecordFile";
import { QRecordFileId } from "../record_file/QRecordFile";
import {
  RecordFileService,
  RecordFileCollectionService,
} from "../record_file/RecordFileService";

export class RecordFolderService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  RecordFolder,
  EditableRecordFolder,
  QRecordFolder
> {
  private _Firm?: FirmService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;
  private _RecordSubtype?: RecordSubtypeService<ClientType>;
  private _RecordType?: RecordTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qRecordFolder);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public RecordSubtype(): RecordSubtypeService<ClientType> {
    if (!this._RecordSubtype) {
      const { client, path } = this.__base;
      this._RecordSubtype = new RecordSubtypeService(
        client,
        path,
        "RecordSubtype"
      );
    }

    return this._RecordSubtype;
  }

  public RecordType(): RecordTypeService<ClientType> {
    if (!this._RecordType) {
      const { client, path } = this.__base;
      this._RecordType = new RecordTypeService(client, path, "RecordType");
    }

    return this._RecordType;
  }

  public RecordFiles(): RecordFileCollectionService<ClientType>;
  public RecordFiles(id: RecordFileId): RecordFileService<ClientType>;
  public RecordFiles(id?: RecordFileId | undefined) {
    const fieldName = "RecordFiles";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RecordFileCollectionService(client, path, fieldName)
      : new RecordFileService(
          client,
          path,
          new QRecordFileId(fieldName).buildUrl(id)
        );
  }
}

export class RecordFolderCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  RecordFolder,
  EditableRecordFolder,
  QRecordFolder,
  RecordFolderId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qRecordFolder, new QRecordFolderId(name));
  }
}
