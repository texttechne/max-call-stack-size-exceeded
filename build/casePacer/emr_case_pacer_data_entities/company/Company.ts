import { Party } from "../party/Party";
import { PropertyDamage } from "../property_damage/PropertyDamage";

export interface Company extends Party {
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CompanyName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  CompanyName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ESN` |
   * | Type | `Edm.String` |
   */
  ESN: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RepairCompanyPropertyDamages` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PropertyDamage)` |
   */
  RepairCompanyPropertyDamages?: Array<PropertyDamage>;
}

export interface EditableCompany
  extends Pick<
      Company,
      "QuickEntry" | "PayeeExpenseSyncFlag" | "DoNotText" | "CompanyName"
    >,
    Partial<
      Pick<
        Company,
        | "PartyTypeId"
        | "ParentFirmId"
        | "IsDeleted"
        | "Notes"
        | "DisplayName"
        | "ExternalFirmName"
        | "Website"
        | "AttyBarNumber"
        | "HeaderDocumentTemplateId"
        | "QBVendorId"
        | "GlobalPartyId"
        | "GuardianExecutorId"
        | "ImageId"
        | "ESN"
      >
    > {}
