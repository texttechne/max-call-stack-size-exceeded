import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { PlanItem, EditablePlanItem, PlanItemId } from "./PlanItem";
import { QPlanItem, qPlanItem, QPlanItemId } from "./QPlanItem";
import { PersonId } from "../person/Person";
import { QPersonId } from "../person/QPerson";
import {
  PersonService,
  PersonCollectionService,
} from "../person/PersonService";

export class PlanItemService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  PlanItem,
  EditablePlanItem,
  QPlanItem
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPlanItem);
  }

  public PlanPerson(): PersonCollectionService<ClientType>;
  public PlanPerson(id: PersonId): PersonService<ClientType>;
  public PlanPerson(id?: PersonId | undefined) {
    const fieldName = "PlanPerson";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PersonCollectionService(client, path, fieldName)
      : new PersonService(client, path, new QPersonId(fieldName).buildUrl(id));
  }
}

export class PlanItemCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  PlanItem,
  EditablePlanItem,
  QPlanItem,
  PlanItemId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPlanItem, new QPlanItemId(name));
  }
}
