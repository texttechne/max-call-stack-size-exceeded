import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  SubPhaseType,
  EditableSubPhaseType,
  SubPhaseTypeId,
} from "./SubPhaseType";
import { QSubPhaseType, qSubPhaseType, QSubPhaseTypeId } from "./QSubPhaseType";
import { LawsuitPhaseTypeService } from "../lawsuit_phase_type/LawsuitPhaseTypeService";
import { LawsuitTypeService } from "../lawsuit_type/LawsuitTypeService";
import { LawsuitId } from "../lawsuit/Lawsuit";
import { QLawsuitId } from "../lawsuit/QLawsuit";
import {
  LawsuitService,
  LawsuitCollectionService,
} from "../lawsuit/LawsuitService";

export class SubPhaseTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SubPhaseType,
  EditableSubPhaseType,
  QSubPhaseType
> {
  private _LawsuitPhaseType?: LawsuitPhaseTypeService<ClientType>;
  private _LawsuitType?: LawsuitTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSubPhaseType);
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

  public LawsuitType(): LawsuitTypeService<ClientType> {
    if (!this._LawsuitType) {
      const { client, path } = this.__base;
      this._LawsuitType = new LawsuitTypeService(client, path, "LawsuitType");
    }

    return this._LawsuitType;
  }

  public Lawsuits(): LawsuitCollectionService<ClientType>;
  public Lawsuits(id: LawsuitId): LawsuitService<ClientType>;
  public Lawsuits(id?: LawsuitId | undefined) {
    const fieldName = "Lawsuits";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitCollectionService(client, path, fieldName)
      : new LawsuitService(
          client,
          path,
          new QLawsuitId(fieldName).buildUrl(id)
        );
  }
}

export class SubPhaseTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SubPhaseType,
  EditableSubPhaseType,
  QSubPhaseType,
  SubPhaseTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSubPhaseType, new QSubPhaseTypeId(name));
  }
}
