import { Firm } from "../firm/Firm";
import { IntakeClientLogin } from "../intake_client_login/IntakeClientLogin";
import { IntakeClientLawsuit } from "../intake_client_lawsuit/IntakeClientLawsuit";

export interface IntakeClientFirm {
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
   * | Name | `IntakeClientLoginId` |
   * | Type | `Edm.Int32` |
   */
  IntakeClientLoginId: number | null;
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
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientLogin` |
   * | Type | `Emr.CasePacer.Data.Entities.IntakeClientLogin` |
   */
  IntakeClientLogin?: IntakeClientLogin | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientLawsuits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.IntakeClientLawsuit)` |
   */
  IntakeClientLawsuits?: Array<IntakeClientLawsuit>;
}

export type IntakeClientFirmId = number | { Id: number };

export interface EditableIntakeClientFirm
  extends Pick<IntakeClientFirm, "FirmId">,
    Partial<Pick<IntakeClientFirm, "IntakeClientLoginId">> {}
