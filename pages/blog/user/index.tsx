import Head from 'next/head'
import React, {useCallback} from "react";
import {useRouter} from "next/router";

const BlogUser = () => {
  const router = useRouter()

  const toBlog = useCallback(() => {
    router.push(`/blog`)
  }, [])
  return (
    <div className="container">
      <Head>
        <title>BlogUser</title>
      </Head>

      <main>
        <button onClick={toBlog}>change</button>
        BlogUser
      </main>
    </div>
  )
}


export default BlogUser
