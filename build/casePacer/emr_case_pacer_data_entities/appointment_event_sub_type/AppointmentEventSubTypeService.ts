import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  AppointmentEventSubType,
  EditableAppointmentEventSubType,
  AppointmentEventSubTypeId,
} from "./AppointmentEventSubType";
import {
  QAppointmentEventSubType,
  qAppointmentEventSubType,
  QAppointmentEventSubTypeId,
} from "./QAppointmentEventSubType";
import { AppointmentEventTypeService } from "../appointment_event_type/AppointmentEventTypeService";
import { AppointmentId } from "../appointment/Appointment";
import { QAppointmentId } from "../appointment/QAppointment";
import {
  AppointmentService,
  AppointmentCollectionService,
} from "../appointment/AppointmentService";
import { CalendarEntryId } from "../calendar_entry/CalendarEntry";
import { QCalendarEntryId } from "../calendar_entry/QCalendarEntry";
import {
  CalendarEntryService,
  CalendarEntryCollectionService,
} from "../calendar_entry/CalendarEntryService";
import { CalendarEntryRecurId } from "../calendar_entry_recur/CalendarEntryRecur";
import { QCalendarEntryRecurId } from "../calendar_entry_recur/QCalendarEntryRecur";
import {
  CalendarEntryRecurService,
  CalendarEntryRecurCollectionService,
} from "../calendar_entry_recur/CalendarEntryRecurService";

export class AppointmentEventSubTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AppointmentEventSubType,
  EditableAppointmentEventSubType,
  QAppointmentEventSubType
> {
  private _AppointmentEventType?: AppointmentEventTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAppointmentEventSubType);
  }

  public AppointmentEventType(): AppointmentEventTypeService<ClientType> {
    if (!this._AppointmentEventType) {
      const { client, path } = this.__base;
      this._AppointmentEventType = new AppointmentEventTypeService(
        client,
        path,
        "AppointmentEventType"
      );
    }

    return this._AppointmentEventType;
  }

  public Appointments(): AppointmentCollectionService<ClientType>;
  public Appointments(id: AppointmentId): AppointmentService<ClientType>;
  public Appointments(id?: AppointmentId | undefined) {
    const fieldName = "Appointments";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AppointmentCollectionService(client, path, fieldName)
      : new AppointmentService(
          client,
          path,
          new QAppointmentId(fieldName).buildUrl(id)
        );
  }

  public CalendarEntries(): CalendarEntryCollectionService<ClientType>;
  public CalendarEntries(id: CalendarEntryId): CalendarEntryService<ClientType>;
  public CalendarEntries(id?: CalendarEntryId | undefined) {
    const fieldName = "CalendarEntries";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CalendarEntryCollectionService(client, path, fieldName)
      : new CalendarEntryService(
          client,
          path,
          new QCalendarEntryId(fieldName).buildUrl(id)
        );
  }

  public CalendarEntryRecurs(): CalendarEntryRecurCollectionService<ClientType>;
  public CalendarEntryRecurs(
    id: CalendarEntryRecurId
  ): CalendarEntryRecurService<ClientType>;
  public CalendarEntryRecurs(id?: CalendarEntryRecurId | undefined) {
    const fieldName = "CalendarEntryRecurs";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CalendarEntryRecurCollectionService(client, path, fieldName)
      : new CalendarEntryRecurService(
          client,
          path,
          new QCalendarEntryRecurId(fieldName).buildUrl(id)
        );
  }
}

export class AppointmentEventSubTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AppointmentEventSubType,
  EditableAppointmentEventSubType,
  QAppointmentEventSubType,
  AppointmentEventSubTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAppointmentEventSubType,
      new QAppointmentEventSubTypeId(name)
    );
  }
}
