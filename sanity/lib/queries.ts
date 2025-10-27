export const SITEMAP_QUERY = `*[_type in ["page", "Post", "ServiceCategory", "news"] && defined(slug.current)] {
  "href": select(
    _type == "page" => "/" + slug.current,
    _type == "Post" => "/" + slug.current,
    _type == "ServiceCategory" => "/" + slug.current,
    _type == "news" => "/" + slug.current,
    "/" + slug.current
  ),
  _updatedAt
}`;
