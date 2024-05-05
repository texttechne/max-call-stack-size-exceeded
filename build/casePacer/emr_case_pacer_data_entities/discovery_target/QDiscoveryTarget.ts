import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QDiscovery } from "../discovery/QDiscovery";
import { DiscoveryTargetId } from "./DiscoveryTarget";

export class QDiscoveryTarget extends QueryObject {
  public readonly DiscoveryTargetId = new QNumberPath(
    this.withPrefix("DiscoveryTargetId")
  );
  public readonly DiscoveryTargetName = new QStringPath(
    this.withPrefix("DiscoveryTargetName")
  );
  public readonly Discoveries = new QEntityCollectionPath(
    this.withPrefix("Discoveries"),
    () => QDiscovery
  );
}

export const qDiscoveryTarget = new QDiscoveryTarget();

export class QDiscoveryTargetId extends QId<DiscoveryTargetId> {
  private readonly params = [new QNumberParam("DiscoveryTargetId")];

  getParams() {
    return this.params;
  }
}
