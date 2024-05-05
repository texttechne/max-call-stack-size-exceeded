import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QClientForm } from "../client_form/QClientForm";
import { ClientFormStatusId } from "./ClientFormStatus";

export class QClientFormStatus extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly Name = new QStringPath(this.withPrefix("Name"));
  public readonly ClientForms = new QEntityCollectionPath(
    this.withPrefix("ClientForms"),
    () => QClientForm
  );
}

export const qClientFormStatus = new QClientFormStatus();

export class QClientFormStatusId extends QId<ClientFormStatusId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}
