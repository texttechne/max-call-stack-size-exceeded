import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  TicklerTemplateAction,
  EditableTicklerTemplateAction,
  TicklerTemplateActionId,
} from "./TicklerTemplateAction";
import {
  QTicklerTemplateAction,
  qTicklerTemplateAction,
  QTicklerTemplateActionId,
} from "./QTicklerTemplateAction";
import { TicklerTemplateService } from "../tickler_template/TicklerTemplateService";

export class TicklerTemplateActionService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TicklerTemplateAction,
  EditableTicklerTemplateAction,
  QTicklerTemplateAction
> {
  private _ParentTickler?: TicklerTemplateService<ClientType>;
  private _ChildTickler?: TicklerTemplateService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTicklerTemplateAction);
  }

  public ParentTickler(): TicklerTemplateService<ClientType> {
    if (!this._ParentTickler) {
      const { client, path } = this.__base;
      this._ParentTickler = new TicklerTemplateService(
        client,
        path,
        "ParentTickler"
      );
    }

    return this._ParentTickler;
  }

  public ChildTickler(): TicklerTemplateService<ClientType> {
    if (!this._ChildTickler) {
      const { client, path } = this.__base;
      this._ChildTickler = new TicklerTemplateService(
        client,
        path,
        "ChildTickler"
      );
    }

    return this._ChildTickler;
  }
}

export class TicklerTemplateActionCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TicklerTemplateAction,
  EditableTicklerTemplateAction,
  QTicklerTemplateAction,
  TicklerTemplateActionId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qTicklerTemplateAction,
      new QTicklerTemplateActionId(name)
    );
  }
}
