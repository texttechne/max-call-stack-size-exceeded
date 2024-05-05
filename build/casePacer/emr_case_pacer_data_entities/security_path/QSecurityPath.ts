import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QBooleanPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QSecurityRule } from "../security_rule/QSecurityRule";
import { QSecurityRuleSummary } from "../security_rule_summary/QSecurityRuleSummary";
import { SecurityPathId } from "./SecurityPath";

export class QSecurityPath extends QueryObject {
  public readonly SecurityPathId = new QNumberPath(
    this.withPrefix("SecurityPathId")
  );
  public readonly SecurityPathDisplayName = new QStringPath(
    this.withPrefix("SecurityPathDisplayName")
  );
  public readonly SecurityMaterializedPath = new QStringPath(
    this.withPrefix("SecurityMaterializedPath")
  );
  public readonly LawsuitMaterializedPath = new QStringPath(
    this.withPrefix("LawsuitMaterializedPath")
  );
  public readonly ShowInDropdown = new QBooleanPath(
    this.withPrefix("ShowInDropdown")
  );
  public readonly SecurityRules = new QEntityCollectionPath(
    this.withPrefix("SecurityRules"),
    () => QSecurityRule
  );
  public readonly SecurityRuleSummaries = new QEntityCollectionPath(
    this.withPrefix("SecurityRuleSummaries"),
    () => QSecurityRuleSummary
  );
}

export const qSecurityPath = new QSecurityPath();

export class QSecurityPathId extends QId<SecurityPathId> {
  private readonly params = [new QNumberParam("SecurityPathId")];

  getParams() {
    return this.params;
  }
}
