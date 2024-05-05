import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QTicklerActionType } from "../tickler_action_type/QTicklerActionType";
import { QTicklerAnswer } from "../tickler_answer/QTicklerAnswer";
import { TicklerAnswerActionId } from "./TicklerAnswerAction";

export class QTicklerAnswerAction extends QueryObject {
  public readonly TicklerAnswerActionId = new QNumberPath(
    this.withPrefix("TicklerAnswerActionId")
  );
  public readonly TicklerAnswerId = new QNumberPath(
    this.withPrefix("TicklerAnswerId")
  );
  public readonly TicklerActionTypeId = new QNumberPath(
    this.withPrefix("TicklerActionTypeId")
  );
  public readonly ActionOrder = new QNumberPath(this.withPrefix("ActionOrder"));
  public readonly TargetTicklerNumber = new QNumberPath(
    this.withPrefix("TargetTicklerNumber")
  );
  public readonly NumberOfDays = new QNumberPath(
    this.withPrefix("NumberOfDays")
  );
  public readonly DocumentTemplateName = new QStringPath(
    this.withPrefix("DocumentTemplateName")
  );
  public readonly Destination = new QStringPath(this.withPrefix("Destination"));
  public readonly ColumnIdentifier = new QStringPath(
    this.withPrefix("ColumnIdentifier")
  );
  public readonly DataValue = new QStringPath(this.withPrefix("DataValue"));
  public readonly TicklerActionType = new QEntityPath(
    this.withPrefix("TicklerActionType"),
    () => QTicklerActionType
  );
  public readonly TicklerAnswer = new QEntityPath(
    this.withPrefix("TicklerAnswer"),
    () => QTicklerAnswer
  );
}

export const qTicklerAnswerAction = new QTicklerAnswerAction();

export class QTicklerAnswerActionId extends QId<TicklerAnswerActionId> {
  private readonly params = [new QNumberParam("TicklerAnswerActionId")];

  getParams() {
    return this.params;
  }
}
