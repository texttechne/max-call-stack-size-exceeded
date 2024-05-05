import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  LawsuitPartyType,
  EditableLawsuitPartyType,
  LawsuitPartyTypeId,
} from "./LawsuitPartyType";
import {
  QLawsuitPartyType,
  qLawsuitPartyType,
  QLawsuitPartyTypeId,
} from "./QLawsuitPartyType";
import { DepositionId } from "../deposition/Deposition";
import { QDepositionId } from "../deposition/QDeposition";
import {
  DepositionService,
  DepositionCollectionService,
} from "../deposition/DepositionService";
import { DocumentTemplateId } from "../document_template/DocumentTemplate";
import { QDocumentTemplateId } from "../document_template/QDocumentTemplate";
import {
  DocumentTemplateService,
  DocumentTemplateCollectionService,
} from "../document_template/DocumentTemplateService";
import { LawsuitPartyId } from "../lawsuit_party/LawsuitParty";
import { QLawsuitPartyId } from "../lawsuit_party/QLawsuitParty";
import {
  LawsuitPartyService,
  LawsuitPartyCollectionService,
} from "../lawsuit_party/LawsuitPartyService";
import { MailMergeId } from "../mail_merge/MailMerge";
import { QMailMergeId } from "../mail_merge/QMailMerge";
import {
  MailMergeService,
  MailMergeCollectionService,
} from "../mail_merge/MailMergeService";

export class LawsuitPartyTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LawsuitPartyType,
  EditableLawsuitPartyType,
  QLawsuitPartyType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitPartyType);
  }

  public DeponentDepositions(): DepositionCollectionService<ClientType>;
  public DeponentDepositions(id: DepositionId): DepositionService<ClientType>;
  public DeponentDepositions(id?: DepositionId | undefined) {
    const fieldName = "DeponentDepositions";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DepositionCollectionService(client, path, fieldName)
      : new DepositionService(
          client,
          path,
          new QDepositionId(fieldName).buildUrl(id)
        );
  }

  public DiscoveryOfDepositions(): DepositionCollectionService<ClientType>;
  public DiscoveryOfDepositions(
    id: DepositionId
  ): DepositionService<ClientType>;
  public DiscoveryOfDepositions(id?: DepositionId | undefined) {
    const fieldName = "DiscoveryOfDepositions";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DepositionCollectionService(client, path, fieldName)
      : new DepositionService(
          client,
          path,
          new QDepositionId(fieldName).buildUrl(id)
        );
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

  public LawsuitParties(): LawsuitPartyCollectionService<ClientType>;
  public LawsuitParties(id: LawsuitPartyId): LawsuitPartyService<ClientType>;
  public LawsuitParties(id?: LawsuitPartyId | undefined) {
    const fieldName = "LawsuitParties";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitPartyCollectionService(client, path, fieldName)
      : new LawsuitPartyService(
          client,
          path,
          new QLawsuitPartyId(fieldName).buildUrl(id)
        );
  }

  public MailMerges(): MailMergeCollectionService<ClientType>;
  public MailMerges(id: MailMergeId): MailMergeService<ClientType>;
  public MailMerges(id?: MailMergeId | undefined) {
    const fieldName = "MailMerges";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new MailMergeCollectionService(client, path, fieldName)
      : new MailMergeService(
          client,
          path,
          new QMailMergeId(fieldName).buildUrl(id)
        );
  }
}

export class LawsuitPartyTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LawsuitPartyType,
  EditableLawsuitPartyType,
  QLawsuitPartyType,
  LawsuitPartyTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qLawsuitPartyType,
      new QLawsuitPartyTypeId(name)
    );
  }
}
