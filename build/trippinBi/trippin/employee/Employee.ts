import { Person } from "../person/Person";
import { EditableLocation } from "../location/Location";

export interface Employee extends Person {
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Cost` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  Cost: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Peers` |
   * | Type | `Collection(Trippin.Person)` |
   */
  Peers?: Array<Person>;
}

export interface EditableEmployee
  extends Pick<
      Employee,
      "FirstName" | "Gender" | "FavoriteFeature" | "Features" | "Cost"
    >,
    Partial<Pick<Employee, "LastName" | "MiddleName" | "Age" | "Emails">> {
  AddressInfo?: Array<EditableLocation>;
  HomeAddress?: EditableLocation | null;
}
