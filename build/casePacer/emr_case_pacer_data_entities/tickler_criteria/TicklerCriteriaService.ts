import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  TicklerCriteria,
  EditableTicklerCriteria,
  TicklerCriteriaId,
} from "./TicklerCriteria";
import {
  QTicklerCriteria,
  qTicklerCriteria,
  QTicklerCriteriaId,
} from "./QTicklerCriteria";
import { TicklerCriteriaActionService } from "../tickler_criteria_action/TicklerCriteriaActionService";
import { TicklerTemplateService } from "../tickler_template/TicklerTemplateService";
import { TicklerCriteriaSetId } from "../tickler_criteria_set/TicklerCriteriaSet";
import { QTicklerCriteriaSetId } from "../tickler_criteria_set/QTicklerCriteriaSet";
import {
  TicklerCriteriaSetService,
  TicklerCriteriaSetCollectionService,
} from "../tickler_criteria_set/TicklerCriteriaSetService";

export class TicklerCriteriaService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TicklerCriteria,
  EditableTicklerCriteria,
  QTicklerCriteria
> {
  private _TicklerCriteriaAction?: TicklerCriteriaActionService<ClientType>;
  private _TicklerTemplate?: TicklerTemplateService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTicklerCriteria);
  }

  public TicklerCriteriaAction(): TicklerCriteriaActionService<ClientType> {
    if (!this._TicklerCriteriaAction) {
      const { client, path } = this.__base;
      this._TicklerCriteriaAction = new TicklerCriteriaActionService(
        client,
        path,
        "TicklerCriteriaAction"
      );
    }

    return this._TicklerCriteriaAction;
  }

  public TicklerTemplate(): TicklerTemplateService<ClientType> {
    if (!this._TicklerTemplate) {
      const { client, path } = this.__base;
      this._TicklerTemplate = new TicklerTemplateService(
        client,
        path,
        "TicklerTemplate"
      );
    }

    return this._TicklerTemplate;
  }

  public TicklerCriteriaSets(): TicklerCriteriaSetCollectionService<ClientType>;
  public TicklerCriteriaSets(
    id: TicklerCriteriaSetId
  ): TicklerCriteriaSetService<ClientType>;
  public TicklerCriteriaSets(id?: TicklerCriteriaSetId | undefined) {
    const fieldName = "TicklerCriteriaSets";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TicklerCriteriaSetCollectionService(client, path, fieldName)
      : new TicklerCriteriaSetService(
          client,
          path,
          new QTicklerCriteriaSetId(fieldName).buildUrl(id)
        );
  }
}

export class TicklerCriteriaCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TicklerCriteria,
  EditableTicklerCriteria,
  QTicklerCriteria,
  TicklerCriteriaId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qTicklerCriteria,
      new QTicklerCriteriaId(name)
    );
  }
}
