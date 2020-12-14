import Head from 'next/head'
import React, {useCallback} from "react";
import { useRouter } from "next/router"

const BlogUserId = () => {
  const router = useRouter()
  console.log(router)
  const { pid } = router.query

  const toBlog = useCallback(() => {
     router.push(`/blog`)
  }, [])

  return (
    <div className="container">
      <Head>
        <title>BlogUserId</title>
      </Head>

      <main>
        <button onClick={toBlog}>change</button>
        {pid}
      </main>
    </div>
  )
}


export default BlogUserId
