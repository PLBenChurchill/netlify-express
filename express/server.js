"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const faunadb_1 = __importDefault(require("faunadb"));
const http = __importStar(require("http"));
const cors_1 = __importDefault(require("cors"));
// FQL functions
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
const express_1 = __importDefault(require("express"));
const saveSave_1 = __importDefault(require("./functions/saveSave"));
const getSave_1 = require("./functions/getSave");
const app = (0, express_1.default)();
const server = http.createServer(app);
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded());
const PORT = process.env.PORT || 8080;
process.env.FAUNA_SECRET_KEY = 'fnAETzrroEACTKaACCOyGSi4rufyt6AdULrEk9Yo';
const client = new faunadb_1.default.Client({
    secret: process.env.FAUNA_SECRET_KEY
});
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("hello, world!");
}));
app.put("/save", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const response = yield (0, saveSave_1.default)(client, functions, data);
    res.send(response);
}));
app.get("/get/:saveName", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, getSave_1.getSave)(client, req.params.saveName);
    res.send(response);
}));
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQTZCO0FBQzdCLDJDQUE2QjtBQUM3QixnREFBd0I7QUFDeEIsZ0JBQWdCO0FBQ2hCLE1BQU0sU0FBUyxHQUFHO0lBQ2hCLEdBQUcsRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHO0lBQ3RCLFFBQVEsRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxRQUFRO0lBQ2hDLEdBQUcsRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHO0lBQ3RCLEtBQUssRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLO0lBQzFCLE1BQU0sRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxNQUFNO0lBQzVCLEtBQUssRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLO0lBQzFCLE1BQU0sRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxNQUFNO0lBQzVCLFVBQVUsRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxVQUFVO0lBQ3BDLElBQUksRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJO0lBQ3hCLElBQUksRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJO0NBQ3pCLEdBQUcsaUJBQU8sQ0FBQyxLQUFLLENBQUM7QUFFbEIsc0RBQThCO0FBRTlCLG9FQUE0QztBQUM1QyxpREFBOEM7QUFFOUMsTUFBTSxHQUFHLEdBQXdCLElBQUEsaUJBQU8sR0FBRSxDQUFDO0FBQzNDLE1BQU0sTUFBTSxHQUFnQixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRW5ELEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxjQUFJLEdBQUUsQ0FBQyxDQUFBO0FBQ2YsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFDOUIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO0FBRXRDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsMENBQTBDLENBQUM7QUFFMUUsTUFBTSxNQUFNLEdBQUcsSUFBSSxpQkFBTyxDQUFDLE1BQU0sQ0FBQztJQUNoQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0I7Q0FDckMsQ0FBQyxDQUFBO0FBRUYsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBTyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtJQUNqRSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBO0FBQzNCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFPLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO0lBQ3JFLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFhLENBQUM7SUFDL0IsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFBLGtCQUFRLEVBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RCxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQ3BCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQU8sR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7SUFDOUUsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFBLGlCQUFPLEVBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUQsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUNwQixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLElBQUksRUFBRSxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFDLENBQUMifQ==