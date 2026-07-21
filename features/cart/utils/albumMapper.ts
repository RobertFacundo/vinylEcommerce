import { ProductType } from '../../shop/types/product'
import { Album } from '../../detail/types/album'

export const albumToProduct = (album: Album): ProductType => ({
  id: album.id,
  title: album.title,
  band: album.artist.name,
  cover: album.cover,
  price: album.price
})
