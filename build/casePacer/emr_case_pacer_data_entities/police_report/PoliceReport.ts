import { Lawsuit } from "../lawsuit/Lawsuit";
import { LawsuitParty } from "../lawsuit_party/LawsuitParty";

export interface PoliceReport {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PoliceReportId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PoliceReportId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PoliceDepartmentLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PoliceDepartmentLawsuitPartyId: number;
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
   * | Name | `DateRequested` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DateRequested: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NeededFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  NeededFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReceivedFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ReceivedFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Cost` |
   * | Type | `Edm.Decimal` |
   */
  Cost: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PoliceReportNumber` |
   * | Type | `Edm.String` |
   */
  PoliceReportNumber: string | null;
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
   * | Name | `PoliceDepartmentLawsuitParty` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  PoliceDepartmentLawsuitParty?: LawsuitParty | null;
}

export type PoliceReportId = number | { PoliceReportId: number };

export interface EditablePoliceReport
  extends Pick<
      PoliceReport,
      "PoliceDepartmentLawsuitPartyId" | "NeededFlag" | "ReceivedFlag"
    >,
    Partial<
      Pick<
        PoliceReport,
        "LawsuitId" | "DateRequested" | "Cost" | "PoliceReportNumber"
      >
    > {}
