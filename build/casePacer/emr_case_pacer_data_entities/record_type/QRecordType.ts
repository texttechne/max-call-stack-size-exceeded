import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QRecord } from "../record/QRecord";
import { QRecordFolder } from "../record_folder/QRecordFolder";
import { QRecordSubtype } from "../record_subtype/QRecordSubtype";
import { RecordTypeId } from "./RecordType";

export class QRecordType extends QueryObject {
  public readonly RecordTypeId = new QNumberPath(
    this.withPrefix("RecordTypeId")
  );
  public readonly RecordTypeName = new QStringPath(
    this.withPrefix("RecordTypeName")
  );
  public readonly Records = new QEntityCollectionPath(
    this.withPrefix("Records"),
    () => QRecord
  );
  public readonly RecordFolders = new QEntityCollectionPath(
    this.withPrefix("RecordFolders"),
    () => QRecordFolder
  );
  public readonly RecordSubtypes = new QEntityCollectionPath(
    this.withPrefix("RecordSubtypes"),
    () => QRecordSubtype
  );
}

export const qRecordType = new QRecordType();

export class QRecordTypeId extends QId<RecordTypeId> {
  private readonly params = [new QNumberParam("RecordTypeId")];

  getParams() {
    return this.params;
  }
}
