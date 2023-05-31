/**
 * это Dynamic Routes
 * https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes
 */
import React from 'react'
import Layout from '../../components/layout'
import { PostType, getAllPostIds, getPostData } from '../../utils/posts'

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  )
}

export async function getStaticPaths() {
  /**
   * pathsсодержит массив известных путей, возвращаемых getAllPostIds(),
   * включая параметры, определенные pages/posts/[id].js
   */
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

/**
 * Эта функция используется для предварительной генерации страницы с данными,
 * которые передаются в качестве параметров.
 * @param {*} param0
 * @returns
 */
export async function getStaticProps({ params }) {
  const postData: PostType = getPostData(params.id)
  console.log({ postData })
  return {
    props: {
      postData
    }
  }
}
