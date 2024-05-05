import {
  QueryObject,
  QNumberPath,
  QDateTimeOffsetPath,
  QStringPath,
  QBooleanPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QFirm } from "../firm/QFirm";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QRecord } from "../record/QRecord";
import { QCasePacerUser } from "../case_pacer_user/QCasePacerUser";
import { AlertId } from "./Alert";

export class QAlert extends QueryObject {
  public readonly AlertId = new QNumberPath(this.withPrefix("AlertId"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly UserId = new QNumberPath(this.withPrefix("UserId"));
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly AlertDate = new QDateTimeOffsetPath(
    this.withPrefix("AlertDate")
  );
  public readonly AlertLevel = new QStringPath(this.withPrefix("AlertLevel"));
  public readonly Description = new QStringPath(this.withPrefix("Description"));
  public readonly RecordId = new QNumberPath(this.withPrefix("RecordId"));
  public readonly ActiveFlag = new QBooleanPath(this.withPrefix("ActiveFlag"));
  public readonly Counter = new QNumberPath(this.withPrefix("Counter"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly Record = new QEntityPath(
    this.withPrefix("Record"),
    () => QRecord
  );
  public readonly CasePacerUser = new QEntityPath(
    this.withPrefix("CasePacerUser"),
    () => QCasePacerUser
  );
}

export const qAlert = new QAlert();

export class QAlertId extends QId<AlertId> {
  private readonly params = [new QNumberParam("AlertId")];

  getParams() {
    return this.params;
  }
}
