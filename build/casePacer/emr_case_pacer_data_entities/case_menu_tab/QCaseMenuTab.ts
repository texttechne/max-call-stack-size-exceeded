import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QCaseMenuItem } from "../case_menu_item/QCaseMenuItem";
import { QRecordSubtype } from "../record_subtype/QRecordSubtype";
import { CaseMenuTabId } from "./CaseMenuTab";

export class QCaseMenuTab extends QueryObject {
  public readonly CaseMenuTabId = new QNumberPath(
    this.withPrefix("CaseMenuTabId")
  );
  public readonly Name = new QStringPath(this.withPrefix("Name"));
  public readonly Controller = new QStringPath(this.withPrefix("Controller"));
  public readonly ActionResult = new QStringPath(
    this.withPrefix("ActionResult")
  );
  public readonly DOM_Id = new QStringPath(this.withPrefix("DOM_Id"));
  public readonly CaseMenuItems = new QEntityCollectionPath(
    this.withPrefix("CaseMenuItems"),
    () => QCaseMenuItem
  );
  public readonly RecordSubtypes = new QEntityCollectionPath(
    this.withPrefix("RecordSubtypes"),
    () => QRecordSubtype
  );
}

export const qCaseMenuTab = new QCaseMenuTab();

export class QCaseMenuTabId extends QId<CaseMenuTabId> {
  private readonly params = [new QNumberParam("CaseMenuTabId")];

  getParams() {
    return this.params;
  }
}
