import {
  QueryObject,
  QNumberPath,
  QBooleanPath,
  QDateTimeOffsetPath,
  QStringPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLawsuitParty } from "../lawsuit_party/QLawsuitParty";
import { QWitnessType } from "../witness_type/QWitnessType";
import { QWitnessLitigationAssn } from "../witness_litigation_assn/QWitnessLitigationAssn";
import { WitnessId } from "./Witness";

export class QWitness extends QueryObject {
  public readonly WitnessTypeId = new QNumberPath(
    this.withPrefix("WitnessTypeId")
  );
  public readonly StatementNeeded = new QBooleanPath(
    this.withPrefix("StatementNeeded")
  );
  public readonly StatementReceived = new QBooleanPath(
    this.withPrefix("StatementReceived")
  );
  public readonly QuestionnaireNeeded = new QBooleanPath(
    this.withPrefix("QuestionnaireNeeded")
  );
  public readonly QuestionnaireReceived = new QBooleanPath(
    this.withPrefix("QuestionnaireReceived")
  );
  public readonly QuestionnaireRequest1Date = new QDateTimeOffsetPath(
    this.withPrefix("QuestionnaireRequest1Date")
  );
  public readonly QuestionnaireRequest2Date = new QDateTimeOffsetPath(
    this.withPrefix("QuestionnaireRequest2Date")
  );
  public readonly WitnessNotes = new QStringPath(
    this.withPrefix("WitnessNotes")
  );
  public readonly LawsuitPartyId = new QNumberPath(
    this.withPrefix("LawsuitPartyId")
  );
  public readonly LawsuitParty = new QEntityPath(
    this.withPrefix("LawsuitParty"),
    () => QLawsuitParty
  );
  public readonly WitnessType = new QEntityPath(
    this.withPrefix("WitnessType"),
    () => QWitnessType
  );
  public readonly WitnessLitigationAssns = new QEntityCollectionPath(
    this.withPrefix("WitnessLitigationAssns"),
    () => QWitnessLitigationAssn
  );
}

export const qWitness = new QWitness();

export class QWitnessId extends QId<WitnessId> {
  private readonly params = [new QNumberParam("LawsuitPartyId")];

  getParams() {
    return this.params;
  }
}
