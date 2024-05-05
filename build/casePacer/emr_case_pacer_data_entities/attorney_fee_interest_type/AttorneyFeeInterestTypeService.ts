import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  AttorneyFeeInterestType,
  EditableAttorneyFeeInterestType,
  AttorneyFeeInterestTypeId,
} from "./AttorneyFeeInterestType";
import {
  QAttorneyFeeInterestType,
  qAttorneyFeeInterestType,
  QAttorneyFeeInterestTypeId,
} from "./QAttorneyFeeInterestType";
import { AttorneyFeeInterestId } from "../attorney_fee_interest/AttorneyFeeInterest";
import { QAttorneyFeeInterestId } from "../attorney_fee_interest/QAttorneyFeeInterest";
import {
  AttorneyFeeInterestService,
  AttorneyFeeInterestCollectionService,
} from "../attorney_fee_interest/AttorneyFeeInterestService";

export class AttorneyFeeInterestTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AttorneyFeeInterestType,
  EditableAttorneyFeeInterestType,
  QAttorneyFeeInterestType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAttorneyFeeInterestType);
  }

  public AttorneyFeeInterests(): AttorneyFeeInterestCollectionService<ClientType>;
  public AttorneyFeeInterests(
    id: AttorneyFeeInterestId
  ): AttorneyFeeInterestService<ClientType>;
  public AttorneyFeeInterests(id?: AttorneyFeeInterestId | undefined) {
    const fieldName = "AttorneyFeeInterests";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AttorneyFeeInterestCollectionService(client, path, fieldName)
      : new AttorneyFeeInterestService(
          client,
          path,
          new QAttorneyFeeInterestId(fieldName).buildUrl(id)
        );
  }
}

export class AttorneyFeeInterestTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AttorneyFeeInterestType,
  EditableAttorneyFeeInterestType,
  QAttorneyFeeInterestType,
  AttorneyFeeInterestTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAttorneyFeeInterestType,
      new QAttorneyFeeInterestTypeId(name)
    );
  }
}
