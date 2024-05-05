import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QHearing } from "../hearing/QHearing";
import { HearingTypeId } from "./HearingType";

export class QHearingType extends QueryObject {
  public readonly HearingTypeId = new QNumberPath(
    this.withPrefix("HearingTypeId")
  );
  public readonly HearingTypeName = new QStringPath(
    this.withPrefix("HearingTypeName")
  );
  public readonly HearingTypeRole = new QStringPath(
    this.withPrefix("HearingTypeRole")
  );
  public readonly Hearings = new QEntityCollectionPath(
    this.withPrefix("Hearings"),
    () => QHearing
  );
}

export const qHearingType = new QHearingType();

export class QHearingTypeId extends QId<HearingTypeId> {
  private readonly params = [new QNumberParam("HearingTypeId")];

  getParams() {
    return this.params;
  }
}
