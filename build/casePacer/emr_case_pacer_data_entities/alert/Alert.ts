import { Firm } from "../firm/Firm";
import { Lawsuit } from "../lawsuit/Lawsuit";
import { Record } from "../record/Record";
import { CasePacerUser } from "../case_pacer_user/CasePacerUser";

export interface Alert {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AlertId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AlertId: number;
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
   * | Name | `UserId` |
   * | Type | `Edm.Int32` |
   */
  UserId: number | null;
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
   * | Name | `AlertDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  AlertDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AlertLevel` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  AlertLevel: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Description` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Description: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordId` |
   * | Type | `Edm.Int32` |
   */
  RecordId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActiveFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ActiveFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Counter` |
   * | Type | `Edm.Int16` |
   * | Nullable | `false` |
   */
  Counter: number;
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
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Record` |
   * | Type | `Emr.CasePacer.Data.Entities.Record` |
   */
  Record?: Record | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUser` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  CasePacerUser?: CasePacerUser | null;
}

export type AlertId = number | { AlertId: number };

export interface EditableAlert
  extends Pick<
      Alert,
      | "FirmId"
      | "AlertDate"
      | "AlertLevel"
      | "Description"
      | "ActiveFlag"
      | "Counter"
    >,
    Partial<Pick<Alert, "UserId" | "LawsuitId" | "RecordId">> {}
