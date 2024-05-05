import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  DemandLineItem,
  EditableDemandLineItem,
  DemandLineItemId,
} from "./DemandLineItem";
import {
  QDemandLineItem,
  qDemandLineItem,
  QDemandLineItemId,
} from "./QDemandLineItem";
import { DemandService } from "../demand/DemandService";

export class DemandLineItemService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  DemandLineItem,
  EditableDemandLineItem,
  QDemandLineItem
> {
  private _Demand?: DemandService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDemandLineItem);
  }

  public Demand(): DemandService<ClientType> {
    if (!this._Demand) {
      const { client, path } = this.__base;
      this._Demand = new DemandService(client, path, "Demand");
    }

    return this._Demand;
  }
}

export class DemandLineItemCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  DemandLineItem,
  EditableDemandLineItem,
  QDemandLineItem,
  DemandLineItemId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDemandLineItem, new QDemandLineItemId(name));
  }
}
