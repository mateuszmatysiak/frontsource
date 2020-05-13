import React from "react"
import PostImage from "../components/Post/PostImage"
import PostParagraph from "../components/Post/PostParagraph"
import PostSubtitle from "../components/Post/PostSubtitle"

export default data =>
  data.map((item, index) => {
    const [itemKey] = Object.keys(item).filter(item => item.includes("Content"))

    switch (itemKey) {
      case "headingContent":
        return <PostSubtitle key={index}>{item[itemKey]}</PostSubtitle>
      case "paragraphContent":
        return <PostParagraph key={index}>{item[itemKey]}</PostParagraph>
      case "imageContent":
        return <PostImage key={index} src={item[itemKey].url} />
      default:
        return null
    }
  })
