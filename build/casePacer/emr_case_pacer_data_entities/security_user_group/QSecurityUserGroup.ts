import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QFirm } from "../firm/QFirm";
import { QSecurityUserGroupAssign } from "../security_user_group_assign/QSecurityUserGroupAssign";
import { SecurityUserGroupId } from "./SecurityUserGroup";

export class QSecurityUserGroup extends QueryObject {
  public readonly UserGroupId = new QNumberPath(this.withPrefix("UserGroupId"));
  public readonly UserGroupName = new QStringPath(
    this.withPrefix("UserGroupName")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly SecurityUserGroupAssigns = new QEntityCollectionPath(
    this.withPrefix("SecurityUserGroupAssigns"),
    () => QSecurityUserGroupAssign
  );
}

export const qSecurityUserGroup = new QSecurityUserGroup();

export class QSecurityUserGroupId extends QId<SecurityUserGroupId> {
  private readonly params = [new QNumberParam("UserGroupId")];

  getParams() {
    return this.params;
  }
}
