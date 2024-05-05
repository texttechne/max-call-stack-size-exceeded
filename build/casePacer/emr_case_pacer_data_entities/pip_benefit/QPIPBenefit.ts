import {
  QueryObject,
  QNumberPath,
  QDateTimeOffsetPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QInsuranceClaim } from "../insurance_claim/QInsuranceClaim";
import { QPIP } from "../pip/QPIP";
import { QPIPBenefitsType } from "../pip_benefits_type/QPIPBenefitsType";
import { QLawsuitParty } from "../lawsuit_party/QLawsuitParty";
import { PIPBenefitId } from "./PIPBenefit";

export class QPIPBenefit extends QueryObject {
  public readonly PIPBenefitsId = new QNumberPath(
    this.withPrefix("PIPBenefitsId")
  );
  public readonly PIPBenefitsTypeId = new QNumberPath(
    this.withPrefix("PIPBenefitsTypeId")
  );
  public readonly InsuranceClaimId = new QNumberPath(
    this.withPrefix("InsuranceClaimId")
  );
  public readonly StartDate = new QDateTimeOffsetPath(
    this.withPrefix("StartDate")
  );
  public readonly EndDate = new QDateTimeOffsetPath(this.withPrefix("EndDate"));
  public readonly Duration = new QNumberPath(this.withPrefix("Duration"));
  public readonly Type = new QStringPath(this.withPrefix("Type"));
  public readonly Rate = new QNumberPath(this.withPrefix("Rate"));
  public readonly Amount = new QNumberPath(this.withPrefix("Amount"));
  public readonly AmountReceived = new QNumberPath(
    this.withPrefix("AmountReceived")
  );
  public readonly Variance = new QNumberPath(this.withPrefix("Variance"));
  public readonly ReceivedDate = new QDateTimeOffsetPath(
    this.withPrefix("ReceivedDate")
  );
  public readonly DemandDate = new QDateTimeOffsetPath(
    this.withPrefix("DemandDate")
  );
  public readonly Note = new QStringPath(this.withPrefix("Note"));
  public readonly PIPId = new QNumberPath(this.withPrefix("PIPId"));
  public readonly ServiceProviderLawsuitPartyId = new QNumberPath(
    this.withPrefix("ServiceProviderLawsuitPartyId")
  );
  public readonly InsuranceClaim = new QEntityPath(
    this.withPrefix("InsuranceClaim"),
    () => QInsuranceClaim
  );
  public readonly PIP = new QEntityPath(this.withPrefix("PIP"), () => QPIP);
  public readonly PIPBenefitsType = new QEntityPath(
    this.withPrefix("PIPBenefitsType"),
    () => QPIPBenefitsType
  );
  public readonly ServiceProviderLawsuitParty = new QEntityPath(
    this.withPrefix("ServiceProviderLawsuitParty"),
    () => QLawsuitParty
  );
}

export const qPIPBenefit = new QPIPBenefit();

export class QPIPBenefitId extends QId<PIPBenefitId> {
  private readonly params = [new QNumberParam("PIPBenefitsId")];

  getParams() {
    return this.params;
  }
}
