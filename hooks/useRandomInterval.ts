import { useCallback, useEffect, useRef } from 'react';
import random from '../functions/random';

/**
 * Calls the provided callback repeatedly with a random delay between minDelay and maxDelay
 * More info at: https://www.joshwcomeau.com/snippets/react-hooks/use-random-interval/
 * @param callback function to call
 * @param minDelay minimum delay to callback
 * @param maxDelay maximum delay to callback
 */
const useRandomInterval = (
	callback: Function,
	minDelay: number,
	maxDelay: number
) => {
	const timeoutId = useRef(null);
	const savedCallback = useRef(callback);
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);
	useEffect(() => {
		let isEnabled =
			typeof minDelay === 'number' && typeof maxDelay === 'number';
		if (isEnabled) {
			const handleTick = () => {
				const nextTickAt = random(minDelay, maxDelay);
				timeoutId.current = window.setTimeout(() => {
					savedCallback.current();
					handleTick();
				}, nextTickAt);
			};
			handleTick();
		}
		return () => window.clearTimeout(timeoutId.current);
	}, [minDelay, maxDelay]);
	const cancel = useCallback(function () {
		window.clearTimeout(timeoutId.current);
	}, []);
	return cancel;
};

export default useRandomInterval;
