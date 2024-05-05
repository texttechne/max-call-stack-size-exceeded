import { Firm } from "../firm/Firm";

export interface PaymentInfo {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
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
   * | Name | `IsCreditCard` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  IsCreditCard: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InstitutionName` |
   * | Type | `Edm.String` |
   */
  InstitutionName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AccountNum` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  AccountNum: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AccountType` |
   * | Type | `Edm.String` |
   */
  AccountType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AbaRouting` |
   * | Type | `Edm.String` |
   */
  AbaRouting: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Expiration` |
   * | Type | `Edm.DateTimeOffset` |
   */
  Expiration: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NameOnAccount` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  NameOnAccount: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BillStreet` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  BillStreet: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BillCity` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  BillCity: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BillState` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  BillState: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BillZip` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  BillZip: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CVV` |
   * | Type | `Edm.String` |
   */
  CVV: string | null;
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

export type PaymentInfoId = number | { FirmId: number };

export interface EditablePaymentInfo
  extends Pick<
      PaymentInfo,
      | "IsCreditCard"
      | "AccountNum"
      | "NameOnAccount"
      | "BillStreet"
      | "BillCity"
      | "BillState"
      | "BillZip"
    >,
    Partial<
      Pick<
        PaymentInfo,
        "InstitutionName" | "AccountType" | "AbaRouting" | "Expiration" | "CVV"
      >
    > {}
