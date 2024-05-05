import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  ClientFormStatus,
  EditableClientFormStatus,
  ClientFormStatusId,
} from "./ClientFormStatus";
import {
  QClientFormStatus,
  qClientFormStatus,
  QClientFormStatusId,
} from "./QClientFormStatus";
import { ClientFormId } from "../client_form/ClientForm";
import { QClientFormId } from "../client_form/QClientForm";
import {
  ClientFormService,
  ClientFormCollectionService,
} from "../client_form/ClientFormService";

export class ClientFormStatusService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  ClientFormStatus,
  EditableClientFormStatus,
  QClientFormStatus
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qClientFormStatus);
  }

  public ClientForms(): ClientFormCollectionService<ClientType>;
  public ClientForms(id: ClientFormId): ClientFormService<ClientType>;
  public ClientForms(id?: ClientFormId | undefined) {
    const fieldName = "ClientForms";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ClientFormCollectionService(client, path, fieldName)
      : new ClientFormService(
          client,
          path,
          new QClientFormId(fieldName).buildUrl(id)
        );
  }
}

export class ClientFormStatusCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ClientFormStatus,
  EditableClientFormStatus,
  QClientFormStatus,
  ClientFormStatusId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qClientFormStatus,
      new QClientFormStatusId(name)
    );
  }
}
