import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLitigation } from "../litigation/QLitigation";
import { QParty } from "../party/QParty";
import { ComplaintId } from "./Complaint";

export class QComplaint extends QueryObject {
  public readonly ComplaintElementId = new QNumberPath(
    this.withPrefix("ComplaintElementId")
  );
  public readonly ElementNumber = new QNumberPath(
    this.withPrefix("ElementNumber")
  );
  public readonly ElementText = new QStringPath(this.withPrefix("ElementText"));
  public readonly ElementPartyId = new QNumberPath(
    this.withPrefix("ElementPartyId")
  );
  public readonly ElementPartyTypeId = new QNumberPath(
    this.withPrefix("ElementPartyTypeId")
  );
  public readonly LitigationId = new QNumberPath(
    this.withPrefix("LitigationId")
  );
  public readonly Litigation = new QEntityPath(
    this.withPrefix("Litigation"),
    () => QLitigation
  );
  public readonly Party = new QEntityPath(
    this.withPrefix("Party"),
    () => QParty
  );
}

export const qComplaint = new QComplaint();

export class QComplaintId extends QId<ComplaintId> {
  private readonly params = [new QNumberParam("ComplaintElementId")];

  getParams() {
    return this.params;
  }
}
