import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { CustomField, EditableCustomField, CustomFieldId } from "./CustomField";
import { QCustomField, qCustomField, QCustomFieldId } from "./QCustomField";
import { FirmCustomFieldService } from "../firm_custom_field/FirmCustomFieldService";
import { LawsuitTypeService } from "../lawsuit_type/LawsuitTypeService";
import { CustomFieldValueId } from "../custom_field_value/CustomFieldValue";
import { QCustomFieldValueId } from "../custom_field_value/QCustomFieldValue";
import {
  CustomFieldValueService,
  CustomFieldValueCollectionService,
} from "../custom_field_value/CustomFieldValueService";

export class CustomFieldService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CustomField,
  EditableCustomField,
  QCustomField
> {
  private _FirmCustomField?: FirmCustomFieldService<ClientType>;
  private _LawsuitType?: LawsuitTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCustomField);
  }

  public FirmCustomField(): FirmCustomFieldService<ClientType> {
    if (!this._FirmCustomField) {
      const { client, path } = this.__base;
      this._FirmCustomField = new FirmCustomFieldService(
        client,
        path,
        "FirmCustomField"
      );
    }

    return this._FirmCustomField;
  }

  public LawsuitType(): LawsuitTypeService<ClientType> {
    if (!this._LawsuitType) {
      const { client, path } = this.__base;
      this._LawsuitType = new LawsuitTypeService(client, path, "LawsuitType");
    }

    return this._LawsuitType;
  }

  public CustomFieldValues(): CustomFieldValueCollectionService<ClientType>;
  public CustomFieldValues(
    id: CustomFieldValueId
  ): CustomFieldValueService<ClientType>;
  public CustomFieldValues(id?: CustomFieldValueId | undefined) {
    const fieldName = "CustomFieldValues";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CustomFieldValueCollectionService(client, path, fieldName)
      : new CustomFieldValueService(
          client,
          path,
          new QCustomFieldValueId(fieldName).buildUrl(id)
        );
  }
}

export class CustomFieldCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CustomField,
  EditableCustomField,
  QCustomField,
  CustomFieldId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCustomField, new QCustomFieldId(name));
  }
}
