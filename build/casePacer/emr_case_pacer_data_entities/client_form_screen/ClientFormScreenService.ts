import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  ClientFormScreen,
  EditableClientFormScreen,
  ClientFormScreenId,
} from "./ClientFormScreen";
import {
  QClientFormScreen,
  qClientFormScreen,
  QClientFormScreenId,
} from "./QClientFormScreen";
import { ClientFormService } from "../client_form/ClientFormService";
import { ClientFormQuestionId } from "../client_form_question/ClientFormQuestion";
import { QClientFormQuestionId } from "../client_form_question/QClientFormQuestion";
import {
  ClientFormQuestionService,
  ClientFormQuestionCollectionService,
} from "../client_form_question/ClientFormQuestionService";

export class ClientFormScreenService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  ClientFormScreen,
  EditableClientFormScreen,
  QClientFormScreen
> {
  private _ClientForm?: ClientFormService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qClientFormScreen);
  }

  public ClientForm(): ClientFormService<ClientType> {
    if (!this._ClientForm) {
      const { client, path } = this.__base;
      this._ClientForm = new ClientFormService(client, path, "ClientForm");
    }

    return this._ClientForm;
  }

  public ClientFormQuestions(): ClientFormQuestionCollectionService<ClientType>;
  public ClientFormQuestions(
    id: ClientFormQuestionId
  ): ClientFormQuestionService<ClientType>;
  public ClientFormQuestions(id?: ClientFormQuestionId | undefined) {
    const fieldName = "ClientFormQuestions";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ClientFormQuestionCollectionService(client, path, fieldName)
      : new ClientFormQuestionService(
          client,
          path,
          new QClientFormQuestionId(fieldName).buildUrl(id)
        );
  }
}

export class ClientFormScreenCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ClientFormScreen,
  EditableClientFormScreen,
  QClientFormScreen,
  ClientFormScreenId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qClientFormScreen,
      new QClientFormScreenId(name)
    );
  }
}
