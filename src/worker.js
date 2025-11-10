export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)

    // Serve static assets first
    let response = await env.ASSETS.fetch(request)

    // If no static asset is found (404), fallback to index.html for SPA routes
    if (response.status === 404) {
      // Prevent fallback for API routes (optional)
      const isAsset = /\.[a-zA-Z0-9]+$/.test(url.pathname)

      if (!isAsset) {
        const indexUrl = new URL('/index.html', request.url)
        response = await env.ASSETS.fetch(indexUrl)
      }
    }

    return response
  },
}
