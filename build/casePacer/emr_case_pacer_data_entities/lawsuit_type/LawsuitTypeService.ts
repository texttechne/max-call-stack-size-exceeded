import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { LawsuitType, EditableLawsuitType, LawsuitTypeId } from "./LawsuitType";
import { QLawsuitType, qLawsuitType, QLawsuitTypeId } from "./QLawsuitType";
import { FirmService } from "../firm/FirmService";
import {
  LawsuitService,
  LawsuitCollectionService,
} from "../lawsuit/LawsuitService";
import { CaseMenuItemId } from "../case_menu_item/CaseMenuItem";
import { QCaseMenuItemId } from "../case_menu_item/QCaseMenuItem";
import {
  CaseMenuItemService,
  CaseMenuItemCollectionService,
} from "../case_menu_item/CaseMenuItemService";
import { CPDirectCaseProgressId } from "../cp_direct_case_progress/CPDirectCaseProgress";
import { QCPDirectCaseProgressId } from "../cp_direct_case_progress/QCPDirectCaseProgress";
import {
  CPDirectCaseProgressService,
  CPDirectCaseProgressCollectionService,
} from "../cp_direct_case_progress/CPDirectCaseProgressService";
import { CustomFieldId } from "../custom_field/CustomField";
import { QCustomFieldId } from "../custom_field/QCustomField";
import {
  CustomFieldService,
  CustomFieldCollectionService,
} from "../custom_field/CustomFieldService";
import { LawsuitId } from "../lawsuit/Lawsuit";
import { QLawsuitId } from "../lawsuit/QLawsuit";
import { AccountingSyncGLService } from "../accounting_sync_gl/AccountingSyncGLService";
import { LawsuitTypeClientFormId } from "../lawsuit_type_client_form/LawsuitTypeClientForm";
import { QLawsuitTypeClientFormId } from "../lawsuit_type_client_form/QLawsuitTypeClientForm";
import {
  LawsuitTypeClientFormService,
  LawsuitTypeClientFormCollectionService,
} from "../lawsuit_type_client_form/LawsuitTypeClientFormService";
import { LawsuitTypeDocumentId } from "../lawsuit_type_document/LawsuitTypeDocument";
import { QLawsuitTypeDocumentId } from "../lawsuit_type_document/QLawsuitTypeDocument";
import {
  LawsuitTypeDocumentService,
  LawsuitTypeDocumentCollectionService,
} from "../lawsuit_type_document/LawsuitTypeDocumentService";
import { LawsuitTypeTicklerId } from "../lawsuit_type_tickler/LawsuitTypeTickler";
import { QLawsuitTypeTicklerId } from "../lawsuit_type_tickler/QLawsuitTypeTickler";
import {
  LawsuitTypeTicklerService,
  LawsuitTypeTicklerCollectionService,
} from "../lawsuit_type_tickler/LawsuitTypeTicklerService";
import { RoleTemplateId } from "../role_template/RoleTemplate";
import { QRoleTemplateId } from "../role_template/QRoleTemplate";
import {
  RoleTemplateService,
  RoleTemplateCollectionService,
} from "../role_template/RoleTemplateService";
import { SubPhaseTypeId } from "../sub_phase_type/SubPhaseType";
import { QSubPhaseTypeId } from "../sub_phase_type/QSubPhaseType";
import {
  SubPhaseTypeService,
  SubPhaseTypeCollectionService,
} from "../sub_phase_type/SubPhaseTypeService";

export class LawsuitTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LawsuitType,
  EditableLawsuitType,
  QLawsuitType
> {
  private _ChildLawsuitType?: LawsuitTypeService<ClientType>;
  private _Firm?: FirmService<ClientType>;
  private _MasterLawsuit?: LawsuitService<ClientType>;
  private _GlobalLawsuitType?: LawsuitTypeService<ClientType>;
  private _AccountingSyncGL?: AccountingSyncGLService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitType);
  }

  public ChildLawsuitType(): LawsuitTypeService<ClientType> {
    if (!this._ChildLawsuitType) {
      const { client, path } = this.__base;
      this._ChildLawsuitType = new LawsuitTypeService(
        client,
        path,
        "ChildLawsuitType"
      );
    }

    return this._ChildLawsuitType;
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public MasterLawsuit(): LawsuitService<ClientType> {
    if (!this._MasterLawsuit) {
      const { client, path } = this.__base;
      this._MasterLawsuit = new LawsuitService(client, path, "MasterLawsuit");
    }

    return this._MasterLawsuit;
  }

  public GlobalLawsuitType(): LawsuitTypeService<ClientType> {
    if (!this._GlobalLawsuitType) {
      const { client, path } = this.__base;
      this._GlobalLawsuitType = new LawsuitTypeService(
        client,
        path,
        "GlobalLawsuitType"
      );
    }

    return this._GlobalLawsuitType;
  }

  public CaseMenuItems(): CaseMenuItemCollectionService<ClientType>;
  public CaseMenuItems(id: CaseMenuItemId): CaseMenuItemService<ClientType>;
  public CaseMenuItems(id?: CaseMenuItemId | undefined) {
    const fieldName = "CaseMenuItems";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CaseMenuItemCollectionService(client, path, fieldName)
      : new CaseMenuItemService(
          client,
          path,
          new QCaseMenuItemId(fieldName).buildUrl(id)
        );
  }

  public CPDirectCaseProgresses(): CPDirectCaseProgressCollectionService<ClientType>;
  public CPDirectCaseProgresses(
    id: CPDirectCaseProgressId
  ): CPDirectCaseProgressService<ClientType>;
  public CPDirectCaseProgresses(id?: CPDirectCaseProgressId | undefined) {
    const fieldName = "CPDirectCaseProgresses";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectCaseProgressCollectionService(client, path, fieldName)
      : new CPDirectCaseProgressService(
          client,
          path,
          new QCPDirectCaseProgressId(fieldName).buildUrl(id)
        );
  }

  public CustomFields(): CustomFieldCollectionService<ClientType>;
  public CustomFields(id: CustomFieldId): CustomFieldService<ClientType>;
  public CustomFields(id?: CustomFieldId | undefined) {
    const fieldName = "CustomFields";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CustomFieldCollectionService(client, path, fieldName)
      : new CustomFieldService(
          client,
          path,
          new QCustomFieldId(fieldName).buildUrl(id)
        );
  }

  public Lawsuits(): LawsuitCollectionService<ClientType>;
  public Lawsuits(id: LawsuitId): LawsuitService<ClientType>;
  public Lawsuits(id?: LawsuitId | undefined) {
    const fieldName = "Lawsuits";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitCollectionService(client, path, fieldName)
      : new LawsuitService(
          client,
          path,
          new QLawsuitId(fieldName).buildUrl(id)
        );
  }

  public AccountingSyncGL(): AccountingSyncGLService<ClientType> {
    if (!this._AccountingSyncGL) {
      const { client, path } = this.__base;
      this._AccountingSyncGL = new AccountingSyncGLService(
        client,
        path,
        "AccountingSyncGL"
      );
    }

    return this._AccountingSyncGL;
  }

  public MasterLawsuitTypes(): LawsuitTypeCollectionService<ClientType>;
  public MasterLawsuitTypes(id: LawsuitTypeId): LawsuitTypeService<ClientType>;
  public MasterLawsuitTypes(id?: LawsuitTypeId | undefined) {
    const fieldName = "MasterLawsuitTypes";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitTypeCollectionService(client, path, fieldName)
      : new LawsuitTypeService(
          client,
          path,
          new QLawsuitTypeId(fieldName).buildUrl(id)
        );
  }

  public GlobalLawsuitTypeLawsuitTypes(): LawsuitTypeCollectionService<ClientType>;
  public GlobalLawsuitTypeLawsuitTypes(
    id: LawsuitTypeId
  ): LawsuitTypeService<ClientType>;
  public GlobalLawsuitTypeLawsuitTypes(id?: LawsuitTypeId | undefined) {
    const fieldName = "GlobalLawsuitTypeLawsuitTypes";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitTypeCollectionService(client, path, fieldName)
      : new LawsuitTypeService(
          client,
          path,
          new QLawsuitTypeId(fieldName).buildUrl(id)
        );
  }

  public LawsuitTypeClientForms(): LawsuitTypeClientFormCollectionService<ClientType>;
  public LawsuitTypeClientForms(
    id: LawsuitTypeClientFormId
  ): LawsuitTypeClientFormService<ClientType>;
  public LawsuitTypeClientForms(id?: LawsuitTypeClientFormId | undefined) {
    const fieldName = "LawsuitTypeClientForms";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitTypeClientFormCollectionService(client, path, fieldName)
      : new LawsuitTypeClientFormService(
          client,
          path,
          new QLawsuitTypeClientFormId(fieldName).buildUrl(id)
        );
  }

  public LawsuitTypeDocuments(): LawsuitTypeDocumentCollectionService<ClientType>;
  public LawsuitTypeDocuments(
    id: LawsuitTypeDocumentId
  ): LawsuitTypeDocumentService<ClientType>;
  public LawsuitTypeDocuments(id?: LawsuitTypeDocumentId | undefined) {
    const fieldName = "LawsuitTypeDocuments";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitTypeDocumentCollectionService(client, path, fieldName)
      : new LawsuitTypeDocumentService(
          client,
          path,
          new QLawsuitTypeDocumentId(fieldName).buildUrl(id)
        );
  }

  public LawsuitTypeTicklers(): LawsuitTypeTicklerCollectionService<ClientType>;
  public LawsuitTypeTicklers(
    id: LawsuitTypeTicklerId
  ): LawsuitTypeTicklerService<ClientType>;
  public LawsuitTypeTicklers(id?: LawsuitTypeTicklerId | undefined) {
    const fieldName = "LawsuitTypeTicklers";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitTypeTicklerCollectionService(client, path, fieldName)
      : new LawsuitTypeTicklerService(
          client,
          path,
          new QLawsuitTypeTicklerId(fieldName).buildUrl(id)
        );
  }

  public RoleTemplates(): RoleTemplateCollectionService<ClientType>;
  public RoleTemplates(id: RoleTemplateId): RoleTemplateService<ClientType>;
  public RoleTemplates(id?: RoleTemplateId | undefined) {
    const fieldName = "RoleTemplates";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RoleTemplateCollectionService(client, path, fieldName)
      : new RoleTemplateService(
          client,
          path,
          new QRoleTemplateId(fieldName).buildUrl(id)
        );
  }

  public SubPhaseTypes(): SubPhaseTypeCollectionService<ClientType>;
  public SubPhaseTypes(id: SubPhaseTypeId): SubPhaseTypeService<ClientType>;
  public SubPhaseTypes(id?: SubPhaseTypeId | undefined) {
    const fieldName = "SubPhaseTypes";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SubPhaseTypeCollectionService(client, path, fieldName)
      : new SubPhaseTypeService(
          client,
          path,
          new QSubPhaseTypeId(fieldName).buildUrl(id)
        );
  }
}

export class LawsuitTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LawsuitType,
  EditableLawsuitType,
  QLawsuitType,
  LawsuitTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitType, new QLawsuitTypeId(name));
  }
}
