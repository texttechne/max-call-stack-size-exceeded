import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  LawsuitClientForm,
  EditableLawsuitClientForm,
  LawsuitClientFormId,
} from "./LawsuitClientForm";
import {
  QLawsuitClientForm,
  qLawsuitClientForm,
  QLawsuitClientFormId,
} from "./QLawsuitClientForm";
import { LawsuitService } from "../lawsuit/LawsuitService";

export class LawsuitClientFormService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LawsuitClientForm,
  EditableLawsuitClientForm,
  QLawsuitClientForm
> {
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitClientForm);
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }
}

export class LawsuitClientFormCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LawsuitClientForm,
  EditableLawsuitClientForm,
  QLawsuitClientForm,
  LawsuitClientFormId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qLawsuitClientForm,
      new QLawsuitClientFormId(name)
    );
  }
}
