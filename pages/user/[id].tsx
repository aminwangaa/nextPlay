import Head from 'next/head'
import React from "react";
import {useRouter} from "next/router";

const UserId = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className="container">
      <Head>
        <title>UserId</title>
      </Head>

      <main>
        {id}
      </main>
    </div>
  )
}


export default UserId
