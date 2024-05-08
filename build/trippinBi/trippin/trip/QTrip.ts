import {
  QueryObject,
  QNumberPath,
  QGuidPath,
  QStringPath,
  QCollectionPath,
  QStringCollection,
  QDateTimeOffsetPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
  QFunction,
  OperationReturnType,
  ReturnTypes,
  QComplexParam,
} from "@odata2ts/odata-query-objects";
import { QPerson } from "../person/QPerson";
import { QPlanItem } from "../plan_item/QPlanItem";
import { TripId } from "./Trip";

export class QTrip extends QueryObject {
  public readonly TripId = new QNumberPath(this.withPrefix("TripId"));
  public readonly ShareId = new QGuidPath(this.withPrefix("ShareId"));
  public readonly Name = new QStringPath(this.withPrefix("Name"));
  public readonly Budget = new QNumberPath(this.withPrefix("Budget"));
  public readonly Description = new QStringPath(this.withPrefix("Description"));
  public readonly Tags = new QCollectionPath(
    this.withPrefix("Tags"),
    () => QStringCollection
  );
  public readonly StartsAt = new QDateTimeOffsetPath(
    this.withPrefix("StartsAt")
  );
  public readonly EndsAt = new QDateTimeOffsetPath(this.withPrefix("EndsAt"));
  public readonly TripPeople = new QEntityCollectionPath(
    this.withPrefix("TripPeople"),
    () => QPerson
  );
  public readonly PlanItems = new QEntityCollectionPath(
    this.withPrefix("PlanItems"),
    () => QPlanItem
  );
}

export const qTrip = new QTrip();

export class QTripId extends QId<TripId> {
  private readonly params = [new QNumberParam("TripId")];

  getParams() {
    return this.params;
  }
}

export class Trip_QGetInvolvedPeople extends QFunction {
  private readonly params: [] = [];

  constructor() {
    super(
      "Trippin.GetInvolvedPeople",
      new OperationReturnType(
        ReturnTypes.COMPLEX_COLLECTION,
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
