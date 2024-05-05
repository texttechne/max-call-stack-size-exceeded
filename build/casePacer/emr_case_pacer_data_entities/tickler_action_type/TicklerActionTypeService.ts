import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  TicklerActionType,
  EditableTicklerActionType,
  TicklerActionTypeId,
} from "./TicklerActionType";
import {
  QTicklerActionType,
  qTicklerActionType,
  QTicklerActionTypeId,
} from "./QTicklerActionType";
import { TicklerAnswerActionId } from "../tickler_answer_action/TicklerAnswerAction";
import { QTicklerAnswerActionId } from "../tickler_answer_action/QTicklerAnswerAction";
import {
  TicklerAnswerActionService,
  TicklerAnswerActionCollectionService,
} from "../tickler_answer_action/TicklerAnswerActionService";

export class TicklerActionTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TicklerActionType,
  EditableTicklerActionType,
  QTicklerActionType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTicklerActionType);
  }

  public TicklerAnswerActions(): TicklerAnswerActionCollectionService<ClientType>;
  public TicklerAnswerActions(
    id: TicklerAnswerActionId
  ): TicklerAnswerActionService<ClientType>;
  public TicklerAnswerActions(id?: TicklerAnswerActionId | undefined) {
    const fieldName = "TicklerAnswerActions";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TicklerAnswerActionCollectionService(client, path, fieldName)
      : new TicklerAnswerActionService(
          client,
          path,
          new QTicklerAnswerActionId(fieldName).buildUrl(id)
        );
  }
}

export class TicklerActionTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TicklerActionType,
  EditableTicklerActionType,
  QTicklerActionType,
  TicklerActionTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qTicklerActionType,
      new QTicklerActionTypeId(name)
    );
  }
}
