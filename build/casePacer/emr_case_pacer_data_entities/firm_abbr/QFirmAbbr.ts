import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QBooleanPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QFirm } from "../firm/QFirm";
import { FirmAbbrId } from "./FirmAbbr";

export class QFirmAbbr extends QueryObject {
  public readonly FirmAbbrId = new QNumberPath(this.withPrefix("FirmAbbrId"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly FirmAbbrName = new QStringPath(
    this.withPrefix("FirmAbbrName")
  );
  public readonly Active = new QBooleanPath(this.withPrefix("Active"));
  public readonly BranchLiveKey = new QStringPath(
    this.withPrefix("BranchLiveKey")
  );
  public readonly BranchLiveSecret = new QStringPath(
    this.withPrefix("BranchLiveSecret")
  );
  public readonly BranchTestKey = new QStringPath(
    this.withPrefix("BranchTestKey")
  );
  public readonly BranchTestSecret = new QStringPath(
    this.withPrefix("BranchTestSecret")
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
}

export const qFirmAbbr = new QFirmAbbr();

export class QFirmAbbrId extends QId<FirmAbbrId> {
  private readonly params = [new QNumberParam("FirmAbbrId")];

  getParams() {
    return this.params;
  }
}
