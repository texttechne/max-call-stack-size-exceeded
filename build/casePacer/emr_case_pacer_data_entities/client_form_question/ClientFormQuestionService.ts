import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  ClientFormQuestion,
  EditableClientFormQuestion,
  ClientFormQuestionId,
} from "./ClientFormQuestion";
import {
  QClientFormQuestion,
  qClientFormQuestion,
  QClientFormQuestionId,
} from "./QClientFormQuestion";
import { ClientFormComponentService } from "../client_form_component/ClientFormComponentService";
import { ClientFormScreenService } from "../client_form_screen/ClientFormScreenService";

export class ClientFormQuestionService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  ClientFormQuestion,
  EditableClientFormQuestion,
  QClientFormQuestion
> {
  private _ClientFormComponent?: ClientFormComponentService<ClientType>;
  private _ClientFormScreen?: ClientFormScreenService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qClientFormQuestion);
  }

  public ClientFormComponent(): ClientFormComponentService<ClientType> {
    if (!this._ClientFormComponent) {
      const { client, path } = this.__base;
      this._ClientFormComponent = new ClientFormComponentService(
        client,
        path,
        "ClientFormComponent"
      );
    }

    return this._ClientFormComponent;
  }

  public ClientFormScreen(): ClientFormScreenService<ClientType> {
    if (!this._ClientFormScreen) {
      const { client, path } = this.__base;
      this._ClientFormScreen = new ClientFormScreenService(
        client,
        path,
        "ClientFormScreen"
      );
    }

    return this._ClientFormScreen;
  }
}

export class ClientFormQuestionCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ClientFormQuestion,
  EditableClientFormQuestion,
  QClientFormQuestion,
  ClientFormQuestionId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qClientFormQuestion,
      new QClientFormQuestionId(name)
    );
  }
}
