import {
  QueryObject,
  QNumberPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QFirm } from "../firm/QFirm";
import { QCasePacerUser } from "../case_pacer_user/QCasePacerUser";
import { QSecurityPath } from "../security_path/QSecurityPath";
import { QAccessLevel } from "../access_level/QAccessLevel";
import { SecurityRuleSummaryId } from "./SecurityRuleSummary";

export class QSecurityRuleSummary extends QueryObject {
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly SecurityPathId = new QNumberPath(
    this.withPrefix("SecurityPathId")
  );
  public readonly ReadAccessLevelId = new QNumberPath(
    this.withPrefix("ReadAccessLevelId")
  );
  public readonly CreateAccessLevelId = new QNumberPath(
    this.withPrefix("CreateAccessLevelId")
  );
  public readonly EditAccessLevelId = new QNumberPath(
    this.withPrefix("EditAccessLevelId")
  );
  public readonly DeleteAccessLevelId = new QNumberPath(
    this.withPrefix("DeleteAccessLevelId")
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly CasePacerUser = new QEntityPath(
    this.withPrefix("CasePacerUser"),
    () => QCasePacerUser
  );
  public readonly SecurityPath = new QEntityPath(
    this.withPrefix("SecurityPath"),
    () => QSecurityPath
  );
  public readonly ReadAccessLevel = new QEntityPath(
    this.withPrefix("ReadAccessLevel"),
    () => QAccessLevel
  );
  public readonly CreateAccessLevel = new QEntityPath(
    this.withPrefix("CreateAccessLevel"),
    () => QAccessLevel
  );
  public readonly EditAccessLevel = new QEntityPath(
    this.withPrefix("EditAccessLevel"),
    () => QAccessLevel
  );
  public readonly DeleteAccessLevel = new QEntityPath(
    this.withPrefix("DeleteAccessLevel"),
    () => QAccessLevel
  );
}

export const qSecurityRuleSummary = new QSecurityRuleSummary();

export class QSecurityRuleSummaryId extends QId<SecurityRuleSummaryId> {
  private readonly params = [
    new QNumberParam("FirmId"),
    new QNumberParam("PartyId"),
    new QNumberParam("SecurityPathId"),
  ];

  getParams() {
    return this.params;
  }
}
