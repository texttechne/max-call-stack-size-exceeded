import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLawsuitParty } from "../lawsuit_party/QLawsuitParty";
import { QInsuranceClaim } from "../insurance_claim/QInsuranceClaim";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QPropertyType } from "../property_type/QPropertyType";
import { QCompany } from "../company/QCompany";
import { PropertyDamageId } from "./PropertyDamage";

export class QPropertyDamage extends QueryObject {
  public readonly PropertyDamageId = new QNumberPath(
    this.withPrefix("PropertyDamageId")
  );
  public readonly PropertyTypeId = new QNumberPath(
    this.withPrefix("PropertyTypeId")
  );
  public readonly PropertyTypeDetails = new QStringPath(
    this.withPrefix("PropertyTypeDetails")
  );
  public readonly RepairCompanyPartyId = new QNumberPath(
    this.withPrefix("RepairCompanyPartyId")
  );
  public readonly AutomobileMake = new QStringPath(
    this.withPrefix("AutomobileMake")
  );
  public readonly AutomobileModel = new QStringPath(
    this.withPrefix("AutomobileModel")
  );
  public readonly AutomobileMiles = new QNumberPath(
    this.withPrefix("AutomobileMiles")
  );
  public readonly AutomobileFairMarketValue = new QNumberPath(
    this.withPrefix("AutomobileFairMarketValue")
  );
  public readonly RepairCost = new QNumberPath(this.withPrefix("RepairCost"));
  public readonly RepairEstimate = new QNumberPath(
    this.withPrefix("RepairEstimate")
  );
  public readonly AdditionalExpensesIncurred = new QNumberPath(
    this.withPrefix("AdditionalExpensesIncurred")
  );
  public readonly PlaintiffLawsuitPartyId = new QNumberPath(
    this.withPrefix("PlaintiffLawsuitPartyId")
  );
  public readonly AdjusterLawsuitPartyId = new QNumberPath(
    this.withPrefix("AdjusterLawsuitPartyId")
  );
  public readonly InsuranceClaimNum = new QStringPath(
    this.withPrefix("InsuranceClaimNum")
  );
  public readonly AutomobileYear = new QNumberPath(
    this.withPrefix("AutomobileYear")
  );
  public readonly PropertyDamageLiability = new QNumberPath(
    this.withPrefix("PropertyDamageLiability")
  );
  public readonly UninsuredPropertyDamage = new QNumberPath(
    this.withPrefix("UninsuredPropertyDamage")
  );
  public readonly UnderInsuredPropertyDamage = new QNumberPath(
    this.withPrefix("UnderInsuredPropertyDamage")
  );
  public readonly Notes = new QStringPath(this.withPrefix("Notes"));
  public readonly InsuranceClaimId = new QNumberPath(
    this.withPrefix("InsuranceClaimId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly InsuranceCompanyLawsuitPartyId = new QNumberPath(
    this.withPrefix("InsuranceCompanyLawsuitPartyId")
  );
  public readonly Adjuster = new QEntityPath(
    this.withPrefix("Adjuster"),
    () => QLawsuitParty
  );
  public readonly InsuranceClaim = new QEntityPath(
    this.withPrefix("InsuranceClaim"),
    () => QInsuranceClaim
  );
  public readonly InsuranceCompany = new QEntityPath(
    this.withPrefix("InsuranceCompany"),
    () => QLawsuitParty
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly Plaintiff = new QEntityPath(
    this.withPrefix("Plaintiff"),
    () => QLawsuitParty
  );
  public readonly PropertyType = new QEntityPath(
    this.withPrefix("PropertyType"),
    () => QPropertyType
  );
  public readonly RepairCompany = new QEntityPath(
    this.withPrefix("RepairCompany"),
    () => QCompany
  );
}

export const qPropertyDamage = new QPropertyDamage();

export class QPropertyDamageId extends QId<PropertyDamageId> {
  private readonly params = [new QNumberParam("PropertyDamageId")];

  getParams() {
    return this.params;
  }
}
