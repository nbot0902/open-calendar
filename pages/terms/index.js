import Head from 'next/head'
import Layout from "../../components/common/Layout";
import PageHead from '../../components/common/PageHead'
import s from '../../styles/terms.module.scss'
import C from "../../constants";
import U from "../../utile";

export const getServerSideProps = async (ctx) => {
  return U.verifyAuthState({ ctx });
};

const TermsScreen = props => {
  const {
    isSignOut = false,
    group = {},
    profile = {}
  } = props;

  return (
    <Layout
      page={"/terms"}
      isSignOut={isSignOut}
      group={group}
      profile={profile}
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={s.terms}>
        <PageHead title={"利用規約"} description={`本利用規約(以下「本規約」といいます。)には、${C.SERVICE_NAME}(以下「当サービス」といいます。)の提供する本サービス(第2条に定義)のご利用にあたり、ユーザー(第2条に定義)の皆様に遵守していただかなければならない事項及び当サービスとユーザーの皆様との間の権利義務関係が定められております。本サービスをユーザーとしてご利用になる方は、本規約に同意する前に、必ず全文お読み下さいますようお願い致します。`} />
        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第1条 適用
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              本規約は、本サービスの利用に関する当サービスとユーザーとの間の権利義務関係を定めることを目的とし、ユーザーと当サービスの間の本サービスの利用に関わる一切の関係に適用されます。
            </li>
            <li className={s.terms_list_a_item}>
              当サービスが当サービスウェブサイト(第2条に定義)上で随時掲載する本サービスに関するルール、 諸規定等は本規約の一部を構成するものとします。
            </li>
          </ol>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第2条 定義
            </div>
          </div>
          <div className={s.terms_row_description}>
            <div className={s.terms_row_description_text}>
              本規約において使用する以下の用語は各々以下に定める意味を有するものとします。
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              「外部サービス」とは、LINE、Stripe Connectその他の当サービス所定のサービスで、本サービスの実施に利用されるサービスを意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「外部サービス事業者」とは、外部サービスのサービス提供者を意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「外部サービス利用規約」とは、ユーザーと外部サービス事業者との権利関係を定める規約(第11条第2項に定義される本決済サービス利用条件を含みます。)を意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「クリエイターサービス実施契約」とは、クリエイターがカスタマーに対してクリエイターサービスを実施する契約を意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「実施契約代金」とは、カスタマーが、クリエイターに対し、クリエイターサービス実施契約に基づき、クリエイターサービス実施の対価として支払う代金を意味します。
            </li>

            <li className={s.terms_list_a_item}>
              「知的財産権」とは、著作権、特許権、実用新案権、商標権、意匠権その他の知的財産権(それらの権利を取得し、又はそれらの権利につき登録等を出願する権利を含みます。) を意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「当サービスウェブサイト」とは、そのドメインが「Pont.co」である当サービスが運営するウェ ブサイト(理由の如何を問わず当サービスのウェブサイトのドメイン又は内容が変更された場合は、当該変更後のウェブサイトを含みます。)を意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「本サービス」とは、当サービスが提供するPontという名称のWebサービス(理由の如何を問わずサービスの名称又は内容が変更された場合は、当該変更後のサービスを含みます。)を意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「登録情報」とは、第3条において定義された「登録情報」を意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「クリエイター」とは、第3条に基づき本サービスのユーザーとしての登録をした上 で、カスタマーに対してクリエイターサービスを提供する個人又は法人を意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「カスタマー」とは、第3条に基づき本サービスのユーザーとしての登録をした上で、 クリエイターが提供するクリエイターサービスを受ける個人又は法人を意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「ユーザー」とは、クリエイター及びカスタマーの総称を意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「クリエイターサービス」とは、クリエイターがカスタマーに対して提供するサービス、レッスン、商品などの総称を意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「クリエイターページ」とは、クリエイターがコンテンツをまとめ、クリエイターサ ービスを提供するために本サービス上で作る専用Webページを意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「マイページ」とは、クリエイターが顧客管理や注文管理等を行うことができる本サ ービス上の専用Webページを意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「利用契約」とは、第3条第4項に定義される「利用契約」を意味します。
            </li>
          </ol>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第3条 登録
            </div>
          </div>
          <div className={s.terms_row_description}>
            <div className={s.terms_row_description_text}>
              本規約において使用する以下の用語は各々以下に定める意味を有するものとします。
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              本サービスのユーザーとしての利用を希望する者(以下「ユーザー登録希望者」といいます。)は、本規約を遵守することに同意し、かつ当社の定める一定の情報(以下「登録情報」といいます。)を当社の定める方法で当社に提供することにより、当社に対し、本サービスの利用の登録を申請することができます。
            </li>
            <li className={s.terms_list_a_item}>
              ユーザー登録希望者は自己名義のLINE等の外部サービスを利用したログイン(以下「認証ログイン」といいます。)を行う場合、当社が外部サービスのアカウント上の情報(ユーザー名、写真情報を含みます。)を取得し、本サービスにおいて利用することを予め了承の上、認証ログインを利用するものとします。
            </li>
            <li className={s.terms_list_a_item}>
              当社は、第1項及び第2項に基づき登録を申請した者が、以下の各号のいずれかの事由に該当する場合は、登録を拒否することがあります。

              <ol className={s.sub_list}>
                <li className={s.sub_list_item}>
                  本規約に違反するおそれがあると当社が判断した場合
                </li>
                <li className={s.sub_list_item}>
                  当社に提供された登録情報の全部又は一部につき虚偽、誤記又は記載漏れがあった場合
                </li>
                <li className={s.sub_list_item}>
                  過去に本サービスの利用の登録を取り消された者である場合
                </li>
                <li className={s.sub_list_item}>
                  未成年者、成年被後見人、被保佐人又は被補助人のいずれかであり、法定代理人、後見人、保佐人又は補助人の同意等を得ていなかった場合
                </li>
                <li className={s.sub_list_item}>
                  反社会的勢力等(暴力団、暴力団員、暴力団準構成員、暴力団員又は暴力団準構成員で なくなった日から5年を経過しない者、暴力団関係企業、総会屋、社会運動等標ぼうゴロ、特殊知能暴力集団その他暴力、威力又は詐欺的手法を使用して経済的利益を追求する集団又は個人を意味します。以下同じ。)である、又は資金提供その他を通じて反社会的勢力の維持、運営若しくは経営に協力若しくは関与する等反社会的勢力との何らかの交流若しくは関与を行っていると当社が判断した場合
                </li>
                <li className={s.sub_list_item}>
                  その他、当社が登録を適当でないと合理的に判断した場合
                </li>
              </ol>
            </li>
            <li className={s.terms_list_a_item}>
              当社は、前項その他当社の基準に従って、ユーザー登録希望者の登録の可否を判断し、 当社が登録を認める場合にはその旨をユーザー登録希望者に通知します。かかる通知によりユーザー登録希望者のユーザーとしての登録は完了し、本規約の諸規定に従った本サービスの利用にかかる契約(以下「利用契約」といいます。)がユーザーと当社の間に成立します。
            </li>
            <li className={s.terms_list_a_item}>
              ユーザーは、登録情報に変更があった場合は、遅滞なく、当社の定める方法により、当該変更事項を当社に通知し、当社から要求された資料を提出するものとします。本項に基づき登録情報の変更がなされなかったことによりユーザーに生じた損害については、全て当該ユーザーが負うものとし、当社は一切の責任を負いません。
            </li>
          </ol>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第4条 本サービスの利用
            </div>
          </div>
          <div className={s.terms_row_description}>
            <div className={s.terms_row_description_text}>
              ユーザーは、利用契約の有効期間中、本規約に従って、当社の定める方法に従い、本サービスを利用することができます。
            </div>
          </div>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第5条 本サービスの機能
            </div>
          </div>
          <div className={s.terms_row_description}>
            <div className={s.terms_row_description_text}>
              本サービスには、主に以下の機能が含まれるものとします。なお、本サービスの内容及び各機能の詳細については、本サービス上の各機能の説明ページの記載に従うものとします。
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              クリエイターページ作成機能
            </li>
            <li className={s.terms_list_a_item}>
              実施契約代金の決済機能
            </li>
            <li className={s.terms_list_a_item}>
              マイページ、クリエイターサービスの申込み受付、購入管理機能
            </li>
          </ol>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第6条 パスワード及びユーザーIDの管理
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              ユーザーは、自己の責任において、本サービスにかかるパスワード及びユーザーIDを管理及び保管するものとし、これを第三者に利用させ又は貸与、譲渡、名義変更、売買等をしてはならないものとします。
            </li>
            <li className={s.terms_list_a_item}>
              パスワード又はユーザーIDの管理不十分、使用上の過誤、第三者の使用等による損害の責任はユーザーが負うものとし、当社は一切の責任を負いません。
            </li>
            <li className={s.terms_list_a_item}>
              ユーザーは、パスワード又はユーザーIDが盗まれたり、第三者に使用されていることが判明した場合には、直ちにその旨を当社に通知するとともに、当社からの指示に従うものとします。
            </li>
          </ol>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第7条 クリエイターページ等
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              クリエイターは、当社の定める方法により、クリエイターページ及びマイページの作成及び変更を行うことができるものとします。
            </li>
            <li className={s.terms_list_a_item}>
              クリエイターは、クリエイターページ及びマイページの作成及び変更にあたり、法令に違反し、また、第三者の権利を侵害しないように留意すると共に、クリエイターページ及ひマイページに掲載された文章、画像その他の情報が、第三者のいかなる権利も侵害していないことを当社に保証するものとします。
            </li>
            <li className={s.terms_list_a_item}>
              クリエイターは、クリエイターページの作成及び変更にあたり、当社が登録禁止商品として定める商品を、クリエイターサービスとして登録してはなりません。登録禁止商品の一覧はこちらをご確認ください。
            </li>
            <li className={s.terms_list_a_item}>
              クリエイターは、特定商取引に関する法律で要求される事項及び当社が要求する事項を、 クリエイターページにおいて適切に表示しなければならないものとし、表示内容及び方法について当社からの指示がある場合、当該指示に従って適切に表示しなければならないものとします。クリエイターは、特定商取引に関する法律で要求される事項及び当社が要求する事項を適切に表示した場合に限り、クリエイターサービス実施契約を締結することができるものとします。
            </li>
            <li className={s.terms_list_a_item}>
              当社は、クリエイターが本規約に違反していると判断した場合、当社の裁量において、 当該クリエイターが作成したクリエイターページ及びマイページに記載された情報の全部又は一部について削除、変更、公開停止その他の措置をとることができるものとします。
            </li>
            <li className={s.terms_list_a_item}>
              前項の定めにかかわらず、当社は、クリエイターページ及びマイページの内容を確認する義務を負わず、その内容に起因して生じたトラブル(クリエイターと他のユーザー、外部サービス事業者又は第三者との間で生じたトラブルを含みます。)について、一切の責任を負いません。
            </li>
            <li className={s.terms_list_a_item}>
              当社は、本条に基づき当社が行った措置に基づきクリエイターに生じた損害について一切の責任を負わないものとします。
            </li>
          </ol>
        </div>

      </div>
    </Layout>
  )
}

export default TermsScreen;