import { CPDirectBlog } from "../cp_direct_blog/CPDirectBlog";

export interface CPDirectBlogImage {
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
   * | Name | `BlogId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  BlogId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `S3Key` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  S3Key: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PublicUrl` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  PublicUrl: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FileName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  FileName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FileSize` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  FileSize: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectBlog` |
   * | Type | `Emr.CasePacer.Data.Entities.CPDirectBlog` |
   */
  CPDirectBlog?: CPDirectBlog | null;
}

export type CPDirectBlogImageId = number | { Id: number };

export interface EditableCPDirectBlogImage
  extends Pick<
    CPDirectBlogImage,
    "BlogId" | "S3Key" | "PublicUrl" | "FileName" | "FileSize"
  > {}
