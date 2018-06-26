# chin-plugin-svgr

[![npm](https://img.shields.io/npm/v/chin-plugin-svgr.svg?longCache=true&style=flat-square)](https://www.npmjs.com/package/chin-plugin-svgr)
[![npm](https://img.shields.io/npm/dm/chin-plugin-svgr.svg?longCache=true&style=flat-square)](https://www.npmjs.com/package/chin-plugin-svgr)
[![Build Status](https://img.shields.io/travis/chinjs/chin-plugin-svgr.svg?longCache=true&style=flat-square)](https://travis-ci.org/chinjs/chin-plugin-svgr)
[![Coverage Status](https://img.shields.io/codecov/c/github/chinjs/chin-plugin-svgr.svg?longCache=true&style=flat-square)](https://codecov.io/github/chinjs/chin-plugin-svgr)

[chin](https://github.com/chinjs/chin) plugin using [svgr](https://github.com/smooth-code/svgr/).

## Installation
```shell
yarn add -D chin chin-plugin-svgr
```

## Usage

```js
import svgr, { merge } from 'chin-plugin-svgr'

const svg2cmp = svgr()
const svg2cmps = merge()

export default {
  put,
  out,
  processors: [
    ['dir', { svg: svg2cmps }],
    ['*', { svg: svg2cmp }]
  ],
  after: () => {
    const codes = svg2cmps.after()
  }
}
```

[options](https://github.com/smooth-code/svgr/#options) is passed in both.


## License
MIT (http://opensource.org/licenses/MIT)
