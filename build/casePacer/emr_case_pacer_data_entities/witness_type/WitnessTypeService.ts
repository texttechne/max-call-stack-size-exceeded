import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { WitnessType, EditableWitnessType, WitnessTypeId } from "./WitnessType";
import { QWitnessType, qWitnessType, QWitnessTypeId } from "./QWitnessType";
import { WitnessId } from "../witness/Witness";
import { QWitnessId } from "../witness/QWitness";
import {
  WitnessService,
  WitnessCollectionService,
} from "../witness/WitnessService";

export class WitnessTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  WitnessType,
  EditableWitnessType,
  QWitnessType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qWitnessType);
  }

  public Witnesses(): WitnessCollectionService<ClientType>;
  public Witnesses(id: WitnessId): WitnessService<ClientType>;
  public Witnesses(id?: WitnessId | undefined) {
    const fieldName = "Witnesses";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new WitnessCollectionService(client, path, fieldName)
      : new WitnessService(
          client,
          path,
          new QWitnessId(fieldName).buildUrl(id)
        );
  }
}

export class WitnessTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  WitnessType,
  EditableWitnessType,
  QWitnessType,
  WitnessTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qWitnessType, new QWitnessTypeId(name));
  }
}
