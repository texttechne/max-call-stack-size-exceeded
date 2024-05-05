import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  RoleTemplate,
  EditableRoleTemplate,
  RoleTemplateId,
} from "./RoleTemplate";
import { QRoleTemplate, qRoleTemplate, QRoleTemplateId } from "./QRoleTemplate";
import { CasePacerUserService } from "../case_pacer_user/CasePacerUserService";
import { FirmService } from "../firm/FirmService";
import { LawsuitTypeService } from "../lawsuit_type/LawsuitTypeService";
import { DocumentTemplateId } from "../document_template/DocumentTemplate";
import { QDocumentTemplateId } from "../document_template/QDocumentTemplate";
import {
  DocumentTemplateService,
  DocumentTemplateCollectionService,
} from "../document_template/DocumentTemplateService";
import { LawsuitRoleId } from "../lawsuit_role/LawsuitRole";
import { QLawsuitRoleId } from "../lawsuit_role/QLawsuitRole";
import {
  LawsuitRoleService,
  LawsuitRoleCollectionService,
} from "../lawsuit_role/LawsuitRoleService";
import { LawsuitTypeDocumentId } from "../lawsuit_type_document/LawsuitTypeDocument";
import { QLawsuitTypeDocumentId } from "../lawsuit_type_document/QLawsuitTypeDocument";
import {
  LawsuitTypeDocumentService,
  LawsuitTypeDocumentCollectionService,
} from "../lawsuit_type_document/LawsuitTypeDocumentService";
import { LawsuitTypeTicklerId } from "../lawsuit_type_tickler/LawsuitTypeTickler";
import { QLawsuitTypeTicklerId } from "../lawsuit_type_tickler/QLawsuitTypeTickler";
import {
  LawsuitTypeTicklerService,
  LawsuitTypeTicklerCollectionService,
} from "../lawsuit_type_tickler/LawsuitTypeTicklerService";
import { TicklerTemplateId } from "../tickler_template/TicklerTemplate";
import { QTicklerTemplateId } from "../tickler_template/QTicklerTemplate";
import {
  TicklerTemplateService,
  TicklerTemplateCollectionService,
} from "../tickler_template/TicklerTemplateService";

export class RoleTemplateService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  RoleTemplate,
  EditableRoleTemplate,
  QRoleTemplate
> {
  private _CasePacerUser?: CasePacerUserService<ClientType>;
  private _Firm?: FirmService<ClientType>;
  private _LawsuitType?: LawsuitTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qRoleTemplate);
  }

  public CasePacerUser(): CasePacerUserService<ClientType> {
    if (!this._CasePacerUser) {
      const { client, path } = this.__base;
      this._CasePacerUser = new CasePacerUserService(
        client,
        path,
        "CasePacerUser"
      );
    }

    return this._CasePacerUser;
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public LawsuitType(): LawsuitTypeService<ClientType> {
    if (!this._LawsuitType) {
      const { client, path } = this.__base;
      this._LawsuitType = new LawsuitTypeService(client, path, "LawsuitType");
    }

    return this._LawsuitType;
  }

  public DocumentTemplates(): DocumentTemplateCollectionService<ClientType>;
  public DocumentTemplates(
    id: DocumentTemplateId
  ): DocumentTemplateService<ClientType>;
  public DocumentTemplates(id?: DocumentTemplateId | undefined) {
    const fieldName = "DocumentTemplates";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DocumentTemplateCollectionService(client, path, fieldName)
      : new DocumentTemplateService(
          client,
          path,
          new QDocumentTemplateId(fieldName).buildUrl(id)
        );
  }

  public LawsuitRoles(): LawsuitRoleCollectionService<ClientType>;
  public LawsuitRoles(id: LawsuitRoleId): LawsuitRoleService<ClientType>;
  public LawsuitRoles(id?: LawsuitRoleId | undefined) {
    const fieldName = "LawsuitRoles";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitRoleCollectionService(client, path, fieldName)
      : new LawsuitRoleService(
          client,
          path,
          new QLawsuitRoleId(fieldName).buildUrl(id)
        );
  }

  public LawsuitTypeDocuments(): LawsuitTypeDocumentCollectionService<ClientType>;
  public LawsuitTypeDocuments(
    id: LawsuitTypeDocumentId
  ): LawsuitTypeDocumentService<ClientType>;
  public LawsuitTypeDocuments(id?: LawsuitTypeDocumentId | undefined) {
    const fieldName = "LawsuitTypeDocuments";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitTypeDocumentCollectionService(client, path, fieldName)
      : new LawsuitTypeDocumentService(
          client,
          path,
          new QLawsuitTypeDocumentId(fieldName).buildUrl(id)
        );
  }

  public LawsuitTypeTicklers(): LawsuitTypeTicklerCollectionService<ClientType>;
  public LawsuitTypeTicklers(
    id: LawsuitTypeTicklerId
  ): LawsuitTypeTicklerService<ClientType>;
  public LawsuitTypeTicklers(id?: LawsuitTypeTicklerId | undefined) {
    const fieldName = "LawsuitTypeTicklers";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitTypeTicklerCollectionService(client, path, fieldName)
      : new LawsuitTypeTicklerService(
          client,
          path,
          new QLawsuitTypeTicklerId(fieldName).buildUrl(id)
        );
  }

  public TicklerTemplates(): TicklerTemplateCollectionService<ClientType>;
  public TicklerTemplates(
    id: TicklerTemplateId
  ): TicklerTemplateService<ClientType>;
  public TicklerTemplates(id?: TicklerTemplateId | undefined) {
    const fieldName = "TicklerTemplates";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TicklerTemplateCollectionService(client, path, fieldName)
      : new TicklerTemplateService(
          client,
          path,
          new QTicklerTemplateId(fieldName).buildUrl(id)
        );
  }
}

export class RoleTemplateCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  RoleTemplate,
  EditableRoleTemplate,
  QRoleTemplate,
  RoleTemplateId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qRoleTemplate, new QRoleTemplateId(name));
  }
}
