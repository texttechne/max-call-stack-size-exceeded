import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QBooleanPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QTicklerCriteriaItem } from "../tickler_criteria_item/QTicklerCriteriaItem";
import { TicklerCriteriaOperatorId } from "./TicklerCriteriaOperator";

export class QTicklerCriteriaOperator extends QueryObject {
  public readonly TicklerCriteriaOperatorId = new QNumberPath(
    this.withPrefix("TicklerCriteriaOperatorId")
  );
  public readonly TicklerCriteriaOperatorName = new QStringPath(
    this.withPrefix("TicklerCriteriaOperatorName")
  );
  public readonly DataType = new QStringPath(this.withPrefix("DataType"));
  public readonly HasComparisonValue = new QBooleanPath(
    this.withPrefix("HasComparisonValue")
  );
  public readonly TicklerCriteriaItems = new QEntityCollectionPath(
    this.withPrefix("TicklerCriteriaItems"),
    () => QTicklerCriteriaItem
  );
}

export const qTicklerCriteriaOperator = new QTicklerCriteriaOperator();

export class QTicklerCriteriaOperatorId extends QId<TicklerCriteriaOperatorId> {
  private readonly params = [new QNumberParam("TicklerCriteriaOperatorId")];

  getParams() {
    return this.params;
  }
}
