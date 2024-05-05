import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QDemand } from "../demand/QDemand";
import { DemandLineItemId } from "./DemandLineItem";

export class QDemandLineItem extends QueryObject {
  public readonly DemandLineItemID = new QNumberPath(
    this.withPrefix("DemandLineItemID")
  );
  public readonly DemandID = new QNumberPath(this.withPrefix("DemandID"));
  public readonly DemandItem = new QStringPath(this.withPrefix("DemandItem"));
  public readonly DemandOrder = new QNumberPath(this.withPrefix("DemandOrder"));
  public readonly DollarAmount = new QNumberPath(
    this.withPrefix("DollarAmount")
  );
  public readonly ItemType = new QStringPath(this.withPrefix("ItemType"));
  public readonly MedicalProviderId = new QNumberPath(
    this.withPrefix("MedicalProviderId")
  );
  public readonly Demand = new QEntityPath(
    this.withPrefix("Demand"),
    () => QDemand
  );
}

export const qDemandLineItem = new QDemandLineItem();

export class QDemandLineItemId extends QId<DemandLineItemId> {
  private readonly params = [new QNumberParam("DemandLineItemID")];

  getParams() {
    return this.params;
  }
}
