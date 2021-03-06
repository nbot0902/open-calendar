import Head from 'next/head'
import CustomHead from '../../components/common/CustomHead'
import Layout from "../../components/common/Layout";
import PageHead from '../../components/common/PageHead'
import s from '../../styles/privacy_policy.module.scss'
import C from "../../constants";
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
      <CustomHead
        pageTitle={"イベカレ | プライバシーポリシー"}
        pagePath={"/privacy_policy"}
        pageDescription={"イベカレはイベントや交流会の予定をカレンダーで簡単に共有できるWebサイトです。URLを友達に送ったりSNSのプロフィールに貼ることで、自分の活動をみんなに簡単に共有することができます。"}
      />
      <div className={s.privacy_policy}>
        <PageHead title={"プライバシーポリシー"} description={`${C.SERVICE_NAME}運営者（以下「当方」といいます）は、当方の運営する${C.SERVICE_NAME}サービス及びこれに付随するサービス（以下「本サービス」といいます）について、ユーザーの個人情報の取扱いに関する事項を定めるとともに、個人情報の保護に関する法律（以下「個人情報保護法」といいます）を遵守するために、以下のとおり、このプライバシーポリシー（以下「本ポリシー」といいます）に従い、適切な取扱い及び保護に努めます。ユーザーは、本サービスを利用するにあたり、本ポリシーをお読みいただき、同意していただく必要があります。`} />
        <div className={s.privacy_policy_row}>
          <div className={s.privacy_policy_row_title}>
            <div className={s.privacy_policy_row_title_text}>
              01.個人情報の定義
            </div>
          </div>
          <div className={s.privacy_policy_row_description}>
            <div className={s.privacy_policy_row_description_text}>
              本ポリシーにおいて、個人情報とは、個人情報保護法第2条第1項により定義された個人情報、すなわち、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます）、及び個人識別符号が含まれる情報を意味するものとします。
            </div>
          </div>
        </div>

        <div className={s.privacy_policy_row}>
          <div className={s.privacy_policy_row_title}>
            <div className={s.privacy_policy_row_title_text}>
              02.個人情報の利用目的
            </div>
          </div>
          <div className={s.privacy_policy_row_description}>
            <div className={s.privacy_policy_row_description_text}>
              当方は、本サービスにおいて取得したユーザーの個人情報を、以下の目的で利用いたします。
            </div>
          </div>
          <ol className={s.privacy_policy_list_a}>
            <li className={s.privacy_policy_list_a_item}>
              本サービスの提供、並びに当方の商品及びサービス（以下総称して「当方サービス」といいます）の提供のため
            </li>
            <li className={s.privacy_policy_list_a_item}>
              当方サービスに関する登録の受付、本人確認、利用料金の決済その他当方サービスの提供、維持、保護及び改善のため
            </li>
            <li className={s.privacy_policy_list_a_item}>
              当方の商品及びサービスに関するご案内、お問い合わせ等への対応のため
            </li>
            <li className={s.privacy_policy_list_a_item}>
              当方サービスに関する当方の規約、ガイドライン、ポリシー等（以下「規約等」といいます）に違反する行為に対する対応のため
            </li>
            <li className={s.privacy_policy_list_a_item}>
              当方サービスに関する規約等の変更等を通知するため
            </li>
            <li className={s.privacy_policy_list_a_item}>
              当方の新サービスの開発やサービス向上等に利用状況を分析して役立てるため
            </li>
            <li className={s.privacy_policy_list_a_item}>
              当方サービスに関連して、個人を識別できない形式に加工した統計データを作成するため
            </li>
            <li className={s.privacy_policy_list_a_item}>
              その他、上記利用目的に付随する目的のため
            </li>
          </ol>
        </div>

        <div className={s.privacy_policy_row}>
          <div className={s.privacy_policy_row_title}>
            <div className={s.privacy_policy_row_title_text}>
              03.個人情報の利用目的
            </div>
          </div>
          <div className={s.privacy_policy_row_description}>
            <div className={s.privacy_policy_row_description_text}>
              当方は、個人情報の利用目的を、関連性を有すると合理的に認められる範囲内において変更することがあり、変更した場合にはユーザーに通知又は公表します。
            </div>
          </div>
        </div>

        <div className={s.privacy_policy_row}>
          <div className={s.privacy_policy_row_title}>
            <div className={s.privacy_policy_row_title_text}>
              04.個人情報利用の制限
            </div>
          </div>
          <div className={s.privacy_policy_row_description}>
            <div className={s.privacy_policy_row_description_text}>
              当方は、個人情報保護法その他の法令により許容される場合を除き、ユーザーの同意を得ず、利用目的の達成に必要な範囲を超えて個人情報を取り扱いません。ただし、以下の場合はこの限りではありません。
            </div>
          </div>
          <ol className={s.privacy_policy_list_a}>
            <li className={s.privacy_policy_list_a_item}>
              法令に基づく場合
            </li>
            <li className={s.privacy_policy_list_a_item}>
              人の生命、身体又は財産の保護のために必要がある場合であって、ユーザーの同意を得ることが困難であるとき
            </li>
            <li className={s.privacy_policy_list_a_item}>
              公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、ユーザーの同意を得ることが困難であるとき
            </li>
            <li className={s.privacy_policy_list_a_item}>
              国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ユーザーの同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
            </li>
          </ol>
        </div>

        <div className={s.privacy_policy_row}>
          <div className={s.privacy_policy_row_title}>
            <div className={s.privacy_policy_row_title_text}>
              05.個人情報の適正な取得
            </div>
          </div>
          <div className={s.privacy_policy_row_description}>
            <div className={s.privacy_policy_row_description_text}>
              当方は、適正に個人情報を取得し、偽りその他不正の手段により取得しません。
            </div>
          </div>
        </div>

        <div className={s.privacy_policy_row}>
          <div className={s.privacy_policy_row_title}>
            <div className={s.privacy_policy_row_title_text}>
              06.個人情報の安全管理
            </div>
          </div>
          <div className={s.privacy_policy_row_description}>
            <div className={s.privacy_policy_row_description_text}>
              当方は、個人情報の取扱いの全部又は一部を委託する場合は、委託先において個人情報の安全管理が図られるよう、必要かつ適切な監督を行います。
            </div>
          </div>
        </div>

        <div className={s.privacy_policy_row}>
          <div className={s.privacy_policy_row_title}>
            <div className={s.privacy_policy_row_title_text}>
              07.第三者提供
            </div>
          </div>
          <div className={s.privacy_policy_row_description}>
            <div className={s.privacy_policy_row_description_text}>
              当方は、個人情報保護法その他の法令に基づき開示が認められる場合を除くほか、あらかじめユーザーの同意を得ないで、個人情報を第三者に提供しません。ただし、次に掲げる場合は上記に定める第三者への提供には該当しません。
            </div>
          </div>
          <ol className={s.privacy_policy_list_a}>
            <li className={s.privacy_policy_list_a_item}>
              当方が利用目的の達成に必要な範囲内において個人情報の取扱いの全部又は一部を委託することに伴って個人情報を提供する場合
            </li>
            <li className={s.privacy_policy_list_a_item}>
              事業譲渡、会社分割、合併その他の事由による事業の承継に伴って個人情報が提供される場合
            </li>
            <li className={s.privacy_policy_list_a_item}>
              個人情報保護法の定めに基づき共同利用する場合
             </li>
          </ol>
        </div>

        <div className={s.privacy_policy_row}>
          <div className={s.privacy_policy_row_title}>
            <div className={s.privacy_policy_row_title_text}>
              08.クリエイターサービス実施契約の締結
            </div>
          </div>
          <div className={s.privacy_policy_row_description}>
            <div className={s.privacy_policy_row_description_text}>
              当方は、当方の関係会社その他第三者と共同して事業活動を行うとき、その活動に必要な個人情報を共同利用することがあります。このとき、あらかじめ共同利用の目的、共同利用する情報の項目、利用者の範囲及び管理責任者を明確にし、ご本人に通知又は公表します。            </div>
          </div>
        </div>

        <div className={s.privacy_policy_row}>
          <div className={s.privacy_policy_row_title}>
            <div className={s.privacy_policy_row_title_text}>
              09.個人情報の開示
            </div>
          </div>
          <div className={s.privacy_policy_row_description}>
            <div className={s.privacy_policy_row_description_text}>
              当方は、ユーザーから、個人情報保護法の定めに基づき個人情報の開示を求められたときは、ユーザー本人からのご請求であることを確認の上で、ユーザーに対し、遅滞なく開示を行います（当該個人情報が存在しないときにはその旨を通知いたします）。ただし、個人情報保護法その他の法令により、当方が開示の義務を負わない場合は、この限りではありません。なお、個人情報の開示につきましては、手数料（1件あたり1,000円）を頂戴しておりますので、あらかじめご了承ください。
            </div>
          </div>
        </div>

        <div className={s.privacy_policy_row}>
          <div className={s.privacy_policy_row_title}>
            <div className={s.privacy_policy_row_title_text}>
              10.個人情報の訂正等
            </div>
          </div>
          <div className={s.privacy_policy_row_description}>
            <div className={s.privacy_policy_row_description_text}>
              当方は、ユーザーから、個人情報が真実でないという理由によって、個人情報保護法の定めに基づきその内容の訂正、追加又は削除（以下「訂正等」といいます）を求められた場合には、ユーザー本人からのご請求であることを確認の上で、利用目的の達成に必要な範囲内において、遅滞なく必要な調査を行い、その結果に基づき、個人情報の内容の訂正等を行い、その旨をユーザーに通知します（訂正等を行わない旨の決定をしたときは、ユーザーに対しその旨を通知いたします）。ただし、個人情報保護法その他の法令により、当方が訂正等の義務を負わない場合は、この限りではありません。
            </div>
          </div>
        </div>

        <div className={s.privacy_policy_row}>
          <div className={s.privacy_policy_row_title}>
            <div className={s.privacy_policy_row_title_text}>
              11.個人情報の利用停止等
            </div>
          </div>
          <div className={s.privacy_policy_row_description}>
            <div className={s.privacy_policy_row_description_text}>
              当方は、ユーザーから、ユーザーの個人情報が、あらかじめ公表された利用目的の範囲を超えて取り扱われているという理由又は偽りその他不正の手段により取得されたものであるという理由により、個人情報保護法の定めに基づきその利用の停止又は消去（以下「利用停止等」といいます）を求められた場合において、そのご請求に理由があることが判明した場合には、ユーザー本人からのご請求であることを確認の上で、遅滞なく個人情報の利用停止等を行い、その旨をユーザーに通知します。ただし、個人情報保護法その他の法令により、当方が利用停止等の義務を負わない場合は、この限りではありません。
            </div>
          </div>
        </div>

        <div className={s.privacy_policy_row}>
          <div className={s.privacy_policy_row_title}>
            <div className={s.privacy_policy_row_title_text}>
              12.Cookie（クッキー）その他の技術の利用
            </div>
          </div>
          <div className={s.privacy_policy_row_description}>
            <div className={s.privacy_policy_row_description_text}>
              本サービスは、Cookie及びこれに類する技術を利用することがあります。これらの技術は、当方サービスの利用状況等の把握に役立ち、サービス向上に資するものです。Cookieを無効化されたいユーザーは、ウェブブラウザの設定を変更することによりCookieを無効化することができます。ただし、Cookieを無効化すると、当方サービスの一部の機能をご利用いただけなくなる場合があります。
            </div>
          </div>
        </div>

        <div className={s.privacy_policy_row}>
          <div className={s.privacy_policy_row_title}>
            <div className={s.privacy_policy_row_title_text}>
              13.お問い合わせ
            </div>
          </div>
          <div className={s.privacy_policy_row_description}>
            <div className={s.privacy_policy_row_description_text}>
              開示等のお申出、ご意見、ご質問、苦情のお申出その他個人情報の取扱いに関するお問い合わせは、下記の窓口までお願いいたします。<br /><a href="https://twitter.com/TCG63728721" rel="noreferrer" target="_blank">https://twitter.com/TCG63728721</a>
            </div>
          </div>
        </div>

        <div className={s.privacy_policy_row}>
          <div className={s.privacy_policy_row_title}>
            <div className={s.privacy_policy_row_title_text}>
              14.継続的改善
            </div>
          </div>
          <div className={s.privacy_policy_row_description}>
            <div className={s.privacy_policy_row_description_text}>
              当方は、個人情報の取扱いに関する運用状況を適宜見直し、継続的な改善に努めるものとし、必要に応じて、本ポリシーを変更することがあります。
            </div>
          </div>
        </div>



      </div>
    </Layout>
  )
}

export default PrivacyPolicyScreen;