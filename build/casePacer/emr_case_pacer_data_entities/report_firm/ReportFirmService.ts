import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { ReportFirm, EditableReportFirm, ReportFirmId } from "./ReportFirm";
import { QReportFirm, qReportFirm, QReportFirmId } from "./QReportFirm";
import { FirmService } from "../firm/FirmService";
import { ReportService } from "../report/ReportService";

export class ReportFirmService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  ReportFirm,
  EditableReportFirm,
  QReportFirm
> {
  private _Firm?: FirmService<ClientType>;
  private _Report?: ReportService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qReportFirm);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public Report(): ReportService<ClientType> {
    if (!this._Report) {
      const { client, path } = this.__base;
      this._Report = new ReportService(client, path, "Report");
    }

    return this._Report;
  }
}

export class ReportFirmCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ReportFirm,
  EditableReportFirm,
  QReportFirm,
  ReportFirmId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qReportFirm, new QReportFirmId(name));
  }
}
