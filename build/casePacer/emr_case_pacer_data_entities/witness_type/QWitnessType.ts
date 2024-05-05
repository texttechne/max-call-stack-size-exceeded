import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QWitness } from "../witness/QWitness";
import { WitnessTypeId } from "./WitnessType";

export class QWitnessType extends QueryObject {
  public readonly WitnessTypeID = new QNumberPath(
    this.withPrefix("WitnessTypeID")
  );
  public readonly WitnessTypeName = new QStringPath(
    this.withPrefix("WitnessTypeName")
  );
  public readonly Witnesses = new QEntityCollectionPath(
    this.withPrefix("Witnesses"),
    () => QWitness
  );
}

export const qWitnessType = new QWitnessType();

export class QWitnessTypeId extends QId<WitnessTypeId> {
  private readonly params = [new QNumberParam("WitnessTypeID")];

  getParams() {
    return this.params;
  }
}
