import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Settlement, EditableSettlement, SettlementId } from "./Settlement";
import { QSettlement, qSettlement, QSettlementId } from "./QSettlement";
import { LawsuitService } from "../lawsuit/LawsuitService";
import { PartyService } from "../party/PartyService";
import { ExpenseId } from "../expense/Expense";
import { QExpenseId } from "../expense/QExpense";
import {
  ExpenseService,
  ExpenseCollectionService,
} from "../expense/ExpenseService";
import { SettlementExpenseId } from "../settlement_expense/SettlementExpense";
import { QSettlementExpenseId } from "../settlement_expense/QSettlementExpense";
import {
  SettlementExpenseService,
  SettlementExpenseCollectionService,
} from "../settlement_expense/SettlementExpenseService";
import { SettlementItemId } from "../settlement_item/SettlementItem";
import { QSettlementItemId } from "../settlement_item/QSettlementItem";
import {
  SettlementItemService,
  SettlementItemCollectionService,
} from "../settlement_item/SettlementItemService";
import { SettlementLienSubId } from "../settlement_lien_sub/SettlementLienSub";
import { QSettlementLienSubId } from "../settlement_lien_sub/QSettlementLienSub";
import {
  SettlementLienSubService,
  SettlementLienSubCollectionService,
} from "../settlement_lien_sub/SettlementLienSubService";
import { SettlementMedicalProviderId } from "../settlement_medical_provider/SettlementMedicalProvider";
import { QSettlementMedicalProviderId } from "../settlement_medical_provider/QSettlementMedicalProvider";
import {
  SettlementMedicalProviderService,
  SettlementMedicalProviderCollectionService,
} from "../settlement_medical_provider/SettlementMedicalProviderService";

export class SettlementService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  Settlement,
  EditableSettlement,
  QSettlement
> {
  private _Lawsuit?: LawsuitService<ClientType>;
  private _PlaintiffParty?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSettlement);
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public PlaintiffParty(): PartyService<ClientType> {
    if (!this._PlaintiffParty) {
      const { client, path } = this.__base;
      this._PlaintiffParty = new PartyService(client, path, "PlaintiffParty");
    }

    return this._PlaintiffParty;
  }

  public Expenses(): ExpenseCollectionService<ClientType>;
  public Expenses(id: ExpenseId): ExpenseService<ClientType>;
  public Expenses(id?: ExpenseId | undefined) {
    const fieldName = "Expenses";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ExpenseCollectionService(client, path, fieldName)
      : new ExpenseService(
          client,
          path,
          new QExpenseId(fieldName).buildUrl(id)
        );
  }

  public SettlementExpenses(): SettlementExpenseCollectionService<ClientType>;
  public SettlementExpenses(
    id: SettlementExpenseId
  ): SettlementExpenseService<ClientType>;
  public SettlementExpenses(id?: SettlementExpenseId | undefined) {
    const fieldName = "SettlementExpenses";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SettlementExpenseCollectionService(client, path, fieldName)
      : new SettlementExpenseService(
          client,
          path,
          new QSettlementExpenseId(fieldName).buildUrl(id)
        );
  }

  public SettlementItems(): SettlementItemCollectionService<ClientType>;
  public SettlementItems(
    id: SettlementItemId
  ): SettlementItemService<ClientType>;
  public SettlementItems(id?: SettlementItemId | undefined) {
    const fieldName = "SettlementItems";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SettlementItemCollectionService(client, path, fieldName)
      : new SettlementItemService(
          client,
          path,
          new QSettlementItemId(fieldName).buildUrl(id)
        );
  }

  public SettlementLienSubs(): SettlementLienSubCollectionService<ClientType>;
  public SettlementLienSubs(
    id: SettlementLienSubId
  ): SettlementLienSubService<ClientType>;
  public SettlementLienSubs(id?: SettlementLienSubId | undefined) {
    const fieldName = "SettlementLienSubs";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SettlementLienSubCollectionService(client, path, fieldName)
      : new SettlementLienSubService(
          client,
          path,
          new QSettlementLienSubId(fieldName).buildUrl(id)
        );
  }

  public SettlementMedicalProviders(): SettlementMedicalProviderCollectionService<ClientType>;
  public SettlementMedicalProviders(
    id: SettlementMedicalProviderId
  ): SettlementMedicalProviderService<ClientType>;
  public SettlementMedicalProviders(
    id?: SettlementMedicalProviderId | undefined
  ) {
    const fieldName = "SettlementMedicalProviders";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SettlementMedicalProviderCollectionService(client, path, fieldName)
      : new SettlementMedicalProviderService(
          client,
          path,
          new QSettlementMedicalProviderId(fieldName).buildUrl(id)
        );
  }
}

export class SettlementCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Settlement,
  EditableSettlement,
  QSettlement,
  SettlementId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSettlement, new QSettlementId(name));
  }
}
