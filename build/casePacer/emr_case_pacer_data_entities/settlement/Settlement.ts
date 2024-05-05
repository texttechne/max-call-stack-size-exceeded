import { Lawsuit } from "../lawsuit/Lawsuit";
import { Party } from "../party/Party";
import { Expense } from "../expense/Expense";
import { SettlementExpense } from "../settlement_expense/SettlementExpense";
import { SettlementItem } from "../settlement_item/SettlementItem";
import { SettlementLienSub } from "../settlement_lien_sub/SettlementLienSub";
import { SettlementMedicalProvider } from "../settlement_medical_provider/SettlementMedicalProvider";

export interface Settlement {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SettlementId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PlaintiffPartyId: number;
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
   * | Name | `AttyFeesPct` |
   * | Type | `Edm.Decimal` |
   */
  AttyFeesPct: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttyFeesTotal` |
   * | Type | `Edm.Decimal` |
   */
  AttyFeesTotal: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Amount` |
   * | Type | `Edm.Decimal` |
   */
  Amount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettleDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  SettleDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffParty` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  PlaintiffParty?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Expenses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Expense)` |
   */
  Expenses?: Array<Expense>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementExpenses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SettlementExpense)` |
   */
  SettlementExpenses?: Array<SettlementExpense>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementItems` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SettlementItem)` |
   */
  SettlementItems?: Array<SettlementItem>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementLienSubs` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SettlementLienSub)` |
   */
  SettlementLienSubs?: Array<SettlementLienSub>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementMedicalProviders` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SettlementMedicalProvider)` |
   */
  SettlementMedicalProviders?: Array<SettlementMedicalProvider>;
}

export type SettlementId = number | { SettlementId: number };

export interface EditableSettlement
  extends Pick<Settlement, "PlaintiffPartyId">,
    Partial<
      Pick<
        Settlement,
        "LawsuitId" | "AttyFeesPct" | "AttyFeesTotal" | "Amount" | "SettleDate"
      >
    > {}
