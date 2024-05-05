import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLienSubrogation } from "../lien_subrogation/QLienSubrogation";
import { LienSubrogationPaymentTypeId } from "./LienSubrogationPaymentType";

export class QLienSubrogationPaymentType extends QueryObject {
  public readonly PaymentTypeId = new QNumberPath(
    this.withPrefix("PaymentTypeId")
  );
  public readonly PaymentTypeName = new QStringPath(
    this.withPrefix("PaymentTypeName")
  );
  public readonly LienSubrogations = new QEntityCollectionPath(
    this.withPrefix("LienSubrogations"),
    () => QLienSubrogation
  );
}

export const qLienSubrogationPaymentType = new QLienSubrogationPaymentType();

export class QLienSubrogationPaymentTypeId extends QId<LienSubrogationPaymentTypeId> {
  private readonly params = [new QNumberParam("PaymentTypeId")];

  getParams() {
    return this.params;
  }
}
