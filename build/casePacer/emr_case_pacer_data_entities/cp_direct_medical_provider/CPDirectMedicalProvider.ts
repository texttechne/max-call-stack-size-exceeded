import { Address } from "../address/Address";
import { IntakeClientLawsuit } from "../intake_client_lawsuit/IntakeClientLawsuit";
import { CPDirectTreatmentNote } from "../cp_direct_treatment_note/CPDirectTreatmentNote";

export interface CPDirectMedicalProvider {
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
   * | Name | `IntakeClientLawsuitId` |
   * | Type | `Edm.Int32` |
   */
  IntakeClientLawsuitId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Name` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Name: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressId` |
   * | Type | `Edm.Int32` |
   */
  AddressId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Address` |
   * | Type | `Emr.CasePacer.Data.Entities.Address` |
   */
  Address?: Address | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientLawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.IntakeClientLawsuit` |
   */
  IntakeClientLawsuit?: IntakeClientLawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectTreatmentNotes` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CPDirectTreatmentNote)` |
   */
  CPDirectTreatmentNotes?: Array<CPDirectTreatmentNote>;
}

export type CPDirectMedicalProviderId = number | { Id: number };

export interface EditableCPDirectMedicalProvider
  extends Pick<CPDirectMedicalProvider, "Name">,
    Partial<
      Pick<CPDirectMedicalProvider, "IntakeClientLawsuitId" | "AddressId">
    > {}
