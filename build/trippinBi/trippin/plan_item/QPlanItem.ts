import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QDateTimeOffsetPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { PlanItemId } from "./PlanItem";

export class QPlanItem extends QueryObject {
  public readonly PlanItemId = new QNumberPath(this.withPrefix("PlanItemId"));
  public readonly ConfirmationCode = new QStringPath(
    this.withPrefix("ConfirmationCode")
  );
  public readonly StartsAt = new QDateTimeOffsetPath(
    this.withPrefix("StartsAt")
  );
  public readonly EndsAt = new QDateTimeOffsetPath(this.withPrefix("EndsAt"));
  public readonly Duration = new QStringPath(this.withPrefix("Duration"));
}

export const qPlanItem = new QPlanItem();

export class QPlanItemId extends QId<PlanItemId> {
  private readonly params = [new QNumberParam("PlanItemId")];

  getParams() {
    return this.params;
  }
}
