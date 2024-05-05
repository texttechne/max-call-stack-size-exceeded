import {
  QueryObject,
  QNumberPath,
  QDateTimeOffsetPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QDocumentTemplate } from "../document_template/QDocumentTemplate";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QTickler } from "../tickler/QTickler";
import { QRecord } from "../record/QRecord";
import { QParty } from "../party/QParty";
import { DocumentId } from "./Document";

export class QDocument extends QueryObject {
  public readonly DocumentID = new QNumberPath(this.withPrefix("DocumentID"));
  public readonly LawsuitID = new QNumberPath(this.withPrefix("LawsuitID"));
  public readonly DocumentTemplateID = new QNumberPath(
    this.withPrefix("DocumentTemplateID")
  );
  public readonly DateCreated = new QDateTimeOffsetPath(
    this.withPrefix("DateCreated")
  );
  public readonly DateSent = new QDateTimeOffsetPath(
    this.withPrefix("DateSent")
  );
  public readonly DateReceived = new QDateTimeOffsetPath(
    this.withPrefix("DateReceived")
  );
  public readonly ReceivedFromPartyID = new QNumberPath(
    this.withPrefix("ReceivedFromPartyID")
  );
  public readonly SentToPartyID = new QNumberPath(
    this.withPrefix("SentToPartyID")
  );
  public readonly OriginatingTicklerID = new QNumberPath(
    this.withPrefix("OriginatingTicklerID")
  );
  public readonly ReceivedTicklerID = new QNumberPath(
    this.withPrefix("ReceivedTicklerID")
  );
  public readonly RecordID = new QNumberPath(this.withPrefix("RecordID"));
  public readonly DocumentTemplate = new QEntityPath(
    this.withPrefix("DocumentTemplate"),
    () => QDocumentTemplate
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly OriginatingTickler = new QEntityPath(
    this.withPrefix("OriginatingTickler"),
    () => QTickler
  );
  public readonly Record = new QEntityPath(
    this.withPrefix("Record"),
    () => QRecord
  );
  public readonly DocumentReceivedFromParty = new QEntityPath(
    this.withPrefix("DocumentReceivedFromParty"),
    () => QParty
  );
  public readonly ReceivedTickler = new QEntityPath(
    this.withPrefix("ReceivedTickler"),
    () => QTickler
  );
  public readonly DocumentSentToParty = new QEntityPath(
    this.withPrefix("DocumentSentToParty"),
    () => QParty
  );
}

export const qDocument = new QDocument();

export class QDocumentId extends QId<DocumentId> {
  private readonly params = [new QNumberParam("DocumentID")];

  getParams() {
    return this.params;
  }
}
