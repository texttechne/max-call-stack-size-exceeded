import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  PropertyType,
  EditablePropertyType,
  PropertyTypeId,
} from "./PropertyType";
import { QPropertyType, qPropertyType, QPropertyTypeId } from "./QPropertyType";
import { PropertyDamageId } from "../property_damage/PropertyDamage";
import { QPropertyDamageId } from "../property_damage/QPropertyDamage";
import {
  PropertyDamageService,
  PropertyDamageCollectionService,
} from "../property_damage/PropertyDamageService";

export class PropertyTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  PropertyType,
  EditablePropertyType,
  QPropertyType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPropertyType);
  }

  public PropertyDamages(): PropertyDamageCollectionService<ClientType>;
  public PropertyDamages(
    id: PropertyDamageId
  ): PropertyDamageService<ClientType>;
  public PropertyDamages(id?: PropertyDamageId | undefined) {
    const fieldName = "PropertyDamages";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PropertyDamageCollectionService(client, path, fieldName)
      : new PropertyDamageService(
          client,
          path,
          new QPropertyDamageId(fieldName).buildUrl(id)
        );
  }
}

export class PropertyTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  PropertyType,
  EditablePropertyType,
  QPropertyType,
  PropertyTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPropertyType, new QPropertyTypeId(name));
  }
}
