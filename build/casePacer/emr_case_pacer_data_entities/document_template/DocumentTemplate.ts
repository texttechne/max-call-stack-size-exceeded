import { Firm } from "../firm/Firm";
import { LawsuitPartyType } from "../lawsuit_party_type/LawsuitPartyType";
import { RecordFile } from "../record_file/RecordFile";
import { RoleTemplate } from "../role_template/RoleTemplate";
import { Document } from "../document/Document";
import { LawsuitTypeDocument } from "../lawsuit_type_document/LawsuitTypeDocument";
import { Party } from "../party/Party";

export interface DocumentTemplate {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocumentTemplateID` |
   * | Type | `Edm.Int32` |
   */
  DocumentTemplateID: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocumentTemplateName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  DocumentTemplateName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocumentName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  DocumentName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Phase` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Phase: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Description` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Description: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordFileId` |
   * | Type | `Edm.Int32` |
   */
  RecordFileId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   */
  FirmId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SystemTemplateID` |
   * | Type | `Edm.Int32` |
   */
  SystemTemplateID: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RoleTemplateId` |
   * | Type | `Edm.Int32` |
   */
  RoleTemplateId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecipientLawsuitPartyTypeId` |
   * | Type | `Edm.Int32` |
   */
  RecipientLawsuitPartyTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecipientInsuranceTypeId` |
   * | Type | `Edm.Int32` |
   */
  RecipientInsuranceTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SystemDocumentTemplate` |
   * | Type | `Emr.CasePacer.Data.Entities.DocumentTemplate` |
   */
  SystemDocumentTemplate?: DocumentTemplate | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecipientLawsuitPartyType` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitPartyType` |
   */
  RecipientLawsuitPartyType?: LawsuitPartyType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordFile` |
   * | Type | `Emr.CasePacer.Data.Entities.RecordFile` |
   */
  RecordFile?: RecordFile | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RoleTemplate` |
   * | Type | `Emr.CasePacer.Data.Entities.RoleTemplate` |
   */
  RoleTemplate?: RoleTemplate | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Documents` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Document)` |
   */
  Documents?: Array<Document>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocumentTemplatesFromSystemTemplate` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.DocumentTemplate)` |
   */
  DocumentTemplatesFromSystemTemplate?: Array<DocumentTemplate>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitTypeDocuments` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitTypeDocument)` |
   */
  LawsuitTypeDocuments?: Array<LawsuitTypeDocument>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Parties` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Party)` |
   */
  Parties?: Array<Party>;
}

export type DocumentTemplateId = number | { DocumentTemplateID: number | null };

export interface EditableDocumentTemplate
  extends Pick<
      DocumentTemplate,
      "DocumentTemplateName" | "DocumentName" | "Phase" | "Description"
    >,
    Partial<
      Pick<
        DocumentTemplate,
        | "RecordFileId"
        | "FirmId"
        | "SystemTemplateID"
        | "RoleTemplateId"
        | "RecipientLawsuitPartyTypeId"
        | "RecipientInsuranceTypeId"
      >
    > {}
