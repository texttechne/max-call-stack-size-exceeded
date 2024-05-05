import { PublicTransportation } from "../public_transportation/PublicTransportation";
import { Airline } from "../airline/Airline";
import { Airport } from "../airport/Airport";

export interface Flight extends PublicTransportation {
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FlightNumber` |
   * | Type | `Edm.String` |
   */
  FlightNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Airline` |
   * | Type | `Trippin.Airline` |
   */
  Airline?: Airline | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `From` |
   * | Type | `Trippin.Airport` |
   */
  From?: Airport | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `To` |
   * | Type | `Trippin.Airport` |
   */
  To?: Airport | null;
}

export interface EditableFlight
  extends Pick<Flight, "StartsAt" | "EndsAt" | "Duration">,
    Partial<Pick<Flight, "ConfirmationCode" | "SeatNumber" | "FlightNumber">> {}
