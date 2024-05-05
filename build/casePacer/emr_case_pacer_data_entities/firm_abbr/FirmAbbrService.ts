import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { FirmAbbr, EditableFirmAbbr, FirmAbbrId } from "./FirmAbbr";
import { QFirmAbbr, qFirmAbbr, QFirmAbbrId } from "./QFirmAbbr";
import { FirmService } from "../firm/FirmService";

export class FirmAbbrService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  FirmAbbr,
  EditableFirmAbbr,
  QFirmAbbr
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qFirmAbbr);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }
}

export class FirmAbbrCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  FirmAbbr,
  EditableFirmAbbr,
  QFirmAbbr,
  FirmAbbrId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qFirmAbbr, new QFirmAbbrId(name));
  }
}
