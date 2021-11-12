import * as esbuild from 'esbuild'

const config = {
  entryPoints: [
    './src/index.ts',
    './src/locale/en/index.ts',
    './src/locale/fr/index.ts',
    './src/locale/fr_CA/index.ts'
  ],
  platform: 'node',
  bundle: true,
  external: ['*/index']
} as esbuild.BuildOptions

const formats = {
  'esm': '.mjs',
  'cjs': '.js'
} as { [key in esbuild.Format]: string }

Object.keys(formats).forEach(key => {
  const extension = formats[key]
  esbuild.build({
    ...config,
    format: key as esbuild.Format,
    outExtension: { '.js': extension },
    outdir: `./dist`
  })
})
