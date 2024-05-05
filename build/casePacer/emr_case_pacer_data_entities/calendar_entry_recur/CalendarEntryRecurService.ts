import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  CalendarEntryRecur,
  EditableCalendarEntryRecur,
  CalendarEntryRecurId,
} from "./CalendarEntryRecur";
import {
  QCalendarEntryRecur,
  qCalendarEntryRecur,
  QCalendarEntryRecurId,
} from "./QCalendarEntryRecur";
import { LawsuitService } from "../lawsuit/LawsuitService";
import { CasePacerUserService } from "../case_pacer_user/CasePacerUserService";
import { FirmService } from "../firm/FirmService";
import { PartyService } from "../party/PartyService";
import { AppointmentService } from "../appointment/AppointmentService";
import { AppointmentEventSubTypeService } from "../appointment_event_sub_type/AppointmentEventSubTypeService";
import { ADRService } from "../adr/ADRService";
import { DepositionService } from "../deposition/DepositionService";
import { TrialService } from "../trial/TrialService";
import { HearingService } from "../hearing/HearingService";

export class CalendarEntryRecurService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CalendarEntryRecur,
  EditableCalendarEntryRecur,
  QCalendarEntryRecur
> {
  private _Lawsuit?: LawsuitService<ClientType>;
  private _User?: CasePacerUserService<ClientType>;
  private _Firm?: FirmService<ClientType>;
  private _PlaintiffParty?: PartyService<ClientType>;
  private _Appointment?: AppointmentService<ClientType>;
  private _AppointmentEventSubType?: AppointmentEventSubTypeService<ClientType>;
  private _ADR?: ADRService<ClientType>;
  private _Deposition?: DepositionService<ClientType>;
  private _Trial?: TrialService<ClientType>;
  private _Hearing?: HearingService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCalendarEntryRecur);
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public User(): CasePacerUserService<ClientType> {
    if (!this._User) {
      const { client, path } = this.__base;
      this._User = new CasePacerUserService(client, path, "User");
    }

    return this._User;
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public PlaintiffParty(): PartyService<ClientType> {
    if (!this._PlaintiffParty) {
      const { client, path } = this.__base;
      this._PlaintiffParty = new PartyService(client, path, "PlaintiffParty");
    }

    return this._PlaintiffParty;
  }

  public Appointment(): AppointmentService<ClientType> {
    if (!this._Appointment) {
      const { client, path } = this.__base;
      this._Appointment = new AppointmentService(client, path, "Appointment");
    }

    return this._Appointment;
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

  public ADR(): ADRService<ClientType> {
    if (!this._ADR) {
      const { client, path } = this.__base;
      this._ADR = new ADRService(client, path, "ADR");
    }

    return this._ADR;
  }

  public Deposition(): DepositionService<ClientType> {
    if (!this._Deposition) {
      const { client, path } = this.__base;
      this._Deposition = new DepositionService(client, path, "Deposition");
    }

    return this._Deposition;
  }

  public Trial(): TrialService<ClientType> {
    if (!this._Trial) {
      const { client, path } = this.__base;
      this._Trial = new TrialService(client, path, "Trial");
    }

    return this._Trial;
  }

  public Hearing(): HearingService<ClientType> {
    if (!this._Hearing) {
      const { client, path } = this.__base;
      this._Hearing = new HearingService(client, path, "Hearing");
    }

    return this._Hearing;
  }
}

export class CalendarEntryRecurCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CalendarEntryRecur,
  EditableCalendarEntryRecur,
  QCalendarEntryRecur,
  CalendarEntryRecurId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCalendarEntryRecur,
      new QCalendarEntryRecurId(name)
    );
  }
}
