import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QBooleanPath,
  QEntityPath,
  QId,
  QNumberParam,
  QStringParam,
  QBooleanParam,
} from "@odata2ts/odata-query-objects";
import { QFirm } from "../firm/QFirm";
import { AuthorizedEmailSenderId } from "./AuthorizedEmailSender";

export class QAuthorizedEmailSender extends QueryObject {
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly Email = new QStringPath(this.withPrefix("Email"));
  public readonly IsAdmin = new QBooleanPath(this.withPrefix("IsAdmin"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
}

export const qAuthorizedEmailSender = new QAuthorizedEmailSender();

export class QAuthorizedEmailSenderId extends QId<AuthorizedEmailSenderId> {
  private readonly params = [
    new QNumberParam("FirmId"),
    new QStringParam("Email"),
    new QBooleanParam("IsAdmin"),
  ];

  getParams() {
    return this.params;
  }
}
