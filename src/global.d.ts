export {}
declare global {
  interface Window {
    bdsr: {
      on(): number
      off(): number
    }
  }
}