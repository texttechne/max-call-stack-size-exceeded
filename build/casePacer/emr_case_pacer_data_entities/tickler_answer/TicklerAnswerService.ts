import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  TicklerAnswer,
  EditableTicklerAnswer,
  TicklerAnswerId,
} from "./TicklerAnswer";
import {
  QTicklerAnswer,
  qTicklerAnswer,
  QTicklerAnswerId,
} from "./QTicklerAnswer";
import { TicklerTemplateService } from "../tickler_template/TicklerTemplateService";
import { TicklerId } from "../tickler/Tickler";
import { QTicklerId } from "../tickler/QTickler";
import {
  TicklerService,
  TicklerCollectionService,
} from "../tickler/TicklerService";
import { TicklerAnswerActionId } from "../tickler_answer_action/TicklerAnswerAction";
import { QTicklerAnswerActionId } from "../tickler_answer_action/QTicklerAnswerAction";
import {
  TicklerAnswerActionService,
  TicklerAnswerActionCollectionService,
} from "../tickler_answer_action/TicklerAnswerActionService";

export class TicklerAnswerService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TicklerAnswer,
  EditableTicklerAnswer,
  QTicklerAnswer
> {
  private _TicklerTemplate?: TicklerTemplateService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTicklerAnswer);
  }

  public TicklerTemplate(): TicklerTemplateService<ClientType> {
    if (!this._TicklerTemplate) {
      const { client, path } = this.__base;
      this._TicklerTemplate = new TicklerTemplateService(
        client,
        path,
        "TicklerTemplate"
      );
    }

    return this._TicklerTemplate;
  }

  public Ticklers(): TicklerCollectionService<ClientType>;
  public Ticklers(id: TicklerId): TicklerService<ClientType>;
  public Ticklers(id?: TicklerId | undefined) {
    const fieldName = "Ticklers";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TicklerCollectionService(client, path, fieldName)
      : new TicklerService(
          client,
          path,
          new QTicklerId(fieldName).buildUrl(id)
        );
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

export class TicklerAnswerCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TicklerAnswer,
  EditableTicklerAnswer,
  QTicklerAnswer,
  TicklerAnswerId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTicklerAnswer, new QTicklerAnswerId(name));
  }
}
