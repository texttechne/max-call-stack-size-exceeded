import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { PaymentInfo, EditablePaymentInfo, PaymentInfoId } from "./PaymentInfo";
import { QPaymentInfo, qPaymentInfo, QPaymentInfoId } from "./QPaymentInfo";
import { FirmService } from "../firm/FirmService";

export class PaymentInfoService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  PaymentInfo,
  EditablePaymentInfo,
  QPaymentInfo
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPaymentInfo);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }
}

export class PaymentInfoCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  PaymentInfo,
  EditablePaymentInfo,
  QPaymentInfo,
  PaymentInfoId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPaymentInfo, new QPaymentInfoId(name));
  }
}
