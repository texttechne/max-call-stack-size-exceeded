import {
  QueryObject,
  QNumberPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QDocumentTemplate } from "../document_template/QDocumentTemplate";
import { QLawsuitType } from "../lawsuit_type/QLawsuitType";
import { QRoleTemplate } from "../role_template/QRoleTemplate";
import { LawsuitTypeDocumentId } from "./LawsuitTypeDocument";

export class QLawsuitTypeDocument extends QueryObject {
  public readonly LawsuitTypeDocumentId = new QNumberPath(
    this.withPrefix("LawsuitTypeDocumentId")
  );
  public readonly LawsuitTypeId = new QNumberPath(
    this.withPrefix("LawsuitTypeId")
  );
  public readonly DocumentTemplateId = new QNumberPath(
    this.withPrefix("DocumentTemplateId")
  );
  public readonly RoleTemplateId = new QNumberPath(
    this.withPrefix("RoleTemplateId")
  );
  public readonly DocumentTemplate = new QEntityPath(
    this.withPrefix("DocumentTemplate"),
    () => QDocumentTemplate
  );
  public readonly LawsuitType = new QEntityPath(
    this.withPrefix("LawsuitType"),
    () => QLawsuitType
  );
  public readonly RoleTemplate = new QEntityPath(
    this.withPrefix("RoleTemplate"),
    () => QRoleTemplate
  );
}

export const qLawsuitTypeDocument = new QLawsuitTypeDocument();

export class QLawsuitTypeDocumentId extends QId<LawsuitTypeDocumentId> {
  private readonly params = [new QNumberParam("LawsuitTypeDocumentId")];

  getParams() {
    return this.params;
  }
}
