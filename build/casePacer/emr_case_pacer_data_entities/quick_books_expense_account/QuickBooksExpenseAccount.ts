import { Firm } from "../firm/Firm";

export interface QuickBooksExpenseAccount {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QBAccountId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  QBAccountId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  FirmId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QBListID` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  QBListID: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QBName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  QBName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
}

export type QuickBooksExpenseAccountId = number | { QBAccountId: number };

export interface EditableQuickBooksExpenseAccount
  extends Pick<QuickBooksExpenseAccount, "FirmId" | "QBListID" | "QBName"> {}
