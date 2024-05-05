import {
  QFunction,
  OperationReturnType,
  ReturnTypes,
  QComplexParam,
  QNumberParam,
  QAction,
} from "@odata2ts/odata-query-objects";
import { QPerson } from "./trippin/person/QPerson";
import { GetNearestAirportParams } from "./TrippinModel";
import { QAirport } from "./trippin/airport/QAirport";

export class QGetPersonWithMostFriends extends QFunction {
  private readonly params: [] = [];

  constructor() {
    super(
      "GetPersonWithMostFriends",
      new OperationReturnType(
        ReturnTypes.COMPLEX,
        new QComplexParam("NONE", new QPerson())
      )
    );
  }

  getParams() {
    return this.params;
  }

  buildUrl() {
    return super.buildUrl(undefined);
  }
}

export class QGetNearestAirport extends QFunction<GetNearestAirportParams> {
  private readonly params = [new QNumberParam("lat"), new QNumberParam("lon")];

  constructor() {
    super(
      "GetNearestAirport",
      new OperationReturnType(
        ReturnTypes.COMPLEX,
        new QComplexParam("NONE", new QAirport())
      )
    );
  }

  getParams() {
    return this.params;
  }
}

export class QResetDataSource extends QAction {
  private readonly params: [] = [];

  constructor() {
    super("ResetDataSource");
  }

  getParams() {
    return this.params;
  }
}
