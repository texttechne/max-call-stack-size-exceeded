import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QBooleanPath,
  QDateTimeOffsetPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QCPDirectMessage } from "../cp_direct_message/QCPDirectMessage";
import { QCPDirectPushToken } from "../cp_direct_push_token/QCPDirectPushToken";
import { QIntakeClientFirm } from "../intake_client_firm/QIntakeClientFirm";
import { QIntakeClientSession } from "../intake_client_session/QIntakeClientSession";
import { QIntakeClientLoginSummary } from "../intake_client_login_summary/QIntakeClientLoginSummary";
import { IntakeClientLoginId } from "./IntakeClientLogin";

export class QIntakeClientLogin extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly UserName = new QStringPath(this.withPrefix("UserName"));
  public readonly Password = new QStringPath(this.withPrefix("Password"));
  public readonly FailedAttempts = new QNumberPath(
    this.withPrefix("FailedAttempts")
  );
  public readonly IsDeactivated = new QBooleanPath(
    this.withPrefix("IsDeactivated")
  );
  public readonly LastLoginDate = new QDateTimeOffsetPath(
    this.withPrefix("LastLoginDate")
  );
  public readonly Token = new QStringPath(this.withPrefix("Token"));
  public readonly TokenExpiration = new QDateTimeOffsetPath(
    this.withPrefix("TokenExpiration")
  );
  public readonly ConfirmedAt = new QDateTimeOffsetPath(
    this.withPrefix("ConfirmedAt")
  );
  public readonly DoNotEmail = new QBooleanPath(this.withPrefix("DoNotEmail"));
  public readonly CPDirectMessages = new QEntityCollectionPath(
    this.withPrefix("CPDirectMessages"),
    () => QCPDirectMessage
  );
  public readonly CPDirectPushTokens = new QEntityCollectionPath(
    this.withPrefix("CPDirectPushTokens"),
    () => QCPDirectPushToken
  );
  public readonly IntakeClientFirms = new QEntityCollectionPath(
    this.withPrefix("IntakeClientFirms"),
    () => QIntakeClientFirm
  );
  public readonly IntakeClientSessions = new QEntityCollectionPath(
    this.withPrefix("IntakeClientSessions"),
    () => QIntakeClientSession
  );
  public readonly IntakeClientLoginSummaries = new QEntityCollectionPath(
    this.withPrefix("IntakeClientLoginSummaries"),
    () => QIntakeClientLoginSummary
  );
}

export const qIntakeClientLogin = new QIntakeClientLogin();

export class QIntakeClientLoginId extends QId<IntakeClientLoginId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}
