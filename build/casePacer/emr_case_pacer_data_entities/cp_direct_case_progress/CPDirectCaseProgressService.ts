import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  CPDirectCaseProgress,
  EditableCPDirectCaseProgress,
  CPDirectCaseProgressId,
} from "./CPDirectCaseProgress";
import {
  QCPDirectCaseProgress,
  qCPDirectCaseProgress,
  QCPDirectCaseProgressId,
} from "./QCPDirectCaseProgress";
import { LawsuitTypeService } from "../lawsuit_type/LawsuitTypeService";
import { IntakeClientLawsuitId } from "../intake_client_lawsuit/IntakeClientLawsuit";
import { QIntakeClientLawsuitId } from "../intake_client_lawsuit/QIntakeClientLawsuit";
import {
  IntakeClientLawsuitService,
  IntakeClientLawsuitCollectionService,
} from "../intake_client_lawsuit/IntakeClientLawsuitService";

export class CPDirectCaseProgressService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CPDirectCaseProgress,
  EditableCPDirectCaseProgress,
  QCPDirectCaseProgress
> {
  private _LawsuitType?: LawsuitTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCPDirectCaseProgress);
  }

  public LawsuitType(): LawsuitTypeService<ClientType> {
    if (!this._LawsuitType) {
      const { client, path } = this.__base;
      this._LawsuitType = new LawsuitTypeService(client, path, "LawsuitType");
    }

    return this._LawsuitType;
  }

  public IntakeClientLawsuits(): IntakeClientLawsuitCollectionService<ClientType>;
  public IntakeClientLawsuits(
    id: IntakeClientLawsuitId
  ): IntakeClientLawsuitService<ClientType>;
  public IntakeClientLawsuits(id?: IntakeClientLawsuitId | undefined) {
    const fieldName = "IntakeClientLawsuits";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new IntakeClientLawsuitCollectionService(client, path, fieldName)
      : new IntakeClientLawsuitService(
          client,
          path,
          new QIntakeClientLawsuitId(fieldName).buildUrl(id)
        );
  }
}

export class CPDirectCaseProgressCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CPDirectCaseProgress,
  EditableCPDirectCaseProgress,
  QCPDirectCaseProgress,
  CPDirectCaseProgressId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCPDirectCaseProgress,
      new QCPDirectCaseProgressId(name)
    );
  }
}
