import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  CalendarUserGroup,
  EditableCalendarUserGroup,
  CalendarUserGroupId,
} from "./CalendarUserGroup";
import {
  QCalendarUserGroup,
  qCalendarUserGroup,
  QCalendarUserGroupId,
} from "./QCalendarUserGroup";
import { CalendarUserId } from "../calendar_user/CalendarUser";
import { QCalendarUserId } from "../calendar_user/QCalendarUser";
import {
  CalendarUserService,
  CalendarUserCollectionService,
} from "../calendar_user/CalendarUserService";

export class CalendarUserGroupService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CalendarUserGroup,
  EditableCalendarUserGroup,
  QCalendarUserGroup
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCalendarUserGroup);
  }

  public CalendarUsers(): CalendarUserCollectionService<ClientType>;
  public CalendarUsers(id: CalendarUserId): CalendarUserService<ClientType>;
  public CalendarUsers(id?: CalendarUserId | undefined) {
    const fieldName = "CalendarUsers";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CalendarUserCollectionService(client, path, fieldName)
      : new CalendarUserService(
          client,
          path,
          new QCalendarUserId(fieldName).buildUrl(id)
        );
  }
}

export class CalendarUserGroupCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CalendarUserGroup,
  EditableCalendarUserGroup,
  QCalendarUserGroup,
  CalendarUserGroupId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCalendarUserGroup,
      new QCalendarUserGroupId(name)
    );
  }
}
