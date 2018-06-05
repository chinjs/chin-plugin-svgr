import svgr, { merge } from '..'
import { outputFile } from 'fs-extra'
import { join } from 'path'

const put = join(__dirname, 'put')
const out = join(__dirname, 'out')
const svg2cmp = svgr()
const svg2cmps = merge()

export default {
  put,
  out,
  clean: true,
  processors: [
    ['merge', { svg: svg2cmps }],
    ['*', { svg: svg2cmp }]
  ],
  after: () =>
    outputFile(
      join(out, 'merged.jsx'),
      `import React from 'react'` + '\n\n' + svg2cmps.after().join('\n')
    )
}