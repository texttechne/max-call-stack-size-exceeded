import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QBooleanPath,
  QDateTimeOffsetPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { LawsuitClientFormId } from "./LawsuitClientForm";

export class QLawsuitClientForm extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly FormJson = new QStringPath(this.withPrefix("FormJson"));
  public readonly ClientFormId = new QNumberPath(
    this.withPrefix("ClientFormId")
  );
  public readonly SortOrder = new QNumberPath(this.withPrefix("SortOrder"));
  public readonly Submitted = new QBooleanPath(this.withPrefix("Submitted"));
  public readonly LastUpdated = new QDateTimeOffsetPath(
    this.withPrefix("LastUpdated")
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
}

export const qLawsuitClientForm = new QLawsuitClientForm();

export class QLawsuitClientFormId extends QId<LawsuitClientFormId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}
