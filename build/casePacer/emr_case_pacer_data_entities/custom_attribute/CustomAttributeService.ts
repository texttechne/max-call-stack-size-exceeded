import {
  StringCollection,
  QStringCollection,
  qStringCollection,
} from "@odata2ts/odata-query-objects";
import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  CollectionServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  CustomAttribute,
  EditableCustomAttribute,
  CustomAttributeId,
} from "./CustomAttribute";
import {
  QCustomAttribute,
  qCustomAttribute,
  QCustomAttributeId,
} from "./QCustomAttribute";
import { FirmCustomFieldService } from "../firm_custom_field/FirmCustomFieldService";
import { CustomFieldService } from "../custom_field/CustomFieldService";
import { CustomFieldValueService } from "../custom_field_value/CustomFieldValueService";
import { CustomFieldTypeService } from "../custom_field_type/CustomFieldTypeService";

export class CustomAttributeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CustomAttribute,
  EditableCustomAttribute,
  QCustomAttribute
> {
  private _DropDownSimple?: CollectionServiceV4<
    ClientType,
    StringCollection,
    QStringCollection
  >;
  private _firmCustomField?: FirmCustomFieldService<ClientType>;
  private _customField?: CustomFieldService<ClientType>;
  private _customFieldValue?: CustomFieldValueService<ClientType>;
  private _customFieldType?: CustomFieldTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCustomAttribute);
  }

  public DropDownSimple() {
    if (!this._DropDownSimple) {
      const { client, path } = this.__base;
      this._DropDownSimple = new CollectionServiceV4(
        client,
        path,
        "DropDownSimple",
        qStringCollection
      );
    }

    return this._DropDownSimple;
  }

  public firmCustomField(): FirmCustomFieldService<ClientType> {
    if (!this._firmCustomField) {
      const { client, path } = this.__base;
      this._firmCustomField = new FirmCustomFieldService(
        client,
        path,
        "firmCustomField"
      );
    }

    return this._firmCustomField;
  }

  public customField(): CustomFieldService<ClientType> {
    if (!this._customField) {
      const { client, path } = this.__base;
      this._customField = new CustomFieldService(client, path, "customField");
    }

    return this._customField;
  }

  public customFieldValue(): CustomFieldValueService<ClientType> {
    if (!this._customFieldValue) {
      const { client, path } = this.__base;
      this._customFieldValue = new CustomFieldValueService(
        client,
        path,
        "customFieldValue"
      );
    }

    return this._customFieldValue;
  }

  public customFieldType(): CustomFieldTypeService<ClientType> {
    if (!this._customFieldType) {
      const { client, path } = this.__base;
      this._customFieldType = new CustomFieldTypeService(
        client,
        path,
        "customFieldType"
      );
    }

    return this._customFieldType;
  }
}

export class CustomAttributeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CustomAttribute,
  EditableCustomAttribute,
  QCustomAttribute,
  CustomAttributeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCustomAttribute,
      new QCustomAttributeId(name)
    );
  }
}
