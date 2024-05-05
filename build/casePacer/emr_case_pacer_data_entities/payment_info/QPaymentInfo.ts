import {
  QueryObject,
  QNumberPath,
  QBooleanPath,
  QStringPath,
  QDateTimeOffsetPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QFirm } from "../firm/QFirm";
import { PaymentInfoId } from "./PaymentInfo";

export class QPaymentInfo extends QueryObject {
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly IsCreditCard = new QBooleanPath(
    this.withPrefix("IsCreditCard")
  );
  public readonly InstitutionName = new QStringPath(
    this.withPrefix("InstitutionName")
  );
  public readonly AccountNum = new QStringPath(this.withPrefix("AccountNum"));
  public readonly AccountType = new QStringPath(this.withPrefix("AccountType"));
  public readonly AbaRouting = new QStringPath(this.withPrefix("AbaRouting"));
  public readonly Expiration = new QDateTimeOffsetPath(
    this.withPrefix("Expiration")
  );
  public readonly NameOnAccount = new QStringPath(
    this.withPrefix("NameOnAccount")
  );
  public readonly BillStreet = new QStringPath(this.withPrefix("BillStreet"));
  public readonly BillCity = new QStringPath(this.withPrefix("BillCity"));
  public readonly BillState = new QStringPath(this.withPrefix("BillState"));
  public readonly BillZip = new QStringPath(this.withPrefix("BillZip"));
  public readonly CVV = new QStringPath(this.withPrefix("CVV"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
}

export const qPaymentInfo = new QPaymentInfo();

export class QPaymentInfoId extends QId<PaymentInfoId> {
  private readonly params = [new QNumberParam("FirmId")];

  getParams() {
    return this.params;
  }
}
