import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  CPDirectMedicalProvider,
  EditableCPDirectMedicalProvider,
  CPDirectMedicalProviderId,
} from "./CPDirectMedicalProvider";
import {
  QCPDirectMedicalProvider,
  qCPDirectMedicalProvider,
  QCPDirectMedicalProviderId,
} from "./QCPDirectMedicalProvider";
import { AddressService } from "../address/AddressService";
import { IntakeClientLawsuitService } from "../intake_client_lawsuit/IntakeClientLawsuitService";
import { CPDirectTreatmentNoteId } from "../cp_direct_treatment_note/CPDirectTreatmentNote";
import { QCPDirectTreatmentNoteId } from "../cp_direct_treatment_note/QCPDirectTreatmentNote";
import {
  CPDirectTreatmentNoteService,
  CPDirectTreatmentNoteCollectionService,
} from "../cp_direct_treatment_note/CPDirectTreatmentNoteService";

export class CPDirectMedicalProviderService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CPDirectMedicalProvider,
  EditableCPDirectMedicalProvider,
  QCPDirectMedicalProvider
> {
  private _Address?: AddressService<ClientType>;
  private _IntakeClientLawsuit?: IntakeClientLawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCPDirectMedicalProvider);
  }

  public Address(): AddressService<ClientType> {
    if (!this._Address) {
      const { client, path } = this.__base;
      this._Address = new AddressService(client, path, "Address");
    }

    return this._Address;
  }

  public IntakeClientLawsuit(): IntakeClientLawsuitService<ClientType> {
    if (!this._IntakeClientLawsuit) {
      const { client, path } = this.__base;
      this._IntakeClientLawsuit = new IntakeClientLawsuitService(
        client,
        path,
        "IntakeClientLawsuit"
      );
    }

    return this._IntakeClientLawsuit;
  }

  public CPDirectTreatmentNotes(): CPDirectTreatmentNoteCollectionService<ClientType>;
  public CPDirectTreatmentNotes(
    id: CPDirectTreatmentNoteId
  ): CPDirectTreatmentNoteService<ClientType>;
  public CPDirectTreatmentNotes(id?: CPDirectTreatmentNoteId | undefined) {
    const fieldName = "CPDirectTreatmentNotes";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectTreatmentNoteCollectionService(client, path, fieldName)
      : new CPDirectTreatmentNoteService(
          client,
          path,
          new QCPDirectTreatmentNoteId(fieldName).buildUrl(id)
        );
  }
}

export class CPDirectMedicalProviderCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CPDirectMedicalProvider,
  EditableCPDirectMedicalProvider,
  QCPDirectMedicalProvider,
  CPDirectMedicalProviderId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCPDirectMedicalProvider,
      new QCPDirectMedicalProviderId(name)
    );
  }
}
