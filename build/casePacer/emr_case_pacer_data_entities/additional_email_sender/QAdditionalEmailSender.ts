import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QBooleanPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QFirm } from "../firm/QFirm";
import { AdditionalEmailSenderId } from "./AdditionalEmailSender";

export class QAdditionalEmailSender extends QueryObject {
  public readonly AdditionalEmailSenderId = new QNumberPath(
    this.withPrefix("AdditionalEmailSenderId")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly Email = new QStringPath(this.withPrefix("Email"));
  public readonly EmailDescr = new QStringPath(this.withPrefix("EmailDescr"));
  public readonly Active = new QBooleanPath(this.withPrefix("Active"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
}

export const qAdditionalEmailSender = new QAdditionalEmailSender();

export class QAdditionalEmailSenderId extends QId<AdditionalEmailSenderId> {
  private readonly params = [new QNumberParam("AdditionalEmailSenderId")];

  getParams() {
    return this.params;
  }
}
