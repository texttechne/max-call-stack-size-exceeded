import { CPDirectBlogCategory } from "../cp_direct_blog_category/CPDirectBlogCategory";
import { Firm } from "../firm/Firm";
import { CPDirectBlogImage } from "../cp_direct_blog_image/CPDirectBlogImage";

export interface CPDirectBlog {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  FirmId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CategoryId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  CategoryId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DateCreate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  DateCreate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Title` |
   * | Type | `Edm.String` |
   */
  Title: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Summary` |
   * | Type | `Edm.String` |
   */
  Summary: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Body` |
   * | Type | `Edm.String` |
   */
  Body: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Published` |
   * | Type | `Edm.DateTimeOffset` |
   */
  Published: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectBlogCategory` |
   * | Type | `Emr.CasePacer.Data.Entities.CPDirectBlogCategory` |
   */
  CPDirectBlogCategory?: CPDirectBlogCategory | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectBlogImages` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CPDirectBlogImage)` |
   */
  CPDirectBlogImages?: Array<CPDirectBlogImage>;
}

export type CPDirectBlogId = number | { Id: number };

export interface EditableCPDirectBlog
  extends Pick<CPDirectBlog, "FirmId" | "CategoryId" | "DateCreate">,
    Partial<Pick<CPDirectBlog, "Title" | "Summary" | "Body" | "Published">> {}
