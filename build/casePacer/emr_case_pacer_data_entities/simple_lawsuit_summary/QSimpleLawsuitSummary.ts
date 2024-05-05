import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QDateTimeOffsetPath,
  QBooleanPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { SimpleLawsuitSummaryId } from "./SimpleLawsuitSummary";

export class QSimpleLawsuitSummary extends QueryObject {
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly LawsuitTypeId = new QNumberPath(
    this.withPrefix("LawsuitTypeId")
  );
  public readonly LawsuitNumber = new QStringPath(
    this.withPrefix("LawsuitNumber")
  );
  public readonly OpenDate = new QDateTimeOffsetPath(
    this.withPrefix("OpenDate")
  );
  public readonly CloseDate = new QDateTimeOffsetPath(
    this.withPrefix("CloseDate")
  );
  public readonly ShortDescription = new QStringPath(
    this.withPrefix("ShortDescription")
  );
  public readonly SOLDate = new QDateTimeOffsetPath(this.withPrefix("SOLDate"));
  public readonly AccidentDate = new QDateTimeOffsetPath(
    this.withPrefix("AccidentDate")
  );
  public readonly FileNumber = new QStringPath(this.withPrefix("FileNumber"));
  public readonly DateCalled = new QDateTimeOffsetPath(
    this.withPrefix("DateCalled")
  );
  public readonly LeadSource = new QStringPath(this.withPrefix("LeadSource"));
  public readonly ReferralSource = new QStringPath(
    this.withPrefix("ReferralSource")
  );
  public readonly StateOfAccident = new QStringPath(
    this.withPrefix("StateOfAccident")
  );
  public readonly IsDeleted = new QBooleanPath(this.withPrefix("IsDeleted"));
  public readonly LawsuitPhaseTypeId = new QNumberPath(
    this.withPrefix("LawsuitPhaseTypeId")
  );
  public readonly EvidenceLtr1SentDate = new QDateTimeOffsetPath(
    this.withPrefix("EvidenceLtr1SentDate")
  );
  public readonly EvidenceLtr2SentDate = new QDateTimeOffsetPath(
    this.withPrefix("EvidenceLtr2SentDate")
  );
  public readonly CountyOfAccident = new QStringPath(
    this.withPrefix("CountyOfAccident")
  );
  public readonly CityOfAccident = new QStringPath(
    this.withPrefix("CityOfAccident")
  );
  public readonly ImportedCaseFlag = new QBooleanPath(
    this.withPrefix("ImportedCaseFlag")
  );
  public readonly TicklersActiveFlag = new QBooleanPath(
    this.withPrefix("TicklersActiveFlag")
  );
  public readonly QBCustomerId = new QStringPath(
    this.withPrefix("QBCustomerId")
  );
  public readonly CreateDate = new QDateTimeOffsetPath(
    this.withPrefix("CreateDate")
  );
  public readonly MasterLawsuitId = new QNumberPath(
    this.withPrefix("MasterLawsuitId")
  );
  public readonly SubPhaseTypeId = new QNumberPath(
    this.withPrefix("SubPhaseTypeId")
  );
  public readonly LawsuitCompanionGroupId = new QNumberPath(
    this.withPrefix("LawsuitCompanionGroupId")
  );
  public readonly LiteralName = new QStringPath(this.withPrefix("LiteralName"));
  public readonly UrlName = new QStringPath(this.withPrefix("UrlName"));
  public readonly LawsuitPhaseTypeName = new QStringPath(
    this.withPrefix("LawsuitPhaseTypeName")
  );
  public readonly LawsuitTypeName = new QStringPath(
    this.withPrefix("LawsuitTypeName")
  );
  public readonly PlaintiffDisplayName = new QStringPath(
    this.withPrefix("PlaintiffDisplayName")
  );
  public readonly PlaintiffPartyId = new QNumberPath(
    this.withPrefix("PlaintiffPartyId")
  );
  public readonly AttorneyDisplayName = new QStringPath(
    this.withPrefix("AttorneyDisplayName")
  );
  public readonly AttorneyPartyId = new QNumberPath(
    this.withPrefix("AttorneyPartyId")
  );
  public readonly AttorneyColor = new QStringPath(
    this.withPrefix("AttorneyColor")
  );
  public readonly AttorneyTimezoneOffset = new QNumberPath(
    this.withPrefix("AttorneyTimezoneOffset")
  );
  public readonly AttorneyDaylightSavingFlag = new QBooleanPath(
    this.withPrefix("AttorneyDaylightSavingFlag")
  );
  public readonly ParalegalDisplayName = new QStringPath(
    this.withPrefix("ParalegalDisplayName")
  );
  public readonly ParalegalPartyId = new QNumberPath(
    this.withPrefix("ParalegalPartyId")
  );
  public readonly ParalegalColor = new QStringPath(
    this.withPrefix("ParalegalColor")
  );
  public readonly BillingStartDate = new QDateTimeOffsetPath(
    this.withPrefix("BillingStartDate")
  );
  public readonly BillingStopDate = new QDateTimeOffsetPath(
    this.withPrefix("BillingStopDate")
  );
  public readonly SubPhaseTypeName = new QStringPath(
    this.withPrefix("SubPhaseTypeName")
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly MasterSimpleLawsuitSummary = new QEntityPath(
    this.withPrefix("MasterSimpleLawsuitSummary"),
    () => QSimpleLawsuitSummary
  );
  public readonly ChildSimpleLawsuitSummaries = new QEntityCollectionPath(
    this.withPrefix("ChildSimpleLawsuitSummaries"),
    () => QSimpleLawsuitSummary
  );
}

export const qSimpleLawsuitSummary = new QSimpleLawsuitSummary();

export class QSimpleLawsuitSummaryId extends QId<SimpleLawsuitSummaryId> {
  private readonly params = [new QNumberParam("LawsuitId")];

  getParams() {
    return this.params;
  }
}
