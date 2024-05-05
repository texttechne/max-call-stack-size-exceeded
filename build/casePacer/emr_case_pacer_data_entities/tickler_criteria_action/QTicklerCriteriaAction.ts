import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QTicklerCriteria } from "../tickler_criteria/QTicklerCriteria";
import { TicklerCriteriaActionId } from "./TicklerCriteriaAction";

export class QTicklerCriteriaAction extends QueryObject {
  public readonly TicklerCriteriaActionId = new QNumberPath(
    this.withPrefix("TicklerCriteriaActionId")
  );
  public readonly TicklerCriteriaActionName = new QStringPath(
    this.withPrefix("TicklerCriteriaActionName")
  );
  public readonly TicklerCriterias = new QEntityCollectionPath(
    this.withPrefix("TicklerCriterias"),
    () => QTicklerCriteria
  );
}

export const qTicklerCriteriaAction = new QTicklerCriteriaAction();

export class QTicklerCriteriaActionId extends QId<TicklerCriteriaActionId> {
  private readonly params = [new QNumberParam("TicklerCriteriaActionId")];

  getParams() {
    return this.params;
  }
}
