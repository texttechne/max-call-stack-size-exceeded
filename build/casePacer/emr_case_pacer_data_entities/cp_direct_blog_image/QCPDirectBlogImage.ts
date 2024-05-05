import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QCPDirectBlog } from "../cp_direct_blog/QCPDirectBlog";
import { CPDirectBlogImageId } from "./CPDirectBlogImage";

export class QCPDirectBlogImage extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly BlogId = new QNumberPath(this.withPrefix("BlogId"));
  public readonly S3Key = new QStringPath(this.withPrefix("S3Key"));
  public readonly PublicUrl = new QStringPath(this.withPrefix("PublicUrl"));
  public readonly FileName = new QStringPath(this.withPrefix("FileName"));
  public readonly FileSize = new QNumberPath(this.withPrefix("FileSize"));
  public readonly CPDirectBlog = new QEntityPath(
    this.withPrefix("CPDirectBlog"),
    () => QCPDirectBlog
  );
}

export const qCPDirectBlogImage = new QCPDirectBlogImage();

export class QCPDirectBlogImageId extends QId<CPDirectBlogImageId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}
