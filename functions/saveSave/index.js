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
exports.default = (client, functions, save) => __awaiter(void 0, void 0, void 0, function* () {
    const doc = yield client.query(functions.Create(functions.Collection('saves'), {
        data: save
    }));
    return doc;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZnVuY3Rpb25zL3NhdmVTYXZlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR0Esa0JBQWUsQ0FBTyxNQUFzQixFQUFFLFNBQStCLEVBQUUsSUFBVyxFQUFtQixFQUFFO0lBQzdHLE1BQU0sR0FBRyxHQUFHLE1BQU0sTUFBTSxDQUFDLEtBQUssQ0FDNUIsU0FBUyxDQUFDLE1BQU0sQ0FDZCxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUM3QjtRQUNFLElBQUksRUFBRSxJQUFJO0tBQ1gsQ0FDRixDQUNGLENBQUM7SUFDRixPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQSxDQUFBIn0=