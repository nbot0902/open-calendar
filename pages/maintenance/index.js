import Link from 'next/link';
import Layout from "../../components/common/Layout";
import CustomHead from '../../components/common/CustomHead'
import PageHead from '../../components/common/PageHead'
import s from '../../styles/support.module.scss'
import common from '../../styles/common.module.scss'
import C from "../../constants";
import U from "../../utile";

export const getServerSideProps = async (ctx) => {
  return U.verifyAuthState({ ctx });
};

const MaintenanceScreen = props => {
  const {
    isSignOut = false,
    isSupportMode = false,
    group = {},
    profile = {}
  } = props;

  return (
    <Layout
      page={"/maintenance"}
      isSignOut={isSignOut}
      isSupportMode={isSupportMode}
      group={group}
      profile={profile}
    >
      <CustomHead
        pageTitle={"イベカレ | メンテナンス"}
        pagePath={"/maintenance"}
        pageDescription={"イベカレはイベントや交流会の予定をカレンダーで簡単に共有できるWebサイトです。URLを友達に送ったりSNSのプロフィールに貼ることで、自分の活動をみんなに簡単に共有することができます。"}
      />
      <div className={s.support}>
        <PageHead title={"メンテナンス"} description={`${C.SERVICE_NAME}は現在、システムメンテナンスを実施しております。大変ご迷惑をおかけして申し訳ございません。メンテナンス作業が終了次第サービスを再開いたします。今しばらくお待ちください。`} />
        <Link href={C.SUPPORT_URL} target={"_blank"}>
          <div className={common.button}>
            状況を確認する
            </div>
        </Link>
      </div>
    </Layout>
  )
}

export default MaintenanceScreen;