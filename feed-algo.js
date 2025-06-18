export async function getFeed(query) {
  const limit = Math.min(parseInt(query.limit) || 10, 50)

  // Example static post URIs (to be replaced with real logic)
  const feedItems = [
    'at://did:plc:example/post/3jldj234',
    'at://did:plc:example/post/3jldj235'
  ].slice(0, limit)

  return {
    feed: feedItems.map(uri => ({ post: uri }))
  }
}
