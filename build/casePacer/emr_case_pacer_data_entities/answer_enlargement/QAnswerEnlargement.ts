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
import { QLitigation } from "../litigation/QLitigation";
import { QParty } from "../party/QParty";
import { AnswerEnlargementId } from "./AnswerEnlargement";

export class QAnswerEnlargement extends QueryObject {
  public readonly AnswerEnlargementId = new QNumberPath(
    this.withPrefix("AnswerEnlargementId")
  );
  public readonly LitigationId = new QNumberPath(
    this.withPrefix("LitigationId")
  );
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly ServiceObtainedDate = new QDateTimeOffsetPath(
    this.withPrefix("ServiceObtainedDate")
  );
  public readonly AnswerReceivedFlag = new QBooleanPath(
    this.withPrefix("AnswerReceivedFlag")
  );
  public readonly AnswerDueDate = new QDateTimeOffsetPath(
    this.withPrefix("AnswerDueDate")
  );
  public readonly ExtensionFiledDate = new QDateTimeOffsetPath(
    this.withPrefix("ExtensionFiledDate")
  );
  public readonly ExtensionGrantedDate = new QDateTimeOffsetPath(
    this.withPrefix("ExtensionGrantedDate")
  );
  public readonly Notes = new QStringPath(this.withPrefix("Notes"));
  public readonly Litigation = new QEntityPath(
    this.withPrefix("Litigation"),
    () => QLitigation
  );
  public readonly Party = new QEntityPath(
    this.withPrefix("Party"),
    () => QParty
  );
}

export const qAnswerEnlargement = new QAnswerEnlargement();

export class QAnswerEnlargementId extends QId<AnswerEnlargementId> {
  private readonly params = [new QNumberParam("AnswerEnlargementId")];

  getParams() {
    return this.params;
  }
}
