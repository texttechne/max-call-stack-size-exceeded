import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Discovery, EditableDiscovery, DiscoveryId } from "./Discovery";
import { QDiscovery, qDiscovery, QDiscoveryId } from "./QDiscovery";
import { PartyService } from "../party/PartyService";
import { DiscoveryRecipientTypeService } from "../discovery_recipient_type/DiscoveryRecipientTypeService";
import { DiscoveryTargetService } from "../discovery_target/DiscoveryTargetService";
import { DiscoveryTypeService } from "../discovery_type/DiscoveryTypeService";
import { LawsuitService } from "../lawsuit/LawsuitService";
import { DiscoveryLitigationAssnId } from "../discovery_litigation_assn/DiscoveryLitigationAssn";
import { QDiscoveryLitigationAssnId } from "../discovery_litigation_assn/QDiscoveryLitigationAssn";
import {
  DiscoveryLitigationAssnService,
  DiscoveryLitigationAssnCollectionService,
} from "../discovery_litigation_assn/DiscoveryLitigationAssnService";

export class DiscoveryService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  Discovery,
  EditableDiscovery,
  QDiscovery
> {
  private _Defendant?: PartyService<ClientType>;
  private _DiscoveryRecipientType?: DiscoveryRecipientTypeService<ClientType>;
  private _DiscoveryTarget?: DiscoveryTargetService<ClientType>;
  private _DiscoveryType?: DiscoveryTypeService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;
  private _NonPartyRecipient?: PartyService<ClientType>;
  private _Plaintiff?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDiscovery);
  }

  public Defendant(): PartyService<ClientType> {
    if (!this._Defendant) {
      const { client, path } = this.__base;
      this._Defendant = new PartyService(client, path, "Defendant");
    }

    return this._Defendant;
  }

  public DiscoveryRecipientType(): DiscoveryRecipientTypeService<ClientType> {
    if (!this._DiscoveryRecipientType) {
      const { client, path } = this.__base;
      this._DiscoveryRecipientType = new DiscoveryRecipientTypeService(
        client,
        path,
        "DiscoveryRecipientType"
      );
    }

    return this._DiscoveryRecipientType;
  }

  public DiscoveryTarget(): DiscoveryTargetService<ClientType> {
    if (!this._DiscoveryTarget) {
      const { client, path } = this.__base;
      this._DiscoveryTarget = new DiscoveryTargetService(
        client,
        path,
        "DiscoveryTarget"
      );
    }

    return this._DiscoveryTarget;
  }

  public DiscoveryType(): DiscoveryTypeService<ClientType> {
    if (!this._DiscoveryType) {
      const { client, path } = this.__base;
      this._DiscoveryType = new DiscoveryTypeService(
        client,
        path,
        "DiscoveryType"
      );
    }

    return this._DiscoveryType;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public NonPartyRecipient(): PartyService<ClientType> {
    if (!this._NonPartyRecipient) {
      const { client, path } = this.__base;
      this._NonPartyRecipient = new PartyService(
        client,
        path,
        "NonPartyRecipient"
      );
    }

    return this._NonPartyRecipient;
  }

  public Plaintiff(): PartyService<ClientType> {
    if (!this._Plaintiff) {
      const { client, path } = this.__base;
      this._Plaintiff = new PartyService(client, path, "Plaintiff");
    }

    return this._Plaintiff;
  }

  public DiscoveryLitigationAssns(): DiscoveryLitigationAssnCollectionService<ClientType>;
  public DiscoveryLitigationAssns(
    id: DiscoveryLitigationAssnId
  ): DiscoveryLitigationAssnService<ClientType>;
  public DiscoveryLitigationAssns(id?: DiscoveryLitigationAssnId | undefined) {
    const fieldName = "DiscoveryLitigationAssns";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DiscoveryLitigationAssnCollectionService(client, path, fieldName)
      : new DiscoveryLitigationAssnService(
          client,
          path,
          new QDiscoveryLitigationAssnId(fieldName).buildUrl(id)
        );
  }
}

export class DiscoveryCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Discovery,
  EditableDiscovery,
  QDiscovery,
  DiscoveryId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDiscovery, new QDiscoveryId(name));
  }
}
