import {
  QueryObject,
  QNumberPath,
  QBooleanPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QTicklerCriteria } from "../tickler_criteria/QTicklerCriteria";
import { QTicklerCriteriaItem } from "../tickler_criteria_item/QTicklerCriteriaItem";
import { TicklerCriteriaSetId } from "./TicklerCriteriaSet";

export class QTicklerCriteriaSet extends QueryObject {
  public readonly TicklerCriteriaSetId = new QNumberPath(
    this.withPrefix("TicklerCriteriaSetId")
  );
  public readonly TicklerCriteriaId = new QNumberPath(
    this.withPrefix("TicklerCriteriaId")
  );
  public readonly BooleanAndFlag = new QBooleanPath(
    this.withPrefix("BooleanAndFlag")
  );
  public readonly TicklerCriteria = new QEntityPath(
    this.withPrefix("TicklerCriteria"),
    () => QTicklerCriteria
  );
  public readonly TicklerCriteriaItems = new QEntityCollectionPath(
    this.withPrefix("TicklerCriteriaItems"),
    () => QTicklerCriteriaItem
  );
}

export const qTicklerCriteriaSet = new QTicklerCriteriaSet();

export class QTicklerCriteriaSetId extends QId<TicklerCriteriaSetId> {
  private readonly params = [new QNumberParam("TicklerCriteriaSetId")];

  getParams() {
    return this.params;
  }
}
