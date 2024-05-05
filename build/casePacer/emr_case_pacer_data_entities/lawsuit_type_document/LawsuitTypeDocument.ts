import { DocumentTemplate } from "../document_template/DocumentTemplate";
import { LawsuitType } from "../lawsuit_type/LawsuitType";
import { RoleTemplate } from "../role_template/RoleTemplate";

export interface LawsuitTypeDocument {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitTypeDocumentId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  LawsuitTypeDocumentId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitTypeId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocumentTemplateId` |
   * | Type | `Edm.Int32` |
   */
  DocumentTemplateId: number | null;
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
   * | Name | `DocumentTemplate` |
   * | Type | `Emr.CasePacer.Data.Entities.DocumentTemplate` |
   */
  DocumentTemplate?: DocumentTemplate | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitType` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitType` |
   */
  LawsuitType?: LawsuitType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RoleTemplate` |
   * | Type | `Emr.CasePacer.Data.Entities.RoleTemplate` |
   */
  RoleTemplate?: RoleTemplate | null;
}

export type LawsuitTypeDocumentId = number | { LawsuitTypeDocumentId: number };

export interface EditableLawsuitTypeDocument
  extends Partial<
    Pick<
      LawsuitTypeDocument,
      "LawsuitTypeId" | "DocumentTemplateId" | "RoleTemplateId"
    >
  > {}
