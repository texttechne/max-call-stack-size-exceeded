import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  LienSubrogationPaymentType,
  EditableLienSubrogationPaymentType,
  LienSubrogationPaymentTypeId,
} from "./LienSubrogationPaymentType";
import {
  QLienSubrogationPaymentType,
  qLienSubrogationPaymentType,
  QLienSubrogationPaymentTypeId,
} from "./QLienSubrogationPaymentType";
import { LienSubrogationId } from "../lien_subrogation/LienSubrogation";
import { QLienSubrogationId } from "../lien_subrogation/QLienSubrogation";
import {
  LienSubrogationService,
  LienSubrogationCollectionService,
} from "../lien_subrogation/LienSubrogationService";

export class LienSubrogationPaymentTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LienSubrogationPaymentType,
  EditableLienSubrogationPaymentType,
  QLienSubrogationPaymentType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLienSubrogationPaymentType);
  }

  public LienSubrogations(): LienSubrogationCollectionService<ClientType>;
  public LienSubrogations(
    id: LienSubrogationId
  ): LienSubrogationService<ClientType>;
  public LienSubrogations(id?: LienSubrogationId | undefined) {
    const fieldName = "LienSubrogations";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LienSubrogationCollectionService(client, path, fieldName)
      : new LienSubrogationService(
          client,
          path,
          new QLienSubrogationId(fieldName).buildUrl(id)
        );
  }
}

export class LienSubrogationPaymentTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LienSubrogationPaymentType,
  EditableLienSubrogationPaymentType,
  QLienSubrogationPaymentType,
  LienSubrogationPaymentTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qLienSubrogationPaymentType,
      new QLienSubrogationPaymentTypeId(name)
    );
  }
}
