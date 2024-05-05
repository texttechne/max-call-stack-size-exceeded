import {
  QueryObject,
  QNumberPath,
  QDateTimeOffsetPath,
  QBooleanPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QLawsuitParty } from "../lawsuit_party/QLawsuitParty";
import { PoliceReportId } from "./PoliceReport";

export class QPoliceReport extends QueryObject {
  public readonly PoliceReportId = new QNumberPath(
    this.withPrefix("PoliceReportId")
  );
  public readonly PoliceDepartmentLawsuitPartyId = new QNumberPath(
    this.withPrefix("PoliceDepartmentLawsuitPartyId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly DateRequested = new QDateTimeOffsetPath(
    this.withPrefix("DateRequested")
  );
  public readonly NeededFlag = new QBooleanPath(this.withPrefix("NeededFlag"));
  public readonly ReceivedFlag = new QBooleanPath(
    this.withPrefix("ReceivedFlag")
  );
  public readonly Cost = new QNumberPath(this.withPrefix("Cost"));
  public readonly PoliceReportNumber = new QStringPath(
    this.withPrefix("PoliceReportNumber")
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly PoliceDepartmentLawsuitParty = new QEntityPath(
    this.withPrefix("PoliceDepartmentLawsuitParty"),
    () => QLawsuitParty
  );
}

export const qPoliceReport = new QPoliceReport();

export class QPoliceReportId extends QId<PoliceReportId> {
  private readonly params = [new QNumberParam("PoliceReportId")];

  getParams() {
    return this.params;
  }
}
