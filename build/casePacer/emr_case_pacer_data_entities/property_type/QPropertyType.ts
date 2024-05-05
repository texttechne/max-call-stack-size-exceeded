import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QPropertyDamage } from "../property_damage/QPropertyDamage";
import { PropertyTypeId } from "./PropertyType";

export class QPropertyType extends QueryObject {
  public readonly PropertyTypeId = new QNumberPath(
    this.withPrefix("PropertyTypeId")
  );
  public readonly PropertyTypeName = new QStringPath(
    this.withPrefix("PropertyTypeName")
  );
  public readonly PropertyDamages = new QEntityCollectionPath(
    this.withPrefix("PropertyDamages"),
    () => QPropertyDamage
  );
}

export const qPropertyType = new QPropertyType();

export class QPropertyTypeId extends QId<PropertyTypeId> {
  private readonly params = [new QNumberParam("PropertyTypeId")];

  getParams() {
    return this.params;
  }
}
