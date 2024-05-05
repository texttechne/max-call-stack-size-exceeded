import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { ActivityLog, EditableActivityLog, ActivityLogId } from "./ActivityLog";
import { QActivityLog, qActivityLog, QActivityLogId } from "./QActivityLog";
import { ActivityLogTypeService } from "../activity_log_type/ActivityLogTypeService";
import { CasePacerUserService } from "../case_pacer_user/CasePacerUserService";
import { ExpenseService } from "../expense/ExpenseService";
import { LawsuitService } from "../lawsuit/LawsuitService";
import { ActivityHoursLogId } from "../activity_hours_log/ActivityHoursLog";
import { QActivityHoursLogId } from "../activity_hours_log/QActivityHoursLog";
import {
  ActivityHoursLogService,
  ActivityHoursLogCollectionService,
} from "../activity_hours_log/ActivityHoursLogService";

export class ActivityLogService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  ActivityLog,
  EditableActivityLog,
  QActivityLog
> {
  private _ActivityLogType?: ActivityLogTypeService<ClientType>;
  private _CasePacerUser?: CasePacerUserService<ClientType>;
  private _CasePacerAuditUser?: CasePacerUserService<ClientType>;
  private _Expense?: ExpenseService<ClientType>;
  private _GlobalActivityLog?: ActivityLogService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qActivityLog);
  }

  public ActivityLogType(): ActivityLogTypeService<ClientType> {
    if (!this._ActivityLogType) {
      const { client, path } = this.__base;
      this._ActivityLogType = new ActivityLogTypeService(
        client,
        path,
        "ActivityLogType"
      );
    }

    return this._ActivityLogType;
  }

  public CasePacerUser(): CasePacerUserService<ClientType> {
    if (!this._CasePacerUser) {
      const { client, path } = this.__base;
      this._CasePacerUser = new CasePacerUserService(
        client,
        path,
        "CasePacerUser"
      );
    }

    return this._CasePacerUser;
  }

  public CasePacerAuditUser(): CasePacerUserService<ClientType> {
    if (!this._CasePacerAuditUser) {
      const { client, path } = this.__base;
      this._CasePacerAuditUser = new CasePacerUserService(
        client,
        path,
        "CasePacerAuditUser"
      );
    }

    return this._CasePacerAuditUser;
  }

  public Expense(): ExpenseService<ClientType> {
    if (!this._Expense) {
      const { client, path } = this.__base;
      this._Expense = new ExpenseService(client, path, "Expense");
    }

    return this._Expense;
  }

  public GlobalActivityLog(): ActivityLogService<ClientType> {
    if (!this._GlobalActivityLog) {
      const { client, path } = this.__base;
      this._GlobalActivityLog = new ActivityLogService(
        client,
        path,
        "GlobalActivityLog"
      );
    }

    return this._GlobalActivityLog;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public ActivityHoursLogs(): ActivityHoursLogCollectionService<ClientType>;
  public ActivityHoursLogs(
    id: ActivityHoursLogId
  ): ActivityHoursLogService<ClientType>;
  public ActivityHoursLogs(id?: ActivityHoursLogId | undefined) {
    const fieldName = "ActivityHoursLogs";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ActivityHoursLogCollectionService(client, path, fieldName)
      : new ActivityHoursLogService(
          client,
          path,
          new QActivityHoursLogId(fieldName).buildUrl(id)
        );
  }

  public GlobalActivityLogActivityLogs(): ActivityLogCollectionService<ClientType>;
  public GlobalActivityLogActivityLogs(
    id: ActivityLogId
  ): ActivityLogService<ClientType>;
  public GlobalActivityLogActivityLogs(id?: ActivityLogId | undefined) {
    const fieldName = "GlobalActivityLogActivityLogs";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ActivityLogCollectionService(client, path, fieldName)
      : new ActivityLogService(
          client,
          path,
          new QActivityLogId(fieldName).buildUrl(id)
        );
  }
}

export class ActivityLogCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ActivityLog,
  EditableActivityLog,
  QActivityLog,
  ActivityLogId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qActivityLog, new QActivityLogId(name));
  }
}
