import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QDiscovery } from "../discovery/QDiscovery";
import { DiscoveryTypeId } from "./DiscoveryType";

export class QDiscoveryType extends QueryObject {
  public readonly DiscoveryTypeId = new QNumberPath(
    this.withPrefix("DiscoveryTypeId")
  );
  public readonly DiscoveryTypeName = new QStringPath(
    this.withPrefix("DiscoveryTypeName")
  );
  public readonly Discoveries = new QEntityCollectionPath(
    this.withPrefix("Discoveries"),
    () => QDiscovery
  );
}

export const qDiscoveryType = new QDiscoveryType();

export class QDiscoveryTypeId extends QId<DiscoveryTypeId> {
  private readonly params = [new QNumberParam("DiscoveryTypeId")];

  getParams() {
    return this.params;
  }
}
