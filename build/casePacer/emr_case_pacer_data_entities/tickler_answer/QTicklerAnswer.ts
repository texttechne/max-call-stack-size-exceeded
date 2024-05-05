import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QTicklerTemplate } from "../tickler_template/QTicklerTemplate";
import { QTickler } from "../tickler/QTickler";
import { QTicklerAnswerAction } from "../tickler_answer_action/QTicklerAnswerAction";
import { TicklerAnswerId } from "./TicklerAnswer";

export class QTicklerAnswer extends QueryObject {
  public readonly TicklerAnswerId = new QNumberPath(
    this.withPrefix("TicklerAnswerId")
  );
  public readonly TicklerTemplateId = new QNumberPath(
    this.withPrefix("TicklerTemplateId")
  );
  public readonly Answer = new QStringPath(this.withPrefix("Answer"));
  public readonly Instruction = new QStringPath(this.withPrefix("Instruction"));
  public readonly ResultingAction = new QStringPath(
    this.withPrefix("ResultingAction")
  );
  public readonly TicklerTemplate = new QEntityPath(
    this.withPrefix("TicklerTemplate"),
    () => QTicklerTemplate
  );
  public readonly Ticklers = new QEntityCollectionPath(
    this.withPrefix("Ticklers"),
    () => QTickler
  );
  public readonly TicklerAnswerActions = new QEntityCollectionPath(
    this.withPrefix("TicklerAnswerActions"),
    () => QTicklerAnswerAction
  );
}

export const qTicklerAnswer = new QTicklerAnswer();

export class QTicklerAnswerId extends QId<TicklerAnswerId> {
  private readonly params = [new QNumberParam("TicklerAnswerId")];

  getParams() {
    return this.params;
  }
}
