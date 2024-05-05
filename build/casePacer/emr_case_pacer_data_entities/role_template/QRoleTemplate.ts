import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QCasePacerUser } from "../case_pacer_user/QCasePacerUser";
import { QFirm } from "../firm/QFirm";
import { QLawsuitType } from "../lawsuit_type/QLawsuitType";
import { QDocumentTemplate } from "../document_template/QDocumentTemplate";
import { QLawsuitRole } from "../lawsuit_role/QLawsuitRole";
import { QLawsuitTypeDocument } from "../lawsuit_type_document/QLawsuitTypeDocument";
import { QLawsuitTypeTickler } from "../lawsuit_type_tickler/QLawsuitTypeTickler";
import { QTicklerTemplate } from "../tickler_template/QTicklerTemplate";
import { RoleTemplateId } from "./RoleTemplate";

export class QRoleTemplate extends QueryObject {
  public readonly RoleTemplateId = new QNumberPath(
    this.withPrefix("RoleTemplateId")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly RoleDescription = new QStringPath(
    this.withPrefix("RoleDescription")
  );
  public readonly LawsuitTypeId = new QNumberPath(
    this.withPrefix("LawsuitTypeId")
  );
  public readonly DefaultPartyId = new QNumberPath(
    this.withPrefix("DefaultPartyId")
  );
  public readonly CasePacerUser = new QEntityPath(
    this.withPrefix("CasePacerUser"),
    () => QCasePacerUser
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly LawsuitType = new QEntityPath(
    this.withPrefix("LawsuitType"),
    () => QLawsuitType
  );
  public readonly DocumentTemplates = new QEntityCollectionPath(
    this.withPrefix("DocumentTemplates"),
    () => QDocumentTemplate
  );
  public readonly LawsuitRoles = new QEntityCollectionPath(
    this.withPrefix("LawsuitRoles"),
    () => QLawsuitRole
  );
  public readonly LawsuitTypeDocuments = new QEntityCollectionPath(
    this.withPrefix("LawsuitTypeDocuments"),
    () => QLawsuitTypeDocument
  );
  public readonly LawsuitTypeTicklers = new QEntityCollectionPath(
    this.withPrefix("LawsuitTypeTicklers"),
    () => QLawsuitTypeTickler
  );
  public readonly TicklerTemplates = new QEntityCollectionPath(
    this.withPrefix("TicklerTemplates"),
    () => QTicklerTemplate
  );
}

export const qRoleTemplate = new QRoleTemplate();

export class QRoleTemplateId extends QId<RoleTemplateId> {
  private readonly params = [new QNumberParam("RoleTemplateId")];

  getParams() {
    return this.params;
  }
}
