import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QFirmCustomField } from "../firm_custom_field/QFirmCustomField";
import { CustomFieldTypeId } from "./CustomFieldType";

export class QCustomFieldType extends QueryObject {
  public readonly CustomFieldTypeId = new QNumberPath(
    this.withPrefix("CustomFieldTypeId")
  );
  public readonly TypeName = new QStringPath(this.withPrefix("TypeName"));
  public readonly CustomFieldValueCol = new QStringPath(
    this.withPrefix("CustomFieldValueCol")
  );
  public readonly FirmCustomFields = new QEntityCollectionPath(
    this.withPrefix("FirmCustomFields"),
    () => QFirmCustomField
  );
}

export const qCustomFieldType = new QCustomFieldType();

export class QCustomFieldTypeId extends QId<CustomFieldTypeId> {
  private readonly params = [new QNumberParam("CustomFieldTypeId")];

  getParams() {
    return this.params;
  }
}
