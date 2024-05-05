import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  SecurityPath,
  EditableSecurityPath,
  SecurityPathId,
} from "./SecurityPath";
import { QSecurityPath, qSecurityPath, QSecurityPathId } from "./QSecurityPath";
import { SecurityRuleId } from "../security_rule/SecurityRule";
import { QSecurityRuleId } from "../security_rule/QSecurityRule";
import {
  SecurityRuleService,
  SecurityRuleCollectionService,
} from "../security_rule/SecurityRuleService";
import { SecurityRuleSummaryId } from "../security_rule_summary/SecurityRuleSummary";
import { QSecurityRuleSummaryId } from "../security_rule_summary/QSecurityRuleSummary";
import {
  SecurityRuleSummaryService,
  SecurityRuleSummaryCollectionService,
} from "../security_rule_summary/SecurityRuleSummaryService";

export class SecurityPathService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SecurityPath,
  EditableSecurityPath,
  QSecurityPath
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSecurityPath);
  }

  public SecurityRules(): SecurityRuleCollectionService<ClientType>;
  public SecurityRules(id: SecurityRuleId): SecurityRuleService<ClientType>;
  public SecurityRules(id?: SecurityRuleId | undefined) {
    const fieldName = "SecurityRules";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SecurityRuleCollectionService(client, path, fieldName)
      : new SecurityRuleService(
          client,
          path,
          new QSecurityRuleId(fieldName).buildUrl(id)
        );
  }

  public SecurityRuleSummaries(): SecurityRuleSummaryCollectionService<ClientType>;
  public SecurityRuleSummaries(
    id: SecurityRuleSummaryId
  ): SecurityRuleSummaryService<ClientType>;
  public SecurityRuleSummaries(id?: SecurityRuleSummaryId | undefined) {
    const fieldName = "SecurityRuleSummaries";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SecurityRuleSummaryCollectionService(client, path, fieldName)
      : new SecurityRuleSummaryService(
          client,
          path,
          new QSecurityRuleSummaryId(fieldName).buildUrl(id)
        );
  }
}

export class SecurityPathCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SecurityPath,
  EditableSecurityPath,
  QSecurityPath,
  SecurityPathId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSecurityPath, new QSecurityPathId(name));
  }
}
