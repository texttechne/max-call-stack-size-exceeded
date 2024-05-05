import {
  QueryObject,
  QNumberPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QFirm } from "../firm/QFirm";
import { QIntakeClientLogin } from "../intake_client_login/QIntakeClientLogin";
import { QIntakeClientLawsuit } from "../intake_client_lawsuit/QIntakeClientLawsuit";
import { IntakeClientFirmId } from "./IntakeClientFirm";

export class QIntakeClientFirm extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly IntakeClientLoginId = new QNumberPath(
    this.withPrefix("IntakeClientLoginId")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly IntakeClientLogin = new QEntityPath(
    this.withPrefix("IntakeClientLogin"),
    () => QIntakeClientLogin
  );
  public readonly IntakeClientLawsuits = new QEntityCollectionPath(
    this.withPrefix("IntakeClientLawsuits"),
    () => QIntakeClientLawsuit
  );
}

export const qIntakeClientFirm = new QIntakeClientFirm();

export class QIntakeClientFirmId extends QId<IntakeClientFirmId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}
