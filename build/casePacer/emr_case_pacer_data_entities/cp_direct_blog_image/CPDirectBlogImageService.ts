import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  CPDirectBlogImage,
  EditableCPDirectBlogImage,
  CPDirectBlogImageId,
} from "./CPDirectBlogImage";
import {
  QCPDirectBlogImage,
  qCPDirectBlogImage,
  QCPDirectBlogImageId,
} from "./QCPDirectBlogImage";
import { CPDirectBlogService } from "../cp_direct_blog/CPDirectBlogService";

export class CPDirectBlogImageService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CPDirectBlogImage,
  EditableCPDirectBlogImage,
  QCPDirectBlogImage
> {
  private _CPDirectBlog?: CPDirectBlogService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCPDirectBlogImage);
  }

  public CPDirectBlog(): CPDirectBlogService<ClientType> {
    if (!this._CPDirectBlog) {
      const { client, path } = this.__base;
      this._CPDirectBlog = new CPDirectBlogService(
        client,
        path,
        "CPDirectBlog"
      );
    }

    return this._CPDirectBlog;
  }
}

export class CPDirectBlogImageCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CPDirectBlogImage,
  EditableCPDirectBlogImage,
  QCPDirectBlogImage,
  CPDirectBlogImageId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCPDirectBlogImage,
      new QCPDirectBlogImageId(name)
    );
  }
}
