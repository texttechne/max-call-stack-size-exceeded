import {
  QueryObject,
  QNumberPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QClientForm } from "../client_form/QClientForm";
import { QLawsuitType } from "../lawsuit_type/QLawsuitType";
import { LawsuitTypeClientFormId } from "./LawsuitTypeClientForm";

export class QLawsuitTypeClientForm extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly LawsuitTypeId = new QNumberPath(
    this.withPrefix("LawsuitTypeId")
  );
  public readonly ClientFormId = new QNumberPath(
    this.withPrefix("ClientFormId")
  );
  public readonly SortOrder = new QNumberPath(this.withPrefix("SortOrder"));
  public readonly ClientForm = new QEntityPath(
    this.withPrefix("ClientForm"),
    () => QClientForm
  );
  public readonly LawsuitType = new QEntityPath(
    this.withPrefix("LawsuitType"),
    () => QLawsuitType
  );
}

export const qLawsuitTypeClientForm = new QLawsuitTypeClientForm();

export class QLawsuitTypeClientFormId extends QId<LawsuitTypeClientFormId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}
