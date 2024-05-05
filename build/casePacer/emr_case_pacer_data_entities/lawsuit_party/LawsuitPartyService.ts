import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  LawsuitParty,
  EditableLawsuitParty,
  LawsuitPartyId,
} from "./LawsuitParty";
import { QLawsuitParty, qLawsuitParty, QLawsuitPartyId } from "./QLawsuitParty";
import { InsuranceClaimId } from "../insurance_claim/InsuranceClaim";
import { QInsuranceClaimId } from "../insurance_claim/QInsuranceClaim";
import {
  InsuranceClaimService,
  InsuranceClaimCollectionService,
} from "../insurance_claim/InsuranceClaimService";
import { LitigationId } from "../litigation/Litigation";
import { QLitigationId } from "../litigation/QLitigation";
import {
  LitigationService,
  LitigationCollectionService,
} from "../litigation/LitigationService";
import { ADRId } from "../adr/ADR";
import { QADRId } from "../adr/QADR";
import { ADRService, ADRCollectionService } from "../adr/ADRService";
import { DepositionId } from "../deposition/Deposition";
import { QDepositionId } from "../deposition/QDeposition";
import {
  DepositionService,
  DepositionCollectionService,
} from "../deposition/DepositionService";
import { ExpenseId } from "../expense/Expense";
import { QExpenseId } from "../expense/QExpense";
import {
  ExpenseService,
  ExpenseCollectionService,
} from "../expense/ExpenseService";
import { LienSubrogationId } from "../lien_subrogation/LienSubrogation";
import { QLienSubrogationId } from "../lien_subrogation/QLienSubrogation";
import {
  LienSubrogationService,
  LienSubrogationCollectionService,
} from "../lien_subrogation/LienSubrogationService";
import { MedicalProviderId } from "../medical_provider/MedicalProvider";
import { QMedicalProviderId } from "../medical_provider/QMedicalProvider";
import {
  MedicalProviderService,
  MedicalProviderCollectionService,
} from "../medical_provider/MedicalProviderService";
import { PropertyDamageId } from "../property_damage/PropertyDamage";
import { QPropertyDamageId } from "../property_damage/QPropertyDamage";
import {
  PropertyDamageService,
  PropertyDamageCollectionService,
} from "../property_damage/PropertyDamageService";
import { LawsuitService } from "../lawsuit/LawsuitService";
import { LawsuitPartyTypeService } from "../lawsuit_party_type/LawsuitPartyTypeService";
import { PartyService } from "../party/PartyService";
import { AttorneyFeeInterestService } from "../attorney_fee_interest/AttorneyFeeInterestService";
import { DefendantAttorneyId } from "../defendant_attorney/DefendantAttorney";
import { QDefendantAttorneyId } from "../defendant_attorney/QDefendantAttorney";
import {
  DefendantAttorneyService,
  DefendantAttorneyCollectionService,
} from "../defendant_attorney/DefendantAttorneyService";
import { DefendantLawsuitPartyId } from "../defendant_lawsuit_party/DefendantLawsuitParty";
import { QDefendantLawsuitPartyId } from "../defendant_lawsuit_party/QDefendantLawsuitParty";
import {
  DefendantLawsuitPartyService,
  DefendantLawsuitPartyCollectionService,
} from "../defendant_lawsuit_party/DefendantLawsuitPartyService";
import { EconomicLossId } from "../economic_loss/EconomicLoss";
import { QEconomicLossId } from "../economic_loss/QEconomicLoss";
import {
  EconomicLossService,
  EconomicLossCollectionService,
} from "../economic_loss/EconomicLossService";
import { InsurancePolicyId } from "../insurance_policy/InsurancePolicy";
import { QInsurancePolicyId } from "../insurance_policy/QInsurancePolicy";
import {
  InsurancePolicyService,
  InsurancePolicyCollectionService,
} from "../insurance_policy/InsurancePolicyService";
import { InvestigatorId } from "../investigator/Investigator";
import { QInvestigatorId } from "../investigator/QInvestigator";
import {
  InvestigatorService,
  InvestigatorCollectionService,
} from "../investigator/InvestigatorService";
import { LawsuitRoleId } from "../lawsuit_role/LawsuitRole";
import { QLawsuitRoleId } from "../lawsuit_role/QLawsuitRole";
import {
  LawsuitRoleService,
  LawsuitRoleCollectionService,
} from "../lawsuit_role/LawsuitRoleService";
import { MedicalEvaluationId } from "../medical_evaluation/MedicalEvaluation";
import { QMedicalEvaluationId } from "../medical_evaluation/QMedicalEvaluation";
import {
  MedicalEvaluationService,
  MedicalEvaluationCollectionService,
} from "../medical_evaluation/MedicalEvaluationService";
import { PIPBenefitId } from "../pip_benefit/PIPBenefit";
import { QPIPBenefitId } from "../pip_benefit/QPIPBenefit";
import {
  PIPBenefitService,
  PIPBenefitCollectionService,
} from "../pip_benefit/PIPBenefitService";
import { PlaintiffLawsuitPartyId } from "../plaintiff_lawsuit_party/PlaintiffLawsuitParty";
import { QPlaintiffLawsuitPartyId } from "../plaintiff_lawsuit_party/QPlaintiffLawsuitParty";
import {
  PlaintiffLawsuitPartyService,
  PlaintiffLawsuitPartyCollectionService,
} from "../plaintiff_lawsuit_party/PlaintiffLawsuitPartyService";
import { PoliceReportId } from "../police_report/PoliceReport";
import { QPoliceReportId } from "../police_report/QPoliceReport";
import {
  PoliceReportService,
  PoliceReportCollectionService,
} from "../police_report/PoliceReportService";
import { TicklerId } from "../tickler/Tickler";
import { QTicklerId } from "../tickler/QTickler";
import {
  TicklerService,
  TicklerCollectionService,
} from "../tickler/TicklerService";
import { WitnessService } from "../witness/WitnessService";

export class LawsuitPartyService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LawsuitParty,
  EditableLawsuitParty,
  QLawsuitParty
> {
  private _Lawsuit?: LawsuitService<ClientType>;
  private _LawsuitPartyType?: LawsuitPartyTypeService<ClientType>;
  private _Party?: PartyService<ClientType>;
  private _AttorneyFeeInterest?: AttorneyFeeInterestService<ClientType>;
  private _Witness?: WitnessService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitParty);
  }

  public InsuranceClaimsByCompany(): InsuranceClaimCollectionService<ClientType>;
  public InsuranceClaimsByCompany(
    id: InsuranceClaimId
  ): InsuranceClaimService<ClientType>;
  public InsuranceClaimsByCompany(id?: InsuranceClaimId | undefined) {
    const fieldName = "InsuranceClaimsByCompany";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new InsuranceClaimCollectionService(client, path, fieldName)
      : new InsuranceClaimService(
          client,
          path,
          new QInsuranceClaimId(fieldName).buildUrl(id)
        );
  }

  public InsuranceClaimsByInsured(): InsuranceClaimCollectionService<ClientType>;
  public InsuranceClaimsByInsured(
    id: InsuranceClaimId
  ): InsuranceClaimService<ClientType>;
  public InsuranceClaimsByInsured(id?: InsuranceClaimId | undefined) {
    const fieldName = "InsuranceClaimsByInsured";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new InsuranceClaimCollectionService(client, path, fieldName)
      : new InsuranceClaimService(
          client,
          path,
          new QInsuranceClaimId(fieldName).buildUrl(id)
        );
  }

  public InsuranceClaimsByTiedTo(): InsuranceClaimCollectionService<ClientType>;
  public InsuranceClaimsByTiedTo(
    id: InsuranceClaimId
  ): InsuranceClaimService<ClientType>;
  public InsuranceClaimsByTiedTo(id?: InsuranceClaimId | undefined) {
    const fieldName = "InsuranceClaimsByTiedTo";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new InsuranceClaimCollectionService(client, path, fieldName)
      : new InsuranceClaimService(
          client,
          path,
          new QInsuranceClaimId(fieldName).buildUrl(id)
        );
  }

  public CourtLitigations(): LitigationCollectionService<ClientType>;
  public CourtLitigations(id: LitigationId): LitigationService<ClientType>;
  public CourtLitigations(id?: LitigationId | undefined) {
    const fieldName = "CourtLitigations";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LitigationCollectionService(client, path, fieldName)
      : new LitigationService(
          client,
          path,
          new QLitigationId(fieldName).buildUrl(id)
        );
  }

  public JudgeLitigations(): LitigationCollectionService<ClientType>;
  public JudgeLitigations(id: LitigationId): LitigationService<ClientType>;
  public JudgeLitigations(id?: LitigationId | undefined) {
    const fieldName = "JudgeLitigations";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LitigationCollectionService(client, path, fieldName)
      : new LitigationService(
          client,
          path,
          new QLitigationId(fieldName).buildUrl(id)
        );
  }

  public ADRs(): ADRCollectionService<ClientType>;
  public ADRs(id: ADRId): ADRService<ClientType>;
  public ADRs(id?: ADRId | undefined) {
    const fieldName = "ADRs";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ADRCollectionService(client, path, fieldName)
      : new ADRService(client, path, new QADRId(fieldName).buildUrl(id));
  }

  public DeponentDepositions(): DepositionCollectionService<ClientType>;
  public DeponentDepositions(id: DepositionId): DepositionService<ClientType>;
  public DeponentDepositions(id?: DepositionId | undefined) {
    const fieldName = "DeponentDepositions";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DepositionCollectionService(client, path, fieldName)
      : new DepositionService(
          client,
          path,
          new QDepositionId(fieldName).buildUrl(id)
        );
  }

  public DeposerDepositions(): DepositionCollectionService<ClientType>;
  public DeposerDepositions(id: DepositionId): DepositionService<ClientType>;
  public DeposerDepositions(id?: DepositionId | undefined) {
    const fieldName = "DeposerDepositions";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DepositionCollectionService(client, path, fieldName)
      : new DepositionService(
          client,
          path,
          new QDepositionId(fieldName).buildUrl(id)
        );
  }

  public RecorderDepositions(): DepositionCollectionService<ClientType>;
  public RecorderDepositions(id: DepositionId): DepositionService<ClientType>;
  public RecorderDepositions(id?: DepositionId | undefined) {
    const fieldName = "RecorderDepositions";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DepositionCollectionService(client, path, fieldName)
      : new DepositionService(
          client,
          path,
          new QDepositionId(fieldName).buildUrl(id)
        );
  }

  public PayeeExpenses(): ExpenseCollectionService<ClientType>;
  public PayeeExpenses(id: ExpenseId): ExpenseService<ClientType>;
  public PayeeExpenses(id?: ExpenseId | undefined) {
    const fieldName = "PayeeExpenses";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ExpenseCollectionService(client, path, fieldName)
      : new ExpenseService(
          client,
          path,
          new QExpenseId(fieldName).buildUrl(id)
        );
  }

  public SubrogeeLienHolderLienSubrogations(): LienSubrogationCollectionService<ClientType>;
  public SubrogeeLienHolderLienSubrogations(
    id: LienSubrogationId
  ): LienSubrogationService<ClientType>;
  public SubrogeeLienHolderLienSubrogations(
    id?: LienSubrogationId | undefined
  ) {
    const fieldName = "SubrogeeLienHolderLienSubrogations";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LienSubrogationCollectionService(client, path, fieldName)
      : new LienSubrogationService(
          client,
          path,
          new QLienSubrogationId(fieldName).buildUrl(id)
        );
  }

  public MedicalProviders(): MedicalProviderCollectionService<ClientType>;
  public MedicalProviders(
    id: MedicalProviderId
  ): MedicalProviderService<ClientType>;
  public MedicalProviders(id?: MedicalProviderId | undefined) {
    const fieldName = "MedicalProviders";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new MedicalProviderCollectionService(client, path, fieldName)
      : new MedicalProviderService(
          client,
          path,
          new QMedicalProviderId(fieldName).buildUrl(id)
        );
  }

  public RepairCompanyPropertyDamages(): PropertyDamageCollectionService<ClientType>;
  public RepairCompanyPropertyDamages(
    id: PropertyDamageId
  ): PropertyDamageService<ClientType>;
  public RepairCompanyPropertyDamages(id?: PropertyDamageId | undefined) {
    const fieldName = "RepairCompanyPropertyDamages";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PropertyDamageCollectionService(client, path, fieldName)
      : new PropertyDamageService(
          client,
          path,
          new QPropertyDamageId(fieldName).buildUrl(id)
        );
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public LawsuitPartyType(): LawsuitPartyTypeService<ClientType> {
    if (!this._LawsuitPartyType) {
      const { client, path } = this.__base;
      this._LawsuitPartyType = new LawsuitPartyTypeService(
        client,
        path,
        "LawsuitPartyType"
      );
    }

    return this._LawsuitPartyType;
  }

  public Party(): PartyService<ClientType> {
    if (!this._Party) {
      const { client, path } = this.__base;
      this._Party = new PartyService(client, path, "Party");
    }

    return this._Party;
  }

  public AttorneyFeeInterest(): AttorneyFeeInterestService<ClientType> {
    if (!this._AttorneyFeeInterest) {
      const { client, path } = this.__base;
      this._AttorneyFeeInterest = new AttorneyFeeInterestService(
        client,
        path,
        "AttorneyFeeInterest"
      );
    }

    return this._AttorneyFeeInterest;
  }

  public Defendants(): DefendantAttorneyCollectionService<ClientType>;
  public Defendants(
    id: DefendantAttorneyId
  ): DefendantAttorneyService<ClientType>;
  public Defendants(id?: DefendantAttorneyId | undefined) {
    const fieldName = "Defendants";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DefendantAttorneyCollectionService(client, path, fieldName)
      : new DefendantAttorneyService(
          client,
          path,
          new QDefendantAttorneyId(fieldName).buildUrl(id)
        );
  }

  public DefendantAttorneys(): DefendantAttorneyCollectionService<ClientType>;
  public DefendantAttorneys(
    id: DefendantAttorneyId
  ): DefendantAttorneyService<ClientType>;
  public DefendantAttorneys(id?: DefendantAttorneyId | undefined) {
    const fieldName = "DefendantAttorneys";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DefendantAttorneyCollectionService(client, path, fieldName)
      : new DefendantAttorneyService(
          client,
          path,
          new QDefendantAttorneyId(fieldName).buildUrl(id)
        );
  }

  public DefendantLawsuitParties(): DefendantLawsuitPartyCollectionService<ClientType>;
  public DefendantLawsuitParties(
    id: DefendantLawsuitPartyId
  ): DefendantLawsuitPartyService<ClientType>;
  public DefendantLawsuitParties(id?: DefendantLawsuitPartyId | undefined) {
    const fieldName = "DefendantLawsuitParties";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DefendantLawsuitPartyCollectionService(client, path, fieldName)
      : new DefendantLawsuitPartyService(
          client,
          path,
          new QDefendantLawsuitPartyId(fieldName).buildUrl(id)
        );
  }

  public EconomicLosses(): EconomicLossCollectionService<ClientType>;
  public EconomicLosses(id: EconomicLossId): EconomicLossService<ClientType>;
  public EconomicLosses(id?: EconomicLossId | undefined) {
    const fieldName = "EconomicLosses";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new EconomicLossCollectionService(client, path, fieldName)
      : new EconomicLossService(
          client,
          path,
          new QEconomicLossId(fieldName).buildUrl(id)
        );
  }

  public InsuranceClaimsByAdjuster(): InsuranceClaimCollectionService<ClientType>;
  public InsuranceClaimsByAdjuster(
    id: InsuranceClaimId
  ): InsuranceClaimService<ClientType>;
  public InsuranceClaimsByAdjuster(id?: InsuranceClaimId | undefined) {
    const fieldName = "InsuranceClaimsByAdjuster";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new InsuranceClaimCollectionService(client, path, fieldName)
      : new InsuranceClaimService(
          client,
          path,
          new QInsuranceClaimId(fieldName).buildUrl(id)
        );
  }

  public InsurancePoliciesByCompany(): InsurancePolicyCollectionService<ClientType>;
  public InsurancePoliciesByCompany(
    id: InsurancePolicyId
  ): InsurancePolicyService<ClientType>;
  public InsurancePoliciesByCompany(id?: InsurancePolicyId | undefined) {
    const fieldName = "InsurancePoliciesByCompany";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new InsurancePolicyCollectionService(client, path, fieldName)
      : new InsurancePolicyService(
          client,
          path,
          new QInsurancePolicyId(fieldName).buildUrl(id)
        );
  }

  public InsurancePoliciesByInsured(): InsurancePolicyCollectionService<ClientType>;
  public InsurancePoliciesByInsured(
    id: InsurancePolicyId
  ): InsurancePolicyService<ClientType>;
  public InsurancePoliciesByInsured(id?: InsurancePolicyId | undefined) {
    const fieldName = "InsurancePoliciesByInsured";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new InsurancePolicyCollectionService(client, path, fieldName)
      : new InsurancePolicyService(
          client,
          path,
          new QInsurancePolicyId(fieldName).buildUrl(id)
        );
  }

  public InsurancePoliciesByTiedTo(): InsurancePolicyCollectionService<ClientType>;
  public InsurancePoliciesByTiedTo(
    id: InsurancePolicyId
  ): InsurancePolicyService<ClientType>;
  public InsurancePoliciesByTiedTo(id?: InsurancePolicyId | undefined) {
    const fieldName = "InsurancePoliciesByTiedTo";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new InsurancePolicyCollectionService(client, path, fieldName)
      : new InsurancePolicyService(
          client,
          path,
          new QInsurancePolicyId(fieldName).buildUrl(id)
        );
  }

  public Investigators(): InvestigatorCollectionService<ClientType>;
  public Investigators(id: InvestigatorId): InvestigatorService<ClientType>;
  public Investigators(id?: InvestigatorId | undefined) {
    const fieldName = "Investigators";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new InvestigatorCollectionService(client, path, fieldName)
      : new InvestigatorService(
          client,
          path,
          new QInvestigatorId(fieldName).buildUrl(id)
        );
  }

  public LawsuitRoles(): LawsuitRoleCollectionService<ClientType>;
  public LawsuitRoles(id: LawsuitRoleId): LawsuitRoleService<ClientType>;
  public LawsuitRoles(id?: LawsuitRoleId | undefined) {
    const fieldName = "LawsuitRoles";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitRoleCollectionService(client, path, fieldName)
      : new LawsuitRoleService(
          client,
          path,
          new QLawsuitRoleId(fieldName).buildUrl(id)
        );
  }

  public MedicalEvaluationsByDoctor(): MedicalEvaluationCollectionService<ClientType>;
  public MedicalEvaluationsByDoctor(
    id: MedicalEvaluationId
  ): MedicalEvaluationService<ClientType>;
  public MedicalEvaluationsByDoctor(id?: MedicalEvaluationId | undefined) {
    const fieldName = "MedicalEvaluationsByDoctor";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new MedicalEvaluationCollectionService(client, path, fieldName)
      : new MedicalEvaluationService(
          client,
          path,
          new QMedicalEvaluationId(fieldName).buildUrl(id)
        );
  }

  public MedicalEvaluationsByPrepBy(): MedicalEvaluationCollectionService<ClientType>;
  public MedicalEvaluationsByPrepBy(
    id: MedicalEvaluationId
  ): MedicalEvaluationService<ClientType>;
  public MedicalEvaluationsByPrepBy(id?: MedicalEvaluationId | undefined) {
    const fieldName = "MedicalEvaluationsByPrepBy";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new MedicalEvaluationCollectionService(client, path, fieldName)
      : new MedicalEvaluationService(
          client,
          path,
          new QMedicalEvaluationId(fieldName).buildUrl(id)
        );
  }

  public MedicalEvaluationsByRequestor(): MedicalEvaluationCollectionService<ClientType>;
  public MedicalEvaluationsByRequestor(
    id: MedicalEvaluationId
  ): MedicalEvaluationService<ClientType>;
  public MedicalEvaluationsByRequestor(id?: MedicalEvaluationId | undefined) {
    const fieldName = "MedicalEvaluationsByRequestor";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new MedicalEvaluationCollectionService(client, path, fieldName)
      : new MedicalEvaluationService(
          client,
          path,
          new QMedicalEvaluationId(fieldName).buildUrl(id)
        );
  }

  public PIPBenefits(): PIPBenefitCollectionService<ClientType>;
  public PIPBenefits(id: PIPBenefitId): PIPBenefitService<ClientType>;
  public PIPBenefits(id?: PIPBenefitId | undefined) {
    const fieldName = "PIPBenefits";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PIPBenefitCollectionService(client, path, fieldName)
      : new PIPBenefitService(
          client,
          path,
          new QPIPBenefitId(fieldName).buildUrl(id)
        );
  }

  public PlaintiffLawsuitParties(): PlaintiffLawsuitPartyCollectionService<ClientType>;
  public PlaintiffLawsuitParties(
    id: PlaintiffLawsuitPartyId
  ): PlaintiffLawsuitPartyService<ClientType>;
  public PlaintiffLawsuitParties(id?: PlaintiffLawsuitPartyId | undefined) {
    const fieldName = "PlaintiffLawsuitParties";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PlaintiffLawsuitPartyCollectionService(client, path, fieldName)
      : new PlaintiffLawsuitPartyService(
          client,
          path,
          new QPlaintiffLawsuitPartyId(fieldName).buildUrl(id)
        );
  }

  public PoliceReports(): PoliceReportCollectionService<ClientType>;
  public PoliceReports(id: PoliceReportId): PoliceReportService<ClientType>;
  public PoliceReports(id?: PoliceReportId | undefined) {
    const fieldName = "PoliceReports";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PoliceReportCollectionService(client, path, fieldName)
      : new PoliceReportService(
          client,
          path,
          new QPoliceReportId(fieldName).buildUrl(id)
        );
  }

  public AdjusterPropertyDamages(): PropertyDamageCollectionService<ClientType>;
  public AdjusterPropertyDamages(
    id: PropertyDamageId
  ): PropertyDamageService<ClientType>;
  public AdjusterPropertyDamages(id?: PropertyDamageId | undefined) {
    const fieldName = "AdjusterPropertyDamages";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PropertyDamageCollectionService(client, path, fieldName)
      : new PropertyDamageService(
          client,
          path,
          new QPropertyDamageId(fieldName).buildUrl(id)
        );
  }

  public CompanyPropertyDamages(): PropertyDamageCollectionService<ClientType>;
  public CompanyPropertyDamages(
    id: PropertyDamageId
  ): PropertyDamageService<ClientType>;
  public CompanyPropertyDamages(id?: PropertyDamageId | undefined) {
    const fieldName = "CompanyPropertyDamages";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PropertyDamageCollectionService(client, path, fieldName)
      : new PropertyDamageService(
          client,
          path,
          new QPropertyDamageId(fieldName).buildUrl(id)
        );
  }

  public PlaintiffPropertyDamages(): PropertyDamageCollectionService<ClientType>;
  public PlaintiffPropertyDamages(
    id: PropertyDamageId
  ): PropertyDamageService<ClientType>;
  public PlaintiffPropertyDamages(id?: PropertyDamageId | undefined) {
    const fieldName = "PlaintiffPropertyDamages";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PropertyDamageCollectionService(client, path, fieldName)
      : new PropertyDamageService(
          client,
          path,
          new QPropertyDamageId(fieldName).buildUrl(id)
        );
  }

  public Ticklers(): TicklerCollectionService<ClientType>;
  public Ticklers(id: TicklerId): TicklerService<ClientType>;
  public Ticklers(id?: TicklerId | undefined) {
    const fieldName = "Ticklers";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TicklerCollectionService(client, path, fieldName)
      : new TicklerService(
          client,
          path,
          new QTicklerId(fieldName).buildUrl(id)
        );
  }

  public Witness(): WitnessService<ClientType> {
    if (!this._Witness) {
      const { client, path } = this.__base;
      this._Witness = new WitnessService(client, path, "Witness");
    }

    return this._Witness;
  }
}

export class LawsuitPartyCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LawsuitParty,
  EditableLawsuitParty,
  QLawsuitParty,
  LawsuitPartyId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitParty, new QLawsuitPartyId(name));
  }
}
