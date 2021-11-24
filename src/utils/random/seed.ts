export function RNG(seed: number): () => number {
    // LCG using GCC's constants
    const m = 0x80000000; // 2**31;
    const a = 1103515245;
    const c = 12345;
    let state = seed ? seed : Math.floor(Math.random() * (m - 1));

    return function () {
        return (state = (a * state + c) % m) / (m - 1);
    };
}