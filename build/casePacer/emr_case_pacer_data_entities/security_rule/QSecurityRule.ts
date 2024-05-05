import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QAccessLevel } from "../access_level/QAccessLevel";
import { QSecurityPath } from "../security_path/QSecurityPath";
import { SecurityRuleId } from "./SecurityRule";

export class QSecurityRule extends QueryObject {
  public readonly SecurityRuleId = new QNumberPath(
    this.withPrefix("SecurityRuleId")
  );
  public readonly SecurityPathId = new QNumberPath(
    this.withPrefix("SecurityPathId")
  );
  public readonly RuleType = new QStringPath(this.withPrefix("RuleType"));
  public readonly RuleObjectId = new QNumberPath(
    this.withPrefix("RuleObjectId")
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
  public readonly CreateAccessLevel = new QEntityPath(
    this.withPrefix("CreateAccessLevel"),
    () => QAccessLevel
  );
  public readonly DeleteAccessLevel = new QEntityPath(
    this.withPrefix("DeleteAccessLevel"),
    () => QAccessLevel
  );
  public readonly EditAccessLevel = new QEntityPath(
    this.withPrefix("EditAccessLevel"),
    () => QAccessLevel
  );
  public readonly ReadAccessLevel = new QEntityPath(
    this.withPrefix("ReadAccessLevel"),
    () => QAccessLevel
  );
  public readonly SecurityPath = new QEntityPath(
    this.withPrefix("SecurityPath"),
    () => QSecurityPath
  );
}

export const qSecurityRule = new QSecurityRule();

export class QSecurityRuleId extends QId<SecurityRuleId> {
  private readonly params = [new QNumberParam("SecurityRuleId")];

  getParams() {
    return this.params;
  }
}
