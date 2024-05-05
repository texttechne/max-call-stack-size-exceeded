import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  IntakeClientLogin,
  EditableIntakeClientLogin,
  IntakeClientLoginId,
} from "./IntakeClientLogin";
import {
  QIntakeClientLogin,
  qIntakeClientLogin,
  QIntakeClientLoginId,
} from "./QIntakeClientLogin";
import { CPDirectMessageId } from "../cp_direct_message/CPDirectMessage";
import { QCPDirectMessageId } from "../cp_direct_message/QCPDirectMessage";
import {
  CPDirectMessageService,
  CPDirectMessageCollectionService,
} from "../cp_direct_message/CPDirectMessageService";
import { CPDirectPushTokenId } from "../cp_direct_push_token/CPDirectPushToken";
import { QCPDirectPushTokenId } from "../cp_direct_push_token/QCPDirectPushToken";
import {
  CPDirectPushTokenService,
  CPDirectPushTokenCollectionService,
} from "../cp_direct_push_token/CPDirectPushTokenService";
import { IntakeClientFirmId } from "../intake_client_firm/IntakeClientFirm";
import { QIntakeClientFirmId } from "../intake_client_firm/QIntakeClientFirm";
import {
  IntakeClientFirmService,
  IntakeClientFirmCollectionService,
} from "../intake_client_firm/IntakeClientFirmService";
import { IntakeClientSessionId } from "../intake_client_session/IntakeClientSession";
import { QIntakeClientSessionId } from "../intake_client_session/QIntakeClientSession";
import {
  IntakeClientSessionService,
  IntakeClientSessionCollectionService,
} from "../intake_client_session/IntakeClientSessionService";
import { IntakeClientLoginSummaryId } from "../intake_client_login_summary/IntakeClientLoginSummary";
import { QIntakeClientLoginSummaryId } from "../intake_client_login_summary/QIntakeClientLoginSummary";
import {
  IntakeClientLoginSummaryService,
  IntakeClientLoginSummaryCollectionService,
} from "../intake_client_login_summary/IntakeClientLoginSummaryService";

export class IntakeClientLoginService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  IntakeClientLogin,
  EditableIntakeClientLogin,
  QIntakeClientLogin
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qIntakeClientLogin);
  }

  public CPDirectMessages(): CPDirectMessageCollectionService<ClientType>;
  public CPDirectMessages(
    id: CPDirectMessageId
  ): CPDirectMessageService<ClientType>;
  public CPDirectMessages(id?: CPDirectMessageId | undefined) {
    const fieldName = "CPDirectMessages";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectMessageCollectionService(client, path, fieldName)
      : new CPDirectMessageService(
          client,
          path,
          new QCPDirectMessageId(fieldName).buildUrl(id)
        );
  }

  public CPDirectPushTokens(): CPDirectPushTokenCollectionService<ClientType>;
  public CPDirectPushTokens(
    id: CPDirectPushTokenId
  ): CPDirectPushTokenService<ClientType>;
  public CPDirectPushTokens(id?: CPDirectPushTokenId | undefined) {
    const fieldName = "CPDirectPushTokens";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectPushTokenCollectionService(client, path, fieldName)
      : new CPDirectPushTokenService(
          client,
          path,
          new QCPDirectPushTokenId(fieldName).buildUrl(id)
        );
  }

  public IntakeClientFirms(): IntakeClientFirmCollectionService<ClientType>;
  public IntakeClientFirms(
    id: IntakeClientFirmId
  ): IntakeClientFirmService<ClientType>;
  public IntakeClientFirms(id?: IntakeClientFirmId | undefined) {
    const fieldName = "IntakeClientFirms";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new IntakeClientFirmCollectionService(client, path, fieldName)
      : new IntakeClientFirmService(
          client,
          path,
          new QIntakeClientFirmId(fieldName).buildUrl(id)
        );
  }

  public IntakeClientSessions(): IntakeClientSessionCollectionService<ClientType>;
  public IntakeClientSessions(
    id: IntakeClientSessionId
  ): IntakeClientSessionService<ClientType>;
  public IntakeClientSessions(id?: IntakeClientSessionId | undefined) {
    const fieldName = "IntakeClientSessions";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new IntakeClientSessionCollectionService(client, path, fieldName)
      : new IntakeClientSessionService(
          client,
          path,
          new QIntakeClientSessionId(fieldName).buildUrl(id)
        );
  }

  public IntakeClientLoginSummaries(): IntakeClientLoginSummaryCollectionService<ClientType>;
  public IntakeClientLoginSummaries(
    id: IntakeClientLoginSummaryId
  ): IntakeClientLoginSummaryService<ClientType>;
  public IntakeClientLoginSummaries(
    id?: IntakeClientLoginSummaryId | undefined
  ) {
    const fieldName = "IntakeClientLoginSummaries";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new IntakeClientLoginSummaryCollectionService(client, path, fieldName)
      : new IntakeClientLoginSummaryService(
          client,
          path,
          new QIntakeClientLoginSummaryId(fieldName).buildUrl(id)
        );
  }
}

export class IntakeClientLoginCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  IntakeClientLogin,
  EditableIntakeClientLogin,
  QIntakeClientLogin,
  IntakeClientLoginId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qIntakeClientLogin,
      new QIntakeClientLoginId(name)
    );
  }
}
