import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  ActivityLogType,
  EditableActivityLogType,
  ActivityLogTypeId,
} from "./ActivityLogType";
import {
  QActivityLogType,
  qActivityLogType,
  QActivityLogTypeId,
} from "./QActivityLogType";
import { FirmService } from "../firm/FirmService";
import { ActivityLogId } from "../activity_log/ActivityLog";
import { QActivityLogId } from "../activity_log/QActivityLog";
import {
  ActivityLogService,
  ActivityLogCollectionService,
} from "../activity_log/ActivityLogService";

export class ActivityLogTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  ActivityLogType,
  EditableActivityLogType,
  QActivityLogType
> {
  private _Firm?: FirmService<ClientType>;
  private _ActivityLogSystemType?: ActivityLogTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qActivityLogType);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public ActivityLogSystemType(): ActivityLogTypeService<ClientType> {
    if (!this._ActivityLogSystemType) {
      const { client, path } = this.__base;
      this._ActivityLogSystemType = new ActivityLogTypeService(
        client,
        path,
        "ActivityLogSystemType"
      );
    }

    return this._ActivityLogSystemType;
  }

  public ActivityLogs(): ActivityLogCollectionService<ClientType>;
  public ActivityLogs(id: ActivityLogId): ActivityLogService<ClientType>;
  public ActivityLogs(id?: ActivityLogId | undefined) {
    const fieldName = "ActivityLogs";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ActivityLogCollectionService(client, path, fieldName)
      : new ActivityLogService(
          client,
          path,
          new QActivityLogId(fieldName).buildUrl(id)
        );
  }

  public ActivityLogChildrenOfSystemType(): ActivityLogTypeCollectionService<ClientType>;
  public ActivityLogChildrenOfSystemType(
    id: ActivityLogTypeId
  ): ActivityLogTypeService<ClientType>;
  public ActivityLogChildrenOfSystemType(id?: ActivityLogTypeId | undefined) {
    const fieldName = "ActivityLogChildrenOfSystemType";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ActivityLogTypeCollectionService(client, path, fieldName)
      : new ActivityLogTypeService(
          client,
          path,
          new QActivityLogTypeId(fieldName).buildUrl(id)
        );
  }
}

export class ActivityLogTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ActivityLogType,
  EditableActivityLogType,
  QActivityLogType,
  ActivityLogTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qActivityLogType,
      new QActivityLogTypeId(name)
    );
  }
}
