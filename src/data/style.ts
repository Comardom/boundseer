// 用于给各种元素加上的类的名字
const ActiveClass = 'bdsr-active'
// ID，不是直接写在CSS里的
const StyleId = 'boundseer-style'
// 这里没有svg
const htmlTags = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'blockquote',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'header',
    'hgroup',
    'hr',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'menu',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'search',
    'section',
    'select',
    'script',
    'slot',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'template',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
] as const
// 不含 svg 本身，svg 本身单独生成规则，其余 SVG 元素限定在 svg 内，避免覆盖同名 HTML 标签
const svgTags = [
    'a',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'symbol',
    'text',
    'textPath',
    'tspan',
    'use',
] as const
// 明显不同的基础色相，比 360 均分更容易用肉眼区分
const huePalette = [0, 120, 240, 60, 180, 300, 30, 150, 270, 90, 210, 330] as const
function createTagStyles(
    tags: readonly string[],
    paletteOffset: number,
    parent = '',
): string {
    const resultStyle: string[] = tags.map(
        (tag: string, index: number): string => {
            const paletteIndex = index + paletteOffset
            const hue: number = huePalette[paletteIndex % huePalette.length]
            const cycle: number = Math.floor(paletteIndex / huePalette.length)
            const lightness: number = 45 + (cycle % 3) * 12
            const selector = parent ? `${parent} ${tag}` : tag
            return `body.${ActiveClass} ${selector} { outline: 2px solid hsl(${hue} 90% ${lightness}%) !important; }`
        }
    )
    // 使用join来拼接数组成为字符串
    return resultStyle.join('')
}
// 下面的三个语句，分别是svg、svg内部标签、其他标签
const fullStyles = `
    body.${ActiveClass} {
      outline: 2px solid hsl(0 90% 55%) !important;
    }
    body.${ActiveClass} * {
      outline: 2px solid black !important;
    }
    ${createTagStyles(['svg'], 6)}
    ${createTagStyles(svgTags, 6, 'svg')}
    ${createTagStyles(htmlTags, 0)}
`
export { ActiveClass, fullStyles , StyleId}
