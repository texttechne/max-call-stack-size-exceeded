import {
  QueryObject,
  QStringPath,
  QEntityPath,
} from "@odata2ts/odata-query-objects";
import { QCity } from "../city/QCity";

export class QLocation extends QueryObject {
  public readonly Address = new QStringPath(this.withPrefix("Address"));
  public readonly City = new QEntityPath(this.withPrefix("City"), () => QCity);
}

export const qLocation = new QLocation();
