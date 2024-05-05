import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { DashboardAchievementId } from "./DashboardAchievement";

export class QDashboardAchievement extends QueryObject {
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly DisplayName = new QStringPath(this.withPrefix("DisplayName"));
  public readonly EventCount = new QNumberPath(this.withPrefix("EventCount"));
  public readonly TicklerCount = new QNumberPath(
    this.withPrefix("TicklerCount")
  );
  public readonly CaseUpdateCount = new QNumberPath(
    this.withPrefix("CaseUpdateCount")
  );
  public readonly PartyUpdateCount = new QNumberPath(
    this.withPrefix("PartyUpdateCount")
  );
  public readonly MessageCount = new QNumberPath(
    this.withPrefix("MessageCount")
  );
}

export const qDashboardAchievement = new QDashboardAchievement();

export class QDashboardAchievementId extends QId<DashboardAchievementId> {
  private readonly params = [new QNumberParam("PartyId")];

  getParams() {
    return this.params;
  }
}
