import Head from 'next/head'
import Layout from "../../components/common/Layout";
import SignInForm from '../../components/form/SignInForm'
import U from "../../utile";

export const getServerSideProps = async (ctx) => {
  return U.verifyAuthState({ ctx });
};

const PrivacyPolicyScreen = props => {
  const {
    isSignOut = false,
    group = {},
    profile = {}
  } = props;

  return (
    <Layout
      page={"/privacy_policy"}
      isSignOut={isSignOut}
      group={group}
      profile={profile}
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  )
}

export default PrivacyPolicyScreen;