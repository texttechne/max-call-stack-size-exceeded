import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  TicklerCriteriaOperator,
  EditableTicklerCriteriaOperator,
  TicklerCriteriaOperatorId,
} from "./TicklerCriteriaOperator";
import {
  QTicklerCriteriaOperator,
  qTicklerCriteriaOperator,
  QTicklerCriteriaOperatorId,
} from "./QTicklerCriteriaOperator";
import { TicklerCriteriaItemId } from "../tickler_criteria_item/TicklerCriteriaItem";
import { QTicklerCriteriaItemId } from "../tickler_criteria_item/QTicklerCriteriaItem";
import {
  TicklerCriteriaItemService,
  TicklerCriteriaItemCollectionService,
} from "../tickler_criteria_item/TicklerCriteriaItemService";

export class TicklerCriteriaOperatorService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TicklerCriteriaOperator,
  EditableTicklerCriteriaOperator,
  QTicklerCriteriaOperator
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTicklerCriteriaOperator);
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

export class TicklerCriteriaOperatorCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TicklerCriteriaOperator,
  EditableTicklerCriteriaOperator,
  QTicklerCriteriaOperator,
  TicklerCriteriaOperatorId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qTicklerCriteriaOperator,
      new QTicklerCriteriaOperatorId(name)
    );
  }
}
