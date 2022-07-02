import React from 'react'
import { useRouter } from "next/router";
import CustomHead from '../components/common/CustomHead'
import Layout from "../components/common/Layout";
import common from "../styles/common.module.scss";
import header from "../styles/header.module.scss";
import lp from "../styles/landing_page.module.scss";
import U from "../utile";

export const getServerSideProps = async (ctx) => {
  return U.verifyAuthState({ ctx });
};

const TopScreen = props => {
  const {
    isSignOut = false,
    group = {},
    profile = {}
  } = props

  return (
    <Layout
      page={"/"}
      isSignOut={isSignOut}
      group={group}
      profile={profile}
    >
      <CustomHead
        pageTitle={"イベコレ | トップページ"}
        pagePath={"/"}
        pageDescription={"イベコレはイベントや交流会の予定をカレンダーで簡単に共有できるWebサイトです。URLを友達に送ったりSNSのプロフィールに貼ることで、自分の活動をみんなに簡単に共有することができます。"}
      />
      <div className={lp.design}>
      </div>
    </Layout>
  )
}

export default TopScreen;