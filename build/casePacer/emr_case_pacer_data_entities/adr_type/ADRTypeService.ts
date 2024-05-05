import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { ADRType, EditableADRType, ADRTypeId } from "./ADRType";
import { QADRType, qADRType, QADRTypeId } from "./QADRType";
import { ADRId } from "../adr/ADR";
import { QADRId } from "../adr/QADR";
import { ADRService, ADRCollectionService } from "../adr/ADRService";

export class ADRTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, ADRType, EditableADRType, QADRType> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qADRType);
  }

  public ADRs(): ADRCollectionService<ClientType>;
  public ADRs(id: ADRId): ADRService<ClientType>;
  public ADRs(id?: ADRId | undefined) {
    const fieldName = "ADRs";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ADRCollectionService(client, path, fieldName)
      : new ADRService(client, path, new QADRId(fieldName).buildUrl(id));
  }
}

export class ADRTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ADRType,
  EditableADRType,
  QADRType,
  ADRTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qADRType, new QADRTypeId(name));
  }
}
