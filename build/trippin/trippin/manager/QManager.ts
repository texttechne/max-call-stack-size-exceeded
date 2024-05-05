import {
  QNumberPath,
  QEntityPath,
  QEntityCollectionPath,
} from "@odata2ts/odata-query-objects";
import { QPerson } from "../person/QPerson";
import { QLocation } from "../location/QLocation";

export class QManager extends QPerson {
  public readonly Budget = new QNumberPath(this.withPrefix("Budget"));
  public readonly BossOffice = new QEntityPath(
    this.withPrefix("BossOffice"),
    () => QLocation
  );
  public readonly DirectReports = new QEntityCollectionPath(
    this.withPrefix("DirectReports"),
    () => QPerson
  );
}

export const qManager = new QManager();
