import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Tickler, EditableTickler, TicklerId } from "./Tickler";
import { QTickler, qTickler, QTicklerId } from "./QTickler";
import { TicklerAnswerService } from "../tickler_answer/TicklerAnswerService";
import { CasePacerUserService } from "../case_pacer_user/CasePacerUserService";
import { FirmService } from "../firm/FirmService";
import { LawsuitService } from "../lawsuit/LawsuitService";
import { LawsuitPartyService } from "../lawsuit_party/LawsuitPartyService";
import { TicklerTemplateService } from "../tickler_template/TicklerTemplateService";
import { DocumentId } from "../document/Document";
import { QDocumentId } from "../document/QDocument";
import {
  DocumentService,
  DocumentCollectionService,
} from "../document/DocumentService";

export class TicklerService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Tickler, EditableTickler, QTickler> {
  private _TicklerAnswer?: TicklerAnswerService<ClientType>;
  private _ClosingUser?: CasePacerUserService<ClientType>;
  private _Firm?: FirmService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;
  private _AssignedLawsuitParty?: LawsuitPartyService<ClientType>;
  private _TicklerTemplate?: TicklerTemplateService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTickler);
  }

  public TicklerAnswer(): TicklerAnswerService<ClientType> {
    if (!this._TicklerAnswer) {
      const { client, path } = this.__base;
      this._TicklerAnswer = new TicklerAnswerService(
        client,
        path,
        "TicklerAnswer"
      );
    }

    return this._TicklerAnswer;
  }

  public ClosingUser(): CasePacerUserService<ClientType> {
    if (!this._ClosingUser) {
      const { client, path } = this.__base;
      this._ClosingUser = new CasePacerUserService(client, path, "ClosingUser");
    }

    return this._ClosingUser;
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public AssignedLawsuitParty(): LawsuitPartyService<ClientType> {
    if (!this._AssignedLawsuitParty) {
      const { client, path } = this.__base;
      this._AssignedLawsuitParty = new LawsuitPartyService(
        client,
        path,
        "AssignedLawsuitParty"
      );
    }

    return this._AssignedLawsuitParty;
  }

  public TicklerTemplate(): TicklerTemplateService<ClientType> {
    if (!this._TicklerTemplate) {
      const { client, path } = this.__base;
      this._TicklerTemplate = new TicklerTemplateService(
        client,
        path,
        "TicklerTemplate"
      );
    }

    return this._TicklerTemplate;
  }

  public OriginatingTicklerDocuments(): DocumentCollectionService<ClientType>;
  public OriginatingTicklerDocuments(
    id: DocumentId
  ): DocumentService<ClientType>;
  public OriginatingTicklerDocuments(id?: DocumentId | undefined) {
    const fieldName = "OriginatingTicklerDocuments";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DocumentCollectionService(client, path, fieldName)
      : new DocumentService(
          client,
          path,
          new QDocumentId(fieldName).buildUrl(id)
        );
  }

  public ReceivedTicklerDocuments(): DocumentCollectionService<ClientType>;
  public ReceivedTicklerDocuments(id: DocumentId): DocumentService<ClientType>;
  public ReceivedTicklerDocuments(id?: DocumentId | undefined) {
    const fieldName = "ReceivedTicklerDocuments";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DocumentCollectionService(client, path, fieldName)
      : new DocumentService(
          client,
          path,
          new QDocumentId(fieldName).buildUrl(id)
        );
  }
}

export class TicklerCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Tickler,
  EditableTickler,
  QTickler,
  TicklerId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTickler, new QTicklerId(name));
  }
}
