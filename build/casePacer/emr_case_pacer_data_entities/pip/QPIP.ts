import {
  QueryObject,
  QNumberPath,
  QDateTimeOffsetPath,
  QStringPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QInsuranceClaim } from "../insurance_claim/QInsuranceClaim";
import { QPIPBenefit } from "../pip_benefit/QPIPBenefit";
import { PIPId } from "./PIP";

export class QPIP extends QueryObject {
  public readonly PIPId = new QNumberPath(this.withPrefix("PIPId"));
  public readonly InsuranceClaimId = new QNumberPath(
    this.withPrefix("InsuranceClaimId")
  );
  public readonly DisabliltySlipExpirationDate = new QDateTimeOffsetPath(
    this.withPrefix("DisabliltySlipExpirationDate")
  );
  public readonly Fees = new QNumberPath(this.withPrefix("Fees"));
  public readonly Disburse = new QNumberPath(this.withPrefix("Disburse"));
  public readonly Notes = new QStringPath(this.withPrefix("Notes"));
  public readonly ApplicationForBenefitsDateSent = new QDateTimeOffsetPath(
    this.withPrefix("ApplicationForBenefitsDateSent")
  );
  public readonly InsuranceClaim = new QEntityPath(
    this.withPrefix("InsuranceClaim"),
    () => QInsuranceClaim
  );
  public readonly PIPBenefits = new QEntityCollectionPath(
    this.withPrefix("PIPBenefits"),
    () => QPIPBenefit
  );
}

export const qPIP = new QPIP();

export class QPIPId extends QId<PIPId> {
  private readonly params = [new QNumberParam("PIPId")];

  getParams() {
    return this.params;
  }
}
