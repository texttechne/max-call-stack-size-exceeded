import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Email, EditableEmail, EmailId } from "./Email";
import { QEmail, qEmail, QEmailId } from "./QEmail";
import { LawsuitService } from "../lawsuit/LawsuitService";
import { FirmService } from "../firm/FirmService";
import { RecordFileService } from "../record_file/RecordFileService";

export class EmailService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Email, EditableEmail, QEmail> {
  private _Lawsuit?: LawsuitService<ClientType>;
  private _Firm?: FirmService<ClientType>;
  private _RecordFile?: RecordFileService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qEmail);
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public RecordFile(): RecordFileService<ClientType> {
    if (!this._RecordFile) {
      const { client, path } = this.__base;
      this._RecordFile = new RecordFileService(client, path, "RecordFile");
    }

    return this._RecordFile;
  }
}

export class EmailCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Email,
  EditableEmail,
  QEmail,
  EmailId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qEmail, new QEmailId(name));
  }
}
