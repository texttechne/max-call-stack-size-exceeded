import {
  QueryObject,
  QNumberPath,
  QBooleanPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QTicklerCriteriaAction } from "../tickler_criteria_action/QTicklerCriteriaAction";
import { QTicklerTemplate } from "../tickler_template/QTicklerTemplate";
import { QTicklerCriteriaSet } from "../tickler_criteria_set/QTicklerCriteriaSet";
import { TicklerCriteriaId } from "./TicklerCriteria";

export class QTicklerCriteria extends QueryObject {
  public readonly TicklerCriteriaId = new QNumberPath(
    this.withPrefix("TicklerCriteriaId")
  );
  public readonly TicklerCriteriaActionId = new QNumberPath(
    this.withPrefix("TicklerCriteriaActionId")
  );
  public readonly BooleanAndFlag = new QBooleanPath(
    this.withPrefix("BooleanAndFlag")
  );
  public readonly TicklerTemplateId = new QNumberPath(
    this.withPrefix("TicklerTemplateId")
  );
  public readonly TicklerCriteriaAction = new QEntityPath(
    this.withPrefix("TicklerCriteriaAction"),
    () => QTicklerCriteriaAction
  );
  public readonly TicklerTemplate = new QEntityPath(
    this.withPrefix("TicklerTemplate"),
    () => QTicklerTemplate
  );
  public readonly TicklerCriteriaSets = new QEntityCollectionPath(
    this.withPrefix("TicklerCriteriaSets"),
    () => QTicklerCriteriaSet
  );
}

export const qTicklerCriteria = new QTicklerCriteria();

export class QTicklerCriteriaId extends QId<TicklerCriteriaId> {
  private readonly params = [new QNumberParam("TicklerCriteriaId")];

  getParams() {
    return this.params;
  }
}
