import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  PublicTransportation,
  EditablePublicTransportation,
} from "./PublicTransportation";
import {
  QPublicTransportation,
  qPublicTransportation,
} from "./QPublicTransportation";
import { PersonId } from "../person/Person";
import { QPersonId } from "../person/QPerson";
import {
  PersonService,
  PersonCollectionService,
} from "../person/PersonService";
import { PlanItemId } from "../plan_item/PlanItem";
import { QPlanItemId } from "../plan_item/QPlanItem";

export class PublicTransportationService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  PublicTransportation,
  EditablePublicTransportation,
  QPublicTransportation
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPublicTransportation);
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

export class PublicTransportationCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  PublicTransportation,
  EditablePublicTransportation,
  QPublicTransportation,
  PlanItemId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPublicTransportation, new QPlanItemId(name));
  }
}
