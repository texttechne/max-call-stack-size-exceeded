import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Complaint, EditableComplaint, ComplaintId } from "./Complaint";
import { QComplaint, qComplaint, QComplaintId } from "./QComplaint";
import { LitigationService } from "../litigation/LitigationService";
import { PartyService } from "../party/PartyService";

export class ComplaintService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  Complaint,
  EditableComplaint,
  QComplaint
> {
  private _Litigation?: LitigationService<ClientType>;
  private _Party?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qComplaint);
  }

  public Litigation(): LitigationService<ClientType> {
    if (!this._Litigation) {
      const { client, path } = this.__base;
      this._Litigation = new LitigationService(client, path, "Litigation");
    }

    return this._Litigation;
  }

  public Party(): PartyService<ClientType> {
    if (!this._Party) {
      const { client, path } = this.__base;
      this._Party = new PartyService(client, path, "Party");
    }

    return this._Party;
  }
}

export class ComplaintCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Complaint,
  EditableComplaint,
  QComplaint,
  ComplaintId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qComplaint, new QComplaintId(name));
  }
}
