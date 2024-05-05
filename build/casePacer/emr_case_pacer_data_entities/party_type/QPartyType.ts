import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QParty } from "../party/QParty";
import { PartyTypeId } from "./PartyType";

export class QPartyType extends QueryObject {
  public readonly PartyTypeId = new QNumberPath(this.withPrefix("PartyTypeId"));
  public readonly PartyTypeName = new QStringPath(
    this.withPrefix("PartyTypeName")
  );
  public readonly ValidParties = new QStringPath(
    this.withPrefix("ValidParties")
  );
  public readonly Parties = new QEntityCollectionPath(
    this.withPrefix("Parties"),
    () => QParty
  );
}

export const qPartyType = new QPartyType();

export class QPartyTypeId extends QId<PartyTypeId> {
  private readonly params = [new QNumberParam("PartyTypeId")];

  getParams() {
    return this.params;
  }
}
