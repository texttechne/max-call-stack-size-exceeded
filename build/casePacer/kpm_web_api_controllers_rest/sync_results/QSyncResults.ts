import {
  QueryObject,
  QStringPath,
  QDateTimeOffsetPath,
  QBooleanPath,
  QNumberPath,
  QCollectionPath,
  QNumberCollection,
} from "@odata2ts/odata-query-objects";

export class QSyncResults extends QueryObject {
  public readonly Description = new QStringPath(this.withPrefix("Description"));
  public readonly StartDate = new QDateTimeOffsetPath(
    this.withPrefix("StartDate")
  );
  public readonly EndDate = new QDateTimeOffsetPath(this.withPrefix("EndDate"));
  public readonly MoreEntries = new QBooleanPath(
    this.withPrefix("MoreEntries")
  );
  public readonly NextStartSyncId = new QNumberPath(
    this.withPrefix("NextStartSyncId")
  );
  public readonly PartyIds = new QCollectionPath(
    this.withPrefix("PartyIds"),
    () => QNumberCollection
  );
}

export const qSyncResults = new QSyncResults();
