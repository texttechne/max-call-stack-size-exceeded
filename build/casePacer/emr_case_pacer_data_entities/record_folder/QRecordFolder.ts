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
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QRecordSubtype } from "../record_subtype/QRecordSubtype";
import { QRecordType } from "../record_type/QRecordType";
import { QRecordFile } from "../record_file/QRecordFile";
import { RecordFolderId } from "./RecordFolder";

export class QRecordFolder extends QueryObject {
  public readonly RecordFolderId = new QNumberPath(
    this.withPrefix("RecordFolderId")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly FolderPrefix = new QStringPath(
    this.withPrefix("FolderPrefix")
  );
  public readonly Name = new QStringPath(this.withPrefix("Name"));
  public readonly DefaultRecordSubtypeId = new QNumberPath(
    this.withPrefix("DefaultRecordSubtypeId")
  );
  public readonly DefaultRecordTypeId = new QNumberPath(
    this.withPrefix("DefaultRecordTypeId")
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly RecordSubtype = new QEntityPath(
    this.withPrefix("RecordSubtype"),
    () => QRecordSubtype
  );
  public readonly RecordType = new QEntityPath(
    this.withPrefix("RecordType"),
    () => QRecordType
  );
  public readonly RecordFiles = new QEntityCollectionPath(
    this.withPrefix("RecordFiles"),
    () => QRecordFile
  );
}

export const qRecordFolder = new QRecordFolder();

export class QRecordFolderId extends QId<RecordFolderId> {
  private readonly params = [new QNumberParam("RecordFolderId")];

  getParams() {
    return this.params;
  }
}
