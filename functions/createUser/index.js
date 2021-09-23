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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client, functions, user) => __awaiter(void 0, void 0, void 0, function* () {
    const doc = yield client.query(functions.Create(functions.Collection('users'), {
        data: user
    }));
    return doc;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZnVuY3Rpb25zL2NyZWF0ZVVzZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHQSxrQkFBZSxDQUFPLE1BQXNCLEVBQUUsU0FBK0IsRUFBRSxJQUFXLEVBQW1CLEVBQUU7SUFDN0csTUFBTSxHQUFHLEdBQUcsTUFBTSxNQUFNLENBQUMsS0FBSyxDQUM1QixTQUFTLENBQUMsTUFBTSxDQUNkLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQzdCO1FBQ0UsSUFBSSxFQUFFLElBQUk7S0FDWCxDQUNGLENBQ0YsQ0FBQztJQUNGLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFBLENBQUEifQ==