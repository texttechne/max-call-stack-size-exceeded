import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QADR } from "../adr/QADR";
import { ADRTypeId } from "./ADRType";

export class QADRType extends QueryObject {
  public readonly ADRTypeId = new QNumberPath(this.withPrefix("ADRTypeId"));
  public readonly ADRTypeName = new QStringPath(this.withPrefix("ADRTypeName"));
  public readonly ADRTypeRole = new QStringPath(this.withPrefix("ADRTypeRole"));
  public readonly ADRs = new QEntityCollectionPath(
    this.withPrefix("ADRs"),
    () => QADR
  );
}

export const qADRType = new QADRType();

export class QADRTypeId extends QId<ADRTypeId> {
  private readonly params = [new QNumberParam("ADRTypeId")];

  getParams() {
    return this.params;
  }
}
