import { CPDirectBlog } from "../cp_direct_blog/CPDirectBlog";

export interface CPDirectBlogCategory {
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
   * | Name | `Name` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Name: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectBlogs` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CPDirectBlog)` |
   */
  CPDirectBlogs?: Array<CPDirectBlog>;
}

export type CPDirectBlogCategoryId = number | { Id: number };

export interface EditableCPDirectBlogCategory
  extends Pick<CPDirectBlogCategory, "Name"> {}
