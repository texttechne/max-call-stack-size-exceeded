import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLawsuitPartyType } from "../lawsuit_party_type/QLawsuitPartyType";
import { MailMergeId } from "./MailMerge";

export class QMailMerge extends QueryObject {
  public readonly MailMergeId = new QNumberPath(this.withPrefix("MailMergeId"));
  public readonly MergeField = new QStringPath(this.withPrefix("MergeField"));
  public readonly htmlDiv = new QStringPath(this.withPrefix("htmlDiv"));
  public readonly LawsuitCategory = new QStringPath(
    this.withPrefix("LawsuitCategory")
  );
  public readonly LawsuitPartyTypeId = new QNumberPath(
    this.withPrefix("LawsuitPartyTypeId")
  );
  public readonly ParentObject = new QStringPath(
    this.withPrefix("ParentObject")
  );
  public readonly ObjectType = new QStringPath(this.withPrefix("ObjectType"));
  public readonly Attribute = new QStringPath(this.withPrefix("Attribute"));
  public readonly AttributeDescription = new QStringPath(
    this.withPrefix("AttributeDescription")
  );
  public readonly DefaultValue = new QStringPath(
    this.withPrefix("DefaultValue")
  );
  public readonly Format = new QStringPath(this.withPrefix("Format"));
  public readonly Note = new QStringPath(this.withPrefix("Note"));
  public readonly LawsuitPartyType = new QEntityPath(
    this.withPrefix("LawsuitPartyType"),
    () => QLawsuitPartyType
  );
}

export const qMailMerge = new QMailMerge();

export class QMailMergeId extends QId<MailMergeId> {
  private readonly params = [new QNumberParam("MailMergeId")];

  getParams() {
    return this.params;
  }
}
