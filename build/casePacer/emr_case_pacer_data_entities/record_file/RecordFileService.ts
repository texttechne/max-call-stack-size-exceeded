import {
  ODataModelResponseV4,
  ODataValueResponseV4,
} from "@odata2ts/odata-core";
import {
  ODataHttpClient,
  ODataHttpClientConfig,
  HttpResponseModel,
} from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  RecordFile,
  EditableRecordFile,
  RecordFileId,
  RecordFile_GetUrlParams,
  RecordFile_PutUrlParams,
  RecordFile_InitiateMultipartParams,
  RecordFile_PutMultipartUrlParams,
  RecordFile_CompleteMultipartParams,
  RecordFile_ValidateParams,
} from "./RecordFile";
import {
  QRecordFile,
  qRecordFile,
  QRecordFileId,
  RecordFile_QGetUrl,
  RecordFile_QPutUrl,
  RecordFile_QInitiateMultipart,
  RecordFile_QPutMultipartUrl,
  RecordFile_QCompleteMultipart,
  RecordFile_QValidate,
} from "./QRecordFile";
import { RecordFolderService } from "../record_folder/RecordFolderService";
import { DocumentTemplateId } from "../document_template/DocumentTemplate";
import { QDocumentTemplateId } from "../document_template/QDocumentTemplate";
import {
  DocumentTemplateService,
  DocumentTemplateCollectionService,
} from "../document_template/DocumentTemplateService";
import { EmailId } from "../email/Email";
import { QEmailId } from "../email/QEmail";
import { EmailService, EmailCollectionService } from "../email/EmailService";
import { PartyId } from "../party/Party";
import { QPartyId } from "../party/QParty";
import { PartyService, PartyCollectionService } from "../party/PartyService";
import { RecordId } from "../record/Record";
import { QRecordId } from "../record/QRecord";
import {
  RecordService,
  RecordCollectionService,
} from "../record/RecordService";
import { RecordFileRelationshipId } from "../record_file_relationship/RecordFileRelationship";
import { QRecordFileRelationshipId } from "../record_file_relationship/QRecordFileRelationship";
import {
  RecordFileRelationshipService,
  RecordFileRelationshipCollectionService,
} from "../record_file_relationship/RecordFileRelationshipService";

export class RecordFileService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  RecordFile,
  EditableRecordFile,
  QRecordFile
> {
  private _RecordFolder?: RecordFolderService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qRecordFile);
  }

  public RecordFolder(): RecordFolderService<ClientType> {
    if (!this._RecordFolder) {
      const { client, path } = this.__base;
      this._RecordFolder = new RecordFolderService(
        client,
        path,
        "RecordFolder"
      );
    }

    return this._RecordFolder;
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

  public Emails(): EmailCollectionService<ClientType>;
  public Emails(id: EmailId): EmailService<ClientType>;
  public Emails(id?: EmailId | undefined) {
    const fieldName = "Emails";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new EmailCollectionService(client, path, fieldName)
      : new EmailService(client, path, new QEmailId(fieldName).buildUrl(id));
  }

  public PartiesByImage(): PartyCollectionService<ClientType>;
  public PartiesByImage(id: PartyId): PartyService<ClientType>;
  public PartiesByImage(id?: PartyId | undefined) {
    const fieldName = "PartiesByImage";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PartyCollectionService(client, path, fieldName)
      : new PartyService(client, path, new QPartyId(fieldName).buildUrl(id));
  }

  public Records(): RecordCollectionService<ClientType>;
  public Records(id: RecordId): RecordService<ClientType>;
  public Records(id?: RecordId | undefined) {
    const fieldName = "Records";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RecordCollectionService(client, path, fieldName)
      : new RecordService(client, path, new QRecordId(fieldName).buildUrl(id));
  }

  public RecordFileRelationships(): RecordFileRelationshipCollectionService<ClientType>;
  public RecordFileRelationships(
    id: RecordFileRelationshipId
  ): RecordFileRelationshipService<ClientType>;
  public RecordFileRelationships(id?: RecordFileRelationshipId | undefined) {
    const fieldName = "RecordFileRelationships";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RecordFileRelationshipCollectionService(client, path, fieldName)
      : new RecordFileRelationshipService(
          client,
          path,
          new QRecordFileRelationshipId(fieldName).buildUrl(id)
        );
  }
}

export class RecordFileCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  RecordFile,
  EditableRecordFile,
  QRecordFile,
  RecordFileId
> {
  private _RecordFile_QGetUrl?: RecordFile_QGetUrl;
  private _RecordFile_QPutUrl?: RecordFile_QPutUrl;
  private _RecordFile_QInitiateMultipart?: RecordFile_QInitiateMultipart;
  private _RecordFile_QPutMultipartUrl?: RecordFile_QPutMultipartUrl;
  private _RecordFile_QCompleteMultipart?: RecordFile_QCompleteMultipart;
  private _RecordFile_QValidate?: RecordFile_QValidate;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qRecordFile, new QRecordFileId(name));
  }

  public async GetUrl(
    params: RecordFile_GetUrlParams,
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): Promise<HttpResponseModel<ODataModelResponseV4<RecordFile>>> {
    if (!this._RecordFile_QGetUrl) {
      this._RecordFile_QGetUrl = new RecordFile_QGetUrl();
    }

    const { addFullPath, client, getDefaultHeaders } = this.__base;
    const url = addFullPath(this._RecordFile_QGetUrl.buildUrl(params));
    const response = await client.get(url, requestConfig, getDefaultHeaders());
    return this._RecordFile_QGetUrl.convertResponse(response);
  }

  public async PutUrl(
    params: RecordFile_PutUrlParams,
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): Promise<HttpResponseModel<ODataModelResponseV4<RecordFile>>> {
    if (!this._RecordFile_QPutUrl) {
      this._RecordFile_QPutUrl = new RecordFile_QPutUrl();
    }

    const { addFullPath, client, getDefaultHeaders } = this.__base;
    const url = addFullPath(this._RecordFile_QPutUrl.buildUrl(params));
    const response = await client.get(url, requestConfig, getDefaultHeaders());
    return this._RecordFile_QPutUrl.convertResponse(response);
  }

  public async InitiateMultipart(
    params: RecordFile_InitiateMultipartParams,
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): Promise<HttpResponseModel<ODataModelResponseV4<RecordFile>>> {
    if (!this._RecordFile_QInitiateMultipart) {
      this._RecordFile_QInitiateMultipart = new RecordFile_QInitiateMultipart();
    }

    const { addFullPath, client, getDefaultHeaders } = this.__base;
    const url = addFullPath(
      this._RecordFile_QInitiateMultipart.buildUrl(params)
    );
    const response = await client.get(url, requestConfig, getDefaultHeaders());
    return this._RecordFile_QInitiateMultipart.convertResponse(response);
  }

  public async PutMultipartUrl(
    params: RecordFile_PutMultipartUrlParams,
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): Promise<HttpResponseModel<ODataModelResponseV4<RecordFile>>> {
    if (!this._RecordFile_QPutMultipartUrl) {
      this._RecordFile_QPutMultipartUrl = new RecordFile_QPutMultipartUrl();
    }

    const { addFullPath, client, getDefaultHeaders } = this.__base;
    const url = addFullPath(this._RecordFile_QPutMultipartUrl.buildUrl(params));
    const response = await client.get(url, requestConfig, getDefaultHeaders());
    return this._RecordFile_QPutMultipartUrl.convertResponse(response);
  }

  public async CompleteMultipart(
    params: RecordFile_CompleteMultipartParams,
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): Promise<HttpResponseModel<ODataValueResponseV4<boolean>>> {
    if (!this._RecordFile_QCompleteMultipart) {
      this._RecordFile_QCompleteMultipart = new RecordFile_QCompleteMultipart();
    }

    const { addFullPath, client, getDefaultHeaders } = this.__base;
    const url = addFullPath(
      this._RecordFile_QCompleteMultipart.buildUrl(params)
    );
    const response = await client.get(url, requestConfig, getDefaultHeaders());
    return this._RecordFile_QCompleteMultipart.convertResponse(response);
  }

  public async Validate(
    params: RecordFile_ValidateParams,
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): Promise<HttpResponseModel<ODataModelResponseV4<RecordFile>>> {
    if (!this._RecordFile_QValidate) {
      this._RecordFile_QValidate = new RecordFile_QValidate();
    }

    const { addFullPath, client, getDefaultHeaders } = this.__base;
    const url = addFullPath(this._RecordFile_QValidate.buildUrl(params));
    const response = await client.get(url, requestConfig, getDefaultHeaders());
    return this._RecordFile_QValidate.convertResponse(response);
  }
}
