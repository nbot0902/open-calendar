const { withSuperjson } = require('next-superjson')

const removeImports = require('next-remove-imports')({
  test: /node_modules([\s\S]*?)\.(tsx|ts|js|mjs|jsx)$/,
  matchImports: "\\.(less|css|scss|sass|styl)$"
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = removeImports({
  webpack(config, { isServer }) {
    return config
  },
})

module.exports = withSuperjson()({
  reactStrictMode: true,
})

module.exports = {
  experimental: {
    outputStandalone: true,
  },
}