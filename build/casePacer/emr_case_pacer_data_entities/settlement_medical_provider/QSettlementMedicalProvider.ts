import {
  QueryObject,
  QNumberPath,
  QBooleanPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QMedicalProvider } from "../medical_provider/QMedicalProvider";
import { QSettlement } from "../settlement/QSettlement";
import { SettlementMedicalProviderId } from "./SettlementMedicalProvider";

export class QSettlementMedicalProvider extends QueryObject {
  public readonly SettlementMedicalProviderId = new QNumberPath(
    this.withPrefix("SettlementMedicalProviderId")
  );
  public readonly SettlementId = new QNumberPath(
    this.withPrefix("SettlementId")
  );
  public readonly MedicalProviderId = new QNumberPath(
    this.withPrefix("MedicalProviderId")
  );
  public readonly CheckNumber = new QNumberPath(this.withPrefix("CheckNumber"));
  public readonly TreatmentCost = new QNumberPath(
    this.withPrefix("TreatmentCost")
  );
  public readonly SettlementAmount = new QNumberPath(
    this.withPrefix("SettlementAmount")
  );
  public readonly Verify = new QBooleanPath(this.withPrefix("Verify"));
  public readonly Include = new QBooleanPath(this.withPrefix("Include"));
  public readonly Notes = new QStringPath(this.withPrefix("Notes"));
  public readonly MedicalProvider = new QEntityPath(
    this.withPrefix("MedicalProvider"),
    () => QMedicalProvider
  );
  public readonly Settlement = new QEntityPath(
    this.withPrefix("Settlement"),
    () => QSettlement
  );
}

export const qSettlementMedicalProvider = new QSettlementMedicalProvider();

export class QSettlementMedicalProviderId extends QId<SettlementMedicalProviderId> {
  private readonly params = [new QNumberParam("SettlementMedicalProviderId")];

  getParams() {
    return this.params;
  }
}
