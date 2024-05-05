import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  PropertyDamage,
  EditablePropertyDamage,
  PropertyDamageId,
} from "./PropertyDamage";
import {
  QPropertyDamage,
  qPropertyDamage,
  QPropertyDamageId,
} from "./QPropertyDamage";
import { LawsuitPartyService } from "../lawsuit_party/LawsuitPartyService";
import { InsuranceClaimService } from "../insurance_claim/InsuranceClaimService";
import { LawsuitService } from "../lawsuit/LawsuitService";
import { PropertyTypeService } from "../property_type/PropertyTypeService";
import { CompanyService } from "../company/CompanyService";

export class PropertyDamageService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  PropertyDamage,
  EditablePropertyDamage,
  QPropertyDamage
> {
  private _Adjuster?: LawsuitPartyService<ClientType>;
  private _InsuranceClaim?: InsuranceClaimService<ClientType>;
  private _InsuranceCompany?: LawsuitPartyService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;
  private _Plaintiff?: LawsuitPartyService<ClientType>;
  private _PropertyType?: PropertyTypeService<ClientType>;
  private _RepairCompany?: CompanyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPropertyDamage);
  }

  public Adjuster(): LawsuitPartyService<ClientType> {
    if (!this._Adjuster) {
      const { client, path } = this.__base;
      this._Adjuster = new LawsuitPartyService(client, path, "Adjuster");
    }

    return this._Adjuster;
  }

  public InsuranceClaim(): InsuranceClaimService<ClientType> {
    if (!this._InsuranceClaim) {
      const { client, path } = this.__base;
      this._InsuranceClaim = new InsuranceClaimService(
        client,
        path,
        "InsuranceClaim"
      );
    }

    return this._InsuranceClaim;
  }

  public InsuranceCompany(): LawsuitPartyService<ClientType> {
    if (!this._InsuranceCompany) {
      const { client, path } = this.__base;
      this._InsuranceCompany = new LawsuitPartyService(
        client,
        path,
        "InsuranceCompany"
      );
    }

    return this._InsuranceCompany;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public Plaintiff(): LawsuitPartyService<ClientType> {
    if (!this._Plaintiff) {
      const { client, path } = this.__base;
      this._Plaintiff = new LawsuitPartyService(client, path, "Plaintiff");
    }

    return this._Plaintiff;
  }

  public PropertyType(): PropertyTypeService<ClientType> {
    if (!this._PropertyType) {
      const { client, path } = this.__base;
      this._PropertyType = new PropertyTypeService(
        client,
        path,
        "PropertyType"
      );
    }

    return this._PropertyType;
  }

  public RepairCompany(): CompanyService<ClientType> {
    if (!this._RepairCompany) {
      const { client, path } = this.__base;
      this._RepairCompany = new CompanyService(client, path, "RepairCompany");
    }

    return this._RepairCompany;
  }
}

export class PropertyDamageCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  PropertyDamage,
  EditablePropertyDamage,
  QPropertyDamage,
  PropertyDamageId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPropertyDamage, new QPropertyDamageId(name));
  }
}
