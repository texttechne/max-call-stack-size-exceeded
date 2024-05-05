import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QContactInfo } from "../contact_info/QContactInfo";
import { ContactTypeId } from "./ContactType";

export class QContactType extends QueryObject {
  public readonly ContactTypeId = new QNumberPath(
    this.withPrefix("ContactTypeId")
  );
  public readonly ContactTypeName = new QStringPath(
    this.withPrefix("ContactTypeName")
  );
  public readonly ContactInfoes = new QEntityCollectionPath(
    this.withPrefix("ContactInfoes"),
    () => QContactInfo
  );
}

export const qContactType = new QContactType();

export class QContactTypeId extends QId<ContactTypeId> {
  private readonly params = [new QNumberParam("ContactTypeId")];

  getParams() {
    return this.params;
  }
}
