import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  TicklerCriteriaSet,
  EditableTicklerCriteriaSet,
  TicklerCriteriaSetId,
} from "./TicklerCriteriaSet";
import {
  QTicklerCriteriaSet,
  qTicklerCriteriaSet,
  QTicklerCriteriaSetId,
} from "./QTicklerCriteriaSet";
import { TicklerCriteriaService } from "../tickler_criteria/TicklerCriteriaService";
import { TicklerCriteriaItemId } from "../tickler_criteria_item/TicklerCriteriaItem";
import { QTicklerCriteriaItemId } from "../tickler_criteria_item/QTicklerCriteriaItem";
import {
  TicklerCriteriaItemService,
  TicklerCriteriaItemCollectionService,
} from "../tickler_criteria_item/TicklerCriteriaItemService";

export class TicklerCriteriaSetService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TicklerCriteriaSet,
  EditableTicklerCriteriaSet,
  QTicklerCriteriaSet
> {
  private _TicklerCriteria?: TicklerCriteriaService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTicklerCriteriaSet);
  }

  public TicklerCriteria(): TicklerCriteriaService<ClientType> {
    if (!this._TicklerCriteria) {
      const { client, path } = this.__base;
      this._TicklerCriteria = new TicklerCriteriaService(
        client,
        path,
        "TicklerCriteria"
      );
    }

    return this._TicklerCriteria;
  }

  public TicklerCriteriaItems(): TicklerCriteriaItemCollectionService<ClientType>;
  public TicklerCriteriaItems(
    id: TicklerCriteriaItemId
  ): TicklerCriteriaItemService<ClientType>;
  public TicklerCriteriaItems(id?: TicklerCriteriaItemId | undefined) {
    const fieldName = "TicklerCriteriaItems";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TicklerCriteriaItemCollectionService(client, path, fieldName)
      : new TicklerCriteriaItemService(
          client,
          path,
          new QTicklerCriteriaItemId(fieldName).buildUrl(id)
        );
  }
}

export class TicklerCriteriaSetCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TicklerCriteriaSet,
  EditableTicklerCriteriaSet,
  QTicklerCriteriaSet,
  TicklerCriteriaSetId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qTicklerCriteriaSet,
      new QTicklerCriteriaSetId(name)
    );
  }
}
