import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  AttorneyFeeInterest,
  EditableAttorneyFeeInterest,
  AttorneyFeeInterestId,
} from "./AttorneyFeeInterest";
import {
  QAttorneyFeeInterest,
  qAttorneyFeeInterest,
  QAttorneyFeeInterestId,
} from "./QAttorneyFeeInterest";
import { AttorneyFeeInterestTypeService } from "../attorney_fee_interest_type/AttorneyFeeInterestTypeService";
import { LawsuitPartyService } from "../lawsuit_party/LawsuitPartyService";

export class AttorneyFeeInterestService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AttorneyFeeInterest,
  EditableAttorneyFeeInterest,
  QAttorneyFeeInterest
> {
  private _AttorneyFeeInterestType?: AttorneyFeeInterestTypeService<ClientType>;
  private _LawsuitParty?: LawsuitPartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAttorneyFeeInterest);
  }

  public AttorneyFeeInterestType(): AttorneyFeeInterestTypeService<ClientType> {
    if (!this._AttorneyFeeInterestType) {
      const { client, path } = this.__base;
      this._AttorneyFeeInterestType = new AttorneyFeeInterestTypeService(
        client,
        path,
        "AttorneyFeeInterestType"
      );
    }

    return this._AttorneyFeeInterestType;
  }

  public LawsuitParty(): LawsuitPartyService<ClientType> {
    if (!this._LawsuitParty) {
      const { client, path } = this.__base;
      this._LawsuitParty = new LawsuitPartyService(
        client,
        path,
        "LawsuitParty"
      );
    }

    return this._LawsuitParty;
  }
}

export class AttorneyFeeInterestCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AttorneyFeeInterest,
  EditableAttorneyFeeInterest,
  QAttorneyFeeInterest,
  AttorneyFeeInterestId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAttorneyFeeInterest,
      new QAttorneyFeeInterestId(name)
    );
  }
}
