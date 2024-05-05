import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  AdditionalEmailSender,
  EditableAdditionalEmailSender,
  AdditionalEmailSenderId,
} from "./AdditionalEmailSender";
import {
  QAdditionalEmailSender,
  qAdditionalEmailSender,
  QAdditionalEmailSenderId,
} from "./QAdditionalEmailSender";
import { FirmService } from "../firm/FirmService";

export class AdditionalEmailSenderService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AdditionalEmailSender,
  EditableAdditionalEmailSender,
  QAdditionalEmailSender
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAdditionalEmailSender);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }
}

export class AdditionalEmailSenderCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AdditionalEmailSender,
  EditableAdditionalEmailSender,
  QAdditionalEmailSender,
  AdditionalEmailSenderId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAdditionalEmailSender,
      new QAdditionalEmailSenderId(name)
    );
  }
}
