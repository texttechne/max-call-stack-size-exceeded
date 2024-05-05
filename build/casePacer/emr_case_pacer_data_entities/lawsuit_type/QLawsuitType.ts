import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QBooleanPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QFirm } from "../firm/QFirm";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QCaseMenuItem } from "../case_menu_item/QCaseMenuItem";
import { QCPDirectCaseProgress } from "../cp_direct_case_progress/QCPDirectCaseProgress";
import { QCustomField } from "../custom_field/QCustomField";
import { QAccountingSyncGL } from "../accounting_sync_gl/QAccountingSyncGL";
import { QLawsuitTypeClientForm } from "../lawsuit_type_client_form/QLawsuitTypeClientForm";
import { QLawsuitTypeDocument } from "../lawsuit_type_document/QLawsuitTypeDocument";
import { QLawsuitTypeTickler } from "../lawsuit_type_tickler/QLawsuitTypeTickler";
import { QRoleTemplate } from "../role_template/QRoleTemplate";
import { QSubPhaseType } from "../sub_phase_type/QSubPhaseType";
import { LawsuitTypeId } from "./LawsuitType";

export class QLawsuitType extends QueryObject {
  public readonly LawsuitTypeId = new QNumberPath(
    this.withPrefix("LawsuitTypeId")
  );
  public readonly LawsuitTypeName = new QStringPath(
    this.withPrefix("LawsuitTypeName")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly DocMgmtFeePerCase = new QNumberPath(
    this.withPrefix("DocMgmtFeePerCase")
  );
  public readonly TicklersOn = new QBooleanPath(this.withPrefix("TicklersOn"));
  public readonly AccidentFieldsOn = new QBooleanPath(
    this.withPrefix("AccidentFieldsOn")
  );
  public readonly MasterLawsuitId = new QNumberPath(
    this.withPrefix("MasterLawsuitId")
  );
  public readonly ChildLawsuitTypeId = new QNumberPath(
    this.withPrefix("ChildLawsuitTypeId")
  );
  public readonly SystemTemplateId = new QNumberPath(
    this.withPrefix("SystemTemplateId")
  );
  public readonly DocMgmtFeeCasePacerCut = new QNumberPath(
    this.withPrefix("DocMgmtFeeCasePacerCut")
  );
  public readonly MinFee = new QNumberPath(this.withPrefix("MinFee"));
  public readonly MaxFee = new QNumberPath(this.withPrefix("MaxFee"));
  public readonly ClosingFee = new QNumberPath(this.withPrefix("ClosingFee"));
  public readonly MonthlyFee = new QNumberPath(this.withPrefix("MonthlyFee"));
  public readonly DeferredMonths = new QNumberPath(
    this.withPrefix("DeferredMonths")
  );
  public readonly BillingType = new QStringPath(this.withPrefix("BillingType"));
  public readonly CPDMessageEnabled = new QBooleanPath(
    this.withPrefix("CPDMessageEnabled")
  );
  public readonly SettingsJson = new QStringPath(
    this.withPrefix("SettingsJson")
  );
  public readonly ChildLawsuitType = new QEntityPath(
    this.withPrefix("ChildLawsuitType"),
    () => QLawsuitType
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly MasterLawsuit = new QEntityPath(
    this.withPrefix("MasterLawsuit"),
    () => QLawsuit
  );
  public readonly GlobalLawsuitType = new QEntityPath(
    this.withPrefix("GlobalLawsuitType"),
    () => QLawsuitType
  );
  public readonly CaseMenuItems = new QEntityCollectionPath(
    this.withPrefix("CaseMenuItems"),
    () => QCaseMenuItem
  );
  public readonly CPDirectCaseProgresses = new QEntityCollectionPath(
    this.withPrefix("CPDirectCaseProgresses"),
    () => QCPDirectCaseProgress
  );
  public readonly CustomFields = new QEntityCollectionPath(
    this.withPrefix("CustomFields"),
    () => QCustomField
  );
  public readonly Lawsuits = new QEntityCollectionPath(
    this.withPrefix("Lawsuits"),
    () => QLawsuit
  );
  public readonly AccountingSyncGL = new QEntityPath(
    this.withPrefix("AccountingSyncGL"),
    () => QAccountingSyncGL
  );
  public readonly MasterLawsuitTypes = new QEntityCollectionPath(
    this.withPrefix("MasterLawsuitTypes"),
    () => QLawsuitType
  );
  public readonly GlobalLawsuitTypeLawsuitTypes = new QEntityCollectionPath(
    this.withPrefix("GlobalLawsuitTypeLawsuitTypes"),
    () => QLawsuitType
  );
  public readonly LawsuitTypeClientForms = new QEntityCollectionPath(
    this.withPrefix("LawsuitTypeClientForms"),
    () => QLawsuitTypeClientForm
  );
  public readonly LawsuitTypeDocuments = new QEntityCollectionPath(
    this.withPrefix("LawsuitTypeDocuments"),
    () => QLawsuitTypeDocument
  );
  public readonly LawsuitTypeTicklers = new QEntityCollectionPath(
    this.withPrefix("LawsuitTypeTicklers"),
    () => QLawsuitTypeTickler
  );
  public readonly RoleTemplates = new QEntityCollectionPath(
    this.withPrefix("RoleTemplates"),
    () => QRoleTemplate
  );
  public readonly SubPhaseTypes = new QEntityCollectionPath(
    this.withPrefix("SubPhaseTypes"),
    () => QSubPhaseType
  );
}

export const qLawsuitType = new QLawsuitType();

export class QLawsuitTypeId extends QId<LawsuitTypeId> {
  private readonly params = [new QNumberParam("LawsuitTypeId")];

  getParams() {
    return this.params;
  }
}
