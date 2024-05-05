import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QClientFormQuestion } from "../client_form_question/QClientFormQuestion";
import { ClientFormComponentId } from "./ClientFormComponent";

export class QClientFormComponent extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly Name = new QStringPath(this.withPrefix("Name"));
  public readonly CsType = new QStringPath(this.withPrefix("CsType"));
  public readonly ClientFormQuestions = new QEntityCollectionPath(
    this.withPrefix("ClientFormQuestions"),
    () => QClientFormQuestion
  );
}

export const qClientFormComponent = new QClientFormComponent();

export class QClientFormComponentId extends QId<ClientFormComponentId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}
