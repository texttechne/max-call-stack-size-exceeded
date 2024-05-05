import { QEntityPath, QStringPath } from "@odata2ts/odata-query-objects";
import { QPlanItem } from "../plan_item/QPlanItem";
import { QEventLocation } from "../event_location/QEventLocation";

export class QEvent extends QPlanItem {
  public readonly OccursAt = new QEntityPath(
    this.withPrefix("OccursAt"),
    () => QEventLocation
  );
  public readonly Description = new QStringPath(this.withPrefix("Description"));
}

export const qEvent = new QEvent();
