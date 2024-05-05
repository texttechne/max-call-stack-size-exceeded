import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  TrialPleading,
  EditableTrialPleading,
  TrialPleadingId,
} from "./TrialPleading";
import {
  QTrialPleading,
  qTrialPleading,
  QTrialPleadingId,
} from "./QTrialPleading";
import { RecordService } from "../record/RecordService";
import { TrialService } from "../trial/TrialService";

export class TrialPleadingService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TrialPleading,
  EditableTrialPleading,
  QTrialPleading
> {
  private _Record?: RecordService<ClientType>;
  private _Trial?: TrialService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTrialPleading);
  }

  public Record(): RecordService<ClientType> {
    if (!this._Record) {
      const { client, path } = this.__base;
      this._Record = new RecordService(client, path, "Record");
    }

    return this._Record;
  }

  public Trial(): TrialService<ClientType> {
    if (!this._Trial) {
      const { client, path } = this.__base;
      this._Trial = new TrialService(client, path, "Trial");
    }

    return this._Trial;
  }
}

export class TrialPleadingCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TrialPleading,
  EditableTrialPleading,
  QTrialPleading,
  TrialPleadingId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTrialPleading, new QTrialPleadingId(name));
  }
}
