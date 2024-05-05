import { CasePacerUser } from "../case_pacer_user/CasePacerUser";
import { Firm } from "../firm/Firm";
import { LawsuitType } from "../lawsuit_type/LawsuitType";
import { DocumentTemplate } from "../document_template/DocumentTemplate";
import { LawsuitRole } from "../lawsuit_role/LawsuitRole";
import { LawsuitTypeDocument } from "../lawsuit_type_document/LawsuitTypeDocument";
import { LawsuitTypeTickler } from "../lawsuit_type_tickler/LawsuitTypeTickler";
import { TicklerTemplate } from "../tickler_template/TicklerTemplate";

export interface RoleTemplate {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RoleTemplateId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  RoleTemplateId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  FirmId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RoleDescription` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  RoleDescription: string;
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
   * | Name | `DefaultPartyId` |
   * | Type | `Edm.Int32` |
   */
  DefaultPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUser` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  CasePacerUser?: CasePacerUser | null;
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
   * | Name | `LawsuitType` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitType` |
   */
  LawsuitType?: LawsuitType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocumentTemplates` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.DocumentTemplate)` |
   */
  DocumentTemplates?: Array<DocumentTemplate>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitRoles` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitRole)` |
   */
  LawsuitRoles?: Array<LawsuitRole>;
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
   * | Name | `LawsuitTypeTicklers` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitTypeTickler)` |
   */
  LawsuitTypeTicklers?: Array<LawsuitTypeTickler>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerTemplates` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TicklerTemplate)` |
   */
  TicklerTemplates?: Array<TicklerTemplate>;
}

export type RoleTemplateId = number | { RoleTemplateId: number };

export interface EditableRoleTemplate
  extends Pick<RoleTemplate, "FirmId" | "RoleDescription">,
    Partial<Pick<RoleTemplate, "LawsuitTypeId" | "DefaultPartyId">> {}
