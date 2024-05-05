import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { PlanItem, EditablePlanItem, PlanItemId } from "./PlanItem";
import { QPlanItem, qPlanItem, QPlanItemId } from "./QPlanItem";

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
