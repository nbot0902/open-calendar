import Head from 'next/head'
import Layout from "../../components/common/Layout";
import SignInForm from '../../components/form/SignInForm'
import U from "../../utile";

export const getServerSideProps = async (ctx) => {
  return U.verifyAuthState({ ctx });
};

const TermsScreen = props => {
  const { isSignOut = false } = props;

  return (
    <Layout isSignOut={isSignOut}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  )
}

export default TermsScreen;