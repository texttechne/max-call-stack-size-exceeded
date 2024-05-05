import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  TicklerCriteriaAction,
  EditableTicklerCriteriaAction,
  TicklerCriteriaActionId,
} from "./TicklerCriteriaAction";
import {
  QTicklerCriteriaAction,
  qTicklerCriteriaAction,
  QTicklerCriteriaActionId,
} from "./QTicklerCriteriaAction";
import { TicklerCriteriaId } from "../tickler_criteria/TicklerCriteria";
import { QTicklerCriteriaId } from "../tickler_criteria/QTicklerCriteria";
import {
  TicklerCriteriaService,
  TicklerCriteriaCollectionService,
} from "../tickler_criteria/TicklerCriteriaService";

export class TicklerCriteriaActionService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TicklerCriteriaAction,
  EditableTicklerCriteriaAction,
  QTicklerCriteriaAction
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTicklerCriteriaAction);
  }

  public TicklerCriterias(): TicklerCriteriaCollectionService<ClientType>;
  public TicklerCriterias(
    id: TicklerCriteriaId
  ): TicklerCriteriaService<ClientType>;
  public TicklerCriterias(id?: TicklerCriteriaId | undefined) {
    const fieldName = "TicklerCriterias";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TicklerCriteriaCollectionService(client, path, fieldName)
      : new TicklerCriteriaService(
          client,
          path,
          new QTicklerCriteriaId(fieldName).buildUrl(id)
        );
  }
}

export class TicklerCriteriaActionCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TicklerCriteriaAction,
  EditableTicklerCriteriaAction,
  QTicklerCriteriaAction,
  TicklerCriteriaActionId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qTicklerCriteriaAction,
      new QTicklerCriteriaActionId(name)
    );
  }
}
