import React from 'react';

interface ShiftByProps {
	x: number;
	y: number;
}

/**
 * Shift component according to (x, y) vector
 * More info at: https://www.joshwcomeau.com/snippets/react-components/shift-by/
 * @param x x coordinate
 * @param y y coordinate
 */
const ShiftBy: React.FC<ShiftByProps> = ({ x = 0, y = 0, children }) => {
	return (
		<div
			style={{
				transform: `translate(${x}px, ${y}px)`,
			}}
		>
			{children}
		</div>
	);
};

export default ShiftBy;
