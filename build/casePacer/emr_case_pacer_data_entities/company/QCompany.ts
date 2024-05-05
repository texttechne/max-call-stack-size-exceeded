import {
  QStringPath,
  QEntityCollectionPath,
} from "@odata2ts/odata-query-objects";
import { QParty } from "../party/QParty";
import { QPropertyDamage } from "../property_damage/QPropertyDamage";

export class QCompany extends QParty {
  public readonly CompanyName = new QStringPath(this.withPrefix("CompanyName"));
  public readonly ESN = new QStringPath(this.withPrefix("ESN"));
  public readonly RepairCompanyPropertyDamages = new QEntityCollectionPath(
    this.withPrefix("RepairCompanyPropertyDamages"),
    () => QPropertyDamage
  );
}

export const qCompany = new QCompany();
