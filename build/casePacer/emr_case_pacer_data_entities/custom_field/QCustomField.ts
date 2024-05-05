import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QFirmCustomField } from "../firm_custom_field/QFirmCustomField";
import { QLawsuitType } from "../lawsuit_type/QLawsuitType";
import { QCustomFieldValue } from "../custom_field_value/QCustomFieldValue";
import { CustomFieldId } from "./CustomField";

export class QCustomField extends QueryObject {
  public readonly CustomFieldId = new QNumberPath(
    this.withPrefix("CustomFieldId")
  );
  public readonly LawsuitTypeId = new QNumberPath(
    this.withPrefix("LawsuitTypeId")
  );
  public readonly CustomFieldGroup = new QStringPath(
    this.withPrefix("CustomFieldGroup")
  );
  public readonly SortOrder = new QNumberPath(this.withPrefix("SortOrder"));
  public readonly FirmCustomFieldId = new QNumberPath(
    this.withPrefix("FirmCustomFieldId")
  );
  public readonly FirmCustomField = new QEntityPath(
    this.withPrefix("FirmCustomField"),
    () => QFirmCustomField
  );
  public readonly LawsuitType = new QEntityPath(
    this.withPrefix("LawsuitType"),
    () => QLawsuitType
  );
  public readonly CustomFieldValues = new QEntityCollectionPath(
    this.withPrefix("CustomFieldValues"),
    () => QCustomFieldValue
  );
}

export const qCustomField = new QCustomField();

export class QCustomFieldId extends QId<CustomFieldId> {
  private readonly params = [new QNumberParam("CustomFieldId")];

  getParams() {
    return this.params;
  }
}
