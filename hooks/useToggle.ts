import { useCallback, useState } from 'react';

/**
 * React state to hold boolean value
 * More info at: https://www.joshwcomeau.com/snippets/react-hooks/use-toggle/
 * @param initialValue the initial value of the toggle
 */
const useToggle = (initialValue = false) => {
	const [value, setValue] = useState(initialValue);
	const toggle = useCallback(() => {
		setValue((v) => !v);
	}, []);
	return [value, toggle];
};

export default useToggle;
