import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  AuthorizedEmailSender,
  EditableAuthorizedEmailSender,
  AuthorizedEmailSenderId,
} from "./AuthorizedEmailSender";
import {
  QAuthorizedEmailSender,
  qAuthorizedEmailSender,
  QAuthorizedEmailSenderId,
} from "./QAuthorizedEmailSender";
import { FirmService } from "../firm/FirmService";

export class AuthorizedEmailSenderService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AuthorizedEmailSender,
  EditableAuthorizedEmailSender,
  QAuthorizedEmailSender
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAuthorizedEmailSender);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }
}

export class AuthorizedEmailSenderCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AuthorizedEmailSender,
  EditableAuthorizedEmailSender,
  QAuthorizedEmailSender,
  AuthorizedEmailSenderId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAuthorizedEmailSender,
      new QAuthorizedEmailSenderId(name)
    );
  }
}
