import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QTicklerAnswerAction } from "../tickler_answer_action/QTicklerAnswerAction";
import { TicklerActionTypeId } from "./TicklerActionType";

export class QTicklerActionType extends QueryObject {
  public readonly TicklerActionTypeId = new QNumberPath(
    this.withPrefix("TicklerActionTypeId")
  );
  public readonly TicklerActionTypeName = new QStringPath(
    this.withPrefix("TicklerActionTypeName")
  );
  public readonly TicklerAnswerActions = new QEntityCollectionPath(
    this.withPrefix("TicklerAnswerActions"),
    () => QTicklerAnswerAction
  );
}

export const qTicklerActionType = new QTicklerActionType();

export class QTicklerActionTypeId extends QId<TicklerActionTypeId> {
  private readonly params = [new QNumberParam("TicklerActionTypeId")];

  getParams() {
    return this.params;
  }
}
