import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  FirmCustomField,
  EditableFirmCustomField,
  FirmCustomFieldId,
} from "./FirmCustomField";
import {
  QFirmCustomField,
  qFirmCustomField,
  QFirmCustomFieldId,
} from "./QFirmCustomField";
import { CustomFieldTypeService } from "../custom_field_type/CustomFieldTypeService";
import { FirmService } from "../firm/FirmService";
import { CustomFieldId } from "../custom_field/CustomField";
import { QCustomFieldId } from "../custom_field/QCustomField";
import {
  CustomFieldService,
  CustomFieldCollectionService,
} from "../custom_field/CustomFieldService";

export class FirmCustomFieldService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  FirmCustomField,
  EditableFirmCustomField,
  QFirmCustomField
> {
  private _CustomFieldType?: CustomFieldTypeService<ClientType>;
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qFirmCustomField);
  }

  public CustomFieldType(): CustomFieldTypeService<ClientType> {
    if (!this._CustomFieldType) {
      const { client, path } = this.__base;
      this._CustomFieldType = new CustomFieldTypeService(
        client,
        path,
        "CustomFieldType"
      );
    }

    return this._CustomFieldType;
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public CustomFields(): CustomFieldCollectionService<ClientType>;
  public CustomFields(id: CustomFieldId): CustomFieldService<ClientType>;
  public CustomFields(id?: CustomFieldId | undefined) {
    const fieldName = "CustomFields";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CustomFieldCollectionService(client, path, fieldName)
      : new CustomFieldService(
          client,
          path,
          new QCustomFieldId(fieldName).buildUrl(id)
        );
  }
}

export class FirmCustomFieldCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  FirmCustomField,
  EditableFirmCustomField,
  QFirmCustomField,
  FirmCustomFieldId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qFirmCustomField,
      new QFirmCustomFieldId(name)
    );
  }
}
