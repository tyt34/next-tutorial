import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import React from 'react'
import Link from 'next/link'
import { getSortedPostsData } from '../utils/posts'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>
          Read <Link href="/some/first-post">this page!</Link>
        </h1>
        <p>
          1 <Link href="/posts/pre-rendering">this page!</Link>
        </p>
        <p>
          2 <Link href="/posts/ssg-ssr">this page!</Link>
        </p>
        <p>Это сайт на next</p>
      </section>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
      >
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            // <li
            //   className={utilStyles.listItem}
            //   key={id}
            // >
            //   {title}
            //   <br />
            //   {id}
            //   <br />
            //   {date}
            // </li>
            <li
              className={utilStyles.listItem}
              key={id}
            >
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
