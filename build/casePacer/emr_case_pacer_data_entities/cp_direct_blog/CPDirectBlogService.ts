import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  CPDirectBlog,
  EditableCPDirectBlog,
  CPDirectBlogId,
} from "./CPDirectBlog";
import { QCPDirectBlog, qCPDirectBlog, QCPDirectBlogId } from "./QCPDirectBlog";
import { CPDirectBlogCategoryService } from "../cp_direct_blog_category/CPDirectBlogCategoryService";
import { FirmService } from "../firm/FirmService";
import { CPDirectBlogImageId } from "../cp_direct_blog_image/CPDirectBlogImage";
import { QCPDirectBlogImageId } from "../cp_direct_blog_image/QCPDirectBlogImage";
import {
  CPDirectBlogImageService,
  CPDirectBlogImageCollectionService,
} from "../cp_direct_blog_image/CPDirectBlogImageService";

export class CPDirectBlogService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CPDirectBlog,
  EditableCPDirectBlog,
  QCPDirectBlog
> {
  private _CPDirectBlogCategory?: CPDirectBlogCategoryService<ClientType>;
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCPDirectBlog);
  }

  public CPDirectBlogCategory(): CPDirectBlogCategoryService<ClientType> {
    if (!this._CPDirectBlogCategory) {
      const { client, path } = this.__base;
      this._CPDirectBlogCategory = new CPDirectBlogCategoryService(
        client,
        path,
        "CPDirectBlogCategory"
      );
    }

    return this._CPDirectBlogCategory;
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public CPDirectBlogImages(): CPDirectBlogImageCollectionService<ClientType>;
  public CPDirectBlogImages(
    id: CPDirectBlogImageId
  ): CPDirectBlogImageService<ClientType>;
  public CPDirectBlogImages(id?: CPDirectBlogImageId | undefined) {
    const fieldName = "CPDirectBlogImages";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectBlogImageCollectionService(client, path, fieldName)
      : new CPDirectBlogImageService(
          client,
          path,
          new QCPDirectBlogImageId(fieldName).buildUrl(id)
        );
  }
}

export class CPDirectBlogCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CPDirectBlog,
  EditableCPDirectBlog,
  QCPDirectBlog,
  CPDirectBlogId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCPDirectBlog, new QCPDirectBlogId(name));
  }
}
