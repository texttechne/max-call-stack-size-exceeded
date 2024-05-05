import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  StandardExhibit,
  EditableStandardExhibit,
  StandardExhibitId,
} from "./StandardExhibit";
import {
  QStandardExhibit,
  qStandardExhibit,
  QStandardExhibitId,
} from "./QStandardExhibit";
import { FirmService } from "../firm/FirmService";
import { WitnessExhibitDocumentStandardExhibitId } from "../witness_exhibit_document_standard_exhibit/WitnessExhibitDocumentStandardExhibit";
import { QWitnessExhibitDocumentStandardExhibitId } from "../witness_exhibit_document_standard_exhibit/QWitnessExhibitDocumentStandardExhibit";
import {
  WitnessExhibitDocumentStandardExhibitService,
  WitnessExhibitDocumentStandardExhibitCollectionService,
} from "../witness_exhibit_document_standard_exhibit/WitnessExhibitDocumentStandardExhibitService";

export class StandardExhibitService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  StandardExhibit,
  EditableStandardExhibit,
  QStandardExhibit
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qStandardExhibit);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
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
}

export class StandardExhibitCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  StandardExhibit,
  EditableStandardExhibit,
  QStandardExhibit,
  StandardExhibitId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qStandardExhibit,
      new QStandardExhibitId(name)
    );
  }
}
