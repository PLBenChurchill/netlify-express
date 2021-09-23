import faunadb from "faunadb"

const functions = {
  Ref: faunadb.query.Ref,
  Paginate: faunadb.query.Paginate,
  Get: faunadb.query.Get,
  Match: faunadb.query.Match,
  Select: faunadb.query.Select,
  Index: faunadb.query.Index,
  Create: faunadb.query.Create,
  Collection: faunadb.query.Collection,
  Join: faunadb.query.Join,
  Call: faunadb.query.Call,
} = faunadb.query;

export const getSave = async (client, saveName) => {
  try {
    return await client.query(
      functions.Get(functions.Match(functions.Index('saves_by_name'), [saveName]))
    )
  } catch (e) {
    console.log(e)
    return {};
  }
}