import {
  QStringPath,
  QDateTimeOffsetPath,
  QBooleanPath,
} from "@odata2ts/odata-query-objects";
import { QParty } from "../party/QParty";

export class QPerson extends QParty {
  public readonly FirstName = new QStringPath(this.withPrefix("FirstName"));
  public readonly LastName = new QStringPath(this.withPrefix("LastName"));
  public readonly MiddleName = new QStringPath(this.withPrefix("MiddleName"));
  public readonly SSN = new QStringPath(this.withPrefix("SSN"));
  public readonly NamePrefix = new QStringPath(this.withPrefix("NamePrefix"));
  public readonly NameSuffix = new QStringPath(this.withPrefix("NameSuffix"));
  public readonly DateOfBirth = new QDateTimeOffsetPath(
    this.withPrefix("DateOfBirth")
  );
  public readonly Gender = new QStringPath(this.withPrefix("Gender"));
  public readonly SpouseFirstName = new QStringPath(
    this.withPrefix("SpouseFirstName")
  );
  public readonly SpouseLastName = new QStringPath(
    this.withPrefix("SpouseLastName")
  );
  public readonly SpouseMiddleName = new QStringPath(
    this.withPrefix("SpouseMiddleName")
  );
  public readonly DeceasedFlag = new QBooleanPath(
    this.withPrefix("DeceasedFlag")
  );
  public readonly Children = new QStringPath(this.withPrefix("Children"));
  public readonly PersonNotes = new QStringPath(this.withPrefix("PersonNotes"));
  public readonly CompanyName = new QStringPath(this.withPrefix("CompanyName"));
  public readonly Nickname = new QStringPath(this.withPrefix("Nickname"));
}

export const qPerson = new QPerson();
