import { Person } from "../person/Person";
import { Location, EditableLocation } from "../location/Location";

export interface Manager extends Person {
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Budget` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  Budget: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BossOffice` |
   * | Type | `Trippin.Location` |
   */
  BossOffice: Location | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DirectReports` |
   * | Type | `Collection(Trippin.Person)` |
   */
  DirectReports?: Array<Person>;
}

export interface EditableManager
  extends Pick<
      Manager,
      "FirstName" | "Gender" | "FavoriteFeature" | "Features" | "Budget"
    >,
    Partial<Pick<Manager, "LastName" | "MiddleName" | "Age" | "Emails">> {
  AddressInfo?: Array<EditableLocation>;
  HomeAddress?: EditableLocation | null;
  BossOffice?: EditableLocation | null;
}
