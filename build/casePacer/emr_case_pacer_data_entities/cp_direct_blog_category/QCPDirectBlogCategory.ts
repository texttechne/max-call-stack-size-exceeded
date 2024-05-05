import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QCPDirectBlog } from "../cp_direct_blog/QCPDirectBlog";
import { CPDirectBlogCategoryId } from "./CPDirectBlogCategory";

export class QCPDirectBlogCategory extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly Name = new QStringPath(this.withPrefix("Name"));
  public readonly CPDirectBlogs = new QEntityCollectionPath(
    this.withPrefix("CPDirectBlogs"),
    () => QCPDirectBlog
  );
}

export const qCPDirectBlogCategory = new QCPDirectBlogCategory();

export class QCPDirectBlogCategoryId extends QId<CPDirectBlogCategoryId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}
