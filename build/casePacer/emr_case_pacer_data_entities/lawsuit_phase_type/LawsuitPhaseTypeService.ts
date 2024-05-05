import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  LawsuitPhaseType,
  EditableLawsuitPhaseType,
  LawsuitPhaseTypeId,
} from "./LawsuitPhaseType";
import {
  QLawsuitPhaseType,
  qLawsuitPhaseType,
  QLawsuitPhaseTypeId,
} from "./QLawsuitPhaseType";
import { LawsuitId } from "../lawsuit/Lawsuit";
import { QLawsuitId } from "../lawsuit/QLawsuit";
import {
  LawsuitService,
  LawsuitCollectionService,
} from "../lawsuit/LawsuitService";
import { LawsuitPhaseDateId } from "../lawsuit_phase_date/LawsuitPhaseDate";
import { QLawsuitPhaseDateId } from "../lawsuit_phase_date/QLawsuitPhaseDate";
import {
  LawsuitPhaseDateService,
  LawsuitPhaseDateCollectionService,
} from "../lawsuit_phase_date/LawsuitPhaseDateService";
import { SubPhaseTypeId } from "../sub_phase_type/SubPhaseType";
import { QSubPhaseTypeId } from "../sub_phase_type/QSubPhaseType";
import {
  SubPhaseTypeService,
  SubPhaseTypeCollectionService,
} from "../sub_phase_type/SubPhaseTypeService";
import { TicklerTemplateId } from "../tickler_template/TicklerTemplate";
import { QTicklerTemplateId } from "../tickler_template/QTicklerTemplate";
import {
  TicklerTemplateService,
  TicklerTemplateCollectionService,
} from "../tickler_template/TicklerTemplateService";

export class LawsuitPhaseTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LawsuitPhaseType,
  EditableLawsuitPhaseType,
  QLawsuitPhaseType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitPhaseType);
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

  public LawsuitPhaseDates(): LawsuitPhaseDateCollectionService<ClientType>;
  public LawsuitPhaseDates(
    id: LawsuitPhaseDateId
  ): LawsuitPhaseDateService<ClientType>;
  public LawsuitPhaseDates(id?: LawsuitPhaseDateId | undefined) {
    const fieldName = "LawsuitPhaseDates";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitPhaseDateCollectionService(client, path, fieldName)
      : new LawsuitPhaseDateService(
          client,
          path,
          new QLawsuitPhaseDateId(fieldName).buildUrl(id)
        );
  }

  public SubPhaseTypes(): SubPhaseTypeCollectionService<ClientType>;
  public SubPhaseTypes(id: SubPhaseTypeId): SubPhaseTypeService<ClientType>;
  public SubPhaseTypes(id?: SubPhaseTypeId | undefined) {
    const fieldName = "SubPhaseTypes";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SubPhaseTypeCollectionService(client, path, fieldName)
      : new SubPhaseTypeService(
          client,
          path,
          new QSubPhaseTypeId(fieldName).buildUrl(id)
        );
  }

  public CreateTicklerTemplates(): TicklerTemplateCollectionService<ClientType>;
  public CreateTicklerTemplates(
    id: TicklerTemplateId
  ): TicklerTemplateService<ClientType>;
  public CreateTicklerTemplates(id?: TicklerTemplateId | undefined) {
    const fieldName = "CreateTicklerTemplates";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TicklerTemplateCollectionService(client, path, fieldName)
      : new TicklerTemplateService(
          client,
          path,
          new QTicklerTemplateId(fieldName).buildUrl(id)
        );
  }

  public ApplicableTicklerTemplates(): TicklerTemplateCollectionService<ClientType>;
  public ApplicableTicklerTemplates(
    id: TicklerTemplateId
  ): TicklerTemplateService<ClientType>;
  public ApplicableTicklerTemplates(id?: TicklerTemplateId | undefined) {
    const fieldName = "ApplicableTicklerTemplates";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TicklerTemplateCollectionService(client, path, fieldName)
      : new TicklerTemplateService(
          client,
          path,
          new QTicklerTemplateId(fieldName).buildUrl(id)
        );
  }
}

export class LawsuitPhaseTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LawsuitPhaseType,
  EditableLawsuitPhaseType,
  QLawsuitPhaseType,
  LawsuitPhaseTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qLawsuitPhaseType,
      new QLawsuitPhaseTypeId(name)
    );
  }
}
