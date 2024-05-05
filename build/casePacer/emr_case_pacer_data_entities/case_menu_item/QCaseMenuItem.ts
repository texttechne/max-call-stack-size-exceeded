import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QCaseMenuGroup } from "../case_menu_group/QCaseMenuGroup";
import { QCaseMenuTab } from "../case_menu_tab/QCaseMenuTab";
import { QFirm } from "../firm/QFirm";
import { QLawsuitType } from "../lawsuit_type/QLawsuitType";
import { CaseMenuItemId } from "./CaseMenuItem";

export class QCaseMenuItem extends QueryObject {
  public readonly CaseMenuItemId = new QNumberPath(
    this.withPrefix("CaseMenuItemId")
  );
  public readonly LawsuitTypeId = new QNumberPath(
    this.withPrefix("LawsuitTypeId")
  );
  public readonly CaseMenuGroupId = new QNumberPath(
    this.withPrefix("CaseMenuGroupId")
  );
  public readonly CaseMenuTabId = new QNumberPath(
    this.withPrefix("CaseMenuTabId")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly SortOrder = new QNumberPath(this.withPrefix("SortOrder"));
  public readonly AlternateTabName = new QStringPath(
    this.withPrefix("AlternateTabName")
  );
  public readonly AlternateGroupName = new QStringPath(
    this.withPrefix("AlternateGroupName")
  );
  public readonly CaseMenuGroup = new QEntityPath(
    this.withPrefix("CaseMenuGroup"),
    () => QCaseMenuGroup
  );
  public readonly CaseMenuTab = new QEntityPath(
    this.withPrefix("CaseMenuTab"),
    () => QCaseMenuTab
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly LawsuitType = new QEntityPath(
    this.withPrefix("LawsuitType"),
    () => QLawsuitType
  );
}

export const qCaseMenuItem = new QCaseMenuItem();

export class QCaseMenuItemId extends QId<CaseMenuItemId> {
  private readonly params = [new QNumberParam("CaseMenuItemId")];

  getParams() {
    return this.params;
  }
}
