import { Firm } from "../firm/Firm";
import { Lawsuit } from "../lawsuit/Lawsuit";
import { CaseMenuItem } from "../case_menu_item/CaseMenuItem";
import { CPDirectCaseProgress } from "../cp_direct_case_progress/CPDirectCaseProgress";
import { CustomField } from "../custom_field/CustomField";
import { AccountingSyncGL } from "../accounting_sync_gl/AccountingSyncGL";
import { LawsuitTypeClientForm } from "../lawsuit_type_client_form/LawsuitTypeClientForm";
import { LawsuitTypeDocument } from "../lawsuit_type_document/LawsuitTypeDocument";
import { LawsuitTypeTickler } from "../lawsuit_type_tickler/LawsuitTypeTickler";
import { RoleTemplate } from "../role_template/RoleTemplate";
import { SubPhaseType } from "../sub_phase_type/SubPhaseType";

export interface LawsuitType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
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
   * | Name | `LawsuitTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  LawsuitTypeName: string;
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
   * | Name | `DocMgmtFeePerCase` |
   * | Type | `Edm.Decimal` |
   */
  DocMgmtFeePerCase: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklersOn` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  TicklersOn: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AccidentFieldsOn` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  AccidentFieldsOn: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MasterLawsuitId` |
   * | Type | `Edm.Int32` |
   */
  MasterLawsuitId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ChildLawsuitTypeId` |
   * | Type | `Edm.Int32` |
   */
  ChildLawsuitTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SystemTemplateId` |
   * | Type | `Edm.Int32` |
   */
  SystemTemplateId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocMgmtFeeCasePacerCut` |
   * | Type | `Edm.Decimal` |
   */
  DocMgmtFeeCasePacerCut: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MinFee` |
   * | Type | `Edm.Int32` |
   */
  MinFee: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MaxFee` |
   * | Type | `Edm.Int32` |
   */
  MaxFee: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClosingFee` |
   * | Type | `Edm.Int32` |
   */
  ClosingFee: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MonthlyFee` |
   * | Type | `Edm.Int32` |
   */
  MonthlyFee: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeferredMonths` |
   * | Type | `Edm.Int32` |
   */
  DeferredMonths: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BillingType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  BillingType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDMessageEnabled` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  CPDMessageEnabled: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettingsJson` |
   * | Type | `Edm.String` |
   */
  SettingsJson: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ChildLawsuitType` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitType` |
   */
  ChildLawsuitType?: LawsuitType | null;
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
   * | Name | `MasterLawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  MasterLawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GlobalLawsuitType` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitType` |
   */
  GlobalLawsuitType?: LawsuitType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CaseMenuItems` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CaseMenuItem)` |
   */
  CaseMenuItems?: Array<CaseMenuItem>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectCaseProgresses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CPDirectCaseProgress)` |
   */
  CPDirectCaseProgresses?: Array<CPDirectCaseProgress>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustomFields` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CustomField)` |
   */
  CustomFields?: Array<CustomField>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Lawsuit)` |
   */
  Lawsuits?: Array<Lawsuit>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AccountingSyncGL` |
   * | Type | `Emr.CasePacer.Data.Entities.AccountingSyncGL` |
   */
  AccountingSyncGL?: AccountingSyncGL | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MasterLawsuitTypes` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitType)` |
   */
  MasterLawsuitTypes?: Array<LawsuitType>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GlobalLawsuitTypeLawsuitTypes` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitType)` |
   */
  GlobalLawsuitTypeLawsuitTypes?: Array<LawsuitType>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitTypeClientForms` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitTypeClientForm)` |
   */
  LawsuitTypeClientForms?: Array<LawsuitTypeClientForm>;
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
   * | Name | `RoleTemplates` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.RoleTemplate)` |
   */
  RoleTemplates?: Array<RoleTemplate>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SubPhaseTypes` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SubPhaseType)` |
   */
  SubPhaseTypes?: Array<SubPhaseType>;
}

export type LawsuitTypeId = number | { LawsuitTypeId: number | null };

export interface EditableLawsuitType
  extends Pick<
      LawsuitType,
      | "LawsuitTypeName"
      | "TicklersOn"
      | "AccidentFieldsOn"
      | "BillingType"
      | "CPDMessageEnabled"
    >,
    Partial<
      Pick<
        LawsuitType,
        | "FirmId"
        | "DocMgmtFeePerCase"
        | "MasterLawsuitId"
        | "ChildLawsuitTypeId"
        | "SystemTemplateId"
        | "DocMgmtFeeCasePacerCut"
        | "MinFee"
        | "MaxFee"
        | "ClosingFee"
        | "MonthlyFee"
        | "DeferredMonths"
        | "SettingsJson"
      >
    > {}
