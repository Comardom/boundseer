interface Bdsr {
    setupBoundseer(): void;
    on(): number;
    off(): number;
    persist(_?: boolean): void;
    reset(): void;
}
export type { Bdsr };