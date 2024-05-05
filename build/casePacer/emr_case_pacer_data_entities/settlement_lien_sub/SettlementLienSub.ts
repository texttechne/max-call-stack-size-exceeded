import { LienSubrogation } from "../lien_subrogation/LienSubrogation";
import { Settlement } from "../settlement/Settlement";

export interface SettlementLienSub {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementLienSubId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SettlementLienSubId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementId` |
   * | Type | `Edm.Int32` |
   */
  SettlementId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LienSubrogationId` |
   * | Type | `Edm.Int32` |
   */
  LienSubrogationId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LienSubType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  LienSubType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CheckNumber` |
   * | Type | `Edm.Int32` |
   */
  CheckNumber: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClaimAmount` |
   * | Type | `Edm.Decimal` |
   */
  ClaimAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentAmount` |
   * | Type | `Edm.Decimal` |
   */
  PaymentAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NoticeReceivedFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  NoticeReceivedFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyFeeLetterSentFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  AttorneyFeeLetterSentFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemizedStatementRequiredFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ItemizedStatementRequiredFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemizedStatementReceivedFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ItemizedStatementReceivedFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentAmountConfirmationFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  PaymentAmountConfirmationFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentAmountReceivedFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  PaymentAmountReceivedFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Include` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Include: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LienSubrogation` |
   * | Type | `Emr.CasePacer.Data.Entities.LienSubrogation` |
   */
  LienSubrogation?: LienSubrogation | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Settlement` |
   * | Type | `Emr.CasePacer.Data.Entities.Settlement` |
   */
  Settlement?: Settlement | null;
}

export type SettlementLienSubId = number | { SettlementLienSubId: number };

export interface EditableSettlementLienSub
  extends Pick<
      SettlementLienSub,
      | "LienSubType"
      | "NoticeReceivedFlag"
      | "AttorneyFeeLetterSentFlag"
      | "ItemizedStatementRequiredFlag"
      | "ItemizedStatementReceivedFlag"
      | "PaymentAmountConfirmationFlag"
      | "PaymentAmountReceivedFlag"
      | "Include"
    >,
    Partial<
      Pick<
        SettlementLienSub,
        | "SettlementId"
        | "LienSubrogationId"
        | "CheckNumber"
        | "ClaimAmount"
        | "PaymentAmount"
      >
    > {}
