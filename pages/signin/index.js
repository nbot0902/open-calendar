import React from 'react'
import CustomHead from '../../components/common/CustomHead'
import Layout from "../../components/common/Layout";
import SignInForm from '../../components/form/SignInForm'
import IndicatorModal from '../../components/common/IndicatorModal'
import U from "../../utile";
import C from "../../constants";

export const getServerSideProps = async (ctx) => {
  return U.verifyAuthState({ ctx });
};

const SignInScreen = props => {
  const {
    isSignOut = false,
    group = {},
    profile = {},
    userStatus = C.USER_STATE.NOT_SET
  } = props;

  const [isLoading, setLoading] = React.useState(false)

  return (
    <Layout
      page={"/signin"}
      isSignOut={isSignOut}
      group={group}
      profile={profile}
    >
      <CustomHead
        pageTitle={"イベカレ | ログイン"}
        pagePath={"/signin"}
        pageDescription={"イベカレはイベントや交流会の予定をカレンダーで簡単に共有できるWebサイトです。URLを友達に送ったりSNSのプロフィールに貼ることで、自分の活動をみんなに簡単に共有することができます。"}
      />
      <SignInForm setLoading={setLoading} />
      <IndicatorModal isLoading={isLoading} />
    </Layout>
  )
}

export default SignInScreen;