import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Appointment, EditableAppointment, AppointmentId } from "./Appointment";
import { QAppointment, qAppointment, QAppointmentId } from "./QAppointment";
import { ADRService } from "../adr/ADRService";
import { AppointmentCustomTypeService } from "../appointment_custom_type/AppointmentCustomTypeService";
import { AppointmentEventSubTypeService } from "../appointment_event_sub_type/AppointmentEventSubTypeService";
import { AppointmentTypeService } from "../appointment_type/AppointmentTypeService";
import { CasePacerUserService } from "../case_pacer_user/CasePacerUserService";
import { DepositionService } from "../deposition/DepositionService";
import { FirmService } from "../firm/FirmService";
import { HearingService } from "../hearing/HearingService";
import { LawsuitService } from "../lawsuit/LawsuitService";
import { PartyService } from "../party/PartyService";
import { TrialService } from "../trial/TrialService";
import { AppointmentHistoryId } from "../appointment_history/AppointmentHistory";
import { QAppointmentHistoryId } from "../appointment_history/QAppointmentHistory";
import {
  AppointmentHistoryService,
  AppointmentHistoryCollectionService,
} from "../appointment_history/AppointmentHistoryService";
import { AppointmentIntegrationService } from "../appointment_integration/AppointmentIntegrationService";
import { AppointmentPartyId } from "../appointment_party/AppointmentParty";
import { QAppointmentPartyId } from "../appointment_party/QAppointmentParty";
import {
  AppointmentPartyService,
  AppointmentPartyCollectionService,
} from "../appointment_party/AppointmentPartyService";
import { AppointmentRecurDateId } from "../appointment_recur_date/AppointmentRecurDate";
import { QAppointmentRecurDateId } from "../appointment_recur_date/QAppointmentRecurDate";
import {
  AppointmentRecurDateService,
  AppointmentRecurDateCollectionService,
} from "../appointment_recur_date/AppointmentRecurDateService";
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

export class AppointmentService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  Appointment,
  EditableAppointment,
  QAppointment
> {
  private _ADR?: ADRService<ClientType>;
  private _AppointmentCustomType?: AppointmentCustomTypeService<ClientType>;
  private _AppointmentEventSubType?: AppointmentEventSubTypeService<ClientType>;
  private _AppointmentType?: AppointmentTypeService<ClientType>;
  private _CasePacerUser?: CasePacerUserService<ClientType>;
  private _Deposition?: DepositionService<ClientType>;
  private _Firm?: FirmService<ClientType>;
  private _GlobalAppointment?: AppointmentService<ClientType>;
  private _Hearing?: HearingService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;
  private _PlaintiffParty?: PartyService<ClientType>;
  private _RecurSeriesMasterAppointment?: AppointmentService<ClientType>;
  private _Trial?: TrialService<ClientType>;
  private _AppointmentIntegration?: AppointmentIntegrationService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAppointment);
  }

  public ADR(): ADRService<ClientType> {
    if (!this._ADR) {
      const { client, path } = this.__base;
      this._ADR = new ADRService(client, path, "ADR");
    }

    return this._ADR;
  }

  public AppointmentCustomType(): AppointmentCustomTypeService<ClientType> {
    if (!this._AppointmentCustomType) {
      const { client, path } = this.__base;
      this._AppointmentCustomType = new AppointmentCustomTypeService(
        client,
        path,
        "AppointmentCustomType"
      );
    }

    return this._AppointmentCustomType;
  }

  public AppointmentEventSubType(): AppointmentEventSubTypeService<ClientType> {
    if (!this._AppointmentEventSubType) {
      const { client, path } = this.__base;
      this._AppointmentEventSubType = new AppointmentEventSubTypeService(
        client,
        path,
        "AppointmentEventSubType"
      );
    }

    return this._AppointmentEventSubType;
  }

  public AppointmentType(): AppointmentTypeService<ClientType> {
    if (!this._AppointmentType) {
      const { client, path } = this.__base;
      this._AppointmentType = new AppointmentTypeService(
        client,
        path,
        "AppointmentType"
      );
    }

    return this._AppointmentType;
  }

  public CasePacerUser(): CasePacerUserService<ClientType> {
    if (!this._CasePacerUser) {
      const { client, path } = this.__base;
      this._CasePacerUser = new CasePacerUserService(
        client,
        path,
        "CasePacerUser"
      );
    }

    return this._CasePacerUser;
  }

  public Deposition(): DepositionService<ClientType> {
    if (!this._Deposition) {
      const { client, path } = this.__base;
      this._Deposition = new DepositionService(client, path, "Deposition");
    }

    return this._Deposition;
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public GlobalAppointment(): AppointmentService<ClientType> {
    if (!this._GlobalAppointment) {
      const { client, path } = this.__base;
      this._GlobalAppointment = new AppointmentService(
        client,
        path,
        "GlobalAppointment"
      );
    }

    return this._GlobalAppointment;
  }

  public Hearing(): HearingService<ClientType> {
    if (!this._Hearing) {
      const { client, path } = this.__base;
      this._Hearing = new HearingService(client, path, "Hearing");
    }

    return this._Hearing;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public PlaintiffParty(): PartyService<ClientType> {
    if (!this._PlaintiffParty) {
      const { client, path } = this.__base;
      this._PlaintiffParty = new PartyService(client, path, "PlaintiffParty");
    }

    return this._PlaintiffParty;
  }

  public RecurSeriesMasterAppointment(): AppointmentService<ClientType> {
    if (!this._RecurSeriesMasterAppointment) {
      const { client, path } = this.__base;
      this._RecurSeriesMasterAppointment = new AppointmentService(
        client,
        path,
        "RecurSeriesMasterAppointment"
      );
    }

    return this._RecurSeriesMasterAppointment;
  }

  public Trial(): TrialService<ClientType> {
    if (!this._Trial) {
      const { client, path } = this.__base;
      this._Trial = new TrialService(client, path, "Trial");
    }

    return this._Trial;
  }

  public GlobalAppointmentAppointments(): AppointmentCollectionService<ClientType>;
  public GlobalAppointmentAppointments(
    id: AppointmentId
  ): AppointmentService<ClientType>;
  public GlobalAppointmentAppointments(id?: AppointmentId | undefined) {
    const fieldName = "GlobalAppointmentAppointments";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AppointmentCollectionService(client, path, fieldName)
      : new AppointmentService(
          client,
          path,
          new QAppointmentId(fieldName).buildUrl(id)
        );
  }

  public RecurExceptionAppointments(): AppointmentCollectionService<ClientType>;
  public RecurExceptionAppointments(
    id: AppointmentId
  ): AppointmentService<ClientType>;
  public RecurExceptionAppointments(id?: AppointmentId | undefined) {
    const fieldName = "RecurExceptionAppointments";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AppointmentCollectionService(client, path, fieldName)
      : new AppointmentService(
          client,
          path,
          new QAppointmentId(fieldName).buildUrl(id)
        );
  }

  public AppointmentHistories(): AppointmentHistoryCollectionService<ClientType>;
  public AppointmentHistories(
    id: AppointmentHistoryId
  ): AppointmentHistoryService<ClientType>;
  public AppointmentHistories(id?: AppointmentHistoryId | undefined) {
    const fieldName = "AppointmentHistories";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AppointmentHistoryCollectionService(client, path, fieldName)
      : new AppointmentHistoryService(
          client,
          path,
          new QAppointmentHistoryId(fieldName).buildUrl(id)
        );
  }

  public AppointmentIntegration(): AppointmentIntegrationService<ClientType> {
    if (!this._AppointmentIntegration) {
      const { client, path } = this.__base;
      this._AppointmentIntegration = new AppointmentIntegrationService(
        client,
        path,
        "AppointmentIntegration"
      );
    }

    return this._AppointmentIntegration;
  }

  public AppointmentParties(): AppointmentPartyCollectionService<ClientType>;
  public AppointmentParties(
    id: AppointmentPartyId
  ): AppointmentPartyService<ClientType>;
  public AppointmentParties(id?: AppointmentPartyId | undefined) {
    const fieldName = "AppointmentParties";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AppointmentPartyCollectionService(client, path, fieldName)
      : new AppointmentPartyService(
          client,
          path,
          new QAppointmentPartyId(fieldName).buildUrl(id)
        );
  }

  public AppointmentRecurDates(): AppointmentRecurDateCollectionService<ClientType>;
  public AppointmentRecurDates(
    id: AppointmentRecurDateId
  ): AppointmentRecurDateService<ClientType>;
  public AppointmentRecurDates(id?: AppointmentRecurDateId | undefined) {
    const fieldName = "AppointmentRecurDates";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AppointmentRecurDateCollectionService(client, path, fieldName)
      : new AppointmentRecurDateService(
          client,
          path,
          new QAppointmentRecurDateId(fieldName).buildUrl(id)
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

export class AppointmentCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Appointment,
  EditableAppointment,
  QAppointment,
  AppointmentId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAppointment, new QAppointmentId(name));
  }
}
