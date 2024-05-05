import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { EventHelp, EditableEventHelp, EventHelpId } from "./EventHelp";
import { QEventHelp, qEventHelp, QEventHelpId } from "./QEventHelp";
import { CasePacerUserService } from "../case_pacer_user/CasePacerUserService";

export class EventHelpService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  EventHelp,
  EditableEventHelp,
  QEventHelp
> {
  private _CasePacerUser?: CasePacerUserService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qEventHelp);
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
}

export class EventHelpCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  EventHelp,
  EditableEventHelp,
  QEventHelp,
  EventHelpId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qEventHelp, new QEventHelpId(name));
  }
}
