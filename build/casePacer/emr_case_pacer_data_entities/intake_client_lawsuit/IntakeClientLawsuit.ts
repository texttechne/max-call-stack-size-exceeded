import { CPDirectCaseProgress } from "../cp_direct_case_progress/CPDirectCaseProgress";
import { IntakeClientFirm } from "../intake_client_firm/IntakeClientFirm";
import { Lawsuit } from "../lawsuit/Lawsuit";
import { CPDirectMedicalProvider } from "../cp_direct_medical_provider/CPDirectMedicalProvider";
import { CPDirectMessage } from "../cp_direct_message/CPDirectMessage";

export interface IntakeClientLawsuit {
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
   * | Name | `IntakeClientFirmId` |
   * | Type | `Edm.Int32` |
   */
  IntakeClientFirmId: number | null;
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
   * | Name | `PlaintiffPartyId` |
   * | Type | `Edm.Int32` |
   */
  PlaintiffPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectCaseProgressId` |
   * | Type | `Edm.Int32` |
   */
  CPDirectCaseProgressId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectCaseProgress` |
   * | Type | `Emr.CasePacer.Data.Entities.CPDirectCaseProgress` |
   */
  CPDirectCaseProgress?: CPDirectCaseProgress | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientFirm` |
   * | Type | `Emr.CasePacer.Data.Entities.IntakeClientFirm` |
   */
  IntakeClientFirm?: IntakeClientFirm | null;
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
   * | Name | `CPDirectMedicalProviders` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CPDirectMedicalProvider)` |
   */
  CPDirectMedicalProviders?: Array<CPDirectMedicalProvider>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectMessages` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CPDirectMessage)` |
   */
  CPDirectMessages?: Array<CPDirectMessage>;
}

export type IntakeClientLawsuitId = number | { Id: number };

export interface EditableIntakeClientLawsuit
  extends Partial<
    Pick<
      IntakeClientLawsuit,
      | "IntakeClientFirmId"
      | "LawsuitId"
      | "PlaintiffPartyId"
      | "CPDirectCaseProgressId"
    >
  > {}
