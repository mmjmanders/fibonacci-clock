export const fibonacciBreakdown: (target: number) => number[] = (target) => {
	const fibs: ReadonlyArray<number> = [5, 3, 2, 1, 1];
	const result: number[] = new Array(fibs.length).fill(0);

	const backtrack: (remaining: number, index: number) => boolean = (remaining, index) => {
		if (remaining === 0) return true;

		for (let i = index; i >= 0; i--) {
			const current = fibs[i];
			if (current <= remaining) {
				result[i] = current;

				if (backtrack(remaining - current, i - 1)) return true;

				result[i] = 0;
			}
		}
		return false;
	};

	backtrack(target, fibs.length - 1);
	return result;
};
