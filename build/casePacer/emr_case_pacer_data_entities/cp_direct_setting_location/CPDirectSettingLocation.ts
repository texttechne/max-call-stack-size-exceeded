import { CPDirectSetting } from "../cp_direct_setting/CPDirectSetting";

export interface CPDirectSettingLocation {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectSettingId` |
   * | Type | `Edm.Int32` |
   */
  CPDirectSettingId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LocationName` |
   * | Type | `Edm.String` |
   */
  LocationName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Address1` |
   * | Type | `Edm.String` |
   */
  Address1: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Address2` |
   * | Type | `Edm.String` |
   */
  Address2: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `City` |
   * | Type | `Edm.String` |
   */
  City: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `State` |
   * | Type | `Edm.String` |
   */
  State: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ZipCode` |
   * | Type | `Edm.String` |
   */
  ZipCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectSetting` |
   * | Type | `Emr.CasePacer.Data.Entities.CPDirectSetting` |
   */
  CPDirectSetting?: CPDirectSetting | null;
}

export type CPDirectSettingLocationId = number | { Id: number };

export interface EditableCPDirectSettingLocation
  extends Partial<
    Pick<
      CPDirectSettingLocation,
      | "CPDirectSettingId"
      | "LocationName"
      | "Address1"
      | "Address2"
      | "City"
      | "State"
      | "ZipCode"
    >
  > {}
