import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QClientFormComponent } from "../client_form_component/QClientFormComponent";
import { QClientFormScreen } from "../client_form_screen/QClientFormScreen";
import { ClientFormQuestionId } from "./ClientFormQuestion";

export class QClientFormQuestion extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly ClientFormScreenId = new QNumberPath(
    this.withPrefix("ClientFormScreenId")
  );
  public readonly RelatedEntity = new QStringPath(
    this.withPrefix("RelatedEntity")
  );
  public readonly ComponentId = new QNumberPath(this.withPrefix("ComponentId"));
  public readonly SortOrder = new QNumberPath(this.withPrefix("SortOrder"));
  public readonly Question = new QStringPath(this.withPrefix("Question"));
  public readonly ShowCriteriaJson = new QStringPath(
    this.withPrefix("ShowCriteriaJson")
  );
  public readonly HelperDataJson = new QStringPath(
    this.withPrefix("HelperDataJson")
  );
  public readonly ClientFormComponent = new QEntityPath(
    this.withPrefix("ClientFormComponent"),
    () => QClientFormComponent
  );
  public readonly ClientFormScreen = new QEntityPath(
    this.withPrefix("ClientFormScreen"),
    () => QClientFormScreen
  );
}

export const qClientFormQuestion = new QClientFormQuestion();

export class QClientFormQuestionId extends QId<ClientFormQuestionId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}
