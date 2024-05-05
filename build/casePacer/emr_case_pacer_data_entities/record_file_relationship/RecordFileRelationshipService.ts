import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  RecordFileRelationship,
  EditableRecordFileRelationship,
  RecordFileRelationshipId,
} from "./RecordFileRelationship";
import {
  QRecordFileRelationship,
  qRecordFileRelationship,
  QRecordFileRelationshipId,
} from "./QRecordFileRelationship";
import { RecordFileService } from "../record_file/RecordFileService";

export class RecordFileRelationshipService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  RecordFileRelationship,
  EditableRecordFileRelationship,
  QRecordFileRelationship
> {
  private _RecordFile?: RecordFileService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qRecordFileRelationship);
  }

  public RecordFile(): RecordFileService<ClientType> {
    if (!this._RecordFile) {
      const { client, path } = this.__base;
      this._RecordFile = new RecordFileService(client, path, "RecordFile");
    }

    return this._RecordFile;
  }
}

export class RecordFileRelationshipCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  RecordFileRelationship,
  EditableRecordFileRelationship,
  QRecordFileRelationship,
  RecordFileRelationshipId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qRecordFileRelationship,
      new QRecordFileRelationshipId(name)
    );
  }
}
