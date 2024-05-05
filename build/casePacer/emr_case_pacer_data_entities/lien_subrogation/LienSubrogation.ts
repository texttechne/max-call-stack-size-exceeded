import { Lawsuit } from "../lawsuit/Lawsuit";
import { LienSubrogationPaymentType } from "../lien_subrogation_payment_type/LienSubrogationPaymentType";
import { Party } from "../party/Party";
import { SettlementLienSub } from "../settlement_lien_sub/SettlementLienSub";

export interface LienSubrogation {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LienSubrogationId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  LienSubrogationId: number;
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
   * | Name | `SubrogeeLienHolderPartyId` |
   * | Type | `Edm.Int32` |
   */
  SubrogeeLienHolderPartyId: number | null;
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
   * | Name | `PaymentTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PaymentTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Type` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Type: string;
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
   * | Name | `ClaimNumber` |
   * | Type | `Edm.String` |
   */
  ClaimNumber: string | null;
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
   * | Name | `LienSubrogationNotes` |
   * | Type | `Edm.String` |
   */
  LienSubrogationNotes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SubrogeeLienHolderOtherName` |
   * | Type | `Edm.String` |
   */
  SubrogeeLienHolderOtherName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlanName` |
   * | Type | `Edm.String` |
   */
  PlanName: string | null;
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
   * | Name | `PaymentType` |
   * | Type | `Emr.CasePacer.Data.Entities.LienSubrogationPaymentType` |
   */
  PaymentType?: LienSubrogationPaymentType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Plaintiff` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Plaintiff?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SubrogeeLienHolder` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  SubrogeeLienHolder?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementLienSubs` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SettlementLienSub)` |
   */
  SettlementLienSubs?: Array<SettlementLienSub>;
}

export type LienSubrogationId = number | { LienSubrogationId: number };

export interface EditableLienSubrogation
  extends Pick<
      LienSubrogation,
      | "PlaintiffPartyId"
      | "PaymentTypeId"
      | "Type"
      | "NoticeReceivedFlag"
      | "AttorneyFeeLetterSentFlag"
      | "ItemizedStatementRequiredFlag"
      | "ItemizedStatementReceivedFlag"
      | "PaymentAmountConfirmationFlag"
      | "PaymentAmountReceivedFlag"
    >,
    Partial<
      Pick<
        LienSubrogation,
        | "LawsuitId"
        | "SubrogeeLienHolderPartyId"
        | "ClaimNumber"
        | "ClaimAmount"
        | "PaymentAmount"
        | "LienSubrogationNotes"
        | "SubrogeeLienHolderOtherName"
        | "PlanName"
      >
    > {}
