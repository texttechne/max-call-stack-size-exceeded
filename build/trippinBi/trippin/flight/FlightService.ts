import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Flight, EditableFlight } from "./Flight";
import { QFlight, qFlight } from "./QFlight";
import { PersonId } from "../person/Person";
import { QPersonId } from "../person/QPerson";
import {
  PersonService,
  PersonCollectionService,
} from "../person/PersonService";
import { AirlineService } from "../airline/AirlineService";
import { AirportService } from "../airport/AirportService";
import { PlanItemId } from "../plan_item/PlanItem";
import { QPlanItemId } from "../plan_item/QPlanItem";

export class FlightService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Flight, EditableFlight, QFlight> {
  private _Airline?: AirlineService<ClientType>;
  private _From?: AirportService<ClientType>;
  private _To?: AirportService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qFlight);
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

  public Airline(): AirlineService<ClientType> {
    if (!this._Airline) {
      const { client, path } = this.__base;
      this._Airline = new AirlineService(client, path, "Airline");
    }

    return this._Airline;
  }

  public From(): AirportService<ClientType> {
    if (!this._From) {
      const { client, path } = this.__base;
      this._From = new AirportService(client, path, "From");
    }

    return this._From;
  }

  public To(): AirportService<ClientType> {
    if (!this._To) {
      const { client, path } = this.__base;
      this._To = new AirportService(client, path, "To");
    }

    return this._To;
  }
}

export class FlightCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Flight,
  EditableFlight,
  QFlight,
  PlanItemId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qFlight, new QPlanItemId(name));
  }
}
