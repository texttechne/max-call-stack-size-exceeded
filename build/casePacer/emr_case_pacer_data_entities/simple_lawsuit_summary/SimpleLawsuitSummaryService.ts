import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  SimpleLawsuitSummary,
  EditableSimpleLawsuitSummary,
  SimpleLawsuitSummaryId,
} from "./SimpleLawsuitSummary";
import {
  QSimpleLawsuitSummary,
  qSimpleLawsuitSummary,
  QSimpleLawsuitSummaryId,
} from "./QSimpleLawsuitSummary";
import { LawsuitService } from "../lawsuit/LawsuitService";

export class SimpleLawsuitSummaryService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SimpleLawsuitSummary,
  EditableSimpleLawsuitSummary,
  QSimpleLawsuitSummary
> {
  private _Lawsuit?: LawsuitService<ClientType>;
  private _MasterSimpleLawsuitSummary?: SimpleLawsuitSummaryService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSimpleLawsuitSummary);
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public MasterSimpleLawsuitSummary(): SimpleLawsuitSummaryService<ClientType> {
    if (!this._MasterSimpleLawsuitSummary) {
      const { client, path } = this.__base;
      this._MasterSimpleLawsuitSummary = new SimpleLawsuitSummaryService(
        client,
        path,
        "MasterSimpleLawsuitSummary"
      );
    }

    return this._MasterSimpleLawsuitSummary;
  }

  public ChildSimpleLawsuitSummaries(): SimpleLawsuitSummaryCollectionService<ClientType>;
  public ChildSimpleLawsuitSummaries(
    id: SimpleLawsuitSummaryId
  ): SimpleLawsuitSummaryService<ClientType>;
  public ChildSimpleLawsuitSummaries(id?: SimpleLawsuitSummaryId | undefined) {
    const fieldName = "ChildSimpleLawsuitSummaries";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SimpleLawsuitSummaryCollectionService(client, path, fieldName)
      : new SimpleLawsuitSummaryService(
          client,
          path,
          new QSimpleLawsuitSummaryId(fieldName).buildUrl(id)
        );
  }
}

export class SimpleLawsuitSummaryCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SimpleLawsuitSummary,
  EditableSimpleLawsuitSummary,
  QSimpleLawsuitSummary,
  SimpleLawsuitSummaryId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qSimpleLawsuitSummary,
      new QSimpleLawsuitSummaryId(name)
    );
  }
}
