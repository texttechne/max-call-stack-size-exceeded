import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QTicklerTemplate } from "../tickler_template/QTicklerTemplate";
import { TicklerTemplateActionId } from "./TicklerTemplateAction";

export class QTicklerTemplateAction extends QueryObject {
  public readonly TicklerTemplateActionId = new QNumberPath(
    this.withPrefix("TicklerTemplateActionId")
  );
  public readonly TicklerTemplateId = new QNumberPath(
    this.withPrefix("TicklerTemplateId")
  );
  public readonly ChildTicklerTemplateId = new QNumberPath(
    this.withPrefix("ChildTicklerTemplateId")
  );
  public readonly Answer = new QStringPath(this.withPrefix("Answer"));
  public readonly ParentTickler = new QEntityPath(
    this.withPrefix("ParentTickler"),
    () => QTicklerTemplate
  );
  public readonly ChildTickler = new QEntityPath(
    this.withPrefix("ChildTickler"),
    () => QTicklerTemplate
  );
}

export const qTicklerTemplateAction = new QTicklerTemplateAction();

export class QTicklerTemplateActionId extends QId<TicklerTemplateActionId> {
  private readonly params = [new QNumberParam("TicklerTemplateActionId")];

  getParams() {
    return this.params;
  }
}
