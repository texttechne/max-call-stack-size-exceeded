import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QTicklerCriteriaOperator } from "../tickler_criteria_operator/QTicklerCriteriaOperator";
import { QTicklerCriteriaSet } from "../tickler_criteria_set/QTicklerCriteriaSet";
import { TicklerCriteriaItemId } from "./TicklerCriteriaItem";

export class QTicklerCriteriaItem extends QueryObject {
  public readonly TicklerCriteriaItemId = new QNumberPath(
    this.withPrefix("TicklerCriteriaItemId")
  );
  public readonly TicklerCriteriaSetId = new QNumberPath(
    this.withPrefix("TicklerCriteriaSetId")
  );
  public readonly Attribute = new QStringPath(this.withPrefix("Attribute"));
  public readonly TicklerCriteriaOperatorId = new QNumberPath(
    this.withPrefix("TicklerCriteriaOperatorId")
  );
  public readonly ComparisonValue = new QStringPath(
    this.withPrefix("ComparisonValue")
  );
  public readonly TicklerCriteriaOperator = new QEntityPath(
    this.withPrefix("TicklerCriteriaOperator"),
    () => QTicklerCriteriaOperator
  );
  public readonly TicklerCriteriaSet = new QEntityPath(
    this.withPrefix("TicklerCriteriaSet"),
    () => QTicklerCriteriaSet
  );
}

export const qTicklerCriteriaItem = new QTicklerCriteriaItem();

export class QTicklerCriteriaItemId extends QId<TicklerCriteriaItemId> {
  private readonly params = [new QNumberParam("TicklerCriteriaItemId")];

  getParams() {
    return this.params;
  }
}
