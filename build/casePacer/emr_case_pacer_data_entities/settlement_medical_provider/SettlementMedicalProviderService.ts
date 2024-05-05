import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  SettlementMedicalProvider,
  EditableSettlementMedicalProvider,
  SettlementMedicalProviderId,
} from "./SettlementMedicalProvider";
import {
  QSettlementMedicalProvider,
  qSettlementMedicalProvider,
  QSettlementMedicalProviderId,
} from "./QSettlementMedicalProvider";
import { MedicalProviderService } from "../medical_provider/MedicalProviderService";
import { SettlementService } from "../settlement/SettlementService";

export class SettlementMedicalProviderService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SettlementMedicalProvider,
  EditableSettlementMedicalProvider,
  QSettlementMedicalProvider
> {
  private _MedicalProvider?: MedicalProviderService<ClientType>;
  private _Settlement?: SettlementService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSettlementMedicalProvider);
  }

  public MedicalProvider(): MedicalProviderService<ClientType> {
    if (!this._MedicalProvider) {
      const { client, path } = this.__base;
      this._MedicalProvider = new MedicalProviderService(
        client,
        path,
        "MedicalProvider"
      );
    }

    return this._MedicalProvider;
  }

  public Settlement(): SettlementService<ClientType> {
    if (!this._Settlement) {
      const { client, path } = this.__base;
      this._Settlement = new SettlementService(client, path, "Settlement");
    }

    return this._Settlement;
  }
}

export class SettlementMedicalProviderCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SettlementMedicalProvider,
  EditableSettlementMedicalProvider,
  QSettlementMedicalProvider,
  SettlementMedicalProviderId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qSettlementMedicalProvider,
      new QSettlementMedicalProviderId(name)
    );
  }
}
