import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  WitnessExhibitDocumentTrialExhibit,
  EditableWitnessExhibitDocumentTrialExhibit,
  WitnessExhibitDocumentTrialExhibitId,
} from "./WitnessExhibitDocumentTrialExhibit";
import {
  QWitnessExhibitDocumentTrialExhibit,
  qWitnessExhibitDocumentTrialExhibit,
  QWitnessExhibitDocumentTrialExhibitId,
} from "./QWitnessExhibitDocumentTrialExhibit";
import { TrialExhibitService } from "../trial_exhibit/TrialExhibitService";
import { WitnessExhibitDocumentService } from "../witness_exhibit_document/WitnessExhibitDocumentService";

export class WitnessExhibitDocumentTrialExhibitService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  WitnessExhibitDocumentTrialExhibit,
  EditableWitnessExhibitDocumentTrialExhibit,
  QWitnessExhibitDocumentTrialExhibit
> {
  private _TrialExhibit?: TrialExhibitService<ClientType>;
  private _WitnessExhibitDocument?: WitnessExhibitDocumentService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qWitnessExhibitDocumentTrialExhibit);
  }

  public TrialExhibit(): TrialExhibitService<ClientType> {
    if (!this._TrialExhibit) {
      const { client, path } = this.__base;
      this._TrialExhibit = new TrialExhibitService(
        client,
        path,
        "TrialExhibit"
      );
    }

    return this._TrialExhibit;
  }

  public WitnessExhibitDocument(): WitnessExhibitDocumentService<ClientType> {
    if (!this._WitnessExhibitDocument) {
      const { client, path } = this.__base;
      this._WitnessExhibitDocument = new WitnessExhibitDocumentService(
        client,
        path,
        "WitnessExhibitDocument"
      );
    }

    return this._WitnessExhibitDocument;
  }
}

export class WitnessExhibitDocumentTrialExhibitCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  WitnessExhibitDocumentTrialExhibit,
  EditableWitnessExhibitDocumentTrialExhibit,
  QWitnessExhibitDocumentTrialExhibit,
  WitnessExhibitDocumentTrialExhibitId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qWitnessExhibitDocumentTrialExhibit,
      new QWitnessExhibitDocumentTrialExhibitId(name)
    );
  }
}
