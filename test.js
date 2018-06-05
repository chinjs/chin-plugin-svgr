import assert from 'assert'
import { resolve, parse } from 'path'
import svgr from '.'

it('ext', () => {
  assert(typeof svgr().processor === 'function')
  assert(typeof svgr.svgr().processor === 'function')
  assert(typeof svgr.merge().processor === 'function')
  assert(typeof svgr.merge().after === 'function')
})

it('svgr.merge', () => {
  const { processor, after } = svgr.merge()
  const svg = '<svg viewBox="0 0 600 600"><path d="M19.731 41.192h84.462v133.269H19.731z" /></svg>'
  const files = ['hoge.js', 'fuga.js']

  return Promise.all(
    files.map(file =>
      processor(svg, { out: parse(resolve(file)) })
    )
  )
  .then(() =>
    assert.equal(files.length, after().length)
  )
})