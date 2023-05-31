/**
 * это Dynamic Routes
 * https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes
 */
import React from 'react'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../utils/posts'
import { PostHtmlType, PostType } from '../../utils/types'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}

/**
 * Функция для определения все статических путей
 * для последующей генерации страницы
 * @returns
 */
export async function getStaticPaths() {
  /**
   * paths содержит массив известных путей, возвращаемых getAllPostIds(),
   * включая параметры, определенные pages/posts/[id].js
   */
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

/**
 * Функция используется для предварительной генерации страницы с данными,
 * которые передаются в качестве параметров.
 * @param {*} param0
 * @returns
 */
export async function getStaticProps({ params }) {
  const postData: PostHtmlType = await getPostData(params.id)
  console.log({ postData })
  return {
    props: {
      postData
    }
  }
}
