import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  LienSubrogation,
  EditableLienSubrogation,
  LienSubrogationId,
} from "./LienSubrogation";
import {
  QLienSubrogation,
  qLienSubrogation,
  QLienSubrogationId,
} from "./QLienSubrogation";
import { LawsuitService } from "../lawsuit/LawsuitService";
import { LienSubrogationPaymentTypeService } from "../lien_subrogation_payment_type/LienSubrogationPaymentTypeService";
import { PartyService } from "../party/PartyService";
import { SettlementLienSubId } from "../settlement_lien_sub/SettlementLienSub";
import { QSettlementLienSubId } from "../settlement_lien_sub/QSettlementLienSub";
import {
  SettlementLienSubService,
  SettlementLienSubCollectionService,
} from "../settlement_lien_sub/SettlementLienSubService";

export class LienSubrogationService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LienSubrogation,
  EditableLienSubrogation,
  QLienSubrogation
> {
  private _Lawsuit?: LawsuitService<ClientType>;
  private _PaymentType?: LienSubrogationPaymentTypeService<ClientType>;
  private _Plaintiff?: PartyService<ClientType>;
  private _SubrogeeLienHolder?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLienSubrogation);
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public PaymentType(): LienSubrogationPaymentTypeService<ClientType> {
    if (!this._PaymentType) {
      const { client, path } = this.__base;
      this._PaymentType = new LienSubrogationPaymentTypeService(
        client,
        path,
        "PaymentType"
      );
    }

    return this._PaymentType;
  }

  public Plaintiff(): PartyService<ClientType> {
    if (!this._Plaintiff) {
      const { client, path } = this.__base;
      this._Plaintiff = new PartyService(client, path, "Plaintiff");
    }

    return this._Plaintiff;
  }

  public SubrogeeLienHolder(): PartyService<ClientType> {
    if (!this._SubrogeeLienHolder) {
      const { client, path } = this.__base;
      this._SubrogeeLienHolder = new PartyService(
        client,
        path,
        "SubrogeeLienHolder"
      );
    }

    return this._SubrogeeLienHolder;
  }

  public SettlementLienSubs(): SettlementLienSubCollectionService<ClientType>;
  public SettlementLienSubs(
    id: SettlementLienSubId
  ): SettlementLienSubService<ClientType>;
  public SettlementLienSubs(id?: SettlementLienSubId | undefined) {
    const fieldName = "SettlementLienSubs";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SettlementLienSubCollectionService(client, path, fieldName)
      : new SettlementLienSubService(
          client,
          path,
          new QSettlementLienSubId(fieldName).buildUrl(id)
        );
  }
}

export class LienSubrogationCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LienSubrogation,
  EditableLienSubrogation,
  QLienSubrogation,
  LienSubrogationId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qLienSubrogation,
      new QLienSubrogationId(name)
    );
  }
}
