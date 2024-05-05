import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QRecordFile } from "../record_file/QRecordFile";
import { RecordFileRelationshipId } from "./RecordFileRelationship";

export class QRecordFileRelationship extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly RecordFileId = new QNumberPath(
    this.withPrefix("RecordFileId")
  );
  public readonly RelatedEntityType = new QStringPath(
    this.withPrefix("RelatedEntityType")
  );
  public readonly RelatedEntityId = new QNumberPath(
    this.withPrefix("RelatedEntityId")
  );
  public readonly Description = new QStringPath(this.withPrefix("Description"));
  public readonly RecordFile = new QEntityPath(
    this.withPrefix("RecordFile"),
    () => QRecordFile
  );
}

export const qRecordFileRelationship = new QRecordFileRelationship();

export class QRecordFileRelationshipId extends QId<RecordFileRelationshipId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}
