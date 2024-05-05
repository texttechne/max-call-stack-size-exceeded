import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  SettlementItem,
  EditableSettlementItem,
  SettlementItemId,
} from "./SettlementItem";
import {
  QSettlementItem,
  qSettlementItem,
  QSettlementItemId,
} from "./QSettlementItem";
import { InsuranceClaimService } from "../insurance_claim/InsuranceClaimService";
import { SettlementService } from "../settlement/SettlementService";

export class SettlementItemService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SettlementItem,
  EditableSettlementItem,
  QSettlementItem
> {
  private _InsuranceClaim?: InsuranceClaimService<ClientType>;
  private _Settlement?: SettlementService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSettlementItem);
  }

  public InsuranceClaim(): InsuranceClaimService<ClientType> {
    if (!this._InsuranceClaim) {
      const { client, path } = this.__base;
      this._InsuranceClaim = new InsuranceClaimService(
        client,
        path,
        "InsuranceClaim"
      );
    }

    return this._InsuranceClaim;
  }

  public Settlement(): SettlementService<ClientType> {
    if (!this._Settlement) {
      const { client, path } = this.__base;
      this._Settlement = new SettlementService(client, path, "Settlement");
    }

    return this._Settlement;
  }
}

export class SettlementItemCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SettlementItem,
  EditableSettlementItem,
  QSettlementItem,
  SettlementItemId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSettlementItem, new QSettlementItemId(name));
  }
}
