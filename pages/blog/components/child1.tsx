import Head from 'next/head'
import React from "react";
import styles from "./child1.module.less"

const BlogChild1 = () => {
  return (
    <div className="container">
      <Head>
        <title>BlogChild1</title>
      </Head>

      <main>
        <div className={styles.text}>333</div>
        BlogChild1
      </main>
    </div>
  )
}


export default BlogChild1
