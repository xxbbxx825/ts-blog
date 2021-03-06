export type Timestamp = {
  created_unixtime: number
  updated_unixtime: number
}

export type Admin = {
  id: string
  email: string
  password: string
  access_token: string
}
export type CategoryData = {
  id: string
  name: string
  parent_category_id?: string
  posts?: string[]
}

export type Category = CategoryData &
  Timestamp & {
    parent_category: CategoryData
  }

export type PostData = {
  id: string
  title: string
  content: string
  category_id?: string
  published_unixtime?: number
}

export type Post = PostData &
  Timestamp & {
    category?: CategoryData
  }

export type PostRelCategory = Post & {
  category: CategoryData
}
