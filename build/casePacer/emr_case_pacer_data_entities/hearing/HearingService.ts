import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Hearing, EditableHearing, HearingId } from "./Hearing";
import { QHearing, qHearing, QHearingId } from "./QHearing";
import { HearingTypeService } from "../hearing_type/HearingTypeService";
import { PartyService } from "../party/PartyService";
import { LawsuitService } from "../lawsuit/LawsuitService";
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

export class HearingService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Hearing, EditableHearing, QHearing> {
  private _HearingType?: HearingTypeService<ClientType>;
  private _Judge?: PartyService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qHearing);
  }

  public HearingType(): HearingTypeService<ClientType> {
    if (!this._HearingType) {
      const { client, path } = this.__base;
      this._HearingType = new HearingTypeService(client, path, "HearingType");
    }

    return this._HearingType;
  }

  public Judge(): PartyService<ClientType> {
    if (!this._Judge) {
      const { client, path } = this.__base;
      this._Judge = new PartyService(client, path, "Judge");
    }

    return this._Judge;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
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

export class HearingCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Hearing,
  EditableHearing,
  QHearing,
  HearingId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qHearing, new QHearingId(name));
  }
}
