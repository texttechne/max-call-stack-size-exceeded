import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QBooleanPath,
  QDateTimeOffsetPath,
  QEntityPath,
  QId,
  QNumberParam,
  QStringParam,
  QBooleanParam,
} from "@odata2ts/odata-query-objects";
import { QIntakeClientLogin } from "../intake_client_login/QIntakeClientLogin";
import { QFirm } from "../firm/QFirm";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { IntakeClientLoginSummaryId } from "./IntakeClientLoginSummary";

export class QIntakeClientLoginSummary extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly UserName = new QStringPath(this.withPrefix("UserName"));
  public readonly IsDeactivated = new QBooleanPath(
    this.withPrefix("IsDeactivated")
  );
  public readonly LastLoginDate = new QDateTimeOffsetPath(
    this.withPrefix("LastLoginDate")
  );
  public readonly TokenExpiration = new QDateTimeOffsetPath(
    this.withPrefix("TokenExpiration")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly LawsuitName = new QStringPath(this.withPrefix("LawsuitName"));
  public readonly LawsuitTypeName = new QStringPath(
    this.withPrefix("LawsuitTypeName")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly PlaintiffPartyId = new QNumberPath(
    this.withPrefix("PlaintiffPartyId")
  );
  public readonly Status = new QStringPath(this.withPrefix("Status"));
  public readonly IntakeClientLogin = new QEntityPath(
    this.withPrefix("IntakeClientLogin"),
    () => QIntakeClientLogin
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
}

export const qIntakeClientLoginSummary = new QIntakeClientLoginSummary();

export class QIntakeClientLoginSummaryId extends QId<IntakeClientLoginSummaryId> {
  private readonly params = [
    new QNumberParam("Id"),
    new QStringParam("UserName"),
    new QBooleanParam("IsDeactivated"),
    new QNumberParam("FirmId"),
    new QStringParam("LawsuitName"),
    new QStringParam("LawsuitTypeName"),
    new QNumberParam("LawsuitId"),
    new QStringParam("Status"),
  ];

  getParams() {
    return this.params;
  }
}
