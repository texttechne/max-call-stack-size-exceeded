import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { HearingType, EditableHearingType, HearingTypeId } from "./HearingType";
import { QHearingType, qHearingType, QHearingTypeId } from "./QHearingType";
import { HearingId } from "../hearing/Hearing";
import { QHearingId } from "../hearing/QHearing";
import {
  HearingService,
  HearingCollectionService,
} from "../hearing/HearingService";

export class HearingTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  HearingType,
  EditableHearingType,
  QHearingType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qHearingType);
  }

  public Hearings(): HearingCollectionService<ClientType>;
  public Hearings(id: HearingId): HearingService<ClientType>;
  public Hearings(id?: HearingId | undefined) {
    const fieldName = "Hearings";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new HearingCollectionService(client, path, fieldName)
      : new HearingService(
          client,
          path,
          new QHearingId(fieldName).buildUrl(id)
        );
  }
}

export class HearingTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  HearingType,
  EditableHearingType,
  QHearingType,
  HearingTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qHearingType, new QHearingTypeId(name));
  }
}
