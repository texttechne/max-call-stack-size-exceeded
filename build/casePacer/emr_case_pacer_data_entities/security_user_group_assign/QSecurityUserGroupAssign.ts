import {
  QueryObject,
  QNumberPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QSecurityUserGroup } from "../security_user_group/QSecurityUserGroup";
import { QCasePacerUser } from "../case_pacer_user/QCasePacerUser";
import { SecurityUserGroupAssignId } from "./SecurityUserGroupAssign";

export class QSecurityUserGroupAssign extends QueryObject {
  public readonly UserGroupAssignId = new QNumberPath(
    this.withPrefix("UserGroupAssignId")
  );
  public readonly UserGroupId = new QNumberPath(this.withPrefix("UserGroupId"));
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly SecurityUserGroup = new QEntityPath(
    this.withPrefix("SecurityUserGroup"),
    () => QSecurityUserGroup
  );
  public readonly CasePacerUser = new QEntityPath(
    this.withPrefix("CasePacerUser"),
    () => QCasePacerUser
  );
}

export const qSecurityUserGroupAssign = new QSecurityUserGroupAssign();

export class QSecurityUserGroupAssignId extends QId<SecurityUserGroupAssignId> {
  private readonly params = [new QNumberParam("UserGroupAssignId")];

  getParams() {
    return this.params;
  }
}
