import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QDateTimeOffsetPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QIntakeClientLogin } from "../intake_client_login/QIntakeClientLogin";
import { IntakeClientSessionId } from "./IntakeClientSession";

export class QIntakeClientSession extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly IntakeClientLoginId = new QNumberPath(
    this.withPrefix("IntakeClientLoginId")
  );
  public readonly BearerToken = new QStringPath(this.withPrefix("BearerToken"));
  public readonly DeviceId = new QStringPath(this.withPrefix("DeviceId"));
  public readonly Expiration = new QDateTimeOffsetPath(
    this.withPrefix("Expiration")
  );
  public readonly IntakeClientLogin = new QEntityPath(
    this.withPrefix("IntakeClientLogin"),
    () => QIntakeClientLogin
  );
}

export const qIntakeClientSession = new QIntakeClientSession();

export class QIntakeClientSessionId extends QId<IntakeClientSessionId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}
