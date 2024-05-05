import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  PoliceReport,
  EditablePoliceReport,
  PoliceReportId,
} from "./PoliceReport";
import { QPoliceReport, qPoliceReport, QPoliceReportId } from "./QPoliceReport";
import { LawsuitService } from "../lawsuit/LawsuitService";
import { LawsuitPartyService } from "../lawsuit_party/LawsuitPartyService";

export class PoliceReportService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  PoliceReport,
  EditablePoliceReport,
  QPoliceReport
> {
  private _Lawsuit?: LawsuitService<ClientType>;
  private _PoliceDepartmentLawsuitParty?: LawsuitPartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPoliceReport);
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public PoliceDepartmentLawsuitParty(): LawsuitPartyService<ClientType> {
    if (!this._PoliceDepartmentLawsuitParty) {
      const { client, path } = this.__base;
      this._PoliceDepartmentLawsuitParty = new LawsuitPartyService(
        client,
        path,
        "PoliceDepartmentLawsuitParty"
      );
    }

    return this._PoliceDepartmentLawsuitParty;
  }
}

export class PoliceReportCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  PoliceReport,
  EditablePoliceReport,
  QPoliceReport,
  PoliceReportId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPoliceReport, new QPoliceReportId(name));
  }
}
