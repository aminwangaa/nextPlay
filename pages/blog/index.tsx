import Head from 'next/head'
import React, { useState, useCallback, useEffect } from "react";
import BlogChild1 from "./components/child1";
import BlogChild2 from "./components/child2";
import { useRouter } from "next/router"

const Blog = (props) => {
  console.log(props)

  const router = useRouter()
  const [status, setStatus] = useState(0)

  const changePage = useCallback(() => {
    setStatus(v => 1 - v)
  }, [])

  const toUserPage = useCallback(() => {
    const id = ~~(Math.random() * 10)
    console.log(id);
    id > 5 ?
      router.push(`/blog/user/${id}`) :
      router.push(`/blog/user`)
  }, [])

  return (
    <div className="container">
      <Head>
        <title>Blog</title>
      </Head>

      <main>
        {!status && <BlogChild1 />}
        {status > 0 && <BlogChild2 />}
        <button onClick={changePage}>change</button>
        <button onClick={toUserPage}>toUserPage</button>
      </main>
    </div>
  )
}

export async function getStaticProps(
  { params, preview = false, previewData }
) {
  const res = await new Promise((resolve, reject) => {
    resolve({name: "amin"})
  })
  return {
    props: {
      data: res,
      host: process.env.HOST,
      port: process.env.PORT,
    },
  }
}

// export async function getServerSideProps() {
//   const res = await new Promise((resolve, reject) => {
//     resolve({name: "amin"})
//   })
//   console.log(2222);
//   return {
//     props: {
//       data: res,
//     },
//   }
// }

export default Blog
