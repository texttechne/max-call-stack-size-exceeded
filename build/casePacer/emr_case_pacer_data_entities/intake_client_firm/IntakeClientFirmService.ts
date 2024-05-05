import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  IntakeClientFirm,
  EditableIntakeClientFirm,
  IntakeClientFirmId,
} from "./IntakeClientFirm";
import {
  QIntakeClientFirm,
  qIntakeClientFirm,
  QIntakeClientFirmId,
} from "./QIntakeClientFirm";
import { FirmService } from "../firm/FirmService";
import { IntakeClientLoginService } from "../intake_client_login/IntakeClientLoginService";
import { IntakeClientLawsuitId } from "../intake_client_lawsuit/IntakeClientLawsuit";
import { QIntakeClientLawsuitId } from "../intake_client_lawsuit/QIntakeClientLawsuit";
import {
  IntakeClientLawsuitService,
  IntakeClientLawsuitCollectionService,
} from "../intake_client_lawsuit/IntakeClientLawsuitService";

export class IntakeClientFirmService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  IntakeClientFirm,
  EditableIntakeClientFirm,
  QIntakeClientFirm
> {
  private _Firm?: FirmService<ClientType>;
  private _IntakeClientLogin?: IntakeClientLoginService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qIntakeClientFirm);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public IntakeClientLogin(): IntakeClientLoginService<ClientType> {
    if (!this._IntakeClientLogin) {
      const { client, path } = this.__base;
      this._IntakeClientLogin = new IntakeClientLoginService(
        client,
        path,
        "IntakeClientLogin"
      );
    }

    return this._IntakeClientLogin;
  }

  public IntakeClientLawsuits(): IntakeClientLawsuitCollectionService<ClientType>;
  public IntakeClientLawsuits(
    id: IntakeClientLawsuitId
  ): IntakeClientLawsuitService<ClientType>;
  public IntakeClientLawsuits(id?: IntakeClientLawsuitId | undefined) {
    const fieldName = "IntakeClientLawsuits";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new IntakeClientLawsuitCollectionService(client, path, fieldName)
      : new IntakeClientLawsuitService(
          client,
          path,
          new QIntakeClientLawsuitId(fieldName).buildUrl(id)
        );
  }
}

export class IntakeClientFirmCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  IntakeClientFirm,
  EditableIntakeClientFirm,
  QIntakeClientFirm,
  IntakeClientFirmId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qIntakeClientFirm,
      new QIntakeClientFirmId(name)
    );
  }
}
