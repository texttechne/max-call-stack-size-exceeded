import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  IntakeClientLawsuit,
  EditableIntakeClientLawsuit,
  IntakeClientLawsuitId,
} from "./IntakeClientLawsuit";
import {
  QIntakeClientLawsuit,
  qIntakeClientLawsuit,
  QIntakeClientLawsuitId,
} from "./QIntakeClientLawsuit";
import { CPDirectCaseProgressService } from "../cp_direct_case_progress/CPDirectCaseProgressService";
import { IntakeClientFirmService } from "../intake_client_firm/IntakeClientFirmService";
import { LawsuitService } from "../lawsuit/LawsuitService";
import { CPDirectMedicalProviderId } from "../cp_direct_medical_provider/CPDirectMedicalProvider";
import { QCPDirectMedicalProviderId } from "../cp_direct_medical_provider/QCPDirectMedicalProvider";
import {
  CPDirectMedicalProviderService,
  CPDirectMedicalProviderCollectionService,
} from "../cp_direct_medical_provider/CPDirectMedicalProviderService";
import { CPDirectMessageId } from "../cp_direct_message/CPDirectMessage";
import { QCPDirectMessageId } from "../cp_direct_message/QCPDirectMessage";
import {
  CPDirectMessageService,
  CPDirectMessageCollectionService,
} from "../cp_direct_message/CPDirectMessageService";

export class IntakeClientLawsuitService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  IntakeClientLawsuit,
  EditableIntakeClientLawsuit,
  QIntakeClientLawsuit
> {
  private _CPDirectCaseProgress?: CPDirectCaseProgressService<ClientType>;
  private _IntakeClientFirm?: IntakeClientFirmService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qIntakeClientLawsuit);
  }

  public CPDirectCaseProgress(): CPDirectCaseProgressService<ClientType> {
    if (!this._CPDirectCaseProgress) {
      const { client, path } = this.__base;
      this._CPDirectCaseProgress = new CPDirectCaseProgressService(
        client,
        path,
        "CPDirectCaseProgress"
      );
    }

    return this._CPDirectCaseProgress;
  }

  public IntakeClientFirm(): IntakeClientFirmService<ClientType> {
    if (!this._IntakeClientFirm) {
      const { client, path } = this.__base;
      this._IntakeClientFirm = new IntakeClientFirmService(
        client,
        path,
        "IntakeClientFirm"
      );
    }

    return this._IntakeClientFirm;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public CPDirectMedicalProviders(): CPDirectMedicalProviderCollectionService<ClientType>;
  public CPDirectMedicalProviders(
    id: CPDirectMedicalProviderId
  ): CPDirectMedicalProviderService<ClientType>;
  public CPDirectMedicalProviders(id?: CPDirectMedicalProviderId | undefined) {
    const fieldName = "CPDirectMedicalProviders";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectMedicalProviderCollectionService(client, path, fieldName)
      : new CPDirectMedicalProviderService(
          client,
          path,
          new QCPDirectMedicalProviderId(fieldName).buildUrl(id)
        );
  }

  public CPDirectMessages(): CPDirectMessageCollectionService<ClientType>;
  public CPDirectMessages(
    id: CPDirectMessageId
  ): CPDirectMessageService<ClientType>;
  public CPDirectMessages(id?: CPDirectMessageId | undefined) {
    const fieldName = "CPDirectMessages";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectMessageCollectionService(client, path, fieldName)
      : new CPDirectMessageService(
          client,
          path,
          new QCPDirectMessageId(fieldName).buildUrl(id)
        );
  }
}

export class IntakeClientLawsuitCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  IntakeClientLawsuit,
  EditableIntakeClientLawsuit,
  QIntakeClientLawsuit,
  IntakeClientLawsuitId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qIntakeClientLawsuit,
      new QIntakeClientLawsuitId(name)
    );
  }
}
