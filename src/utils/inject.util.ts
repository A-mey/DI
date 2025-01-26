type Token = string | Symbol;

export const Inject = (token: Token): ParameterDecorator => {
	return (target, propertyKey, parameterIndex) => {
		const existingTokens = Reflect.getMetadata("design:paramtypes", target) || [];
		//   console.log("existingTokens", existingTokens);
	  	existingTokens[parameterIndex] = token;
	  	Reflect.defineMetadata("design:paramtypes", existingTokens, target);
		console.log("paramtypes", Reflect.getMetadata("design:paramtypes", target));
	};
};

export const InjectClass = (): ParameterDecorator => {
	return (target, propertyKey, parameterIndex) => {
		const existingTokens = Reflect.getMetadata("design:paramtypes", target) || [];
		  console.log("existingTokens", existingTokens);
	  	existingTokens[parameterIndex] = target;
	  	Reflect.defineMetadata("design:paramtypes", existingTokens, target);
	};
};