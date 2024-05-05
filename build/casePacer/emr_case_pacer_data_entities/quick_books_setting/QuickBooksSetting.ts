import { Firm } from "../firm/Firm";

export interface QuickBooksSetting {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QuickBooksSettingsId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  QuickBooksSettingsId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmPartyId` |
   * | Type | `Edm.Int32` |
   */
  FirmPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Username` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Username: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Password` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Password: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultBankAccount` |
   * | Type | `Edm.String` |
   */
  DefaultBankAccount: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultExpenseAccount` |
   * | Type | `Edm.String` |
   */
  DefaultExpenseAccount: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsEnabled` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  IsEnabled: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UpdateListsFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  UpdateListsFlag: boolean;
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

export type QuickBooksSettingId = number | { QuickBooksSettingsId: number };

export interface EditableQuickBooksSetting
  extends Pick<
      QuickBooksSetting,
      "Username" | "Password" | "IsEnabled" | "UpdateListsFlag"
    >,
    Partial<
      Pick<
        QuickBooksSetting,
        "FirmPartyId" | "DefaultBankAccount" | "DefaultExpenseAccount"
      >
    > {}
