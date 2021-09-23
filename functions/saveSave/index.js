import faunadb from "faunadb"
import { ISave } from "../../models/user";

export default async (client, functions, save) => {
  const doc = await client.query(
    functions.Create(
      functions.Collection('saves'),
      {
        data: save
      }
    )
  );
  return doc;
}