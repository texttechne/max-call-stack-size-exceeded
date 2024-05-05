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
import { QCaseMenuTab } from "../case_menu_tab/QCaseMenuTab";
import { QRecordType } from "../record_type/QRecordType";
import { QRecord } from "../record/QRecord";
import { QRecordFolder } from "../record_folder/QRecordFolder";
import { RecordSubtypeId } from "./RecordSubtype";

export class QRecordSubtype extends QueryObject {
  public readonly RecordSubtypeId = new QNumberPath(
    this.withPrefix("RecordSubtypeId")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly SubtypeName = new QStringPath(this.withPrefix("SubtypeName"));
  public readonly RecordTypeId = new QNumberPath(
    this.withPrefix("RecordTypeId")
  );
  public readonly CaseMenuTabId = new QNumberPath(
    this.withPrefix("CaseMenuTabId")
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly CaseMenuTab = new QEntityPath(
    this.withPrefix("CaseMenuTab"),
    () => QCaseMenuTab
  );
  public readonly RecordType = new QEntityPath(
    this.withPrefix("RecordType"),
    () => QRecordType
  );
  public readonly Records = new QEntityCollectionPath(
    this.withPrefix("Records"),
    () => QRecord
  );
  public readonly RecordFolders = new QEntityCollectionPath(
    this.withPrefix("RecordFolders"),
    () => QRecordFolder
  );
}

export const qRecordSubtype = new QRecordSubtype();

export class QRecordSubtypeId extends QId<RecordSubtypeId> {
  private readonly params = [new QNumberParam("RecordSubtypeId")];

  getParams() {
    return this.params;
  }
}
