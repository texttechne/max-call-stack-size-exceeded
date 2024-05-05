import {
  QueryObject,
  QNumberPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QDemand } from "../demand/QDemand";
import { QInsuranceClaim } from "../insurance_claim/QInsuranceClaim";
import { InsuranceClaimDemandId } from "./InsuranceClaimDemand";

export class QInsuranceClaimDemand extends QueryObject {
  public readonly InsuranceClaimDemandId = new QNumberPath(
    this.withPrefix("InsuranceClaimDemandId")
  );
  public readonly InsuranceClaimId = new QNumberPath(
    this.withPrefix("InsuranceClaimId")
  );
  public readonly DemandId = new QNumberPath(this.withPrefix("DemandId"));
  public readonly Demand = new QEntityPath(
    this.withPrefix("Demand"),
    () => QDemand
  );
  public readonly InsuranceClaim = new QEntityPath(
    this.withPrefix("InsuranceClaim"),
    () => QInsuranceClaim
  );
}

export const qInsuranceClaimDemand = new QInsuranceClaimDemand();

export class QInsuranceClaimDemandId extends QId<InsuranceClaimDemandId> {
  private readonly params = [new QNumberParam("InsuranceClaimDemandId")];

  getParams() {
    return this.params;
  }
}
