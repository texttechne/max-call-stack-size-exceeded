import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QFirm } from "../firm/QFirm";
import { ExternalImportKeyId } from "./ExternalImportKey";

export class QExternalImportKey extends QueryObject {
  public readonly ExternalImportKeyId = new QNumberPath(
    this.withPrefix("ExternalImportKeyId")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly ExternalKey = new QStringPath(this.withPrefix("ExternalKey"));
  public readonly ExternalGroup = new QStringPath(
    this.withPrefix("ExternalGroup")
  );
  public readonly ObjectType = new QStringPath(this.withPrefix("ObjectType"));
  public readonly ObjectId = new QNumberPath(this.withPrefix("ObjectId"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
}

export const qExternalImportKey = new QExternalImportKey();

export class QExternalImportKeyId extends QId<ExternalImportKeyId> {
  private readonly params = [new QNumberParam("ExternalImportKeyId")];

  getParams() {
    return this.params;
  }
}
