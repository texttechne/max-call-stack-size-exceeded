import { LawsuitType } from "../lawsuit_type/LawsuitType";
import { RoleTemplate } from "../role_template/RoleTemplate";
import { TicklerTemplate } from "../tickler_template/TicklerTemplate";

export interface LawsuitTypeTickler {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitTypeTicklerId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  LawsuitTypeTicklerId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitTypeId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerTemplateId` |
   * | Type | `Edm.Int32` |
   */
  TicklerTemplateId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RoleTemplateId` |
   * | Type | `Edm.Int32` |
   */
  RoleTemplateId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultToPrimaryAttorney` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  DefaultToPrimaryAttorney: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitType` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitType` |
   */
  LawsuitType?: LawsuitType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RoleTemplate` |
   * | Type | `Emr.CasePacer.Data.Entities.RoleTemplate` |
   */
  RoleTemplate?: RoleTemplate | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerTemplate` |
   * | Type | `Emr.CasePacer.Data.Entities.TicklerTemplate` |
   */
  TicklerTemplate?: TicklerTemplate | null;
}

export type LawsuitTypeTicklerId = number | { LawsuitTypeTicklerId: number };

export interface EditableLawsuitTypeTickler
  extends Pick<LawsuitTypeTickler, "DefaultToPrimaryAttorney">,
    Partial<
      Pick<
        LawsuitTypeTickler,
        "LawsuitTypeId" | "TicklerTemplateId" | "RoleTemplateId"
      >
    > {}
