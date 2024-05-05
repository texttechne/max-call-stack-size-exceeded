import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  DocumentTemplate,
  EditableDocumentTemplate,
  DocumentTemplateId,
} from "./DocumentTemplate";
import {
  QDocumentTemplate,
  qDocumentTemplate,
  QDocumentTemplateId,
} from "./QDocumentTemplate";
import { FirmService } from "../firm/FirmService";
import { LawsuitPartyTypeService } from "../lawsuit_party_type/LawsuitPartyTypeService";
import { RecordFileService } from "../record_file/RecordFileService";
import { RoleTemplateService } from "../role_template/RoleTemplateService";
import { DocumentId } from "../document/Document";
import { QDocumentId } from "../document/QDocument";
import {
  DocumentService,
  DocumentCollectionService,
} from "../document/DocumentService";
import { LawsuitTypeDocumentId } from "../lawsuit_type_document/LawsuitTypeDocument";
import { QLawsuitTypeDocumentId } from "../lawsuit_type_document/QLawsuitTypeDocument";
import {
  LawsuitTypeDocumentService,
  LawsuitTypeDocumentCollectionService,
} from "../lawsuit_type_document/LawsuitTypeDocumentService";
import { PartyId } from "../party/Party";
import { QPartyId } from "../party/QParty";
import { PartyService, PartyCollectionService } from "../party/PartyService";

export class DocumentTemplateService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  DocumentTemplate,
  EditableDocumentTemplate,
  QDocumentTemplate
> {
  private _SystemDocumentTemplate?: DocumentTemplateService<ClientType>;
  private _Firm?: FirmService<ClientType>;
  private _RecipientLawsuitPartyType?: LawsuitPartyTypeService<ClientType>;
  private _RecordFile?: RecordFileService<ClientType>;
  private _RoleTemplate?: RoleTemplateService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDocumentTemplate);
  }

  public SystemDocumentTemplate(): DocumentTemplateService<ClientType> {
    if (!this._SystemDocumentTemplate) {
      const { client, path } = this.__base;
      this._SystemDocumentTemplate = new DocumentTemplateService(
        client,
        path,
        "SystemDocumentTemplate"
      );
    }

    return this._SystemDocumentTemplate;
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public RecipientLawsuitPartyType(): LawsuitPartyTypeService<ClientType> {
    if (!this._RecipientLawsuitPartyType) {
      const { client, path } = this.__base;
      this._RecipientLawsuitPartyType = new LawsuitPartyTypeService(
        client,
        path,
        "RecipientLawsuitPartyType"
      );
    }

    return this._RecipientLawsuitPartyType;
  }

  public RecordFile(): RecordFileService<ClientType> {
    if (!this._RecordFile) {
      const { client, path } = this.__base;
      this._RecordFile = new RecordFileService(client, path, "RecordFile");
    }

    return this._RecordFile;
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

  public Documents(): DocumentCollectionService<ClientType>;
  public Documents(id: DocumentId): DocumentService<ClientType>;
  public Documents(id?: DocumentId | undefined) {
    const fieldName = "Documents";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DocumentCollectionService(client, path, fieldName)
      : new DocumentService(
          client,
          path,
          new QDocumentId(fieldName).buildUrl(id)
        );
  }

  public DocumentTemplatesFromSystemTemplate(): DocumentTemplateCollectionService<ClientType>;
  public DocumentTemplatesFromSystemTemplate(
    id: DocumentTemplateId
  ): DocumentTemplateService<ClientType>;
  public DocumentTemplatesFromSystemTemplate(
    id?: DocumentTemplateId | undefined
  ) {
    const fieldName = "DocumentTemplatesFromSystemTemplate";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DocumentTemplateCollectionService(client, path, fieldName)
      : new DocumentTemplateService(
          client,
          path,
          new QDocumentTemplateId(fieldName).buildUrl(id)
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

  public Parties(): PartyCollectionService<ClientType>;
  public Parties(id: PartyId): PartyService<ClientType>;
  public Parties(id?: PartyId | undefined) {
    const fieldName = "Parties";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PartyCollectionService(client, path, fieldName)
      : new PartyService(client, path, new QPartyId(fieldName).buildUrl(id));
  }
}

export class DocumentTemplateCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  DocumentTemplate,
  EditableDocumentTemplate,
  QDocumentTemplate,
  DocumentTemplateId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qDocumentTemplate,
      new QDocumentTemplateId(name)
    );
  }
}
