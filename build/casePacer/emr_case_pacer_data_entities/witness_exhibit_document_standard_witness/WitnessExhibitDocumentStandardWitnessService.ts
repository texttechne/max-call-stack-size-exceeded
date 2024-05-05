import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  WitnessExhibitDocumentStandardWitness,
  EditableWitnessExhibitDocumentStandardWitness,
  WitnessExhibitDocumentStandardWitnessId,
} from "./WitnessExhibitDocumentStandardWitness";
import {
  QWitnessExhibitDocumentStandardWitness,
  qWitnessExhibitDocumentStandardWitness,
  QWitnessExhibitDocumentStandardWitnessId,
} from "./QWitnessExhibitDocumentStandardWitness";
import { StandardWitnessService } from "../standard_witness/StandardWitnessService";
import { WitnessExhibitDocumentService } from "../witness_exhibit_document/WitnessExhibitDocumentService";

export class WitnessExhibitDocumentStandardWitnessService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  WitnessExhibitDocumentStandardWitness,
  EditableWitnessExhibitDocumentStandardWitness,
  QWitnessExhibitDocumentStandardWitness
> {
  private _StandardWitness?: StandardWitnessService<ClientType>;
  private _WitnessExhibitDocument?: WitnessExhibitDocumentService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qWitnessExhibitDocumentStandardWitness);
  }

  public StandardWitness(): StandardWitnessService<ClientType> {
    if (!this._StandardWitness) {
      const { client, path } = this.__base;
      this._StandardWitness = new StandardWitnessService(
        client,
        path,
        "StandardWitness"
      );
    }

    return this._StandardWitness;
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

export class WitnessExhibitDocumentStandardWitnessCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  WitnessExhibitDocumentStandardWitness,
  EditableWitnessExhibitDocumentStandardWitness,
  QWitnessExhibitDocumentStandardWitness,
  WitnessExhibitDocumentStandardWitnessId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qWitnessExhibitDocumentStandardWitness,
      new QWitnessExhibitDocumentStandardWitnessId(name)
    );
  }
}
