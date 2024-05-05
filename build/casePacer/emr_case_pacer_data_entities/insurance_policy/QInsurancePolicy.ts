import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QBooleanPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLawsuitParty } from "../lawsuit_party/QLawsuitParty";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QInsuranceClaim } from "../insurance_claim/QInsuranceClaim";
import { InsurancePolicyId } from "./InsurancePolicy";

export class QInsurancePolicy extends QueryObject {
  public readonly InsurancePolicyId = new QNumberPath(
    this.withPrefix("InsurancePolicyId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly InsuredLawsuitPartyId = new QNumberPath(
    this.withPrefix("InsuredLawsuitPartyId")
  );
  public readonly InsuranceCompanyLawsuitPartyId = new QNumberPath(
    this.withPrefix("InsuranceCompanyLawsuitPartyId")
  );
  public readonly PolicyNumber = new QStringPath(
    this.withPrefix("PolicyNumber")
  );
  public readonly IsDeleted = new QBooleanPath(this.withPrefix("IsDeleted"));
  public readonly PolicyType = new QStringPath(this.withPrefix("PolicyType"));
  public readonly TiedToLawsuitPartyId = new QNumberPath(
    this.withPrefix("TiedToLawsuitPartyId")
  );
  public readonly InsuranceType = new QStringPath(
    this.withPrefix("InsuranceType")
  );
  public readonly IdNumber = new QStringPath(this.withPrefix("IdNumber"));
  public readonly PlanName = new QStringPath(this.withPrefix("PlanName"));
  public readonly InsuranceCompany = new QEntityPath(
    this.withPrefix("InsuranceCompany"),
    () => QLawsuitParty
  );
  public readonly Insured = new QEntityPath(
    this.withPrefix("Insured"),
    () => QLawsuitParty
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly TiedTo = new QEntityPath(
    this.withPrefix("TiedTo"),
    () => QLawsuitParty
  );
  public readonly InsuranceClaims = new QEntityCollectionPath(
    this.withPrefix("InsuranceClaims"),
    () => QInsuranceClaim
  );
}

export const qInsurancePolicy = new QInsurancePolicy();

export class QInsurancePolicyId extends QId<InsurancePolicyId> {
  private readonly params = [new QNumberParam("InsurancePolicyId")];

  getParams() {
    return this.params;
  }
}
