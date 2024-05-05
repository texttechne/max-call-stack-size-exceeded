import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QFirm } from "../firm/QFirm";
import { QLawsuitPartyType } from "../lawsuit_party_type/QLawsuitPartyType";
import { QRecordFile } from "../record_file/QRecordFile";
import { QRoleTemplate } from "../role_template/QRoleTemplate";
import { QDocument } from "../document/QDocument";
import { QLawsuitTypeDocument } from "../lawsuit_type_document/QLawsuitTypeDocument";
import { QParty } from "../party/QParty";
import { DocumentTemplateId } from "./DocumentTemplate";

export class QDocumentTemplate extends QueryObject {
  public readonly DocumentTemplateID = new QNumberPath(
    this.withPrefix("DocumentTemplateID")
  );
  public readonly DocumentTemplateName = new QStringPath(
    this.withPrefix("DocumentTemplateName")
  );
  public readonly DocumentName = new QStringPath(
    this.withPrefix("DocumentName")
  );
  public readonly Phase = new QStringPath(this.withPrefix("Phase"));
  public readonly Description = new QStringPath(this.withPrefix("Description"));
  public readonly RecordFileId = new QNumberPath(
    this.withPrefix("RecordFileId")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly SystemTemplateID = new QNumberPath(
    this.withPrefix("SystemTemplateID")
  );
  public readonly RoleTemplateId = new QNumberPath(
    this.withPrefix("RoleTemplateId")
  );
  public readonly RecipientLawsuitPartyTypeId = new QNumberPath(
    this.withPrefix("RecipientLawsuitPartyTypeId")
  );
  public readonly RecipientInsuranceTypeId = new QNumberPath(
    this.withPrefix("RecipientInsuranceTypeId")
  );
  public readonly SystemDocumentTemplate = new QEntityPath(
    this.withPrefix("SystemDocumentTemplate"),
    () => QDocumentTemplate
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly RecipientLawsuitPartyType = new QEntityPath(
    this.withPrefix("RecipientLawsuitPartyType"),
    () => QLawsuitPartyType
  );
  public readonly RecordFile = new QEntityPath(
    this.withPrefix("RecordFile"),
    () => QRecordFile
  );
  public readonly RoleTemplate = new QEntityPath(
    this.withPrefix("RoleTemplate"),
    () => QRoleTemplate
  );
  public readonly Documents = new QEntityCollectionPath(
    this.withPrefix("Documents"),
    () => QDocument
  );
  public readonly DocumentTemplatesFromSystemTemplate =
    new QEntityCollectionPath(
      this.withPrefix("DocumentTemplatesFromSystemTemplate"),
      () => QDocumentTemplate
    );
  public readonly LawsuitTypeDocuments = new QEntityCollectionPath(
    this.withPrefix("LawsuitTypeDocuments"),
    () => QLawsuitTypeDocument
  );
  public readonly Parties = new QEntityCollectionPath(
    this.withPrefix("Parties"),
    () => QParty
  );
}

export const qDocumentTemplate = new QDocumentTemplate();

export class QDocumentTemplateId extends QId<DocumentTemplateId> {
  private readonly params = [new QNumberParam("DocumentTemplateID")];

  getParams() {
    return this.params;
  }
}
