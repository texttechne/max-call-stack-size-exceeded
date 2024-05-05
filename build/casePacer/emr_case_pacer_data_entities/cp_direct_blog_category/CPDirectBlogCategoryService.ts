import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  CPDirectBlogCategory,
  EditableCPDirectBlogCategory,
  CPDirectBlogCategoryId,
} from "./CPDirectBlogCategory";
import {
  QCPDirectBlogCategory,
  qCPDirectBlogCategory,
  QCPDirectBlogCategoryId,
} from "./QCPDirectBlogCategory";
import { CPDirectBlogId } from "../cp_direct_blog/CPDirectBlog";
import { QCPDirectBlogId } from "../cp_direct_blog/QCPDirectBlog";
import {
  CPDirectBlogService,
  CPDirectBlogCollectionService,
} from "../cp_direct_blog/CPDirectBlogService";

export class CPDirectBlogCategoryService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CPDirectBlogCategory,
  EditableCPDirectBlogCategory,
  QCPDirectBlogCategory
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCPDirectBlogCategory);
  }

  public CPDirectBlogs(): CPDirectBlogCollectionService<ClientType>;
  public CPDirectBlogs(id: CPDirectBlogId): CPDirectBlogService<ClientType>;
  public CPDirectBlogs(id?: CPDirectBlogId | undefined) {
    const fieldName = "CPDirectBlogs";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectBlogCollectionService(client, path, fieldName)
      : new CPDirectBlogService(
          client,
          path,
          new QCPDirectBlogId(fieldName).buildUrl(id)
        );
  }
}

export class CPDirectBlogCategoryCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CPDirectBlogCategory,
  EditableCPDirectBlogCategory,
  QCPDirectBlogCategory,
  CPDirectBlogCategoryId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCPDirectBlogCategory,
      new QCPDirectBlogCategoryId(name)
    );
  }
}
