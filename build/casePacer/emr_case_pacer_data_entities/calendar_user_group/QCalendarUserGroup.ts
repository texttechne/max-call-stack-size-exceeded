import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QCalendarUser } from "../calendar_user/QCalendarUser";
import { CalendarUserGroupId } from "./CalendarUserGroup";

export class QCalendarUserGroup extends QueryObject {
  public readonly CalendarUserGroupId = new QNumberPath(
    this.withPrefix("CalendarUserGroupId")
  );
  public readonly CalendarGroupName = new QStringPath(
    this.withPrefix("CalendarGroupName")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly CalendarUsers = new QEntityCollectionPath(
    this.withPrefix("CalendarUsers"),
    () => QCalendarUser
  );
}

export const qCalendarUserGroup = new QCalendarUserGroup();

export class QCalendarUserGroupId extends QId<CalendarUserGroupId> {
  private readonly params = [new QNumberParam("CalendarUserGroupId")];

  getParams() {
    return this.params;
  }
}
