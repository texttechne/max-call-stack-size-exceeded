import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { MailMerge, EditableMailMerge, MailMergeId } from "./MailMerge";
import { QMailMerge, qMailMerge, QMailMergeId } from "./QMailMerge";
import { LawsuitPartyTypeService } from "../lawsuit_party_type/LawsuitPartyTypeService";

export class MailMergeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  MailMerge,
  EditableMailMerge,
  QMailMerge
> {
  private _LawsuitPartyType?: LawsuitPartyTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qMailMerge);
  }

  public LawsuitPartyType(): LawsuitPartyTypeService<ClientType> {
    if (!this._LawsuitPartyType) {
      const { client, path } = this.__base;
      this._LawsuitPartyType = new LawsuitPartyTypeService(
        client,
        path,
        "LawsuitPartyType"
      );
    }

    return this._LawsuitPartyType;
  }
}

export class MailMergeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  MailMerge,
  EditableMailMerge,
  QMailMerge,
  MailMergeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qMailMerge, new QMailMergeId(name));
  }
}
