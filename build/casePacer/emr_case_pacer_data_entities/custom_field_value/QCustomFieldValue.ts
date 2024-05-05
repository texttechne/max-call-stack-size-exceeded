import {
  QueryObject,
  QNumberPath,
  QBooleanPath,
  QDateTimeOffsetPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QCustomField } from "../custom_field/QCustomField";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { CustomFieldValueId } from "./CustomFieldValue";

export class QCustomFieldValue extends QueryObject {
  public readonly CustomFieldValueId = new QNumberPath(
    this.withPrefix("CustomFieldValueId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly CustomFieldId = new QNumberPath(
    this.withPrefix("CustomFieldId")
  );
  public readonly BoolVal = new QBooleanPath(this.withPrefix("BoolVal"));
  public readonly DateTimeVal = new QDateTimeOffsetPath(
    this.withPrefix("DateTimeVal")
  );
  public readonly DecimalVal = new QNumberPath(this.withPrefix("DecimalVal"));
  public readonly StringVal = new QStringPath(this.withPrefix("StringVal"));
  public readonly CustomField = new QEntityPath(
    this.withPrefix("CustomField"),
    () => QCustomField
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
}

export const qCustomFieldValue = new QCustomFieldValue();

export class QCustomFieldValueId extends QId<CustomFieldValueId> {
  private readonly params = [new QNumberParam("CustomFieldValueId")];

  getParams() {
    return this.params;
  }
}
