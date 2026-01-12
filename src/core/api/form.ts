import { z } from 'zod'

import { api } from './axios'

export const PostContactFormSchema = z.object({
  email: z.string().email('Invalid email'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(3, 'Message must be at least 3 characters'),
})

export type PostContactFormResponse = {
  success: boolean
  message?: string
  error?: any
}

export const postContactForm = async (
  data: z.infer<typeof PostContactFormSchema>
) => {
  const res: PostContactFormResponse = (await api.post('/', data))?.data
  return res
}
