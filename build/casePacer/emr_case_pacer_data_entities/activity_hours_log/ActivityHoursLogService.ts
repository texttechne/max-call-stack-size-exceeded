import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  ActivityHoursLog,
  EditableActivityHoursLog,
  ActivityHoursLogId,
} from "./ActivityHoursLog";
import {
  QActivityHoursLog,
  qActivityHoursLog,
  QActivityHoursLogId,
} from "./QActivityHoursLog";
import { ActivityLogService } from "../activity_log/ActivityLogService";

export class ActivityHoursLogService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  ActivityHoursLog,
  EditableActivityHoursLog,
  QActivityHoursLog
> {
  private _ActivityLog?: ActivityLogService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qActivityHoursLog);
  }

  public ActivityLog(): ActivityLogService<ClientType> {
    if (!this._ActivityLog) {
      const { client, path } = this.__base;
      this._ActivityLog = new ActivityLogService(client, path, "ActivityLog");
    }

    return this._ActivityLog;
  }
}

export class ActivityHoursLogCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ActivityHoursLog,
  EditableActivityHoursLog,
  QActivityHoursLog,
  ActivityHoursLogId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qActivityHoursLog,
      new QActivityHoursLogId(name)
    );
  }
}
