import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { TrialItem, EditableTrialItem, TrialItemId } from "./TrialItem";
import { QTrialItem, qTrialItem, QTrialItemId } from "./QTrialItem";
import { FirmService } from "../firm/FirmService";

export class TrialItemService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TrialItem,
  EditableTrialItem,
  QTrialItem
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTrialItem);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }
}

export class TrialItemCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TrialItem,
  EditableTrialItem,
  QTrialItem,
  TrialItemId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTrialItem, new QTrialItemId(name));
  }
}
