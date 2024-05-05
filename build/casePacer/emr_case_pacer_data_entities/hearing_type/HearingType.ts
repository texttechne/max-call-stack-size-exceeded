import { Hearing } from "../hearing/Hearing";

export interface HearingType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HearingTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  HearingTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HearingTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  HearingTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HearingTypeRole` |
   * | Type | `Edm.String` |
   */
  HearingTypeRole: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Hearings` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Hearing)` |
   */
  Hearings?: Array<Hearing>;
}

export type HearingTypeId = number | { HearingTypeId: number };

export interface EditableHearingType
  extends Pick<HearingType, "HearingTypeName">,
    Partial<Pick<HearingType, "HearingTypeRole">> {}
