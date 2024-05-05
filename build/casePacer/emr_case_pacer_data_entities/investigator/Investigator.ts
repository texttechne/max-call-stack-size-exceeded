import { LawsuitParty } from "../lawsuit_party/LawsuitParty";
import { Lawsuit } from "../lawsuit/Lawsuit";

export interface Investigator {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InvestigatorId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  InvestigatorId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InvestigatorLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  InvestigatorLawsuitPartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Cost` |
   * | Type | `Edm.Decimal` |
   */
  Cost: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Notes` |
   * | Type | `Edm.String` |
   */
  Notes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InvestigatorLawsuitParty` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  InvestigatorLawsuitParty?: LawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
}

export type InvestigatorId = number | { InvestigatorId: number };

export interface EditableInvestigator
  extends Pick<Investigator, "InvestigatorLawsuitPartyId">,
    Partial<Pick<Investigator, "LawsuitId" | "Cost" | "Notes">> {}
