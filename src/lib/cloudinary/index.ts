import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

export default cloudinary

export async function uploadImage(file: string, folder = 'lifistudio') {
  return cloudinary.uploader.upload(file, {
    folder,
    quality: 'auto',
    fetch_format: 'auto',
  })
}

export function getImageUrl(publicId: string, transformations?: Record<string, string>) {
  return cloudinary.url(publicId, {
    quality: 'auto',
    fetch_format: 'auto',
    ...transformations,
  })
}

export interface CloudinaryResource {
  public_id: string
  secure_url: string
  width: number
  height: number
  format: string
  created_at: string
  tags: string[]
}
