import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Litigation, EditableLitigation, LitigationId } from "./Litigation";
import { QLitigation, qLitigation, QLitigationId } from "./QLitigation";
import { PartyService } from "../party/PartyService";
import { LawsuitService } from "../lawsuit/LawsuitService";
import { ADRId } from "../adr/ADR";
import { QADRId } from "../adr/QADR";
import { ADRService, ADRCollectionService } from "../adr/ADRService";
import { AnswerEnlargementId } from "../answer_enlargement/AnswerEnlargement";
import { QAnswerEnlargementId } from "../answer_enlargement/QAnswerEnlargement";
import {
  AnswerEnlargementService,
  AnswerEnlargementCollectionService,
} from "../answer_enlargement/AnswerEnlargementService";
import { ComplaintId } from "../complaint/Complaint";
import { QComplaintId } from "../complaint/QComplaint";
import {
  ComplaintService,
  ComplaintCollectionService,
} from "../complaint/ComplaintService";
import { DefendantLitigationAssnId } from "../defendant_litigation_assn/DefendantLitigationAssn";
import { QDefendantLitigationAssnId } from "../defendant_litigation_assn/QDefendantLitigationAssn";
import {
  DefendantLitigationAssnService,
  DefendantLitigationAssnCollectionService,
} from "../defendant_litigation_assn/DefendantLitigationAssnService";
import { DepositionLitigationAssnId } from "../deposition_litigation_assn/DepositionLitigationAssn";
import { QDepositionLitigationAssnId } from "../deposition_litigation_assn/QDepositionLitigationAssn";
import {
  DepositionLitigationAssnService,
  DepositionLitigationAssnCollectionService,
} from "../deposition_litigation_assn/DepositionLitigationAssnService";
import { DiscoveryLitigationAssnId } from "../discovery_litigation_assn/DiscoveryLitigationAssn";
import { QDiscoveryLitigationAssnId } from "../discovery_litigation_assn/QDiscoveryLitigationAssn";
import {
  DiscoveryLitigationAssnService,
  DiscoveryLitigationAssnCollectionService,
} from "../discovery_litigation_assn/DiscoveryLitigationAssnService";
import { TrialId } from "../trial/Trial";
import { QTrialId } from "../trial/QTrial";
import { TrialService, TrialCollectionService } from "../trial/TrialService";
import { WitnessLitigationAssnId } from "../witness_litigation_assn/WitnessLitigationAssn";
import { QWitnessLitigationAssnId } from "../witness_litigation_assn/QWitnessLitigationAssn";
import {
  WitnessLitigationAssnService,
  WitnessLitigationAssnCollectionService,
} from "../witness_litigation_assn/WitnessLitigationAssnService";

export class LitigationService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  Litigation,
  EditableLitigation,
  QLitigation
> {
  private _Court?: PartyService<ClientType>;
  private _Judge?: PartyService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLitigation);
  }

  public Court(): PartyService<ClientType> {
    if (!this._Court) {
      const { client, path } = this.__base;
      this._Court = new PartyService(client, path, "Court");
    }

    return this._Court;
  }

  public Judge(): PartyService<ClientType> {
    if (!this._Judge) {
      const { client, path } = this.__base;
      this._Judge = new PartyService(client, path, "Judge");
    }

    return this._Judge;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
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

  public AnswerEnlargements(): AnswerEnlargementCollectionService<ClientType>;
  public AnswerEnlargements(
    id: AnswerEnlargementId
  ): AnswerEnlargementService<ClientType>;
  public AnswerEnlargements(id?: AnswerEnlargementId | undefined) {
    const fieldName = "AnswerEnlargements";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AnswerEnlargementCollectionService(client, path, fieldName)
      : new AnswerEnlargementService(
          client,
          path,
          new QAnswerEnlargementId(fieldName).buildUrl(id)
        );
  }

  public Complaints(): ComplaintCollectionService<ClientType>;
  public Complaints(id: ComplaintId): ComplaintService<ClientType>;
  public Complaints(id?: ComplaintId | undefined) {
    const fieldName = "Complaints";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ComplaintCollectionService(client, path, fieldName)
      : new ComplaintService(
          client,
          path,
          new QComplaintId(fieldName).buildUrl(id)
        );
  }

  public DefendantLitigationAssns(): DefendantLitigationAssnCollectionService<ClientType>;
  public DefendantLitigationAssns(
    id: DefendantLitigationAssnId
  ): DefendantLitigationAssnService<ClientType>;
  public DefendantLitigationAssns(id?: DefendantLitigationAssnId | undefined) {
    const fieldName = "DefendantLitigationAssns";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DefendantLitigationAssnCollectionService(client, path, fieldName)
      : new DefendantLitigationAssnService(
          client,
          path,
          new QDefendantLitigationAssnId(fieldName).buildUrl(id)
        );
  }

  public DepositionLitigationAssns(): DepositionLitigationAssnCollectionService<ClientType>;
  public DepositionLitigationAssns(
    id: DepositionLitigationAssnId
  ): DepositionLitigationAssnService<ClientType>;
  public DepositionLitigationAssns(
    id?: DepositionLitigationAssnId | undefined
  ) {
    const fieldName = "DepositionLitigationAssns";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DepositionLitigationAssnCollectionService(client, path, fieldName)
      : new DepositionLitigationAssnService(
          client,
          path,
          new QDepositionLitigationAssnId(fieldName).buildUrl(id)
        );
  }

  public DiscoveryLitigationAssns(): DiscoveryLitigationAssnCollectionService<ClientType>;
  public DiscoveryLitigationAssns(
    id: DiscoveryLitigationAssnId
  ): DiscoveryLitigationAssnService<ClientType>;
  public DiscoveryLitigationAssns(id?: DiscoveryLitigationAssnId | undefined) {
    const fieldName = "DiscoveryLitigationAssns";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DiscoveryLitigationAssnCollectionService(client, path, fieldName)
      : new DiscoveryLitigationAssnService(
          client,
          path,
          new QDiscoveryLitigationAssnId(fieldName).buildUrl(id)
        );
  }

  public Trials(): TrialCollectionService<ClientType>;
  public Trials(id: TrialId): TrialService<ClientType>;
  public Trials(id?: TrialId | undefined) {
    const fieldName = "Trials";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TrialCollectionService(client, path, fieldName)
      : new TrialService(client, path, new QTrialId(fieldName).buildUrl(id));
  }

  public WitnessLitigationAssns(): WitnessLitigationAssnCollectionService<ClientType>;
  public WitnessLitigationAssns(
    id: WitnessLitigationAssnId
  ): WitnessLitigationAssnService<ClientType>;
  public WitnessLitigationAssns(id?: WitnessLitigationAssnId | undefined) {
    const fieldName = "WitnessLitigationAssns";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new WitnessLitigationAssnCollectionService(client, path, fieldName)
      : new WitnessLitigationAssnService(
          client,
          path,
          new QWitnessLitigationAssnId(fieldName).buildUrl(id)
        );
  }
}

export class LitigationCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Litigation,
  EditableLitigation,
  QLitigation,
  LitigationId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLitigation, new QLitigationId(name));
  }
}
