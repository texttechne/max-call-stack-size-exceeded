import { QStringPath } from "@odata2ts/odata-query-objects";
import { QLocation } from "../location/QLocation";

export class QEventLocation extends QLocation {
  public readonly BuildingInfo = new QStringPath(
    this.withPrefix("BuildingInfo")
  );
}

export const qEventLocation = new QEventLocation();
