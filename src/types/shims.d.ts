// Lightweight shims to satisfy TypeScript module resolution
// when using React and test utilities.

declare module 'react/jsx-runtime';
declare module 'react';
declare module 'vitest';
declare module '@testing-library/react';

