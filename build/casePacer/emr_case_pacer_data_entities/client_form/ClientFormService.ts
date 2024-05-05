import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { ClientForm, EditableClientForm, ClientFormId } from "./ClientForm";
import { QClientForm, qClientForm, QClientFormId } from "./QClientForm";
import { ClientFormStatusService } from "../client_form_status/ClientFormStatusService";
import { FirmService } from "../firm/FirmService";
import { ClientFormScreenId } from "../client_form_screen/ClientFormScreen";
import { QClientFormScreenId } from "../client_form_screen/QClientFormScreen";
import {
  ClientFormScreenService,
  ClientFormScreenCollectionService,
} from "../client_form_screen/ClientFormScreenService";
import { LawsuitTypeClientFormId } from "../lawsuit_type_client_form/LawsuitTypeClientForm";
import { QLawsuitTypeClientFormId } from "../lawsuit_type_client_form/QLawsuitTypeClientForm";
import {
  LawsuitTypeClientFormService,
  LawsuitTypeClientFormCollectionService,
} from "../lawsuit_type_client_form/LawsuitTypeClientFormService";

export class ClientFormService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  ClientForm,
  EditableClientForm,
  QClientForm
> {
  private _ClientFormStatus?: ClientFormStatusService<ClientType>;
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qClientForm);
  }

  public ClientFormStatus(): ClientFormStatusService<ClientType> {
    if (!this._ClientFormStatus) {
      const { client, path } = this.__base;
      this._ClientFormStatus = new ClientFormStatusService(
        client,
        path,
        "ClientFormStatus"
      );
    }

    return this._ClientFormStatus;
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public ClientFormScreens(): ClientFormScreenCollectionService<ClientType>;
  public ClientFormScreens(
    id: ClientFormScreenId
  ): ClientFormScreenService<ClientType>;
  public ClientFormScreens(id?: ClientFormScreenId | undefined) {
    const fieldName = "ClientFormScreens";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ClientFormScreenCollectionService(client, path, fieldName)
      : new ClientFormScreenService(
          client,
          path,
          new QClientFormScreenId(fieldName).buildUrl(id)
        );
  }

  public LawsuitTypeClientForms(): LawsuitTypeClientFormCollectionService<ClientType>;
  public LawsuitTypeClientForms(
    id: LawsuitTypeClientFormId
  ): LawsuitTypeClientFormService<ClientType>;
  public LawsuitTypeClientForms(id?: LawsuitTypeClientFormId | undefined) {
    const fieldName = "LawsuitTypeClientForms";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitTypeClientFormCollectionService(client, path, fieldName)
      : new LawsuitTypeClientFormService(
          client,
          path,
          new QLawsuitTypeClientFormId(fieldName).buildUrl(id)
        );
  }
}

export class ClientFormCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ClientForm,
  EditableClientForm,
  QClientForm,
  ClientFormId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qClientForm, new QClientFormId(name));
  }
}
