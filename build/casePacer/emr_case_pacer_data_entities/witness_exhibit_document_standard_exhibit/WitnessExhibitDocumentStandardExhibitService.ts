import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  WitnessExhibitDocumentStandardExhibit,
  EditableWitnessExhibitDocumentStandardExhibit,
  WitnessExhibitDocumentStandardExhibitId,
} from "./WitnessExhibitDocumentStandardExhibit";
import {
  QWitnessExhibitDocumentStandardExhibit,
  qWitnessExhibitDocumentStandardExhibit,
  QWitnessExhibitDocumentStandardExhibitId,
} from "./QWitnessExhibitDocumentStandardExhibit";
import { StandardExhibitService } from "../standard_exhibit/StandardExhibitService";
import { WitnessExhibitDocumentService } from "../witness_exhibit_document/WitnessExhibitDocumentService";

export class WitnessExhibitDocumentStandardExhibitService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  WitnessExhibitDocumentStandardExhibit,
  EditableWitnessExhibitDocumentStandardExhibit,
  QWitnessExhibitDocumentStandardExhibit
> {
  private _StandardExhibit?: StandardExhibitService<ClientType>;
  private _WitnessExhibitDocument?: WitnessExhibitDocumentService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qWitnessExhibitDocumentStandardExhibit);
  }

  public StandardExhibit(): StandardExhibitService<ClientType> {
    if (!this._StandardExhibit) {
      const { client, path } = this.__base;
      this._StandardExhibit = new StandardExhibitService(
        client,
        path,
        "StandardExhibit"
      );
    }

    return this._StandardExhibit;
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

export class WitnessExhibitDocumentStandardExhibitCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  WitnessExhibitDocumentStandardExhibit,
  EditableWitnessExhibitDocumentStandardExhibit,
  QWitnessExhibitDocumentStandardExhibit,
  WitnessExhibitDocumentStandardExhibitId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qWitnessExhibitDocumentStandardExhibit,
      new QWitnessExhibitDocumentStandardExhibitId(name)
    );
  }
}
