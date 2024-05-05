import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QClientFormStatus } from "../client_form_status/QClientFormStatus";
import { QFirm } from "../firm/QFirm";
import { QClientFormScreen } from "../client_form_screen/QClientFormScreen";
import { QLawsuitTypeClientForm } from "../lawsuit_type_client_form/QLawsuitTypeClientForm";
import { ClientFormId } from "./ClientForm";

export class QClientForm extends QueryObject {
  public readonly _QuestionCount = new QNumberPath(
    this.withPrefix("_QuestionCount")
  );
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly Name = new QStringPath(this.withPrefix("Name"));
  public readonly ShowCriteriaJson = new QStringPath(
    this.withPrefix("ShowCriteriaJson")
  );
  public readonly ClientFormStatusId = new QNumberPath(
    this.withPrefix("ClientFormStatusId")
  );
  public readonly ClientFormStatus = new QEntityPath(
    this.withPrefix("ClientFormStatus"),
    () => QClientFormStatus
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly ClientFormScreens = new QEntityCollectionPath(
    this.withPrefix("ClientFormScreens"),
    () => QClientFormScreen
  );
  public readonly LawsuitTypeClientForms = new QEntityCollectionPath(
    this.withPrefix("LawsuitTypeClientForms"),
    () => QLawsuitTypeClientForm
  );
}

export const qClientForm = new QClientForm();

export class QClientFormId extends QId<ClientFormId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}
