import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  CalendarUser,
  EditableCalendarUser,
  CalendarUserId,
} from "./CalendarUser";
import { QCalendarUser, qCalendarUser, QCalendarUserId } from "./QCalendarUser";
import { CalendarUserGroupService } from "../calendar_user_group/CalendarUserGroupService";
import { PartyService } from "../party/PartyService";

export class CalendarUserService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CalendarUser,
  EditableCalendarUser,
  QCalendarUser
> {
  private _CalendarUserGroup?: CalendarUserGroupService<ClientType>;
  private _Party?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCalendarUser);
  }

  public CalendarUserGroup(): CalendarUserGroupService<ClientType> {
    if (!this._CalendarUserGroup) {
      const { client, path } = this.__base;
      this._CalendarUserGroup = new CalendarUserGroupService(
        client,
        path,
        "CalendarUserGroup"
      );
    }

    return this._CalendarUserGroup;
  }

  public Party(): PartyService<ClientType> {
    if (!this._Party) {
      const { client, path } = this.__base;
      this._Party = new PartyService(client, path, "Party");
    }

    return this._Party;
  }
}

export class CalendarUserCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CalendarUser,
  EditableCalendarUser,
  QCalendarUser,
  CalendarUserId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCalendarUser, new QCalendarUserId(name));
  }
}
