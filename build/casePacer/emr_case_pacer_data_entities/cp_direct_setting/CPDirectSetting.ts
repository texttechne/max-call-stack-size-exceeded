import { Firm } from "../firm/Firm";
import { CPDirectSettingLocation } from "../cp_direct_setting_location/CPDirectSettingLocation";

export interface CPDirectSetting {
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
   * | Name | `FirmName` |
   * | Type | `Edm.String` |
   */
  FirmName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmContactPhoneNumber` |
   * | Type | `Edm.String` |
   */
  FirmContactPhoneNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmContactEmail` |
   * | Type | `Edm.String` |
   */
  FirmContactEmail: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AboutFirmTitle` |
   * | Type | `Edm.String` |
   */
  AboutFirmTitle: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AboutFirmBody` |
   * | Type | `Edm.String` |
   */
  AboutFirmBody: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firebase_Android_Apn` |
   * | Type | `Edm.String` |
   */
  Firebase_Android_Apn: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firebase_Apple_Ibi` |
   * | Type | `Edm.String` |
   */
  Firebase_Apple_Ibi: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firebase_Apple_Isi` |
   * | Type | `Edm.String` |
   */
  Firebase_Apple_Isi: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AdditionalFirmIds` |
   * | Type | `Edm.String` |
   */
  AdditionalFirmIds: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MsgEnabled` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  MsgEnabled: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WebSlug` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  WebSlug: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectSettingLocations` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CPDirectSettingLocation)` |
   */
  CPDirectSettingLocations?: Array<CPDirectSettingLocation>;
}

export type CPDirectSettingId = number | { Id: number };

export interface EditableCPDirectSetting
  extends Pick<CPDirectSetting, "FirmId" | "MsgEnabled" | "WebSlug">,
    Partial<
      Pick<
        CPDirectSetting,
        | "FirmName"
        | "FirmContactPhoneNumber"
        | "FirmContactEmail"
        | "AboutFirmTitle"
        | "AboutFirmBody"
        | "Firebase_Android_Apn"
        | "Firebase_Apple_Ibi"
        | "Firebase_Apple_Isi"
        | "AdditionalFirmIds"
      >
    > {}
