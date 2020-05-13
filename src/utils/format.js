const slugify = require("slugify")

export const formatData = data =>
  new Array(data).map(item => {
    const slug = slugify(item.title, { lower: true })
    return {
      ...item,
      slug,
    }
  })
