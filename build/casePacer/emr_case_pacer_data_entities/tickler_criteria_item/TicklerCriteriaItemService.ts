import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  TicklerCriteriaItem,
  EditableTicklerCriteriaItem,
  TicklerCriteriaItemId,
} from "./TicklerCriteriaItem";
import {
  QTicklerCriteriaItem,
  qTicklerCriteriaItem,
  QTicklerCriteriaItemId,
} from "./QTicklerCriteriaItem";
import { TicklerCriteriaOperatorService } from "../tickler_criteria_operator/TicklerCriteriaOperatorService";
import { TicklerCriteriaSetService } from "../tickler_criteria_set/TicklerCriteriaSetService";

export class TicklerCriteriaItemService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TicklerCriteriaItem,
  EditableTicklerCriteriaItem,
  QTicklerCriteriaItem
> {
  private _TicklerCriteriaOperator?: TicklerCriteriaOperatorService<ClientType>;
  private _TicklerCriteriaSet?: TicklerCriteriaSetService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTicklerCriteriaItem);
  }

  public TicklerCriteriaOperator(): TicklerCriteriaOperatorService<ClientType> {
    if (!this._TicklerCriteriaOperator) {
      const { client, path } = this.__base;
      this._TicklerCriteriaOperator = new TicklerCriteriaOperatorService(
        client,
        path,
        "TicklerCriteriaOperator"
      );
    }

    return this._TicklerCriteriaOperator;
  }

  public TicklerCriteriaSet(): TicklerCriteriaSetService<ClientType> {
    if (!this._TicklerCriteriaSet) {
      const { client, path } = this.__base;
      this._TicklerCriteriaSet = new TicklerCriteriaSetService(
        client,
        path,
        "TicklerCriteriaSet"
      );
    }

    return this._TicklerCriteriaSet;
  }
}

export class TicklerCriteriaItemCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TicklerCriteriaItem,
  EditableTicklerCriteriaItem,
  QTicklerCriteriaItem,
  TicklerCriteriaItemId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qTicklerCriteriaItem,
      new QTicklerCriteriaItemId(name)
    );
  }
}
