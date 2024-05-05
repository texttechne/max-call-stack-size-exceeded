import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  TicklerTemplate,
  EditableTicklerTemplate,
  TicklerTemplateId,
} from "./TicklerTemplate";
import {
  QTicklerTemplate,
  qTicklerTemplate,
  QTicklerTemplateId,
} from "./QTicklerTemplate";
import { FirmService } from "../firm/FirmService";
import { LawsuitPhaseTypeService } from "../lawsuit_phase_type/LawsuitPhaseTypeService";
import { RoleTemplateService } from "../role_template/RoleTemplateService";
import { LawsuitTypeTicklerId } from "../lawsuit_type_tickler/LawsuitTypeTickler";
import { QLawsuitTypeTicklerId } from "../lawsuit_type_tickler/QLawsuitTypeTickler";
import {
  LawsuitTypeTicklerService,
  LawsuitTypeTicklerCollectionService,
} from "../lawsuit_type_tickler/LawsuitTypeTicklerService";
import { TicklerId } from "../tickler/Tickler";
import { QTicklerId } from "../tickler/QTickler";
import {
  TicklerService,
  TicklerCollectionService,
} from "../tickler/TicklerService";
import { TicklerAnswerId } from "../tickler_answer/TicklerAnswer";
import { QTicklerAnswerId } from "../tickler_answer/QTicklerAnswer";
import {
  TicklerAnswerService,
  TicklerAnswerCollectionService,
} from "../tickler_answer/TicklerAnswerService";
import { TicklerCriteriaId } from "../tickler_criteria/TicklerCriteria";
import { QTicklerCriteriaId } from "../tickler_criteria/QTicklerCriteria";
import {
  TicklerCriteriaService,
  TicklerCriteriaCollectionService,
} from "../tickler_criteria/TicklerCriteriaService";
import { TicklerTemplateActionId } from "../tickler_template_action/TicklerTemplateAction";
import { QTicklerTemplateActionId } from "../tickler_template_action/QTicklerTemplateAction";
import {
  TicklerTemplateActionService,
  TicklerTemplateActionCollectionService,
} from "../tickler_template_action/TicklerTemplateActionService";

export class TicklerTemplateService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TicklerTemplate,
  EditableTicklerTemplate,
  QTicklerTemplate
> {
  private _Firm?: FirmService<ClientType>;
  private _CreatePhaseEvent?: LawsuitPhaseTypeService<ClientType>;
  private _RoleTemplate?: RoleTemplateService<ClientType>;
  private _TicklerPhase?: LawsuitPhaseTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTicklerTemplate);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public CreatePhaseEvent(): LawsuitPhaseTypeService<ClientType> {
    if (!this._CreatePhaseEvent) {
      const { client, path } = this.__base;
      this._CreatePhaseEvent = new LawsuitPhaseTypeService(
        client,
        path,
        "CreatePhaseEvent"
      );
    }

    return this._CreatePhaseEvent;
  }

  public RoleTemplate(): RoleTemplateService<ClientType> {
    if (!this._RoleTemplate) {
      const { client, path } = this.__base;
      this._RoleTemplate = new RoleTemplateService(
        client,
        path,
        "RoleTemplate"
      );
    }

    return this._RoleTemplate;
  }

  public TicklerPhase(): LawsuitPhaseTypeService<ClientType> {
    if (!this._TicklerPhase) {
      const { client, path } = this.__base;
      this._TicklerPhase = new LawsuitPhaseTypeService(
        client,
        path,
        "TicklerPhase"
      );
    }

    return this._TicklerPhase;
  }

  public LawsuitTypeTicklers(): LawsuitTypeTicklerCollectionService<ClientType>;
  public LawsuitTypeTicklers(
    id: LawsuitTypeTicklerId
  ): LawsuitTypeTicklerService<ClientType>;
  public LawsuitTypeTicklers(id?: LawsuitTypeTicklerId | undefined) {
    const fieldName = "LawsuitTypeTicklers";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitTypeTicklerCollectionService(client, path, fieldName)
      : new LawsuitTypeTicklerService(
          client,
          path,
          new QLawsuitTypeTicklerId(fieldName).buildUrl(id)
        );
  }

  public Ticklers(): TicklerCollectionService<ClientType>;
  public Ticklers(id: TicklerId): TicklerService<ClientType>;
  public Ticklers(id?: TicklerId | undefined) {
    const fieldName = "Ticklers";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TicklerCollectionService(client, path, fieldName)
      : new TicklerService(
          client,
          path,
          new QTicklerId(fieldName).buildUrl(id)
        );
  }

  public TicklerAnswers(): TicklerAnswerCollectionService<ClientType>;
  public TicklerAnswers(id: TicklerAnswerId): TicklerAnswerService<ClientType>;
  public TicklerAnswers(id?: TicklerAnswerId | undefined) {
    const fieldName = "TicklerAnswers";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TicklerAnswerCollectionService(client, path, fieldName)
      : new TicklerAnswerService(
          client,
          path,
          new QTicklerAnswerId(fieldName).buildUrl(id)
        );
  }

  public TicklerCriterias(): TicklerCriteriaCollectionService<ClientType>;
  public TicklerCriterias(
    id: TicklerCriteriaId
  ): TicklerCriteriaService<ClientType>;
  public TicklerCriterias(id?: TicklerCriteriaId | undefined) {
    const fieldName = "TicklerCriterias";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TicklerCriteriaCollectionService(client, path, fieldName)
      : new TicklerCriteriaService(
          client,
          path,
          new QTicklerCriteriaId(fieldName).buildUrl(id)
        );
  }

  public ParentActions(): TicklerTemplateActionCollectionService<ClientType>;
  public ParentActions(
    id: TicklerTemplateActionId
  ): TicklerTemplateActionService<ClientType>;
  public ParentActions(id?: TicklerTemplateActionId | undefined) {
    const fieldName = "ParentActions";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TicklerTemplateActionCollectionService(client, path, fieldName)
      : new TicklerTemplateActionService(
          client,
          path,
          new QTicklerTemplateActionId(fieldName).buildUrl(id)
        );
  }

  public ChildActions(): TicklerTemplateActionCollectionService<ClientType>;
  public ChildActions(
    id: TicklerTemplateActionId
  ): TicklerTemplateActionService<ClientType>;
  public ChildActions(id?: TicklerTemplateActionId | undefined) {
    const fieldName = "ChildActions";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TicklerTemplateActionCollectionService(client, path, fieldName)
      : new TicklerTemplateActionService(
          client,
          path,
          new QTicklerTemplateActionId(fieldName).buildUrl(id)
        );
  }
}

export class TicklerTemplateCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TicklerTemplate,
  EditableTicklerTemplate,
  QTicklerTemplate,
  TicklerTemplateId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qTicklerTemplate,
      new QTicklerTemplateId(name)
    );
  }
}
