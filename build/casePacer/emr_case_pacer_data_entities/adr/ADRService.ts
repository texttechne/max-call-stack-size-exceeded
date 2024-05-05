import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { ADR, EditableADR, ADRId } from "./ADR";
import { QADR, qADR, QADRId } from "./QADR";
import { ADRTypeService } from "../adr_type/ADRTypeService";
import { LitigationService } from "../litigation/LitigationService";
import { PartyService } from "../party/PartyService";
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

export class ADRService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, ADR, EditableADR, QADR> {
  private _ADRType?: ADRTypeService<ClientType>;
  private _Litigation?: LitigationService<ClientType>;
  private _MediatorArbitrator?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qADR);
  }

  public ADRType(): ADRTypeService<ClientType> {
    if (!this._ADRType) {
      const { client, path } = this.__base;
      this._ADRType = new ADRTypeService(client, path, "ADRType");
    }

    return this._ADRType;
  }

  public Litigation(): LitigationService<ClientType> {
    if (!this._Litigation) {
      const { client, path } = this.__base;
      this._Litigation = new LitigationService(client, path, "Litigation");
    }

    return this._Litigation;
  }

  public MediatorArbitrator(): PartyService<ClientType> {
    if (!this._MediatorArbitrator) {
      const { client, path } = this.__base;
      this._MediatorArbitrator = new PartyService(
        client,
        path,
        "MediatorArbitrator"
      );
    }

    return this._MediatorArbitrator;
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

export class ADRCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<ClientType, ADR, EditableADR, QADR, ADRId> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qADR, new QADRId(name));
  }
}
