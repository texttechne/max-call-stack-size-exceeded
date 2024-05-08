import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QDateTimeOffsetPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QPerson } from "../person/QPerson";
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
  public readonly PlanPerson = new QEntityCollectionPath(
    this.withPrefix("PlanPerson"),
    () => QPerson
  );
}

export const qPlanItem = new QPlanItem();

export class QPlanItemId extends QId<PlanItemId> {
  private readonly params = [new QNumberParam("PlanItemId")];

  getParams() {
    return this.params;
  }
}
