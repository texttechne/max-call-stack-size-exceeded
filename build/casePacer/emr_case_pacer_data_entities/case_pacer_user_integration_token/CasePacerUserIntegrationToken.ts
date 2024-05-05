import { CasePacerUser } from "../case_pacer_user/CasePacerUser";

export interface CasePacerUserIntegrationToken {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SystemName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  SystemName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SystemId` |
   * | Type | `Edm.String` |
   */
  SystemId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TokenJson` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  TokenJson: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SubscriptionId` |
   * | Type | `Edm.String` |
   */
  SubscriptionId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SubscriptionExpire` |
   * | Type | `Edm.DateTimeOffset` |
   */
  SubscriptionExpire: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUser` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  CasePacerUser?: CasePacerUser | null;
}

export type CasePacerUserIntegrationTokenId = number | { PartyId: number };

export interface EditableCasePacerUserIntegrationToken
  extends Pick<CasePacerUserIntegrationToken, "SystemName" | "TokenJson">,
    Partial<
      Pick<
        CasePacerUserIntegrationToken,
        "SystemId" | "SubscriptionId" | "SubscriptionExpire"
      >
    > {}
