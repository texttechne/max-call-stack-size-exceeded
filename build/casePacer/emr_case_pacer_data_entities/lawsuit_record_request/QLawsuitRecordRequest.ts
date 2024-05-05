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
import { QLawsuit } from "../lawsuit/QLawsuit";
import { LawsuitRecordRequestId } from "./LawsuitRecordRequest";

export class QLawsuitRecordRequest extends QueryObject {
  public readonly LawsuitRecordRequestId = new QNumberPath(
    this.withPrefix("LawsuitRecordRequestId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly OrderNumber = new QStringPath(this.withPrefix("OrderNumber"));
  public readonly OrderContents = new QStringPath(
    this.withPrefix("OrderContents")
  );
  public readonly IsComplete = new QBooleanPath(this.withPrefix("IsComplete"));
  public readonly LastChecked = new QDateTimeOffsetPath(
    this.withPrefix("LastChecked")
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
}

export const qLawsuitRecordRequest = new QLawsuitRecordRequest();

export class QLawsuitRecordRequestId extends QId<LawsuitRecordRequestId> {
  private readonly params = [new QNumberParam("LawsuitRecordRequestId")];

  getParams() {
    return this.params;
  }
}
