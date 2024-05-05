import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QDateTimeOffsetPath,
  QBooleanPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
  QFunction,
  OperationReturnType,
  ReturnTypes,
  QComplexParam,
  QStringParam,
} from "@odata2ts/odata-query-objects";
import { QRecordFolder } from "../record_folder/QRecordFolder";
import { QDocumentTemplate } from "../document_template/QDocumentTemplate";
import { QEmail } from "../email/QEmail";
import { QParty } from "../party/QParty";
import { QRecord } from "../record/QRecord";
import { QRecordFileRelationship } from "../record_file_relationship/QRecordFileRelationship";
import {
  RecordFileId,
  RecordFile_GetUrlParams,
  RecordFile_PutUrlParams,
  RecordFile_InitiateMultipartParams,
  RecordFile_PutMultipartUrlParams,
  RecordFile_CompleteMultipartParams,
  RecordFile_ValidateParams,
} from "./RecordFile";

export class QRecordFile extends QueryObject {
  public readonly RecordFileId = new QNumberPath(
    this.withPrefix("RecordFileId")
  );
  public readonly FileName = new QStringPath(this.withPrefix("FileName"));
  public readonly UploadedAt = new QDateTimeOffsetPath(
    this.withPrefix("UploadedAt")
  );
  public readonly PrimaryFlag = new QBooleanPath(
    this.withPrefix("PrimaryFlag")
  );
  public readonly FileLength = new QNumberPath(this.withPrefix("FileLength"));
  public readonly FileMD5Hash = new QStringPath(this.withPrefix("FileMD5Hash"));
  public readonly RecordFolderId = new QNumberPath(
    this.withPrefix("RecordFolderId")
  );
  public readonly ETag = new QStringPath(this.withPrefix("ETag"));
  public readonly Url = new QStringPath(this.withPrefix("Url"));
  public readonly PublicUrl = new QStringPath(this.withPrefix("PublicUrl"));
  public readonly RecordFolder = new QEntityPath(
    this.withPrefix("RecordFolder"),
    () => QRecordFolder
  );
  public readonly DocumentTemplates = new QEntityCollectionPath(
    this.withPrefix("DocumentTemplates"),
    () => QDocumentTemplate
  );
  public readonly Emails = new QEntityCollectionPath(
    this.withPrefix("Emails"),
    () => QEmail
  );
  public readonly PartiesByImage = new QEntityCollectionPath(
    this.withPrefix("PartiesByImage"),
    () => QParty
  );
  public readonly Records = new QEntityCollectionPath(
    this.withPrefix("Records"),
    () => QRecord
  );
  public readonly RecordFileRelationships = new QEntityCollectionPath(
    this.withPrefix("RecordFileRelationships"),
    () => QRecordFileRelationship
  );
}

export const qRecordFile = new QRecordFile();

export class QRecordFileId extends QId<RecordFileId> {
  private readonly params = [new QNumberParam("RecordFileId")];

  getParams() {
    return this.params;
  }
}

export class RecordFile_QGetUrl extends QFunction<RecordFile_GetUrlParams> {
  private readonly params = [new QNumberParam("key")];

  constructor() {
    super(
      "Default.GetUrl",
      new OperationReturnType(
        ReturnTypes.COMPLEX,
        new QComplexParam("NONE", new QRecordFile())
      )
    );
  }

  getParams() {
    return this.params;
  }
}

export class RecordFile_QPutUrl extends QFunction<RecordFile_PutUrlParams> {
  private readonly params = [new QNumberParam("key")];

  constructor() {
    super(
      "Default.PutUrl",
      new OperationReturnType(
        ReturnTypes.COMPLEX,
        new QComplexParam("NONE", new QRecordFile())
      )
    );
  }

  getParams() {
    return this.params;
  }
}

export class RecordFile_QInitiateMultipart extends QFunction<RecordFile_InitiateMultipartParams> {
  private readonly params = [new QNumberParam("key")];

  constructor() {
    super(
      "Default.InitiateMultipart",
      new OperationReturnType(
        ReturnTypes.COMPLEX,
        new QComplexParam("NONE", new QRecordFile())
      )
    );
  }

  getParams() {
    return this.params;
  }
}

export class RecordFile_QPutMultipartUrl extends QFunction<RecordFile_PutMultipartUrlParams> {
  private readonly params = [
    new QNumberParam("key"),
    new QStringParam("uploadId"),
    new QNumberParam("partNumber"),
  ];

  constructor() {
    super(
      "Default.PutMultipartUrl",
      new OperationReturnType(
        ReturnTypes.COMPLEX,
        new QComplexParam("NONE", new QRecordFile())
      )
    );
  }

  getParams() {
    return this.params;
  }
}

export class RecordFile_QCompleteMultipart extends QFunction<RecordFile_CompleteMultipartParams> {
  private readonly params = [
    new QNumberParam("key"),
    new QStringParam("uploadId"),
  ];

  constructor() {
    super("Default.CompleteMultipart");
  }

  getParams() {
    return this.params;
  }
}

export class RecordFile_QValidate extends QFunction<RecordFile_ValidateParams> {
  private readonly params = [new QNumberParam("key")];

  constructor() {
    super(
      "Default.Validate",
      new OperationReturnType(
        ReturnTypes.COMPLEX,
        new QComplexParam("NONE", new QRecordFile())
      )
    );
  }

  getParams() {
    return this.params;
  }
}
