import {
  QueryObject,
  QNumberPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QLawsuitParty } from "../lawsuit_party/QLawsuitParty";
import { QRoleTemplate } from "../role_template/QRoleTemplate";
import { LawsuitRoleId } from "./LawsuitRole";

export class QLawsuitRole extends QueryObject {
  public readonly LawsuitRoleId = new QNumberPath(
    this.withPrefix("LawsuitRoleId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly RoleTemplateId = new QNumberPath(
    this.withPrefix("RoleTemplateId")
  );
  public readonly LawsuitPartyId = new QNumberPath(
    this.withPrefix("LawsuitPartyId")
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly LawsuitParty = new QEntityPath(
    this.withPrefix("LawsuitParty"),
    () => QLawsuitParty
  );
  public readonly RoleTemplate = new QEntityPath(
    this.withPrefix("RoleTemplate"),
    () => QRoleTemplate
  );
}

export const qLawsuitRole = new QLawsuitRole();

export class QLawsuitRoleId extends QId<LawsuitRoleId> {
  private readonly params = [new QNumberParam("LawsuitRoleId")];

  getParams() {
    return this.params;
  }
}
