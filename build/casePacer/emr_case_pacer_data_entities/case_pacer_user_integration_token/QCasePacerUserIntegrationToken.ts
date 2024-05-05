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
import { CasePacerUserIntegrationTokenId } from "./CasePacerUserIntegrationToken";

export class QCasePacerUserIntegrationToken extends QueryObject {
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly SystemName = new QStringPath(this.withPrefix("SystemName"));
  public readonly SystemId = new QStringPath(this.withPrefix("SystemId"));
  public readonly TokenJson = new QStringPath(this.withPrefix("TokenJson"));
  public readonly SubscriptionId = new QStringPath(
    this.withPrefix("SubscriptionId")
  );
  public readonly SubscriptionExpire = new QDateTimeOffsetPath(
    this.withPrefix("SubscriptionExpire")
  );
  public readonly CasePacerUser = new QEntityPath(
    this.withPrefix("CasePacerUser"),
    () => QCasePacerUser
  );
}

export const qCasePacerUserIntegrationToken =
  new QCasePacerUserIntegrationToken();

export class QCasePacerUserIntegrationTokenId extends QId<CasePacerUserIntegrationTokenId> {
  private readonly params = [new QNumberParam("PartyId")];

  getParams() {
    return this.params;
  }
}
