import { LawsuitParty } from "../lawsuit_party/LawsuitParty";
import { Lawsuit } from "../lawsuit/Lawsuit";

export interface MedicalEvaluation {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalEvaluationId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  MedicalEvaluationId: number;
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
   * | Name | `StatusId` |
   * | Type | `Edm.Int32` |
   */
  StatusId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SpecialtyId` |
   * | Type | `Edm.Int32` |
   */
  SpecialtyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  AppointmentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentTime` |
   * | Type | `Edm.Duration` |
   */
  AppointmentTime: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TransportationNeeded` |
   * | Type | `Edm.Boolean` |
   */
  TransportationNeeded: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PrepDone` |
   * | Type | `Edm.Boolean` |
   */
  PrepDone: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PreMENotes` |
   * | Type | `Edm.String` |
   */
  PreMENotes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReportReceived` |
   * | Type | `Edm.Boolean` |
   */
  ReportReceived: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CutoffId` |
   * | Type | `Edm.Int32` |
   */
  CutoffId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CutoffDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  CutoffDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CutoffNotes` |
   * | Type | `Edm.String` |
   */
  CutoffNotes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RequestorLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   */
  RequestorLawsuitPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DoctorLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   */
  DoctorLawsuitPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PrepByLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   */
  PrepByLawsuitPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DoctorLawsuitParty` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  DoctorLawsuitParty?: LawsuitParty | null;
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
   * | Name | `PrepByLawsuitParty` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  PrepByLawsuitParty?: LawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RequestorLawsuitParty` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  RequestorLawsuitParty?: LawsuitParty | null;
}

export type MedicalEvaluationId = number | { MedicalEvaluationId: number };

export interface EditableMedicalEvaluation
  extends Partial<
    Pick<
      MedicalEvaluation,
      | "LawsuitId"
      | "StatusId"
      | "SpecialtyId"
      | "AppointmentDate"
      | "AppointmentTime"
      | "TransportationNeeded"
      | "PrepDone"
      | "PreMENotes"
      | "ReportReceived"
      | "CutoffId"
      | "CutoffDate"
      | "CutoffNotes"
      | "RequestorLawsuitPartyId"
      | "DoctorLawsuitPartyId"
      | "PrepByLawsuitPartyId"
    >
  > {}
