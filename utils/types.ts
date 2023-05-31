export interface PostType {
  id: string
  title: string
  date: Date
}

export interface PostHtmlType extends PostType {
  contentHtml: string
}
