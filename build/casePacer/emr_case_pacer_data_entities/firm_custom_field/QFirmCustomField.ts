import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QBooleanPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QCustomFieldType } from "../custom_field_type/QCustomFieldType";
import { QFirm } from "../firm/QFirm";
import { QCustomField } from "../custom_field/QCustomField";
import { FirmCustomFieldId } from "./FirmCustomField";

export class QFirmCustomField extends QueryObject {
  public readonly FirmCustomFieldId = new QNumberPath(
    this.withPrefix("FirmCustomFieldId")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly CustomFieldTypeId = new QNumberPath(
    this.withPrefix("CustomFieldTypeId")
  );
  public readonly CustomFieldName = new QStringPath(
    this.withPrefix("CustomFieldName")
  );
  public readonly CustomFieldHelperData = new QStringPath(
    this.withPrefix("CustomFieldHelperData")
  );
  public readonly IntakeField = new QBooleanPath(
    this.withPrefix("IntakeField")
  );
  public readonly CustomFieldType = new QEntityPath(
    this.withPrefix("CustomFieldType"),
    () => QCustomFieldType
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly CustomFields = new QEntityCollectionPath(
    this.withPrefix("CustomFields"),
    () => QCustomField
  );
}

export const qFirmCustomField = new QFirmCustomField();

export class QFirmCustomFieldId extends QId<FirmCustomFieldId> {
  private readonly params = [new QNumberParam("FirmCustomFieldId")];

  getParams() {
    return this.params;
  }
}
