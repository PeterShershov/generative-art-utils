import type { RNG } from "./seed";

// inclusive
export function randomNumber(min: number, max: number, seed?: ReturnType<typeof RNG>): number {
    const randomFunction = seed || Math.random;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(randomFunction() * (max - min + 1) + min); 
}

