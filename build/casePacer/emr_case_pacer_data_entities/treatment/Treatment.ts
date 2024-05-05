import { MedicalProvider } from "../medical_provider/MedicalProvider";

export interface Treatment {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TreatmentId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TreatmentId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalProviderId` |
   * | Type | `Edm.Int32` |
   */
  MedicalProviderId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TreatmentDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  TreatmentDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TreatmentAmount` |
   * | Type | `Edm.Decimal` |
   */
  TreatmentAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TreatmentEndDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  TreatmentEndDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UnpaidAmount` |
   * | Type | `Edm.Decimal` |
   */
  UnpaidAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReductionAmount` |
   * | Type | `Edm.Decimal` |
   */
  ReductionAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientPaymentAmount` |
   * | Type | `Edm.Decimal` |
   */
  ClientPaymentAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HealthInsPaymentAmount` |
   * | Type | `Edm.Decimal` |
   */
  HealthInsPaymentAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PipPaymentAmount` |
   * | Type | `Edm.Decimal` |
   */
  PipPaymentAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicarePaymentAmount` |
   * | Type | `Edm.Decimal` |
   */
  MedicarePaymentAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicaidPaymentAmount` |
   * | Type | `Edm.Decimal` |
   */
  MedicaidPaymentAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Note` |
   * | Type | `Edm.String` |
   */
  Note: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalProvider` |
   * | Type | `Emr.CasePacer.Data.Entities.MedicalProvider` |
   */
  MedicalProvider?: MedicalProvider | null;
}

export type TreatmentId = number | { TreatmentId: number };

export interface EditableTreatment
  extends Pick<Treatment, "TreatmentDate">,
    Partial<
      Pick<
        Treatment,
        | "MedicalProviderId"
        | "TreatmentAmount"
        | "TreatmentEndDate"
        | "UnpaidAmount"
        | "ReductionAmount"
        | "ClientPaymentAmount"
        | "HealthInsPaymentAmount"
        | "PipPaymentAmount"
        | "MedicarePaymentAmount"
        | "MedicaidPaymentAmount"
        | "Note"
      >
    > {}
