import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  LawsuitCompanionGroup,
  EditableLawsuitCompanionGroup,
  LawsuitCompanionGroupId,
} from "./LawsuitCompanionGroup";
import {
  QLawsuitCompanionGroup,
  qLawsuitCompanionGroup,
  QLawsuitCompanionGroupId,
} from "./QLawsuitCompanionGroup";
import { LawsuitId } from "../lawsuit/Lawsuit";
import { QLawsuitId } from "../lawsuit/QLawsuit";
import {
  LawsuitService,
  LawsuitCollectionService,
} from "../lawsuit/LawsuitService";

export class LawsuitCompanionGroupService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LawsuitCompanionGroup,
  EditableLawsuitCompanionGroup,
  QLawsuitCompanionGroup
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitCompanionGroup);
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
}

export class LawsuitCompanionGroupCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LawsuitCompanionGroup,
  EditableLawsuitCompanionGroup,
  QLawsuitCompanionGroup,
  LawsuitCompanionGroupId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qLawsuitCompanionGroup,
      new QLawsuitCompanionGroupId(name)
    );
  }
}
