import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QSecurityRule } from "../security_rule/QSecurityRule";
import { QSecurityRuleSummary } from "../security_rule_summary/QSecurityRuleSummary";
import { AccessLevelId } from "./AccessLevel";

export class QAccessLevel extends QueryObject {
  public readonly AccessLevelId = new QNumberPath(
    this.withPrefix("AccessLevelId")
  );
  public readonly AccessLevelName = new QStringPath(
    this.withPrefix("AccessLevelName")
  );
  public readonly CreateSecurityRules = new QEntityCollectionPath(
    this.withPrefix("CreateSecurityRules"),
    () => QSecurityRule
  );
  public readonly DeleteSecurityRules = new QEntityCollectionPath(
    this.withPrefix("DeleteSecurityRules"),
    () => QSecurityRule
  );
  public readonly EditSecurityRules = new QEntityCollectionPath(
    this.withPrefix("EditSecurityRules"),
    () => QSecurityRule
  );
  public readonly ReadSecurityRules = new QEntityCollectionPath(
    this.withPrefix("ReadSecurityRules"),
    () => QSecurityRule
  );
  public readonly ReadSecurityRuleSummaries = new QEntityCollectionPath(
    this.withPrefix("ReadSecurityRuleSummaries"),
    () => QSecurityRuleSummary
  );
  public readonly CreateSecurityRuleSummaries = new QEntityCollectionPath(
    this.withPrefix("CreateSecurityRuleSummaries"),
    () => QSecurityRuleSummary
  );
  public readonly EditSecurityRuleSummaries = new QEntityCollectionPath(
    this.withPrefix("EditSecurityRuleSummaries"),
    () => QSecurityRuleSummary
  );
  public readonly DeleteSecurityRuleSummaries = new QEntityCollectionPath(
    this.withPrefix("DeleteSecurityRuleSummaries"),
    () => QSecurityRuleSummary
  );
}

export const qAccessLevel = new QAccessLevel();

export class QAccessLevelId extends QId<AccessLevelId> {
  private readonly params = [new QNumberParam("AccessLevelId")];

  getParams() {
    return this.params;
  }
}
