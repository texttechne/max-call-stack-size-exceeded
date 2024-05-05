import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  TreatmentNote,
  EditableTreatmentNote,
  TreatmentNoteId,
} from "./TreatmentNote";
import {
  QTreatmentNote,
  qTreatmentNote,
  QTreatmentNoteId,
} from "./QTreatmentNote";
import { MedicalProviderService } from "../medical_provider/MedicalProviderService";

export class TreatmentNoteService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TreatmentNote,
  EditableTreatmentNote,
  QTreatmentNote
> {
  private _MedicalProvider?: MedicalProviderService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTreatmentNote);
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

export class TreatmentNoteCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TreatmentNote,
  EditableTreatmentNote,
  QTreatmentNote,
  TreatmentNoteId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTreatmentNote, new QTreatmentNoteId(name));
  }
}
