import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Document, EditableDocument, DocumentId } from "./Document";
import { QDocument, qDocument, QDocumentId } from "./QDocument";
import { DocumentTemplateService } from "../document_template/DocumentTemplateService";
import { LawsuitService } from "../lawsuit/LawsuitService";
import { TicklerService } from "../tickler/TicklerService";
import { RecordService } from "../record/RecordService";
import { PartyService } from "../party/PartyService";

export class DocumentService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  Document,
  EditableDocument,
  QDocument
> {
  private _DocumentTemplate?: DocumentTemplateService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;
  private _OriginatingTickler?: TicklerService<ClientType>;
  private _Record?: RecordService<ClientType>;
  private _DocumentReceivedFromParty?: PartyService<ClientType>;
  private _ReceivedTickler?: TicklerService<ClientType>;
  private _DocumentSentToParty?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDocument);
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

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public OriginatingTickler(): TicklerService<ClientType> {
    if (!this._OriginatingTickler) {
      const { client, path } = this.__base;
      this._OriginatingTickler = new TicklerService(
        client,
        path,
        "OriginatingTickler"
      );
    }

    return this._OriginatingTickler;
  }

  public Record(): RecordService<ClientType> {
    if (!this._Record) {
      const { client, path } = this.__base;
      this._Record = new RecordService(client, path, "Record");
    }

    return this._Record;
  }

  public DocumentReceivedFromParty(): PartyService<ClientType> {
    if (!this._DocumentReceivedFromParty) {
      const { client, path } = this.__base;
      this._DocumentReceivedFromParty = new PartyService(
        client,
        path,
        "DocumentReceivedFromParty"
      );
    }

    return this._DocumentReceivedFromParty;
  }

  public ReceivedTickler(): TicklerService<ClientType> {
    if (!this._ReceivedTickler) {
      const { client, path } = this.__base;
      this._ReceivedTickler = new TicklerService(
        client,
        path,
        "ReceivedTickler"
      );
    }

    return this._ReceivedTickler;
  }

  public DocumentSentToParty(): PartyService<ClientType> {
    if (!this._DocumentSentToParty) {
      const { client, path } = this.__base;
      this._DocumentSentToParty = new PartyService(
        client,
        path,
        "DocumentSentToParty"
      );
    }

    return this._DocumentSentToParty;
  }
}

export class DocumentCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Document,
  EditableDocument,
  QDocument,
  DocumentId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDocument, new QDocumentId(name));
  }
}
