import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QDateTimeOffsetPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QCasePacerUser } from "../case_pacer_user/QCasePacerUser";
import { CasePacerUserSessionId } from "./CasePacerUserSession";

export class QCasePacerUserSession extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly Token = new QStringPath(this.withPrefix("Token"));
  public readonly UserAgent = new QStringPath(this.withPrefix("UserAgent"));
  public readonly IpAddr = new QStringPath(this.withPrefix("IpAddr"));
  public readonly Expiration = new QDateTimeOffsetPath(
    this.withPrefix("Expiration")
  );
  public readonly LoginTime = new QDateTimeOffsetPath(
    this.withPrefix("LoginTime")
  );
  public readonly LastActive = new QDateTimeOffsetPath(
    this.withPrefix("LastActive")
  );
  public readonly CasePacerUser = new QEntityPath(
    this.withPrefix("CasePacerUser"),
    () => QCasePacerUser
  );
}

export const qCasePacerUserSession = new QCasePacerUserSession();

export class QCasePacerUserSessionId extends QId<CasePacerUserSessionId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}
