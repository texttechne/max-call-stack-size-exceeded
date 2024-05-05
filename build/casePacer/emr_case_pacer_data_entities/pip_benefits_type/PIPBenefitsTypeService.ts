import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  PIPBenefitsType,
  EditablePIPBenefitsType,
  PIPBenefitsTypeId,
} from "./PIPBenefitsType";
import {
  QPIPBenefitsType,
  qPIPBenefitsType,
  QPIPBenefitsTypeId,
} from "./QPIPBenefitsType";
import { FirmService } from "../firm/FirmService";
import { PIPBenefitId } from "../pip_benefit/PIPBenefit";
import { QPIPBenefitId } from "../pip_benefit/QPIPBenefit";
import {
  PIPBenefitService,
  PIPBenefitCollectionService,
} from "../pip_benefit/PIPBenefitService";

export class PIPBenefitsTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  PIPBenefitsType,
  EditablePIPBenefitsType,
  QPIPBenefitsType
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPIPBenefitsType);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public PIPBenefits(): PIPBenefitCollectionService<ClientType>;
  public PIPBenefits(id: PIPBenefitId): PIPBenefitService<ClientType>;
  public PIPBenefits(id?: PIPBenefitId | undefined) {
    const fieldName = "PIPBenefits";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PIPBenefitCollectionService(client, path, fieldName)
      : new PIPBenefitService(
          client,
          path,
          new QPIPBenefitId(fieldName).buildUrl(id)
        );
  }
}

export class PIPBenefitsTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  PIPBenefitsType,
  EditablePIPBenefitsType,
  QPIPBenefitsType,
  PIPBenefitsTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qPIPBenefitsType,
      new QPIPBenefitsTypeId(name)
    );
  }
}
