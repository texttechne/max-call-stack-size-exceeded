import { Firm } from "../firm/Firm";

export interface FirmAbbr {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmAbbrId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  FirmAbbrId: number;
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
   * | Name | `FirmAbbrName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  FirmAbbrName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Active` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Active: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BranchLiveKey` |
   * | Type | `Edm.String` |
   */
  BranchLiveKey: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BranchLiveSecret` |
   * | Type | `Edm.String` |
   */
  BranchLiveSecret: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BranchTestKey` |
   * | Type | `Edm.String` |
   */
  BranchTestKey: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BranchTestSecret` |
   * | Type | `Edm.String` |
   */
  BranchTestSecret: string | null;
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

export type FirmAbbrId = number | { FirmAbbrId: number };

export interface EditableFirmAbbr
  extends Pick<FirmAbbr, "FirmId" | "FirmAbbrName" | "Active">,
    Partial<
      Pick<
        FirmAbbr,
        | "BranchLiveKey"
        | "BranchLiveSecret"
        | "BranchTestKey"
        | "BranchTestSecret"
      >
    > {}
