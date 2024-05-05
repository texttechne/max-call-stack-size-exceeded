import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QBooleanPath,
  QDateTimeOffsetPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QRecord } from "../record/QRecord";
import { QTrial } from "../trial/QTrial";
import { TrialPleadingId } from "./TrialPleading";

export class QTrialPleading extends QueryObject {
  public readonly TrialPleadingID = new QNumberPath(
    this.withPrefix("TrialPleadingID")
  );
  public readonly TrialID = new QNumberPath(this.withPrefix("TrialID"));
  public readonly Item = new QStringPath(this.withPrefix("Item"));
  public readonly CompletedFlag = new QBooleanPath(
    this.withPrefix("CompletedFlag")
  );
  public readonly DueDate = new QDateTimeOffsetPath(this.withPrefix("DueDate"));
  public readonly RecordId = new QNumberPath(this.withPrefix("RecordId"));
  public readonly Record = new QEntityPath(
    this.withPrefix("Record"),
    () => QRecord
  );
  public readonly Trial = new QEntityPath(
    this.withPrefix("Trial"),
    () => QTrial
  );
}

export const qTrialPleading = new QTrialPleading();

export class QTrialPleadingId extends QId<TrialPleadingId> {
  private readonly params = [new QNumberParam("TrialPleadingID")];

  getParams() {
    return this.params;
  }
}
