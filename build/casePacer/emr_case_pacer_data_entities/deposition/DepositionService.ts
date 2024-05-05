import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Deposition, EditableDeposition, DepositionId } from "./Deposition";
import { QDeposition, qDeposition, QDepositionId } from "./QDeposition";
import { PartyService } from "../party/PartyService";
import { LawsuitPartyTypeService } from "../lawsuit_party_type/LawsuitPartyTypeService";
import { LawsuitService } from "../lawsuit/LawsuitService";
import { AppointmentId } from "../appointment/Appointment";
import { QAppointmentId } from "../appointment/QAppointment";
import {
  AppointmentService,
  AppointmentCollectionService,
} from "../appointment/AppointmentService";
import { DepositionLitigationAssnId } from "../deposition_litigation_assn/DepositionLitigationAssn";
import { QDepositionLitigationAssnId } from "../deposition_litigation_assn/QDepositionLitigationAssn";
import {
  DepositionLitigationAssnService,
  DepositionLitigationAssnCollectionService,
} from "../deposition_litigation_assn/DepositionLitigationAssnService";
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

export class DepositionService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  Deposition,
  EditableDeposition,
  QDeposition
> {
  private _LocationParty?: PartyService<ClientType>;
  private _DeponentLawsuitPartyType?: LawsuitPartyTypeService<ClientType>;
  private _Deponent?: PartyService<ClientType>;
  private _Deposer?: PartyService<ClientType>;
  private _DiscoveryOfLawsuitPartyType?: LawsuitPartyTypeService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;
  private _Recorder?: PartyService<ClientType>;
  private _Videographer?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDeposition);
  }

  public LocationParty(): PartyService<ClientType> {
    if (!this._LocationParty) {
      const { client, path } = this.__base;
      this._LocationParty = new PartyService(client, path, "LocationParty");
    }

    return this._LocationParty;
  }

  public DeponentLawsuitPartyType(): LawsuitPartyTypeService<ClientType> {
    if (!this._DeponentLawsuitPartyType) {
      const { client, path } = this.__base;
      this._DeponentLawsuitPartyType = new LawsuitPartyTypeService(
        client,
        path,
        "DeponentLawsuitPartyType"
      );
    }

    return this._DeponentLawsuitPartyType;
  }

  public Deponent(): PartyService<ClientType> {
    if (!this._Deponent) {
      const { client, path } = this.__base;
      this._Deponent = new PartyService(client, path, "Deponent");
    }

    return this._Deponent;
  }

  public Deposer(): PartyService<ClientType> {
    if (!this._Deposer) {
      const { client, path } = this.__base;
      this._Deposer = new PartyService(client, path, "Deposer");
    }

    return this._Deposer;
  }

  public DiscoveryOfLawsuitPartyType(): LawsuitPartyTypeService<ClientType> {
    if (!this._DiscoveryOfLawsuitPartyType) {
      const { client, path } = this.__base;
      this._DiscoveryOfLawsuitPartyType = new LawsuitPartyTypeService(
        client,
        path,
        "DiscoveryOfLawsuitPartyType"
      );
    }

    return this._DiscoveryOfLawsuitPartyType;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public Recorder(): PartyService<ClientType> {
    if (!this._Recorder) {
      const { client, path } = this.__base;
      this._Recorder = new PartyService(client, path, "Recorder");
    }

    return this._Recorder;
  }

  public Videographer(): PartyService<ClientType> {
    if (!this._Videographer) {
      const { client, path } = this.__base;
      this._Videographer = new PartyService(client, path, "Videographer");
    }

    return this._Videographer;
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

  public DepositionLitigationAssns(): DepositionLitigationAssnCollectionService<ClientType>;
  public DepositionLitigationAssns(
    id: DepositionLitigationAssnId
  ): DepositionLitigationAssnService<ClientType>;
  public DepositionLitigationAssns(
    id?: DepositionLitigationAssnId | undefined
  ) {
    const fieldName = "DepositionLitigationAssns";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DepositionLitigationAssnCollectionService(client, path, fieldName)
      : new DepositionLitigationAssnService(
          client,
          path,
          new QDepositionLitigationAssnId(fieldName).buildUrl(id)
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

export class DepositionCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Deposition,
  EditableDeposition,
  QDeposition,
  DepositionId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDeposition, new QDepositionId(name));
  }
}
