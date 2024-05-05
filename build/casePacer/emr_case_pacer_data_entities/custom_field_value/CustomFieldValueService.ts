import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  CustomFieldValue,
  EditableCustomFieldValue,
  CustomFieldValueId,
} from "./CustomFieldValue";
import {
  QCustomFieldValue,
  qCustomFieldValue,
  QCustomFieldValueId,
} from "./QCustomFieldValue";
import { CustomFieldService } from "../custom_field/CustomFieldService";
import { LawsuitService } from "../lawsuit/LawsuitService";

export class CustomFieldValueService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CustomFieldValue,
  EditableCustomFieldValue,
  QCustomFieldValue
> {
  private _CustomField?: CustomFieldService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCustomFieldValue);
  }

  public CustomField(): CustomFieldService<ClientType> {
    if (!this._CustomField) {
      const { client, path } = this.__base;
      this._CustomField = new CustomFieldService(client, path, "CustomField");
    }

    return this._CustomField;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }
}

export class CustomFieldValueCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CustomFieldValue,
  EditableCustomFieldValue,
  QCustomFieldValue,
  CustomFieldValueId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCustomFieldValue,
      new QCustomFieldValueId(name)
    );
  }
}
