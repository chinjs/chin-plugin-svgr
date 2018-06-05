const convert = require('svgr').default
const { format } = require('path')
const { assign } = Object

const fwa = (obj, ...addition) => format(assign({}, obj, ...addition))

const svgr = (opts = {}) => ({
  processor: (data, { out }) => {
    const outpath = fwa(out, { ext: opts.ext || '.js' })
    return convert(data, assign({ componentName: outpath }, opts)).then(converted => [outpath, converted])
  }
})

const merge = (opts) => {
  const codes = []
  const after = () => codes
  const svg2cmp = svgr(assign({ template: mergeTemplate }, opts)).processor
  const processor = (...arg) => svg2cmp(...arg).then(result => codes.push(result[1]))
  return { processor, after }
}

/* ref: https://github.com/smooth-code/svgr/#use-a-specific-template */
const mergeTemplate = (opts = {}) => {
  const props =
  opts.expandProps && opts.ref ? '{svgRef, ...props}' :
  opts.expandProps ? 'props' :
  opts.ref ? '{svgRef}'
  : ''

  return (code, { componentName }) => `export const ${componentName} = (${props}) => ${code}`
}

module.exports = svgr
module.exports.svgr = svgr
module.exports.merge = merge