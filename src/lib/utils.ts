export const fibonacciBreakdown: (target: number) => number[] = (target) => {
	const fibs: ReadonlyArray<number> = [1, 1, 2, 3, 5];
	const result: number[] = [];

	const backtrack: (remaining: number, index: number) => boolean = (remaining, index) => {
		if (remaining === 0) return true;

		for (let i = index; i >= 0; i--) {
			const current = fibs[i];
			if (current <= remaining) {
				result.push(current);

				if (backtrack(remaining - current, i - 1)) return true;

				result.pop();
			}
		}
		return false;
	};

	backtrack(target, fibs.length - 1);
	return result;
};
