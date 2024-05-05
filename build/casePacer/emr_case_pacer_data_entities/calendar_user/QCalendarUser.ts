import {
  QueryObject,
  QNumberPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QCalendarUserGroup } from "../calendar_user_group/QCalendarUserGroup";
import { QParty } from "../party/QParty";
import { CalendarUserId } from "./CalendarUser";

export class QCalendarUser extends QueryObject {
  public readonly CalendarUserId = new QNumberPath(
    this.withPrefix("CalendarUserId")
  );
  public readonly CalendarUserGroupId = new QNumberPath(
    this.withPrefix("CalendarUserGroupId")
  );
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly CalendarUserGroup = new QEntityPath(
    this.withPrefix("CalendarUserGroup"),
    () => QCalendarUserGroup
  );
  public readonly Party = new QEntityPath(
    this.withPrefix("Party"),
    () => QParty
  );
}

export const qCalendarUser = new QCalendarUser();

export class QCalendarUserId extends QId<CalendarUserId> {
  private readonly params = [new QNumberParam("CalendarUserId")];

  getParams() {
    return this.params;
  }
}
