import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QClientForm } from "../client_form/QClientForm";
import { QClientFormQuestion } from "../client_form_question/QClientFormQuestion";
import { ClientFormScreenId } from "./ClientFormScreen";

export class QClientFormScreen extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly ClientFormId = new QNumberPath(
    this.withPrefix("ClientFormId")
  );
  public readonly SortOrder = new QNumberPath(this.withPrefix("SortOrder"));
  public readonly Name = new QStringPath(this.withPrefix("Name"));
  public readonly ShowCriteriaJson = new QStringPath(
    this.withPrefix("ShowCriteriaJson")
  );
  public readonly ClientForm = new QEntityPath(
    this.withPrefix("ClientForm"),
    () => QClientForm
  );
  public readonly ClientFormQuestions = new QEntityCollectionPath(
    this.withPrefix("ClientFormQuestions"),
    () => QClientFormQuestion
  );
}

export const qClientFormScreen = new QClientFormScreen();

export class QClientFormScreenId extends QId<ClientFormScreenId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}
