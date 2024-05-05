import {
  QueryObject,
  QNumberPath,
  QBooleanPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLawsuitType } from "../lawsuit_type/QLawsuitType";
import { QRoleTemplate } from "../role_template/QRoleTemplate";
import { QTicklerTemplate } from "../tickler_template/QTicklerTemplate";
import { LawsuitTypeTicklerId } from "./LawsuitTypeTickler";

export class QLawsuitTypeTickler extends QueryObject {
  public readonly LawsuitTypeTicklerId = new QNumberPath(
    this.withPrefix("LawsuitTypeTicklerId")
  );
  public readonly LawsuitTypeId = new QNumberPath(
    this.withPrefix("LawsuitTypeId")
  );
  public readonly TicklerTemplateId = new QNumberPath(
    this.withPrefix("TicklerTemplateId")
  );
  public readonly RoleTemplateId = new QNumberPath(
    this.withPrefix("RoleTemplateId")
  );
  public readonly DefaultToPrimaryAttorney = new QBooleanPath(
    this.withPrefix("DefaultToPrimaryAttorney")
  );
  public readonly LawsuitType = new QEntityPath(
    this.withPrefix("LawsuitType"),
    () => QLawsuitType
  );
  public readonly RoleTemplate = new QEntityPath(
    this.withPrefix("RoleTemplate"),
    () => QRoleTemplate
  );
  public readonly TicklerTemplate = new QEntityPath(
    this.withPrefix("TicklerTemplate"),
    () => QTicklerTemplate
  );
}

export const qLawsuitTypeTickler = new QLawsuitTypeTickler();

export class QLawsuitTypeTicklerId extends QId<LawsuitTypeTicklerId> {
  private readonly params = [new QNumberParam("LawsuitTypeTicklerId")];

  getParams() {
    return this.params;
  }
}
