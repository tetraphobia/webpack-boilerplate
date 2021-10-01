import path from 'path'

interface PathConfig {
  src: string,
  build: string,
  pub: string
}

export const Paths: PathConfig = {
  src: path.resolve(__dirname, '../src'),
  build: path.resolve(__dirname, '../build/compiled'),
  pub: path.resolve(__dirname, '../public')
}
