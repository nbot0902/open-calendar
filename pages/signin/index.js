import React from 'react'
import Head from 'next/head'
import Layout from "../../components/common/Layout";
import SignInForm from '../../components/form/SignInForm'
import IndicatorModal from '../../components/common/IndicatorModal'
import U from "../../utile";

export const getServerSideProps = async (ctx) => {
  return U.verifyAuthState({ ctx });
};

const SignInScreen = props => {
  const {
    isSignOut = false,
    group = {},
    profile = {}
  } = props;

  const [isLoading, setLoading] = React.useState(false)


  return (
    <Layout
      page={"/signin"}
      isSignOut={isSignOut}
      group={group}
      profile={profile}
    >
      <Head>
        <title>イベコレ | ログイン</title>
        <meta name="description" content="イベコレはイベントや交流会の予定をカレンダーで簡単に共有できるWebサイトです。URLを友達に送ったりSNSのプロフィールに貼ることで、自分の活動をみんなに簡単に共有することができます。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignInForm setLoading={setLoading} />
      <IndicatorModal isLoading={isLoading} />
    </Layout>
  )
}

export default SignInScreen;