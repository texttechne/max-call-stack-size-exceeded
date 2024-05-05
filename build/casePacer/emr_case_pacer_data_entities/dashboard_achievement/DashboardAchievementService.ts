import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  DashboardAchievement,
  EditableDashboardAchievement,
  DashboardAchievementId,
} from "./DashboardAchievement";
import {
  QDashboardAchievement,
  qDashboardAchievement,
  QDashboardAchievementId,
} from "./QDashboardAchievement";

export class DashboardAchievementService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  DashboardAchievement,
  EditableDashboardAchievement,
  QDashboardAchievement
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDashboardAchievement);
  }
}

export class DashboardAchievementCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  DashboardAchievement,
  EditableDashboardAchievement,
  QDashboardAchievement,
  DashboardAchievementId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qDashboardAchievement,
      new QDashboardAchievementId(name)
    );
  }
}
