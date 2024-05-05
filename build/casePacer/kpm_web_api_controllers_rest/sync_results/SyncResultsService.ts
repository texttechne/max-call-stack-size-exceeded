import {
  NumberCollection,
  QNumberCollection,
  qNumberCollection,
} from "@odata2ts/odata-query-objects";
import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  CollectionServiceV4,
} from "@odata2ts/odata-service";
import { SyncResults, EditableSyncResults } from "./SyncResults";
import { QSyncResults, qSyncResults } from "./QSyncResults";

export class SyncResultsService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SyncResults,
  EditableSyncResults,
  QSyncResults
> {
  private _PartyIds?: CollectionServiceV4<
    ClientType,
    NumberCollection,
    QNumberCollection
  >;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSyncResults);
  }

  public PartyIds() {
    if (!this._PartyIds) {
      const { client, path } = this.__base;
      this._PartyIds = new CollectionServiceV4(
        client,
        path,
        "PartyIds",
        qNumberCollection
      );
    }

    return this._PartyIds;
  }
}
