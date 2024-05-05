import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  LawsuitPhaseDate,
  EditableLawsuitPhaseDate,
  LawsuitPhaseDateId,
} from "./LawsuitPhaseDate";
import {
  QLawsuitPhaseDate,
  qLawsuitPhaseDate,
  QLawsuitPhaseDateId,
} from "./QLawsuitPhaseDate";
import { LawsuitService } from "../lawsuit/LawsuitService";
import { LawsuitPhaseTypeService } from "../lawsuit_phase_type/LawsuitPhaseTypeService";

export class LawsuitPhaseDateService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LawsuitPhaseDate,
  EditableLawsuitPhaseDate,
  QLawsuitPhaseDate
> {
  private _Lawsuit?: LawsuitService<ClientType>;
  private _LawsuitPhaseType?: LawsuitPhaseTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitPhaseDate);
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public LawsuitPhaseType(): LawsuitPhaseTypeService<ClientType> {
    if (!this._LawsuitPhaseType) {
      const { client, path } = this.__base;
      this._LawsuitPhaseType = new LawsuitPhaseTypeService(
        client,
        path,
        "LawsuitPhaseType"
      );
    }

    return this._LawsuitPhaseType;
  }
}

export class LawsuitPhaseDateCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LawsuitPhaseDate,
  EditableLawsuitPhaseDate,
  QLawsuitPhaseDate,
  LawsuitPhaseDateId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qLawsuitPhaseDate,
      new QLawsuitPhaseDateId(name)
    );
  }
}
