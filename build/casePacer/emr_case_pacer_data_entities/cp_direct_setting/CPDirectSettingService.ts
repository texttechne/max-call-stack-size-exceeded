import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  CPDirectSetting,
  EditableCPDirectSetting,
  CPDirectSettingId,
} from "./CPDirectSetting";
import {
  QCPDirectSetting,
  qCPDirectSetting,
  QCPDirectSettingId,
} from "./QCPDirectSetting";
import { FirmService } from "../firm/FirmService";
import { CPDirectSettingLocationId } from "../cp_direct_setting_location/CPDirectSettingLocation";
import { QCPDirectSettingLocationId } from "../cp_direct_setting_location/QCPDirectSettingLocation";
import {
  CPDirectSettingLocationService,
  CPDirectSettingLocationCollectionService,
} from "../cp_direct_setting_location/CPDirectSettingLocationService";

export class CPDirectSettingService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CPDirectSetting,
  EditableCPDirectSetting,
  QCPDirectSetting
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCPDirectSetting);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public CPDirectSettingLocations(): CPDirectSettingLocationCollectionService<ClientType>;
  public CPDirectSettingLocations(
    id: CPDirectSettingLocationId
  ): CPDirectSettingLocationService<ClientType>;
  public CPDirectSettingLocations(id?: CPDirectSettingLocationId | undefined) {
    const fieldName = "CPDirectSettingLocations";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectSettingLocationCollectionService(client, path, fieldName)
      : new CPDirectSettingLocationService(
          client,
          path,
          new QCPDirectSettingLocationId(fieldName).buildUrl(id)
        );
  }
}

export class CPDirectSettingCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CPDirectSetting,
  EditableCPDirectSetting,
  QCPDirectSetting,
  CPDirectSettingId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCPDirectSetting,
      new QCPDirectSettingId(name)
    );
  }
}
