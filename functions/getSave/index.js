"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSave = void 0;
const faunadb_1 = __importDefault(require("faunadb"));
const functions = {
    Ref: faunadb_1.default.query.Ref,
    Paginate: faunadb_1.default.query.Paginate,
    Get: faunadb_1.default.query.Get,
    Match: faunadb_1.default.query.Match,
    Select: faunadb_1.default.query.Select,
    Index: faunadb_1.default.query.Index,
    Create: faunadb_1.default.query.Create,
    Collection: faunadb_1.default.query.Collection,
    Join: faunadb_1.default.query.Join,
    Call: faunadb_1.default.query.Call,
} = faunadb_1.default.query;
const getSave = (client, saveName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield client.query(functions.Get(functions.Match(functions.Index('saves_by_name'), [saveName])));
    }
    catch (e) {
        console.log(e);
        return {};
    }
});
exports.getSave = getSave;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZnVuY3Rpb25zL2dldFNhdmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQTZCO0FBRTdCLE1BQU0sU0FBUyxHQUFHO0lBQ2hCLEdBQUcsRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHO0lBQ3RCLFFBQVEsRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxRQUFRO0lBQ2hDLEdBQUcsRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHO0lBQ3RCLEtBQUssRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLO0lBQzFCLE1BQU0sRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxNQUFNO0lBQzVCLEtBQUssRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLO0lBQzFCLE1BQU0sRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxNQUFNO0lBQzVCLFVBQVUsRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxVQUFVO0lBQ3BDLElBQUksRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJO0lBQ3hCLElBQUksRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJO0NBQ3pCLEdBQUcsaUJBQU8sQ0FBQyxLQUFLLENBQUM7QUFFWCxNQUFNLE9BQU8sR0FBRyxDQUFPLE1BQXNCLEVBQUUsUUFBZ0IsRUFBbUIsRUFBRTtJQUN6RixJQUFJO1FBQ0YsT0FBTyxNQUFNLE1BQU0sQ0FBQyxLQUFLLENBQ3ZCLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUM3RSxDQUFBO0tBQ0Y7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxPQUFPLEVBQUUsQ0FBQztLQUNYO0FBQ0gsQ0FBQyxDQUFBLENBQUE7QUFUWSxRQUFBLE9BQU8sV0FTbkIifQ==