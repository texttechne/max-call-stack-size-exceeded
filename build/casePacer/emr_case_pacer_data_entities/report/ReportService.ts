import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Report, EditableReport, ReportId } from "./Report";
import { QReport, qReport, QReportId } from "./QReport";
import { ReportFirmId } from "../report_firm/ReportFirm";
import { QReportFirmId } from "../report_firm/QReportFirm";
import {
  ReportFirmService,
  ReportFirmCollectionService,
} from "../report_firm/ReportFirmService";

export class ReportService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Report, EditableReport, QReport> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qReport);
  }

  public ReportFirms(): ReportFirmCollectionService<ClientType>;
  public ReportFirms(id: ReportFirmId): ReportFirmService<ClientType>;
  public ReportFirms(id?: ReportFirmId | undefined) {
    const fieldName = "ReportFirms";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ReportFirmCollectionService(client, path, fieldName)
      : new ReportFirmService(
          client,
          path,
          new QReportFirmId(fieldName).buildUrl(id)
        );
  }
}

export class ReportCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Report,
  EditableReport,
  QReport,
  ReportId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qReport, new QReportId(name));
  }
}
