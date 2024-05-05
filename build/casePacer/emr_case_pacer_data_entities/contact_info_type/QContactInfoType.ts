import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QContactInfo } from "../contact_info/QContactInfo";
import { ContactInfoTypeId } from "./ContactInfoType";

export class QContactInfoType extends QueryObject {
  public readonly ContactInfoTypeId = new QNumberPath(
    this.withPrefix("ContactInfoTypeId")
  );
  public readonly ContactInfoTypeName = new QStringPath(
    this.withPrefix("ContactInfoTypeName")
  );
  public readonly ContactInfoes = new QEntityCollectionPath(
    this.withPrefix("ContactInfoes"),
    () => QContactInfo
  );
}

export const qContactInfoType = new QContactInfoType();

export class QContactInfoTypeId extends QId<ContactInfoTypeId> {
  private readonly params = [new QNumberParam("ContactInfoTypeId")];

  getParams() {
    return this.params;
  }
}
