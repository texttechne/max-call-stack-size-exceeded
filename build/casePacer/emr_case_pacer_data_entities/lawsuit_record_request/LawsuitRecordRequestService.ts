import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  LawsuitRecordRequest,
  EditableLawsuitRecordRequest,
  LawsuitRecordRequestId,
} from "./LawsuitRecordRequest";
import {
  QLawsuitRecordRequest,
  qLawsuitRecordRequest,
  QLawsuitRecordRequestId,
} from "./QLawsuitRecordRequest";
import { LawsuitService } from "../lawsuit/LawsuitService";

export class LawsuitRecordRequestService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LawsuitRecordRequest,
  EditableLawsuitRecordRequest,
  QLawsuitRecordRequest
> {
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitRecordRequest);
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }
}

export class LawsuitRecordRequestCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LawsuitRecordRequest,
  EditableLawsuitRecordRequest,
  QLawsuitRecordRequest,
  LawsuitRecordRequestId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qLawsuitRecordRequest,
      new QLawsuitRecordRequestId(name)
    );
  }
}
