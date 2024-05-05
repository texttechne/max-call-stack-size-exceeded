import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  TicklerAnswerAction,
  EditableTicklerAnswerAction,
  TicklerAnswerActionId,
} from "./TicklerAnswerAction";
import {
  QTicklerAnswerAction,
  qTicklerAnswerAction,
  QTicklerAnswerActionId,
} from "./QTicklerAnswerAction";
import { TicklerActionTypeService } from "../tickler_action_type/TicklerActionTypeService";
import { TicklerAnswerService } from "../tickler_answer/TicklerAnswerService";

export class TicklerAnswerActionService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TicklerAnswerAction,
  EditableTicklerAnswerAction,
  QTicklerAnswerAction
> {
  private _TicklerActionType?: TicklerActionTypeService<ClientType>;
  private _TicklerAnswer?: TicklerAnswerService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTicklerAnswerAction);
  }

  public TicklerActionType(): TicklerActionTypeService<ClientType> {
    if (!this._TicklerActionType) {
      const { client, path } = this.__base;
      this._TicklerActionType = new TicklerActionTypeService(
        client,
        path,
        "TicklerActionType"
      );
    }

    return this._TicklerActionType;
  }

  public TicklerAnswer(): TicklerAnswerService<ClientType> {
    if (!this._TicklerAnswer) {
      const { client, path } = this.__base;
      this._TicklerAnswer = new TicklerAnswerService(
        client,
        path,
        "TicklerAnswer"
      );
    }

    return this._TicklerAnswer;
  }
}

export class TicklerAnswerActionCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TicklerAnswerAction,
  EditableTicklerAnswerAction,
  QTicklerAnswerAction,
  TicklerAnswerActionId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qTicklerAnswerAction,
      new QTicklerAnswerActionId(name)
    );
  }
}
