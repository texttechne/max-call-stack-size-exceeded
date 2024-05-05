import {
  QueryObject,
  QNumberPath,
  QBooleanPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QCasePacerUser } from "../case_pacer_user/QCasePacerUser";
import { EventHelpId } from "./EventHelp";

export class QEventHelp extends QueryObject {
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly PartyQuickEntryComplete = new QBooleanPath(
    this.withPrefix("PartyQuickEntryComplete")
  );
  public readonly CasePacerUser = new QEntityPath(
    this.withPrefix("CasePacerUser"),
    () => QCasePacerUser
  );
}

export const qEventHelp = new QEventHelp();

export class QEventHelpId extends QId<EventHelpId> {
  private readonly params = [new QNumberParam("PartyId")];

  getParams() {
    return this.params;
  }
}
