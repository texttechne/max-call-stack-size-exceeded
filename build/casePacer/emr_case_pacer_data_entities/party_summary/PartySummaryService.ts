import { ODataCollectionResponseV4 } from "@odata2ts/odata-core";
import {
  ODataHttpClient,
  ODataHttpClientConfig,
  HttpResponseModel,
} from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  PartySummary,
  EditablePartySummary,
  PartySummaryId,
  PartySummary_ListParams,
} from "./PartySummary";
import {
  QPartySummary,
  qPartySummary,
  QPartySummaryId,
  PartySummary_QList,
} from "./QPartySummary";
import { PartyService } from "../party/PartyService";

export class PartySummaryService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  PartySummary,
  EditablePartySummary,
  QPartySummary
> {
  private _Party?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPartySummary);
  }

  public Party(): PartyService<ClientType> {
    if (!this._Party) {
      const { client, path } = this.__base;
      this._Party = new PartyService(client, path, "Party");
    }

    return this._Party;
  }
}

export class PartySummaryCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  PartySummary,
  EditablePartySummary,
  QPartySummary,
  PartySummaryId
> {
  private _PartySummary_QList?: PartySummary_QList;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPartySummary, new QPartySummaryId(name));
  }

  public async List(
    params: PartySummary_ListParams,
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): Promise<HttpResponseModel<ODataCollectionResponseV4<PartySummary>>> {
    if (!this._PartySummary_QList) {
      this._PartySummary_QList = new PartySummary_QList();
    }

    const { addFullPath, client, getDefaultHeaders } = this.__base;
    const url = addFullPath(this._PartySummary_QList.buildUrl(params));
    const response = await client.get(url, requestConfig, getDefaultHeaders());
    return this._PartySummary_QList.convertResponse(response);
  }
}
