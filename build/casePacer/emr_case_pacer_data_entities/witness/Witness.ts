import { LawsuitParty } from "../lawsuit_party/LawsuitParty";
import { WitnessType } from "../witness_type/WitnessType";
import { WitnessLitigationAssn } from "../witness_litigation_assn/WitnessLitigationAssn";

export interface Witness {
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  WitnessTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StatementNeeded` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  StatementNeeded: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StatementReceived` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  StatementReceived: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QuestionnaireNeeded` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  QuestionnaireNeeded: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QuestionnaireReceived` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  QuestionnaireReceived: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QuestionnaireRequest1Date` |
   * | Type | `Edm.DateTimeOffset` |
   */
  QuestionnaireRequest1Date: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QuestionnaireRequest2Date` |
   * | Type | `Edm.DateTimeOffset` |
   */
  QuestionnaireRequest2Date: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessNotes` |
   * | Type | `Edm.String` |
   */
  WitnessNotes: string | null;
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPartyId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitParty` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  LawsuitParty?: LawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessType` |
   * | Type | `Emr.CasePacer.Data.Entities.WitnessType` |
   */
  WitnessType?: WitnessType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessLitigationAssns` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.WitnessLitigationAssn)` |
   */
  WitnessLitigationAssns?: Array<WitnessLitigationAssn>;
}

export type WitnessId = number | { LawsuitPartyId: number | null };

export interface EditableWitness
  extends Pick<
      Witness,
      | "WitnessTypeId"
      | "StatementNeeded"
      | "StatementReceived"
      | "QuestionnaireNeeded"
      | "QuestionnaireReceived"
    >,
    Partial<
      Pick<
        Witness,
        | "QuestionnaireRequest1Date"
        | "QuestionnaireRequest2Date"
        | "WitnessNotes"
      >
    > {}
