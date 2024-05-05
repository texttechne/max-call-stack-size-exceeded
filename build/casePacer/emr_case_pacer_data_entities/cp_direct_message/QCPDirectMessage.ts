import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QDateTimeOffsetPath,
  QBooleanPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QCasePacerUser } from "../case_pacer_user/QCasePacerUser";
import { QIntakeClientLawsuit } from "../intake_client_lawsuit/QIntakeClientLawsuit";
import { QIntakeClientLogin } from "../intake_client_login/QIntakeClientLogin";
import { CPDirectMessageId } from "./CPDirectMessage";

export class QCPDirectMessage extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly IntakeClientLawsuitId = new QNumberPath(
    this.withPrefix("IntakeClientLawsuitId")
  );
  public readonly Body = new QStringPath(this.withPrefix("Body"));
  public readonly Sent = new QDateTimeOffsetPath(this.withPrefix("Sent"));
  public readonly ReadReceipt = new QDateTimeOffsetPath(
    this.withPrefix("ReadReceipt")
  );
  public readonly CPDirectClientLoginId = new QNumberPath(
    this.withPrefix("CPDirectClientLoginId")
  );
  public readonly CasePacerUserId = new QNumberPath(
    this.withPrefix("CasePacerUserId")
  );
  public readonly EmailSent = new QBooleanPath(this.withPrefix("EmailSent"));
  public readonly CasePacerUser = new QEntityPath(
    this.withPrefix("CasePacerUser"),
    () => QCasePacerUser
  );
  public readonly IntakeClientLawsuit = new QEntityPath(
    this.withPrefix("IntakeClientLawsuit"),
    () => QIntakeClientLawsuit
  );
  public readonly IntakeClientLogin = new QEntityPath(
    this.withPrefix("IntakeClientLogin"),
    () => QIntakeClientLogin
  );
}

export const qCPDirectMessage = new QCPDirectMessage();

export class QCPDirectMessageId extends QId<CPDirectMessageId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}
