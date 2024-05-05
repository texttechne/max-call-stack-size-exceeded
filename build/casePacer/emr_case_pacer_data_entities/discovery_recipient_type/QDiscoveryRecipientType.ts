import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QDiscovery } from "../discovery/QDiscovery";
import { DiscoveryRecipientTypeId } from "./DiscoveryRecipientType";

export class QDiscoveryRecipientType extends QueryObject {
  public readonly DiscoveryRecipientTypeId = new QNumberPath(
    this.withPrefix("DiscoveryRecipientTypeId")
  );
  public readonly DiscoveryRecipientTypeName = new QStringPath(
    this.withPrefix("DiscoveryRecipientTypeName")
  );
  public readonly Discoveries = new QEntityCollectionPath(
    this.withPrefix("Discoveries"),
    () => QDiscovery
  );
}

export const qDiscoveryRecipientType = new QDiscoveryRecipientType();

export class QDiscoveryRecipientTypeId extends QId<DiscoveryRecipientTypeId> {
  private readonly params = [new QNumberParam("DiscoveryRecipientTypeId")];

  getParams() {
    return this.params;
  }
}
