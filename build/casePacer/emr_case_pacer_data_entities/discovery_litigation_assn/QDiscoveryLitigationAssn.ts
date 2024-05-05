import {
  QueryObject,
  QNumberPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QDiscovery } from "../discovery/QDiscovery";
import { QLitigation } from "../litigation/QLitigation";
import { DiscoveryLitigationAssnId } from "./DiscoveryLitigationAssn";

export class QDiscoveryLitigationAssn extends QueryObject {
  public readonly DiscoveryLitigationAssnId = new QNumberPath(
    this.withPrefix("DiscoveryLitigationAssnId")
  );
  public readonly DiscoveryId = new QNumberPath(this.withPrefix("DiscoveryId"));
  public readonly LitigationId = new QNumberPath(
    this.withPrefix("LitigationId")
  );
  public readonly Discovery = new QEntityPath(
    this.withPrefix("Discovery"),
    () => QDiscovery
  );
  public readonly Litigation = new QEntityPath(
    this.withPrefix("Litigation"),
    () => QLitigation
  );
}

export const qDiscoveryLitigationAssn = new QDiscoveryLitigationAssn();

export class QDiscoveryLitigationAssnId extends QId<DiscoveryLitigationAssnId> {
  private readonly params = [new QNumberParam("DiscoveryLitigationAssnId")];

  getParams() {
    return this.params;
  }
}
