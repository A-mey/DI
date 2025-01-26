"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inject = void 0;
const Inject = (token) => {
    return (target, propertyKey, parameterIndex) => {
        const existingTokens = Reflect.getMetadata("design:paramtypes", target) || [];
        //   console.log("existingTokens", existingTokens);
        existingTokens[parameterIndex] = token;
        Reflect.defineMetadata("design:paramtypes", existingTokens, target);
    };
};
exports.Inject = Inject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0LnV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvaW5qZWN0LnV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRU8sTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUFZLEVBQXNCLEVBQUU7SUFDMUQsT0FBTyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLEVBQUU7UUFDN0MsTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEYsbURBQW1EO1FBQ2pELGNBQWMsQ0FBQyxjQUFjLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDdkMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEUsQ0FBQyxDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBUFcsUUFBQSxNQUFNLFVBT2pCIn0=