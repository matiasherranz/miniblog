/// <reference types="next" />
/// <reference types="next/types/global" />

// Custom global types

// Handy nullable type, inspired from the PossiblyNumber type on this post by @AuMayeung
// https://levelup.gitconnected.com/typescript-advanced-types-nullable-types-and-type-aliases-847f03b08fae
type Nullable<T> = T | undefined | null;
