import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Witness, EditableWitness, WitnessId } from "./Witness";
import { QWitness, qWitness, QWitnessId } from "./QWitness";
import { LawsuitPartyService } from "../lawsuit_party/LawsuitPartyService";
import { WitnessTypeService } from "../witness_type/WitnessTypeService";
import { WitnessLitigationAssnId } from "../witness_litigation_assn/WitnessLitigationAssn";
import { QWitnessLitigationAssnId } from "../witness_litigation_assn/QWitnessLitigationAssn";
import {
  WitnessLitigationAssnService,
  WitnessLitigationAssnCollectionService,
} from "../witness_litigation_assn/WitnessLitigationAssnService";

export class WitnessService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Witness, EditableWitness, QWitness> {
  private _LawsuitParty?: LawsuitPartyService<ClientType>;
  private _WitnessType?: WitnessTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qWitness);
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

  public WitnessType(): WitnessTypeService<ClientType> {
    if (!this._WitnessType) {
      const { client, path } = this.__base;
      this._WitnessType = new WitnessTypeService(client, path, "WitnessType");
    }

    return this._WitnessType;
  }

  public WitnessLitigationAssns(): WitnessLitigationAssnCollectionService<ClientType>;
  public WitnessLitigationAssns(
    id: WitnessLitigationAssnId
  ): WitnessLitigationAssnService<ClientType>;
  public WitnessLitigationAssns(id?: WitnessLitigationAssnId | undefined) {
    const fieldName = "WitnessLitigationAssns";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new WitnessLitigationAssnCollectionService(client, path, fieldName)
      : new WitnessLitigationAssnService(
          client,
          path,
          new QWitnessLitigationAssnId(fieldName).buildUrl(id)
        );
  }
}

export class WitnessCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Witness,
  EditableWitness,
  QWitness,
  WitnessId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qWitness, new QWitnessId(name));
  }
}
