import { randomNumber } from "./random-number";
import type { RNG } from "./seed";

export function randomPointInCanvas(
    canvasRef: HTMLCanvasElement,
    offset = 0,
    seed?: ReturnType<typeof RNG>
): [number, number] {
    const randomFunction = seed || Math.random;

    if (!canvasRef) {
        return [0, 0];
    }
    return [
        randomNumber(0, canvasRef.width - offset || 0, randomFunction),
        randomNumber(0, canvasRef.height - offset || 0, randomFunction),
    ];
}

export function randomEntryInArray<T>(array: T[], seed?: ReturnType<typeof RNG>): T | undefined {
    return array[randomNumber(0, array.length - 1, seed)];
}
