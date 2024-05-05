import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Trial, EditableTrial, TrialId } from "./Trial";
import { QTrial, qTrial, QTrialId } from "./QTrial";
import { LitigationService } from "../litigation/LitigationService";
import { AppointmentId } from "../appointment/Appointment";
import { QAppointmentId } from "../appointment/QAppointment";
import {
  AppointmentService,
  AppointmentCollectionService,
} from "../appointment/AppointmentService";
import { TrialExhibitId } from "../trial_exhibit/TrialExhibit";
import { QTrialExhibitId } from "../trial_exhibit/QTrialExhibit";
import {
  TrialExhibitService,
  TrialExhibitCollectionService,
} from "../trial_exhibit/TrialExhibitService";
import { TrialPleadingId } from "../trial_pleading/TrialPleading";
import { QTrialPleadingId } from "../trial_pleading/QTrialPleading";
import {
  TrialPleadingService,
  TrialPleadingCollectionService,
} from "../trial_pleading/TrialPleadingService";
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

export class TrialService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Trial, EditableTrial, QTrial> {
  private _Litigation?: LitigationService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTrial);
  }

  public Litigation(): LitigationService<ClientType> {
    if (!this._Litigation) {
      const { client, path } = this.__base;
      this._Litigation = new LitigationService(client, path, "Litigation");
    }

    return this._Litigation;
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

  public TrialExhibits(): TrialExhibitCollectionService<ClientType>;
  public TrialExhibits(id: TrialExhibitId): TrialExhibitService<ClientType>;
  public TrialExhibits(id?: TrialExhibitId | undefined) {
    const fieldName = "TrialExhibits";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TrialExhibitCollectionService(client, path, fieldName)
      : new TrialExhibitService(
          client,
          path,
          new QTrialExhibitId(fieldName).buildUrl(id)
        );
  }

  public TrialPleadings(): TrialPleadingCollectionService<ClientType>;
  public TrialPleadings(id: TrialPleadingId): TrialPleadingService<ClientType>;
  public TrialPleadings(id?: TrialPleadingId | undefined) {
    const fieldName = "TrialPleadings";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TrialPleadingCollectionService(client, path, fieldName)
      : new TrialPleadingService(
          client,
          path,
          new QTrialPleadingId(fieldName).buildUrl(id)
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

export class TrialCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Trial,
  EditableTrial,
  QTrial,
  TrialId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTrial, new QTrialId(name));
  }
}
