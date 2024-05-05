import { Deposition } from "../deposition/Deposition";
import { DocumentTemplate } from "../document_template/DocumentTemplate";
import { LawsuitParty } from "../lawsuit_party/LawsuitParty";
import { MailMerge } from "../mail_merge/MailMerge";

export interface LawsuitPartyType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPartyTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  LawsuitPartyTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPartyTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  LawsuitPartyTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocumentTemplateRecipient` |
   * | Type | `Edm.String` |
   */
  DocumentTemplateRecipient: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocumentDivId` |
   * | Type | `Edm.String` |
   */
  DocumentDivId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeponentDepositions` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Deposition)` |
   */
  DeponentDepositions?: Array<Deposition>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryOfDepositions` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Deposition)` |
   */
  DiscoveryOfDepositions?: Array<Deposition>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocumentTemplates` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.DocumentTemplate)` |
   */
  DocumentTemplates?: Array<DocumentTemplate>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitParties` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitParty)` |
   */
  LawsuitParties?: Array<LawsuitParty>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MailMerges` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.MailMerge)` |
   */
  MailMerges?: Array<MailMerge>;
}

export type LawsuitPartyTypeId = number | { LawsuitPartyTypeId: number };

export interface EditableLawsuitPartyType
  extends Pick<LawsuitPartyType, "LawsuitPartyTypeName">,
    Partial<
      Pick<LawsuitPartyType, "DocumentTemplateRecipient" | "DocumentDivId">
    > {}
