import { DEFAULT_IMG_DIMENSIONS } from '@utils/constants'

const { Cloudinary } = require('@cloudinary/url-gen')

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: 'ashishk007',
  },
  url: {
    secure: true,
  },
})

export function buildOptimizedImg(
  publicId,
  shouldResize = false,
  width = DEFAULT_IMG_DIMENSIONS.CATEGORY_PAGE.width,
  height = DEFAULT_IMG_DIMENSIONS.CATEGORY_PAGE.height
) {
  let cldImage = cloudinary.image(publicId).quality('auto').format('auto')

  if (shouldResize) {
    return cldImage.resize(`w_${width}`, `h_${height}`).toURL()
  } else {
    return cldImage.toURL()
  }
}
