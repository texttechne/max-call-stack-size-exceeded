import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { RecordType, EditableRecordType, RecordTypeId } from "./RecordType";
import { QRecordType, qRecordType, QRecordTypeId } from "./QRecordType";
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
import { RecordSubtypeId } from "../record_subtype/RecordSubtype";
import { QRecordSubtypeId } from "../record_subtype/QRecordSubtype";
import {
  RecordSubtypeService,
  RecordSubtypeCollectionService,
} from "../record_subtype/RecordSubtypeService";

export class RecordTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  RecordType,
  EditableRecordType,
  QRecordType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qRecordType);
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

export class RecordTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  RecordType,
  EditableRecordType,
  QRecordType,
  RecordTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qRecordType, new QRecordTypeId(name));
  }
}
