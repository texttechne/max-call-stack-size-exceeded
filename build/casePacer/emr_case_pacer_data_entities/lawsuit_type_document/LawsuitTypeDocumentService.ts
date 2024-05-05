import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  LawsuitTypeDocument,
  EditableLawsuitTypeDocument,
  LawsuitTypeDocumentId,
} from "./LawsuitTypeDocument";
import {
  QLawsuitTypeDocument,
  qLawsuitTypeDocument,
  QLawsuitTypeDocumentId,
} from "./QLawsuitTypeDocument";
import { DocumentTemplateService } from "../document_template/DocumentTemplateService";
import { LawsuitTypeService } from "../lawsuit_type/LawsuitTypeService";
import { RoleTemplateService } from "../role_template/RoleTemplateService";

export class LawsuitTypeDocumentService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LawsuitTypeDocument,
  EditableLawsuitTypeDocument,
  QLawsuitTypeDocument
> {
  private _DocumentTemplate?: DocumentTemplateService<ClientType>;
  private _LawsuitType?: LawsuitTypeService<ClientType>;
  private _RoleTemplate?: RoleTemplateService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitTypeDocument);
  }

  public DocumentTemplate(): DocumentTemplateService<ClientType> {
    if (!this._DocumentTemplate) {
      const { client, path } = this.__base;
      this._DocumentTemplate = new DocumentTemplateService(
        client,
        path,
        "DocumentTemplate"
      );
    }

    return this._DocumentTemplate;
  }

  public LawsuitType(): LawsuitTypeService<ClientType> {
    if (!this._LawsuitType) {
      const { client, path } = this.__base;
      this._LawsuitType = new LawsuitTypeService(client, path, "LawsuitType");
    }

    return this._LawsuitType;
  }

  public RoleTemplate(): RoleTemplateService<ClientType> {
    if (!this._RoleTemplate) {
      const { client, path } = this.__base;
      this._RoleTemplate = new RoleTemplateService(
        client,
        path,
        "RoleTemplate"
      );
    }

    return this._RoleTemplate;
  }
}

export class LawsuitTypeDocumentCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LawsuitTypeDocument,
  EditableLawsuitTypeDocument,
  QLawsuitTypeDocument,
  LawsuitTypeDocumentId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qLawsuitTypeDocument,
      new QLawsuitTypeDocumentId(name)
    );
  }
}
