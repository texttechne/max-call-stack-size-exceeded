import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Event, EditableEvent } from "./Event";
import { QEvent, qEvent } from "./QEvent";
import { EventLocationService } from "../event_location/EventLocationService";
import { PlanItemId } from "../plan_item/PlanItem";
import { QPlanItemId } from "../plan_item/QPlanItem";

export class EventService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Event, EditableEvent, QEvent> {
  private _OccursAt?: EventLocationService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qEvent);
  }

  public OccursAt(): EventLocationService<ClientType> {
    if (!this._OccursAt) {
      const { client, path } = this.__base;
      this._OccursAt = new EventLocationService(client, path, "OccursAt");
    }

    return this._OccursAt;
  }
}

export class EventCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Event,
  EditableEvent,
  QEvent,
  PlanItemId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qEvent, new QPlanItemId(name));
  }
}
