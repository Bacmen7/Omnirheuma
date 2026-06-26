// Polyfill for crypto.hash() — the one-shot helper added in Node 20.12 / 21.7.
// This project runs on Node 20.11.0, where Vite 7 fails with
// "TypeError: crypto.hash is not a function". Preloaded via `node --import`.
import crypto from 'node:crypto'

if (typeof crypto.hash !== 'function') {
  crypto.hash = (algorithm, data, outputEncoding = 'hex') =>
    crypto.createHash(algorithm).update(data).digest(outputEncoding)
}
