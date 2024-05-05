import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QFirm } from "../firm/QFirm";
import { QPIPBenefit } from "../pip_benefit/QPIPBenefit";
import { PIPBenefitsTypeId } from "./PIPBenefitsType";

export class QPIPBenefitsType extends QueryObject {
  public readonly PIPBenefitsTypeId = new QNumberPath(
    this.withPrefix("PIPBenefitsTypeId")
  );
  public readonly TypeName = new QStringPath(this.withPrefix("TypeName"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly PIPBenefits = new QEntityCollectionPath(
    this.withPrefix("PIPBenefits"),
    () => QPIPBenefit
  );
}

export const qPIPBenefitsType = new QPIPBenefitsType();

export class QPIPBenefitsTypeId extends QId<PIPBenefitsTypeId> {
  private readonly params = [new QNumberParam("PIPBenefitsTypeId")];

  getParams() {
    return this.params;
  }
}
