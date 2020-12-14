import Head from 'next/head'
import React from "react";
import {useRouter} from "next/router";

function x () {
  console.log(2)
  return 1;
};

function c () {
  console.log(3)
  return 2;
};


Function.prototype.clone = function() { // 拷贝函数
  const that = this;
  const temp = function temporary() {
    return that.apply(this, arguments)
  };
  for(const key in this) {
    if (this.hasOwnProperty(key)) {
      temp[key] = this[key];
    }
  }
  return temp;
};


const User = () => {
  const router = useRouter()
  const { id } = router.query



  return (
    <div className="container">
      <Head>
        <title>User</title>
      </Head>

      <main>
        User
      </main>
    </div>
  )
}


export default User
