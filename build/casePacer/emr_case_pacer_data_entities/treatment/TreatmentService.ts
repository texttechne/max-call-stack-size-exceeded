import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Treatment, EditableTreatment, TreatmentId } from "./Treatment";
import { QTreatment, qTreatment, QTreatmentId } from "./QTreatment";
import { MedicalProviderService } from "../medical_provider/MedicalProviderService";

export class TreatmentService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  Treatment,
  EditableTreatment,
  QTreatment
> {
  private _MedicalProvider?: MedicalProviderService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTreatment);
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
}

export class TreatmentCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Treatment,
  EditableTreatment,
  QTreatment,
  TreatmentId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTreatment, new QTreatmentId(name));
  }
}
