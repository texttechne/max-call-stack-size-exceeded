import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QCaseMenuItem } from "../case_menu_item/QCaseMenuItem";
import { CaseMenuGroupId } from "./CaseMenuGroup";

export class QCaseMenuGroup extends QueryObject {
  public readonly CaseMenuGroupId = new QNumberPath(
    this.withPrefix("CaseMenuGroupId")
  );
  public readonly Name = new QStringPath(this.withPrefix("Name"));
  public readonly CaseMenuItems = new QEntityCollectionPath(
    this.withPrefix("CaseMenuItems"),
    () => QCaseMenuItem
  );
}

export const qCaseMenuGroup = new QCaseMenuGroup();

export class QCaseMenuGroupId extends QId<CaseMenuGroupId> {
  private readonly params = [new QNumberParam("CaseMenuGroupId")];

  getParams() {
    return this.params;
  }
}
