import {
  QNumberPath,
  QEntityCollectionPath,
} from "@odata2ts/odata-query-objects";
import { QPerson } from "../person/QPerson";

export class QEmployee extends QPerson {
  public readonly Cost = new QNumberPath(this.withPrefix("Cost"));
  public readonly Peers = new QEntityCollectionPath(
    this.withPrefix("Peers"),
    () => QPerson
  );
}

export const qEmployee = new QEmployee();
