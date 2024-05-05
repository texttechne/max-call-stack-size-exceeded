import {
  QueryObject,
  QNumberPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QCPDirectCaseProgress } from "../cp_direct_case_progress/QCPDirectCaseProgress";
import { QIntakeClientFirm } from "../intake_client_firm/QIntakeClientFirm";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QCPDirectMedicalProvider } from "../cp_direct_medical_provider/QCPDirectMedicalProvider";
import { QCPDirectMessage } from "../cp_direct_message/QCPDirectMessage";
import { IntakeClientLawsuitId } from "./IntakeClientLawsuit";

export class QIntakeClientLawsuit extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly IntakeClientFirmId = new QNumberPath(
    this.withPrefix("IntakeClientFirmId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly PlaintiffPartyId = new QNumberPath(
    this.withPrefix("PlaintiffPartyId")
  );
  public readonly CPDirectCaseProgressId = new QNumberPath(
    this.withPrefix("CPDirectCaseProgressId")
  );
  public readonly CPDirectCaseProgress = new QEntityPath(
    this.withPrefix("CPDirectCaseProgress"),
    () => QCPDirectCaseProgress
  );
  public readonly IntakeClientFirm = new QEntityPath(
    this.withPrefix("IntakeClientFirm"),
    () => QIntakeClientFirm
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly CPDirectMedicalProviders = new QEntityCollectionPath(
    this.withPrefix("CPDirectMedicalProviders"),
    () => QCPDirectMedicalProvider
  );
  public readonly CPDirectMessages = new QEntityCollectionPath(
    this.withPrefix("CPDirectMessages"),
    () => QCPDirectMessage
  );
}

export const qIntakeClientLawsuit = new QIntakeClientLawsuit();

export class QIntakeClientLawsuitId extends QId<IntakeClientLawsuitId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}
