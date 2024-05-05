import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QDeposition } from "../deposition/QDeposition";
import { QDocumentTemplate } from "../document_template/QDocumentTemplate";
import { QLawsuitParty } from "../lawsuit_party/QLawsuitParty";
import { QMailMerge } from "../mail_merge/QMailMerge";
import { LawsuitPartyTypeId } from "./LawsuitPartyType";

export class QLawsuitPartyType extends QueryObject {
  public readonly LawsuitPartyTypeId = new QNumberPath(
    this.withPrefix("LawsuitPartyTypeId")
  );
  public readonly LawsuitPartyTypeName = new QStringPath(
    this.withPrefix("LawsuitPartyTypeName")
  );
  public readonly DocumentTemplateRecipient = new QStringPath(
    this.withPrefix("DocumentTemplateRecipient")
  );
  public readonly DocumentDivId = new QStringPath(
    this.withPrefix("DocumentDivId")
  );
  public readonly DeponentDepositions = new QEntityCollectionPath(
    this.withPrefix("DeponentDepositions"),
    () => QDeposition
  );
  public readonly DiscoveryOfDepositions = new QEntityCollectionPath(
    this.withPrefix("DiscoveryOfDepositions"),
    () => QDeposition
  );
  public readonly DocumentTemplates = new QEntityCollectionPath(
    this.withPrefix("DocumentTemplates"),
    () => QDocumentTemplate
  );
  public readonly LawsuitParties = new QEntityCollectionPath(
    this.withPrefix("LawsuitParties"),
    () => QLawsuitParty
  );
  public readonly MailMerges = new QEntityCollectionPath(
    this.withPrefix("MailMerges"),
    () => QMailMerge
  );
}

export const qLawsuitPartyType = new QLawsuitPartyType();

export class QLawsuitPartyTypeId extends QId<LawsuitPartyTypeId> {
  private readonly params = [new QNumberParam("LawsuitPartyTypeId")];

  getParams() {
    return this.params;
  }
}
