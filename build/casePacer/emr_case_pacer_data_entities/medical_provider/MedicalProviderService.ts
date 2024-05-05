import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  MedicalProvider,
  EditableMedicalProvider,
  MedicalProviderId,
} from "./MedicalProvider";
import {
  QMedicalProvider,
  qMedicalProvider,
  QMedicalProviderId,
} from "./QMedicalProvider";
import { LawsuitService } from "../lawsuit/LawsuitService";
import { PartyService } from "../party/PartyService";
import { SettlementMedicalProviderId } from "../settlement_medical_provider/SettlementMedicalProvider";
import { QSettlementMedicalProviderId } from "../settlement_medical_provider/QSettlementMedicalProvider";
import {
  SettlementMedicalProviderService,
  SettlementMedicalProviderCollectionService,
} from "../settlement_medical_provider/SettlementMedicalProviderService";
import { TreatmentId } from "../treatment/Treatment";
import { QTreatmentId } from "../treatment/QTreatment";
import {
  TreatmentService,
  TreatmentCollectionService,
} from "../treatment/TreatmentService";
import { TreatmentNoteId } from "../treatment_note/TreatmentNote";
import { QTreatmentNoteId } from "../treatment_note/QTreatmentNote";
import {
  TreatmentNoteService,
  TreatmentNoteCollectionService,
} from "../treatment_note/TreatmentNoteService";

export class MedicalProviderService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  MedicalProvider,
  EditableMedicalProvider,
  QMedicalProvider
> {
  private _Lawsuit?: LawsuitService<ClientType>;
  private _Company?: PartyService<ClientType>;
  private _Plaintiff?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qMedicalProvider);
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public Company(): PartyService<ClientType> {
    if (!this._Company) {
      const { client, path } = this.__base;
      this._Company = new PartyService(client, path, "Company");
    }

    return this._Company;
  }

  public Plaintiff(): PartyService<ClientType> {
    if (!this._Plaintiff) {
      const { client, path } = this.__base;
      this._Plaintiff = new PartyService(client, path, "Plaintiff");
    }

    return this._Plaintiff;
  }

  public SettlementMedicalProviders(): SettlementMedicalProviderCollectionService<ClientType>;
  public SettlementMedicalProviders(
    id: SettlementMedicalProviderId
  ): SettlementMedicalProviderService<ClientType>;
  public SettlementMedicalProviders(
    id?: SettlementMedicalProviderId | undefined
  ) {
    const fieldName = "SettlementMedicalProviders";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SettlementMedicalProviderCollectionService(client, path, fieldName)
      : new SettlementMedicalProviderService(
          client,
          path,
          new QSettlementMedicalProviderId(fieldName).buildUrl(id)
        );
  }

  public Treatments(): TreatmentCollectionService<ClientType>;
  public Treatments(id: TreatmentId): TreatmentService<ClientType>;
  public Treatments(id?: TreatmentId | undefined) {
    const fieldName = "Treatments";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TreatmentCollectionService(client, path, fieldName)
      : new TreatmentService(
          client,
          path,
          new QTreatmentId(fieldName).buildUrl(id)
        );
  }

  public TreatmentNotes(): TreatmentNoteCollectionService<ClientType>;
  public TreatmentNotes(id: TreatmentNoteId): TreatmentNoteService<ClientType>;
  public TreatmentNotes(id?: TreatmentNoteId | undefined) {
    const fieldName = "TreatmentNotes";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TreatmentNoteCollectionService(client, path, fieldName)
      : new TreatmentNoteService(
          client,
          path,
          new QTreatmentNoteId(fieldName).buildUrl(id)
        );
  }
}

export class MedicalProviderCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  MedicalProvider,
  EditableMedicalProvider,
  QMedicalProvider,
  MedicalProviderId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qMedicalProvider,
      new QMedicalProviderId(name)
    );
  }
}
