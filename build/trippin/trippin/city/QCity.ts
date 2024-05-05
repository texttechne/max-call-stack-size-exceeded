import { QueryObject, QStringPath } from "@odata2ts/odata-query-objects";

export class QCity extends QueryObject {
  public readonly Name = new QStringPath(this.withPrefix("Name"));
  public readonly CountryRegion = new QStringPath(
    this.withPrefix("CountryRegion")
  );
  public readonly Region = new QStringPath(this.withPrefix("Region"));
}

export const qCity = new QCity();
