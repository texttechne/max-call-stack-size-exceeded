import {
  QueryObject,
  QNumberPath,
  QDateTimeOffsetPath,
  QStringPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QCPDirectBlogCategory } from "../cp_direct_blog_category/QCPDirectBlogCategory";
import { QFirm } from "../firm/QFirm";
import { QCPDirectBlogImage } from "../cp_direct_blog_image/QCPDirectBlogImage";
import { CPDirectBlogId } from "./CPDirectBlog";

export class QCPDirectBlog extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly CategoryId = new QNumberPath(this.withPrefix("CategoryId"));
  public readonly DateCreate = new QDateTimeOffsetPath(
    this.withPrefix("DateCreate")
  );
  public readonly Title = new QStringPath(this.withPrefix("Title"));
  public readonly Summary = new QStringPath(this.withPrefix("Summary"));
  public readonly Body = new QStringPath(this.withPrefix("Body"));
  public readonly Published = new QDateTimeOffsetPath(
    this.withPrefix("Published")
  );
  public readonly CPDirectBlogCategory = new QEntityPath(
    this.withPrefix("CPDirectBlogCategory"),
    () => QCPDirectBlogCategory
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly CPDirectBlogImages = new QEntityCollectionPath(
    this.withPrefix("CPDirectBlogImages"),
    () => QCPDirectBlogImage
  );
}

export const qCPDirectBlog = new QCPDirectBlog();

export class QCPDirectBlogId extends QId<CPDirectBlogId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}
