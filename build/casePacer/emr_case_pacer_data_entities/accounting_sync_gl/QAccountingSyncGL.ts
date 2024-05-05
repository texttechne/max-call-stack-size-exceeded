import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLawsuitType } from "../lawsuit_type/QLawsuitType";
import { AccountingSyncGLId } from "./AccountingSyncGL";

export class QAccountingSyncGL extends QueryObject {
  public readonly LawsuitTypeId = new QNumberPath(
    this.withPrefix("LawsuitTypeId")
  );
  public readonly GLAccount = new QStringPath(this.withPrefix("GLAccount"));
  public readonly LawsuitType = new QEntityPath(
    this.withPrefix("LawsuitType"),
    () => QLawsuitType
  );
}

export const qAccountingSyncGL = new QAccountingSyncGL();

export class QAccountingSyncGLId extends QId<AccountingSyncGLId> {
  private readonly params = [new QNumberParam("LawsuitTypeId")];

  getParams() {
    return this.params;
  }
}
