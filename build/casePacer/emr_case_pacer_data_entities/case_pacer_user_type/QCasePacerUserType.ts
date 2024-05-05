import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QCasePacerUser } from "../case_pacer_user/QCasePacerUser";
import { CasePacerUserTypeId } from "./CasePacerUserType";

export class QCasePacerUserType extends QueryObject {
  public readonly CasePacerUserTypeId = new QNumberPath(
    this.withPrefix("CasePacerUserTypeId")
  );
  public readonly CasePacerUserTypeName = new QStringPath(
    this.withPrefix("CasePacerUserTypeName")
  );
  public readonly CasePacerUsers = new QEntityCollectionPath(
    this.withPrefix("CasePacerUsers"),
    () => QCasePacerUser
  );
}

export const qCasePacerUserType = new QCasePacerUserType();

export class QCasePacerUserTypeId extends QId<CasePacerUserTypeId> {
  private readonly params = [new QNumberParam("CasePacerUserTypeId")];

  getParams() {
    return this.params;
  }
}
