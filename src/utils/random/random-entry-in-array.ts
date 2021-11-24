import { randomNumber } from './random-number';
import type { RNG } from './seed';

export function randomEntryInArray<T>(array: T[], seed?: ReturnType<typeof RNG>): T | undefined {
    return array[randomNumber(0, array.length - 1, seed)];
}
