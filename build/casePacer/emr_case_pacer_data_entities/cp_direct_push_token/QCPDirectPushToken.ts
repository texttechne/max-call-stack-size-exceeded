import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QBooleanPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QIntakeClientLogin } from "../intake_client_login/QIntakeClientLogin";
import { CPDirectPushTokenId } from "./CPDirectPushToken";

export class QCPDirectPushToken extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly ExpoPushToken = new QStringPath(
    this.withPrefix("ExpoPushToken")
  );
  public readonly IntakeClientLoginId = new QNumberPath(
    this.withPrefix("IntakeClientLoginId")
  );
  public readonly DoNotSend = new QBooleanPath(this.withPrefix("DoNotSend"));
  public readonly IntakeClientLogin = new QEntityPath(
    this.withPrefix("IntakeClientLogin"),
    () => QIntakeClientLogin
  );
}

export const qCPDirectPushToken = new QCPDirectPushToken();

export class QCPDirectPushTokenId extends QId<CPDirectPushTokenId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}
