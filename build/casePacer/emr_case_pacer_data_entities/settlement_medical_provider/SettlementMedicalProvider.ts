import { MedicalProvider } from "../medical_provider/MedicalProvider";
import { Settlement } from "../settlement/Settlement";

export interface SettlementMedicalProvider {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementMedicalProviderId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SettlementMedicalProviderId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementId` |
   * | Type | `Edm.Int32` |
   */
  SettlementId: number | null;
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
   * | Name | `CheckNumber` |
   * | Type | `Edm.Int32` |
   */
  CheckNumber: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TreatmentCost` |
   * | Type | `Edm.Decimal` |
   */
  TreatmentCost: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementAmount` |
   * | Type | `Edm.Decimal` |
   */
  SettlementAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Verify` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Verify: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Include` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Include: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Notes` |
   * | Type | `Edm.String` |
   */
  Notes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalProvider` |
   * | Type | `Emr.CasePacer.Data.Entities.MedicalProvider` |
   */
  MedicalProvider?: MedicalProvider | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Settlement` |
   * | Type | `Emr.CasePacer.Data.Entities.Settlement` |
   */
  Settlement?: Settlement | null;
}

export type SettlementMedicalProviderId =
  | number
  | { SettlementMedicalProviderId: number };

export interface EditableSettlementMedicalProvider
  extends Pick<SettlementMedicalProvider, "Verify" | "Include">,
    Partial<
      Pick<
        SettlementMedicalProvider,
        | "SettlementId"
        | "MedicalProviderId"
        | "CheckNumber"
        | "TreatmentCost"
        | "SettlementAmount"
        | "Notes"
      >
    > {}
