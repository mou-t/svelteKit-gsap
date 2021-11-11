import gsap from 'gsap';
import type { Action } from './Action.type';

export const animation: Action = (node) => {
	gsap.to(node, { x: 400 });
	return {};
};
