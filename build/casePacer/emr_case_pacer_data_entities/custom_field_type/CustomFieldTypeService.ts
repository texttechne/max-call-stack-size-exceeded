import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  CustomFieldType,
  EditableCustomFieldType,
  CustomFieldTypeId,
} from "./CustomFieldType";
import {
  QCustomFieldType,
  qCustomFieldType,
  QCustomFieldTypeId,
} from "./QCustomFieldType";
import { FirmCustomFieldId } from "../firm_custom_field/FirmCustomField";
import { QFirmCustomFieldId } from "../firm_custom_field/QFirmCustomField";
import {
  FirmCustomFieldService,
  FirmCustomFieldCollectionService,
} from "../firm_custom_field/FirmCustomFieldService";

export class CustomFieldTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CustomFieldType,
  EditableCustomFieldType,
  QCustomFieldType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCustomFieldType);
  }

  public FirmCustomFields(): FirmCustomFieldCollectionService<ClientType>;
  public FirmCustomFields(
    id: FirmCustomFieldId
  ): FirmCustomFieldService<ClientType>;
  public FirmCustomFields(id?: FirmCustomFieldId | undefined) {
    const fieldName = "FirmCustomFields";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new FirmCustomFieldCollectionService(client, path, fieldName)
      : new FirmCustomFieldService(
          client,
          path,
          new QFirmCustomFieldId(fieldName).buildUrl(id)
        );
  }
}

export class CustomFieldTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CustomFieldType,
  EditableCustomFieldType,
  QCustomFieldType,
  CustomFieldTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCustomFieldType,
      new QCustomFieldTypeId(name)
    );
  }
}
