import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  WitnessExhibitDocument,
  EditableWitnessExhibitDocument,
  WitnessExhibitDocumentId,
} from "./WitnessExhibitDocument";
import {
  QWitnessExhibitDocument,
  qWitnessExhibitDocument,
  QWitnessExhibitDocumentId,
} from "./QWitnessExhibitDocument";
import { LawsuitService } from "../lawsuit/LawsuitService";
import { WitnessExhibitDocumentPartyId } from "../witness_exhibit_document_party/WitnessExhibitDocumentParty";
import { QWitnessExhibitDocumentPartyId } from "../witness_exhibit_document_party/QWitnessExhibitDocumentParty";
import {
  WitnessExhibitDocumentPartyService,
  WitnessExhibitDocumentPartyCollectionService,
} from "../witness_exhibit_document_party/WitnessExhibitDocumentPartyService";
import { WitnessExhibitDocumentStandardExhibitId } from "../witness_exhibit_document_standard_exhibit/WitnessExhibitDocumentStandardExhibit";
import { QWitnessExhibitDocumentStandardExhibitId } from "../witness_exhibit_document_standard_exhibit/QWitnessExhibitDocumentStandardExhibit";
import {
  WitnessExhibitDocumentStandardExhibitService,
  WitnessExhibitDocumentStandardExhibitCollectionService,
} from "../witness_exhibit_document_standard_exhibit/WitnessExhibitDocumentStandardExhibitService";
import { WitnessExhibitDocumentStandardWitnessId } from "../witness_exhibit_document_standard_witness/WitnessExhibitDocumentStandardWitness";
import { QWitnessExhibitDocumentStandardWitnessId } from "../witness_exhibit_document_standard_witness/QWitnessExhibitDocumentStandardWitness";
import {
  WitnessExhibitDocumentStandardWitnessService,
  WitnessExhibitDocumentStandardWitnessCollectionService,
} from "../witness_exhibit_document_standard_witness/WitnessExhibitDocumentStandardWitnessService";
import { WitnessExhibitDocumentTrialExhibitId } from "../witness_exhibit_document_trial_exhibit/WitnessExhibitDocumentTrialExhibit";
import { QWitnessExhibitDocumentTrialExhibitId } from "../witness_exhibit_document_trial_exhibit/QWitnessExhibitDocumentTrialExhibit";
import {
  WitnessExhibitDocumentTrialExhibitService,
  WitnessExhibitDocumentTrialExhibitCollectionService,
} from "../witness_exhibit_document_trial_exhibit/WitnessExhibitDocumentTrialExhibitService";

export class WitnessExhibitDocumentService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  WitnessExhibitDocument,
  EditableWitnessExhibitDocument,
  QWitnessExhibitDocument
> {
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qWitnessExhibitDocument);
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public WitnessExhibitDocumentParties(): WitnessExhibitDocumentPartyCollectionService<ClientType>;
  public WitnessExhibitDocumentParties(
    id: WitnessExhibitDocumentPartyId
  ): WitnessExhibitDocumentPartyService<ClientType>;
  public WitnessExhibitDocumentParties(
    id?: WitnessExhibitDocumentPartyId | undefined
  ) {
    const fieldName = "WitnessExhibitDocumentParties";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new WitnessExhibitDocumentPartyCollectionService(
          client,
          path,
          fieldName
        )
      : new WitnessExhibitDocumentPartyService(
          client,
          path,
          new QWitnessExhibitDocumentPartyId(fieldName).buildUrl(id)
        );
  }

  public WitnessExhibitDocumentStandardExhibits(): WitnessExhibitDocumentStandardExhibitCollectionService<ClientType>;
  public WitnessExhibitDocumentStandardExhibits(
    id: WitnessExhibitDocumentStandardExhibitId
  ): WitnessExhibitDocumentStandardExhibitService<ClientType>;
  public WitnessExhibitDocumentStandardExhibits(
    id?: WitnessExhibitDocumentStandardExhibitId | undefined
  ) {
    const fieldName = "WitnessExhibitDocumentStandardExhibits";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new WitnessExhibitDocumentStandardExhibitCollectionService(
          client,
          path,
          fieldName
        )
      : new WitnessExhibitDocumentStandardExhibitService(
          client,
          path,
          new QWitnessExhibitDocumentStandardExhibitId(fieldName).buildUrl(id)
        );
  }

  public WitnessExhibitDocumentStandardWitnesses(): WitnessExhibitDocumentStandardWitnessCollectionService<ClientType>;
  public WitnessExhibitDocumentStandardWitnesses(
    id: WitnessExhibitDocumentStandardWitnessId
  ): WitnessExhibitDocumentStandardWitnessService<ClientType>;
  public WitnessExhibitDocumentStandardWitnesses(
    id?: WitnessExhibitDocumentStandardWitnessId | undefined
  ) {
    const fieldName = "WitnessExhibitDocumentStandardWitnesses";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new WitnessExhibitDocumentStandardWitnessCollectionService(
          client,
          path,
          fieldName
        )
      : new WitnessExhibitDocumentStandardWitnessService(
          client,
          path,
          new QWitnessExhibitDocumentStandardWitnessId(fieldName).buildUrl(id)
        );
  }

  public WitnessExhibitDocumentTrialExhibits(): WitnessExhibitDocumentTrialExhibitCollectionService<ClientType>;
  public WitnessExhibitDocumentTrialExhibits(
    id: WitnessExhibitDocumentTrialExhibitId
  ): WitnessExhibitDocumentTrialExhibitService<ClientType>;
  public WitnessExhibitDocumentTrialExhibits(
    id?: WitnessExhibitDocumentTrialExhibitId | undefined
  ) {
    const fieldName = "WitnessExhibitDocumentTrialExhibits";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new WitnessExhibitDocumentTrialExhibitCollectionService(
          client,
          path,
          fieldName
        )
      : new WitnessExhibitDocumentTrialExhibitService(
          client,
          path,
          new QWitnessExhibitDocumentTrialExhibitId(fieldName).buildUrl(id)
        );
  }
}

export class WitnessExhibitDocumentCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  WitnessExhibitDocument,
  EditableWitnessExhibitDocument,
  QWitnessExhibitDocument,
  WitnessExhibitDocumentId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qWitnessExhibitDocument,
      new QWitnessExhibitDocumentId(name)
    );
  }
}
