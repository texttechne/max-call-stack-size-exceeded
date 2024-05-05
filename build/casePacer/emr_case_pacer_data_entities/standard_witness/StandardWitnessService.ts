import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  StandardWitness,
  EditableStandardWitness,
  StandardWitnessId,
} from "./StandardWitness";
import {
  QStandardWitness,
  qStandardWitness,
  QStandardWitnessId,
} from "./QStandardWitness";
import { FirmService } from "../firm/FirmService";
import { WitnessExhibitDocumentStandardWitnessId } from "../witness_exhibit_document_standard_witness/WitnessExhibitDocumentStandardWitness";
import { QWitnessExhibitDocumentStandardWitnessId } from "../witness_exhibit_document_standard_witness/QWitnessExhibitDocumentStandardWitness";
import {
  WitnessExhibitDocumentStandardWitnessService,
  WitnessExhibitDocumentStandardWitnessCollectionService,
} from "../witness_exhibit_document_standard_witness/WitnessExhibitDocumentStandardWitnessService";

export class StandardWitnessService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  StandardWitness,
  EditableStandardWitness,
  QStandardWitness
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qStandardWitness);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
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
}

export class StandardWitnessCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  StandardWitness,
  EditableStandardWitness,
  QStandardWitness,
  StandardWitnessId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qStandardWitness,
      new QStandardWitnessId(name)
    );
  }
}
