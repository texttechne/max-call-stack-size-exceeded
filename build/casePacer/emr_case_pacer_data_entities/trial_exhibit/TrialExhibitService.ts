import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  TrialExhibit,
  EditableTrialExhibit,
  TrialExhibitId,
} from "./TrialExhibit";
import { QTrialExhibit, qTrialExhibit, QTrialExhibitId } from "./QTrialExhibit";
import { FirmService } from "../firm/FirmService";
import { TrialService } from "../trial/TrialService";
import { WitnessExhibitDocumentTrialExhibitId } from "../witness_exhibit_document_trial_exhibit/WitnessExhibitDocumentTrialExhibit";
import { QWitnessExhibitDocumentTrialExhibitId } from "../witness_exhibit_document_trial_exhibit/QWitnessExhibitDocumentTrialExhibit";
import {
  WitnessExhibitDocumentTrialExhibitService,
  WitnessExhibitDocumentTrialExhibitCollectionService,
} from "../witness_exhibit_document_trial_exhibit/WitnessExhibitDocumentTrialExhibitService";

export class TrialExhibitService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TrialExhibit,
  EditableTrialExhibit,
  QTrialExhibit
> {
  private _Firm?: FirmService<ClientType>;
  private _Trial?: TrialService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTrialExhibit);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public Trial(): TrialService<ClientType> {
    if (!this._Trial) {
      const { client, path } = this.__base;
      this._Trial = new TrialService(client, path, "Trial");
    }

    return this._Trial;
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

export class TrialExhibitCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TrialExhibit,
  EditableTrialExhibit,
  QTrialExhibit,
  TrialExhibitId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTrialExhibit, new QTrialExhibitId(name));
  }
}
