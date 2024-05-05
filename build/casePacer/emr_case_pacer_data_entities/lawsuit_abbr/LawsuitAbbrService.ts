import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { LawsuitAbbr, EditableLawsuitAbbr, LawsuitAbbrId } from "./LawsuitAbbr";
import { QLawsuitAbbr, qLawsuitAbbr, QLawsuitAbbrId } from "./QLawsuitAbbr";
import { FirmService } from "../firm/FirmService";
import { LawsuitService } from "../lawsuit/LawsuitService";

export class LawsuitAbbrService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LawsuitAbbr,
  EditableLawsuitAbbr,
  QLawsuitAbbr
> {
  private _Firm?: FirmService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitAbbr);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }
}

export class LawsuitAbbrCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LawsuitAbbr,
  EditableLawsuitAbbr,
  QLawsuitAbbr,
  LawsuitAbbrId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitAbbr, new QLawsuitAbbrId(name));
  }
}
