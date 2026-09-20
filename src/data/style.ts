const ACTIVE_CLASS = 'bdsr-active'
const STYLE_ID = 'boundseer-style'

const styles = `
body.${ACTIVE_CLASS} {
  outline: 2px solid #ff0000 !important;
}

body.${ACTIVE_CLASS} main {
  outline: 2px solid #ff7a00 !important;
}

body.${ACTIVE_CLASS} section {
  outline: 2px solid #ffe600 !important;
}

body.${ACTIVE_CLASS} div {
  outline: 2px solid #00c853 !important;
}

body.${ACTIVE_CLASS} article {
  outline: 2px solid #00b8d4 !important;
}

body.${ACTIVE_CLASS} p {
  outline: 2px solid #2979ff !important;
}

body.${ACTIVE_CLASS} span {
  outline: 2px solid #7c4dff !important;
}

body.${ACTIVE_CLASS} button {
  outline: 2px solid #d500f9 !important;
}

body.${ACTIVE_CLASS} input,
body.${ACTIVE_CLASS} textarea,
body.${ACTIVE_CLASS} select {
  outline: 2px solid #ff4081 !important;
}

body.${ACTIVE_CLASS} ul,
body.${ACTIVE_CLASS} ol,
body.${ACTIVE_CLASS} li {
  outline: 2px solid #795548 !important;
}

body.${ACTIVE_CLASS} img,
body.${ACTIVE_CLASS} video,
body.${ACTIVE_CLASS} canvas {
  outline: 2px solid #607d8b !important;
}

body.${ACTIVE_CLASS} * {
  outline: 2px solid black;
}
`
export { ACTIVE_CLASS, styles , STYLE_ID}