import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  CPDirectSettingLocation,
  EditableCPDirectSettingLocation,
  CPDirectSettingLocationId,
} from "./CPDirectSettingLocation";
import {
  QCPDirectSettingLocation,
  qCPDirectSettingLocation,
  QCPDirectSettingLocationId,
} from "./QCPDirectSettingLocation";
import { CPDirectSettingService } from "../cp_direct_setting/CPDirectSettingService";

export class CPDirectSettingLocationService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CPDirectSettingLocation,
  EditableCPDirectSettingLocation,
  QCPDirectSettingLocation
> {
  private _CPDirectSetting?: CPDirectSettingService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCPDirectSettingLocation);
  }

  public CPDirectSetting(): CPDirectSettingService<ClientType> {
    if (!this._CPDirectSetting) {
      const { client, path } = this.__base;
      this._CPDirectSetting = new CPDirectSettingService(
        client,
        path,
        "CPDirectSetting"
      );
    }

    return this._CPDirectSetting;
  }
}

export class CPDirectSettingLocationCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CPDirectSettingLocation,
  EditableCPDirectSettingLocation,
  QCPDirectSettingLocation,
  CPDirectSettingLocationId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCPDirectSettingLocation,
      new QCPDirectSettingLocationId(name)
    );
  }
}
