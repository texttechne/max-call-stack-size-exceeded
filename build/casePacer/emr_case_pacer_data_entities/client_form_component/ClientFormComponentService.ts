import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  ClientFormComponent,
  EditableClientFormComponent,
  ClientFormComponentId,
} from "./ClientFormComponent";
import {
  QClientFormComponent,
  qClientFormComponent,
  QClientFormComponentId,
} from "./QClientFormComponent";
import { ClientFormQuestionId } from "../client_form_question/ClientFormQuestion";
import { QClientFormQuestionId } from "../client_form_question/QClientFormQuestion";
import {
  ClientFormQuestionService,
  ClientFormQuestionCollectionService,
} from "../client_form_question/ClientFormQuestionService";

export class ClientFormComponentService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  ClientFormComponent,
  EditableClientFormComponent,
  QClientFormComponent
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qClientFormComponent);
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

export class ClientFormComponentCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ClientFormComponent,
  EditableClientFormComponent,
  QClientFormComponent,
  ClientFormComponentId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qClientFormComponent,
      new QClientFormComponentId(name)
    );
  }
}
