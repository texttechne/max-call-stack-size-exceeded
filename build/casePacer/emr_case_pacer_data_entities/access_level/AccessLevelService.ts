import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { AccessLevel, EditableAccessLevel, AccessLevelId } from "./AccessLevel";
import { QAccessLevel, qAccessLevel, QAccessLevelId } from "./QAccessLevel";
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

export class AccessLevelService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AccessLevel,
  EditableAccessLevel,
  QAccessLevel
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAccessLevel);
  }

  public CreateSecurityRules(): SecurityRuleCollectionService<ClientType>;
  public CreateSecurityRules(
    id: SecurityRuleId
  ): SecurityRuleService<ClientType>;
  public CreateSecurityRules(id?: SecurityRuleId | undefined) {
    const fieldName = "CreateSecurityRules";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SecurityRuleCollectionService(client, path, fieldName)
      : new SecurityRuleService(
          client,
          path,
          new QSecurityRuleId(fieldName).buildUrl(id)
        );
  }

  public DeleteSecurityRules(): SecurityRuleCollectionService<ClientType>;
  public DeleteSecurityRules(
    id: SecurityRuleId
  ): SecurityRuleService<ClientType>;
  public DeleteSecurityRules(id?: SecurityRuleId | undefined) {
    const fieldName = "DeleteSecurityRules";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SecurityRuleCollectionService(client, path, fieldName)
      : new SecurityRuleService(
          client,
          path,
          new QSecurityRuleId(fieldName).buildUrl(id)
        );
  }

  public EditSecurityRules(): SecurityRuleCollectionService<ClientType>;
  public EditSecurityRules(id: SecurityRuleId): SecurityRuleService<ClientType>;
  public EditSecurityRules(id?: SecurityRuleId | undefined) {
    const fieldName = "EditSecurityRules";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SecurityRuleCollectionService(client, path, fieldName)
      : new SecurityRuleService(
          client,
          path,
          new QSecurityRuleId(fieldName).buildUrl(id)
        );
  }

  public ReadSecurityRules(): SecurityRuleCollectionService<ClientType>;
  public ReadSecurityRules(id: SecurityRuleId): SecurityRuleService<ClientType>;
  public ReadSecurityRules(id?: SecurityRuleId | undefined) {
    const fieldName = "ReadSecurityRules";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SecurityRuleCollectionService(client, path, fieldName)
      : new SecurityRuleService(
          client,
          path,
          new QSecurityRuleId(fieldName).buildUrl(id)
        );
  }

  public ReadSecurityRuleSummaries(): SecurityRuleSummaryCollectionService<ClientType>;
  public ReadSecurityRuleSummaries(
    id: SecurityRuleSummaryId
  ): SecurityRuleSummaryService<ClientType>;
  public ReadSecurityRuleSummaries(id?: SecurityRuleSummaryId | undefined) {
    const fieldName = "ReadSecurityRuleSummaries";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SecurityRuleSummaryCollectionService(client, path, fieldName)
      : new SecurityRuleSummaryService(
          client,
          path,
          new QSecurityRuleSummaryId(fieldName).buildUrl(id)
        );
  }

  public CreateSecurityRuleSummaries(): SecurityRuleSummaryCollectionService<ClientType>;
  public CreateSecurityRuleSummaries(
    id: SecurityRuleSummaryId
  ): SecurityRuleSummaryService<ClientType>;
  public CreateSecurityRuleSummaries(id?: SecurityRuleSummaryId | undefined) {
    const fieldName = "CreateSecurityRuleSummaries";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SecurityRuleSummaryCollectionService(client, path, fieldName)
      : new SecurityRuleSummaryService(
          client,
          path,
          new QSecurityRuleSummaryId(fieldName).buildUrl(id)
        );
  }

  public EditSecurityRuleSummaries(): SecurityRuleSummaryCollectionService<ClientType>;
  public EditSecurityRuleSummaries(
    id: SecurityRuleSummaryId
  ): SecurityRuleSummaryService<ClientType>;
  public EditSecurityRuleSummaries(id?: SecurityRuleSummaryId | undefined) {
    const fieldName = "EditSecurityRuleSummaries";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SecurityRuleSummaryCollectionService(client, path, fieldName)
      : new SecurityRuleSummaryService(
          client,
          path,
          new QSecurityRuleSummaryId(fieldName).buildUrl(id)
        );
  }

  public DeleteSecurityRuleSummaries(): SecurityRuleSummaryCollectionService<ClientType>;
  public DeleteSecurityRuleSummaries(
    id: SecurityRuleSummaryId
  ): SecurityRuleSummaryService<ClientType>;
  public DeleteSecurityRuleSummaries(id?: SecurityRuleSummaryId | undefined) {
    const fieldName = "DeleteSecurityRuleSummaries";
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

export class AccessLevelCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AccessLevel,
  EditableAccessLevel,
  QAccessLevel,
  AccessLevelId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAccessLevel, new QAccessLevelId(name));
  }
}
