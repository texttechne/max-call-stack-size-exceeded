import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QBooleanPath,
  QCollectionPath,
  QStringCollection,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QFirmCustomField } from "../firm_custom_field/QFirmCustomField";
import { QCustomField } from "../custom_field/QCustomField";
import { QCustomFieldValue } from "../custom_field_value/QCustomFieldValue";
import { QCustomFieldType } from "../custom_field_type/QCustomFieldType";
import { CustomAttributeId } from "./CustomAttribute";

export class QCustomAttribute extends QueryObject {
  public readonly id = new QNumberPath(this.withPrefix("id"));
  public readonly SortOrder = new QNumberPath(this.withPrefix("SortOrder"));
  public readonly Group = new QStringPath(this.withPrefix("Group"));
  public readonly Name = new QStringPath(this.withPrefix("Name"));
  public readonly Type = new QStringPath(this.withPrefix("Type"));
  public readonly ValueCol = new QStringPath(this.withPrefix("ValueCol"));
  public readonly IntakeField = new QBooleanPath(
    this.withPrefix("IntakeField")
  );
  public readonly CustomFieldHelperData = new QStringPath(
    this.withPrefix("CustomFieldHelperData")
  );
  public readonly DropDownSimple = new QCollectionPath(
    this.withPrefix("DropDownSimple"),
    () => QStringCollection
  );
  public readonly FormValue = new QStringPath(this.withPrefix("FormValue"));
  public readonly firmCustomField = new QEntityPath(
    this.withPrefix("firmCustomField"),
    () => QFirmCustomField
  );
  public readonly customField = new QEntityPath(
    this.withPrefix("customField"),
    () => QCustomField
  );
  public readonly customFieldValue = new QEntityPath(
    this.withPrefix("customFieldValue"),
    () => QCustomFieldValue
  );
  public readonly customFieldType = new QEntityPath(
    this.withPrefix("customFieldType"),
    () => QCustomFieldType
  );
}

export const qCustomAttribute = new QCustomAttribute();

export class QCustomAttributeId extends QId<CustomAttributeId> {
  private readonly params = [new QNumberParam("id")];

  getParams() {
    return this.params;
  }
}
