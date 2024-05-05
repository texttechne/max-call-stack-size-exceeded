import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  LawsuitTypeClientForm,
  EditableLawsuitTypeClientForm,
  LawsuitTypeClientFormId,
} from "./LawsuitTypeClientForm";
import {
  QLawsuitTypeClientForm,
  qLawsuitTypeClientForm,
  QLawsuitTypeClientFormId,
} from "./QLawsuitTypeClientForm";
import { ClientFormService } from "../client_form/ClientFormService";
import { LawsuitTypeService } from "../lawsuit_type/LawsuitTypeService";

export class LawsuitTypeClientFormService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LawsuitTypeClientForm,
  EditableLawsuitTypeClientForm,
  QLawsuitTypeClientForm
> {
  private _ClientForm?: ClientFormService<ClientType>;
  private _LawsuitType?: LawsuitTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitTypeClientForm);
  }

  public ClientForm(): ClientFormService<ClientType> {
    if (!this._ClientForm) {
      const { client, path } = this.__base;
      this._ClientForm = new ClientFormService(client, path, "ClientForm");
    }

    return this._ClientForm;
  }

  public LawsuitType(): LawsuitTypeService<ClientType> {
    if (!this._LawsuitType) {
      const { client, path } = this.__base;
      this._LawsuitType = new LawsuitTypeService(client, path, "LawsuitType");
    }

    return this._LawsuitType;
  }
}

export class LawsuitTypeClientFormCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LawsuitTypeClientForm,
  EditableLawsuitTypeClientForm,
  QLawsuitTypeClientForm,
  LawsuitTypeClientFormId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qLawsuitTypeClientForm,
      new QLawsuitTypeClientFormId(name)
    );
  }
}
