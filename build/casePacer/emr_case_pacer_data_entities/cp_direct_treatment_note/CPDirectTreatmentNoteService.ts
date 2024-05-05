import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  CPDirectTreatmentNote,
  EditableCPDirectTreatmentNote,
  CPDirectTreatmentNoteId,
} from "./CPDirectTreatmentNote";
import {
  QCPDirectTreatmentNote,
  qCPDirectTreatmentNote,
  QCPDirectTreatmentNoteId,
} from "./QCPDirectTreatmentNote";
import { CPDirectMedicalProviderService } from "../cp_direct_medical_provider/CPDirectMedicalProviderService";

export class CPDirectTreatmentNoteService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CPDirectTreatmentNote,
  EditableCPDirectTreatmentNote,
  QCPDirectTreatmentNote
> {
  private _CPDirectMedicalProvider?: CPDirectMedicalProviderService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCPDirectTreatmentNote);
  }

  public CPDirectMedicalProvider(): CPDirectMedicalProviderService<ClientType> {
    if (!this._CPDirectMedicalProvider) {
      const { client, path } = this.__base;
      this._CPDirectMedicalProvider = new CPDirectMedicalProviderService(
        client,
        path,
        "CPDirectMedicalProvider"
      );
    }

    return this._CPDirectMedicalProvider;
  }
}

export class CPDirectTreatmentNoteCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CPDirectTreatmentNote,
  EditableCPDirectTreatmentNote,
  QCPDirectTreatmentNote,
  CPDirectTreatmentNoteId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCPDirectTreatmentNote,
      new QCPDirectTreatmentNoteId(name)
    );
  }
}
