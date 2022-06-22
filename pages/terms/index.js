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
        <title>イベコレ | 利用規約</title>
        <meta name="description" content="イベコレはイベントや交流会の予定をカレンダーで簡単に共有できるWebサイトです。URLを友達に送ったりSNSのプロフィールに貼ることで、自分の活動をみんなに簡単に共有することができます。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={s.terms}>
        <PageHead title={"利用規約"} description={`本利用規約(以下「本規約」といいます。)には、${C.SERVICE_NAME}(以下「当方」といいます。)の提供する本サービス(第2条に定義)のご利用にあたり、ユーザー(第2条に定義)の皆様に遵守していただかなければならない事項及び当方とユーザーの皆様との間の権利義務関係が定められております。本サービスをユーザーとしてご利用になる方は、本規約に同意する前に、必ず全文お読み下さいますようお願い致します。`} />
        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第1条 適用
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              本規約は、本サービスの利用に関する当方とユーザーとの間の権利義務関係を定めることを目的とし、ユーザーと当方の間の本サービスの利用に関わる一切の関係に適用されます。
            </li>
            <li className={s.terms_list_a_item}>
              当方が当方ウェブサイト(第2条に定義)上で随時掲載する本サービスに関するルール、 諸規定等は本規約の一部を構成するものとします。
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
              「外部サービス」とは、Google、Apple、Twitter、などその他の当方所定のサービスで、本サービスの実施に利用されるサービスを意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「外部サービス事業者」とは、外部サービスのサービス提供者を意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「外部サービス利用規約」とは、ユーザーと外部サービス事業者との権利関係を定める規約を意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「知的財産権」とは、著作権、特許権、実用新案権、商標権、意匠権その他の知的財産権(それらの権利を取得し、又はそれらの権利につき登録等を出願する権利を含みます。) を意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「当方ウェブサイト」とは、そのドメインが「{C.SERVICE_URL}」である当方が運営するウェ ブサイト(理由の如何を問わず当方のウェブサイトのドメイン又は内容が変更された場合は、当該変更後のウェブサイトを含みます。)を意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「本サービス」とは、当方が提供する{C.SERVICE_NAME}という名称のWebサービス(理由の如何を問わずサービスの名称又は内容が変更された場合は、当該変更後のサービスを含みます。)を意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「登録情報」とは、第3条において定義された「登録情報」を意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「オーガナイザー」とは、第3条に基づき本サービスのユーザーとしての登録をした上 で、カスタマーに対してオーガナイザーサービスを提供する個人又は法人を意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「カスタマー」とは、第3条に基づき本サービスのユーザーとしての登録をした上で、 オーガナイザーが提供するオーガナイザーサービスを受ける個人又は法人を意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「ユーザー」とは、オーガナイザー及びカスタマーの総称を意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「カレンダー情報」とは、オーガナイザーがカスタマーに向けて活動内容を説明するためのオーガナイザーのプロフィール情報を意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「オーガナイザーサービス」とは、オーガナイザーがカスタマーに対して提供するサービス、レッスン、オンラインイベント、交流会、などの総称を意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「オーガナイザーページ」とは、オーガナイザーがカレンダー情報やオーガナイザービスを提供するために本サービス上で作る専用Webページを意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「マイページ」とは、オーガナイザーが顧客管理や注文管理等を行うことができる本サ ービス上の専用Webページを意味します。
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
              本サービスのユーザーとしての利用を希望する者(以下「ユーザー登録希望者」といいます。)は、本規約を遵守することに同意し、かつ当方の定める一定の情報(以下「登録情報」といいます。)を当方の定める方法で当方に提供することにより、当方に対し、本サービスの利用の登録を申請することができます。
            </li>
            <li className={s.terms_list_a_item}>
              ユーザー登録希望者は自己名義のGoogle等の外部サービスを利用したログイン(以下「認証ログイン」といいます。)を行う場合、当方が外部サービスのアカウント上の情報(ユーザー名、写真情報を含みます。)を取得し、本サービスにおいて利用することを予め了承の上、認証ログインを利用するものとします。
            </li>
            <li className={s.terms_list_a_item}>
              当方は、第1項及び第2項に基づき登録を申請した者が、以下の各号のいずれかの事由に該当する場合は、登録を拒否することがあります。

              <ol className={s.sub_list}>
                <li className={s.sub_list_item}>
                  本規約に違反するおそれがあると当方が判断した場合
                </li>
                <li className={s.sub_list_item}>
                  当方に提供された登録情報の全部又は一部につき虚偽、誤記又は記載漏れがあった場合
                </li>
                <li className={s.sub_list_item}>
                  過去に本サービスの利用の登録を取り消された者である場合
                </li>
                <li className={s.sub_list_item}>
                  未成年者、成年被後見人、被保佐人又は被補助人のいずれかであり、法定代理人、後見人、保佐人又は補助人の同意等を得ていなかった場合
                </li>
                <li className={s.sub_list_item}>
                  反社会的勢力等(暴力団、暴力団員、暴力団準構成員、暴力団員又は暴力団準構成員で なくなった日から5年を経過しない者、暴力団関係企業、総会屋、社会運動等標ぼうゴロ、特殊知能暴力集団その他暴力、威力又は詐欺的手法を使用して経済的利益を追求する集団又は個人を意味します。以下同じ。)である、又は資金提供その他を通じて反社会的勢力の維持、運営若しくは経営に協力若しくは関与する等反社会的勢力との何らかの交流若しくは関与を行っていると当方が判断した場合
                </li>
                <li className={s.sub_list_item}>
                  その他、当方が登録を適当でないと合理的に判断した場合
                </li>
              </ol>
            </li>
            <li className={s.terms_list_a_item}>
              当方は、前項その他当方の基準に従って、ユーザー登録希望者の登録の可否を判断し、 当方が登録を認める場合にはその旨をユーザー登録希望者に通知します。かかる通知によりユーザー登録希望者のユーザーとしての登録は完了し、本規約の諸規定に従った本サービスの利用にかかる契約(以下「利用契約」といいます。)がユーザーと当方の間に成立します。
            </li>
            <li className={s.terms_list_a_item}>
              ユーザーは、登録情報に変更があった場合は、遅滞なく、当方の定める方法により、当該変更事項を当方に通知し、当方から要求された資料を提出するものとします。本項に基づき登録情報の変更がなされなかったことによりユーザーに生じた損害については、全て当該ユーザーが負うものとし、当方は一切の責任を負いません。
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
              ユーザーは、利用契約の有効期間中、本規約に従って、当方の定める方法に従い、本サービスを利用することができます。
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
              カレンダー情報の管理機能
            </li>
            <li className={s.terms_list_a_item}>
              カレンダーの管理機能
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
              登録ユーザーは、自己の責任において、本サービスに関するパスワード及びユーザーIDを適切に管理及び保管するものとし、これを第三者に利用させ、又は貸与、譲渡、名義変更、売買等をしてはならないものとします。
            </li>
            <li className={s.terms_list_a_item}>
              パスワード又はユーザーIDの管理不十分、使用上の過誤、第三者の使用等によって生じた損害に関する責任は登録ユーザーが負うものとします。
            </li>
            <li className={s.terms_list_a_item}>
              ユーザーは、パスワード又はユーザーIDが盗まれたり、第三者に使用されていることが判明した場合には、直ちにその旨を当方に通知するとともに、当方からの指示に従うものとします。
            </li>
          </ol>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第7条 カレンダー情報及びユーザー情報の管理機能、等
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              オーガナイザーは、当方の定める方法により、カレンダー情報やユーザー情報の作成及び変更を行うことができるものとします。
            </li>
            <li className={s.terms_list_a_item}>
              オーガナイザーは、カレンダー情報やユーザー情報の作成及び変更にあたり、法令に違反し、また、第三者の権利を侵害しないように留意すると共に、カレンダー情報やユーザー情報に掲載された文章、画像その他の情報が、第三者のいかなる権利も侵害していないことを当方に保証するものとします。
            </li>
            <li className={s.terms_list_a_item}>
              オーガナイザーは、カレンダー情報やユーザー情報の作成及び変更にあたり、当方が登録禁止情報として定める内容を、オーガナイザーサービスとして登録してはなりません。登録禁止情報の一覧はこちらをご確認ください。
            </li>
            <li className={s.terms_list_a_item}>
              オーガナイザーは、特定商取引に関する法律で要求される事項及び当方が要求する事項を、 カレンダー情報において適切に表示しなければならないものとし、表示内容及び方法について当方からの指示がある場合、当該指示に従って適切に表示しなければならないものとします。オーガナイザーは、特定商取引に関する法律で要求される事項及び当方が要求する事項を適切に表示した場合に限り、オーガナイザーサービス実施契約を締結することができるものとします。
            </li>
            <li className={s.terms_list_a_item}>
              当方は、オーガナイザーが本規約に違反していると判断した場合、当方の裁量において、 当該オーガナイザーが作成したカレンダー情報やユーザー情報に記載された情報の全部又は一部について削除、変更、公開停止その他の措置をとることができるものとします。
            </li>
            <li className={s.terms_list_a_item}>
              前項の定めにかかわらず、当方は、カレンダー情報やユーザー情報を確認する義務を負わず、その内容に起因して生じたトラブル(オーガナイザーと他のユーザー、外部サービス事業者又は第三者との間で生じたトラブルを含みます。)について、一切の責任を負いません。
            </li>
            <li className={s.terms_list_a_item}>
              当方は、本条に基づき当方が行った措置に基づきオーガナイザーに生じた損害について一切の責任を負わないものとします。
            </li>
          </ol>
        </div>

        {false ? (
          <div className={s.terms_row}>
            <div className={s.terms_row_title}>
              <div className={s.terms_row_title_text}>
                第8条 オーガナイザーサービス実施契約の締結
            </div>
            </div>
            <ol className={s.terms_list_a}>
              <li className={s.terms_list_a_item}>
                カスタマーが、本サービスにおいて、オーガナイザーに対し、当方の定める方法でオーガナイザーサービスの実施を申し込んだ場合(オーガナイザーとカスタマーの間で、実施契約代金の見積もり等オーガナイザーサービス実施契約の内容を確定する必要がある場合には、当該内容が確定した後にカスタマーが申し込んだ場合)には、その時点で、カスタマーとオーガナイザーとの間に、オーガナイザーサービス実施契約が成立するものとします。なお、カスタマーは、自己の責任において、オーガナイザーに対してオーガナイザーサービスの実施を申し込むものとし、当方は、カスタマーがオーガナイザーサービスの実施を申し込んだことに関して一切の責任を負わないものとします。
            </li>
              <li className={s.terms_list_a_item}>
                オーガナイザーサービス実施契約の内容は、カスタマーが申し込んだオーガナイザーサービスに関するオーガナイザーページの記載に従うものとします。
            </li>
              <li className={s.terms_list_a_item}>
                オーガナイザーサービス実施契約は、オーガナイザーとカスタマーを直接の当事者とする契約であり、当該契約に伴う権利及び義務はオーガナイザーとカスタマーとの間で発生するものとし、当方は、オーガナイザーサービス実施契約の当事者とならず、債務不履行責任、契約不適合責任その他一切の責任を負わないものとします。
            </li>
              <li className={s.terms_list_a_item}>
                オーガナイザーは、オーガナイザーページを通じて、カスタマーからオーガナイザーサービスに関する問い合わせがあった場合には、自己の費用と責任において、かかる問い合わせについて誠実に対応するものとします。
            </li>
            </ol>
          </div>
        ) : null}

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第8条 オーガナイザーサービスの実施
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              オーガナイザーは、カスタマーとの間でオーガナイザーサービス実施契約が成立した場合、 自己の費用と責任において、オーガナイザーサービス実施契約に定める義務を適切に履行するものとします。
            </li>
            <li className={s.terms_list_a_item}>
              オーガナイザーは、オーガナイザーサービスの実施にあたり、特定商取引に関する法律、割賦販売法、不当景品類及び不当表示防止法、古物営業法、個人情報の保護に関する法律、資金決済に関する法律、消費者契約法、犯罪による収益の移転防止に関する法律その他関係法令を遵守しなければならないものとします。
            </li>
          </ol>
        </div>

        {false ? (
          <div className={s.terms_row}>
            <div className={s.terms_row_title}>
              <div className={s.terms_row_title_text}>
                第9条 実施契約代金の支払
            </div>
            </div>
            <ol className={s.terms_list_a}>
              <li className={s.terms_list_a_item}>
                カスタマーは、オーガナイザーとの間でオーガナイザーサービス実施契約が成立した場合、 当方の定める時期までに、当方の定める方法により、実施契約代金(消費税相当額を含みます。以下同じ。)をオーガナイザーに支払うものとします。
            </li>
              <li className={s.terms_list_a_item}>
                オーガナイザーは、当方に対して、オーガナイザーに代わり、前項に定める実施契約代金を受領する権限を付与するものとし、当方がカスタマーから実施契約代金を受領した場合には、カスタマーのオーガナイザーに対する実施契約代金の支払債務は消滅するものとします。
            </li>
              <li className={s.terms_list_a_item}>
                当方は、カスタマーから受領した実施契約代金を、第13条に定めるところに従い、オーガナイザーに支払うものとします。
            </li>
            </ol>
          </div>
        ) : null}

        {false ? (
          <div className={s.terms_row}>
            <div className={s.terms_row_title}>
              <div className={s.terms_row_title_text}>
                第10条 決済方法
            </div>
            </div>
            <ol className={s.terms_list_a}>
              <li className={s.terms_list_a_item}>
                オーガナイザーは、実施契約代金の決済方法として、ストライプジャパン株式会社(以下 「ストライプ社」といいます。)の提供する決済サービスである「Stripe Connect」(https://stripe.com/ja-JP/connect。以下「本決済サービス」といいます。)を利用するものとします。
            </li>
              <li className={s.terms_list_a_item}>
                オーガナイザーは、本決済サービスの利用に際して、当方の定める方法により、ストライプ社の定める「Stripe Connectアカウント契約」、「Stripe利用規約」、その他の利用条件 (以下「本決済サービス利用条件」といいます。)に同意の上、ストライプ社に対する本決済サービスの利用を申込むものとします。オーガナイザーは、本項に基づき本決済サービスの利用を申し込んだ上で、ストライプ社より本決済サービスの利用を承諾されない限り、クリ エイターサービス実施契約を締結することができないものとします。
            </li>
              <li className={s.terms_list_a_item}>
                オーガナイザーは、本決済サービスを通じた支払処理を実施できるようにするため、当方に対し、オーガナイザー及びオーガナイザーの事業に関する正確かつ完全な情報を提供することに同意するとともに、当方が当該情報及びオーガナイザーによる本決済サービスの使用に関する取引情報を保有することを予め承諾するものとします。
            </li>
              <li className={s.terms_list_a_item}>
                当方は、ストライプ社がオーガナイザーによる本決済サービスの利用を承諾しなかった場合その他の理由により、オーガナイザーが本決済サービスを利用できなかったことに関連してオーガナイザーに生じた損害について、一切の責任を負いません。
            </li>
            </ol>
          </div>
        ) : null}

        {false ? (
          <div className={s.terms_row}>
            <div className={s.terms_row_title}>
              <div className={s.terms_row_title_text}>
                第11条 実施契約手数料の支払い
            </div>
            </div>
            <ol className={s.terms_list_a}>
              <li className={s.terms_list_a_item}>
                オーガナイザーは、当方に対して、本サービスにおける取引手数料として、当方が別途定める手数料(以下「実施契約手数料」といいます。)を支払う義務を負うものとします。
            </li>
              <li className={s.terms_list_a_item}>
                当方は、当方が第10条に基づきオーガナイザーに支払うべき金額から実施契約手数料の金額を差し引くことにより、実施契約手数料の受領に代えることができるものとします。
            </li>
            </ol>
          </div>
        ) : null}

        {false ? (
          <div className={s.terms_row}>
            <div className={s.terms_row_title}>
              <div className={s.terms_row_title_text}>
                第12条 オーガナイザーによる出金申請
            </div>
            </div>
            <ol className={s.terms_list_a}>
              <li className={s.terms_list_a_item}>
                オーガナイザーは、本サービス上でオーガナイザーサービスの実施が完了した旨を当方に通知（以下「実施完了通知」といいます。）し、カスタマーが完了を承認した場合、または実施完了通知から７日経った場合（毎月一定額の実施契約代金を支払うことを対価としてオーガナイザーサービスを提供することを内容とするオーガナイザーサービス実施契約（以下「月額実施契約」という。）については、当月末日を経過した場合）、当方は、当方の定める方法により、実施契約代金から実施契約手数料を控除した額（以下「実施契約代金相当額」といいます。）をオーガナイザーの売上金に加算します。なお、カスタマーが実施完了通知後7日以内に（月額実施契約については、当月末日経過後7日以内に）実施完了通知に対して異議を述べた場合、当方は、異議が解消されるまで又は異議に正当な理由がないと当方が判断するまで、第3項及び第4項に基づく実施契約代金相当額の支払いを留保することができるものとします。
            </li>
              <li className={s.terms_list_a_item}>
                デジタルコンテンツ販売、イベント販売に関しては、第1項の限りにあらず、デジタルコンテンツ販売は購入時点、イベント販売はイベント終了から1時間後に、当方は、当方の定める方法により、実施契約代金相当額をオーガナイザーの売上金に加算します。
            </li>
              <li className={s.terms_list_a_item}>
                オーガナイザーは第1項及び第2項に基づき実施契約代金相当額の加算である売上金の支払いの申請を行うことができます。申請をした場合、当方は、当該申請がされた日の属する月の翌月末日までに、オーガナイザーが本サービス上で登録する銀行口座に振込送金する方法により、オーガナイザーに実施契約代金相当額から振込手数料及び事務手数料を控除した額を支払うものとします。
            </li>
              <li className={s.terms_list_a_item}>
                オーガナイザーサービス実施契約締結後60日以内（以下「支払申請期間」といいます。）にオーガナイザーが実施契約代金相当額の支払いを申請しなかった場合、当方は、支払申請期間を経過した日の属する月の翌月末日までに、オーガナイザーが本サービス上で登録する銀行口座に振込送金する方法により、オーガナイザーに実施契約代金相当額を支払うものとします。なお、オーガナイザーが登録情報の変更を怠ったことにより、本項に基づく実施契約代金相当額の支払いができなかった場合には、当方は、その時点をもって、オーガナイザーが当該実施契約代金相当額を放棄したものとみなすことができるものとし、これによりオーガナイザーに生じた損害について一切の責任を負いません。
            </li>
              <li className={s.terms_list_a_item}>
                当方は、前2項に基づく実施契約代金相当額の支払いに際して、オーガナイザーが本規約に違反し又は違反するおそれがあると当方が合理的に判断した場合には、前2項に基づく実施契約代金相当額の支払いを留保することができるとともに、当該オーガナイザーとカスタマーとの間のオーガナイザーサービス実施契約を解除することができるものとします。また、当方は、本項に基づく措置によりオーガナイザーに生じた損害の一切について責任を負いません。
            </li>
            </ol>
          </div>
        ) : null}

        {false ? (
          <div className={s.terms_row}>
            <div className={s.terms_row_title}>
              <div className={s.terms_row_title_text}>
                第13条 キャンセル時の取扱い
            </div>
            </div>
            <ol className={s.terms_list_a}>
              <li className={s.terms_list_a_item}>
                カスタマー及びオーガナイザーは、オーガナイザーがオーガナイザーページにて掲載するキャンセルポリシーに従い、当方所定の方法により、オーガナイザーサービス実施契約を解除することができるものとします。
            </li>
              <li className={s.terms_list_a_item}>
                前項の定めにかかわらず、オーガナイザーサービス実施契約成立後、当方所定の期間を経過しても、オーガナイザーサービスが提供されず、また、提供または享受の意思が確認できない場合、ユーザーの黙示の意思表示に基づき、購入のキャンセルが行われるものとし、両者はこれに異議を唱えないものとします。
            </li>
            </ol>
          </div>
        ) : null}

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第9条 禁止行為
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              ユーザーは、本サービスの利用にあたり、以下の各号のいずれかに該当する行為をしてはなりません。

              <ol className={s.sub_list}>
                <li className={s.sub_list_item}>
                  本規約に違反する行為
                </li>
                <li className={s.sub_list_item}>
                  当方、又は他のユーザー、外部サービス事業者その他の第三者の知的財産権、肖像権、 プライバシーの権利、名誉、その他の権利又は利益を侵害する行為(かかる侵害を直接又は間接に惹起する行為を含みます。)
                </li>
                <li className={s.sub_list_item}>
                  犯罪行為に関連する行為又は公序良俗に反する行為
                </li>
                <li className={s.sub_list_item}>
                  一部の場合を除き猥褻な情報又は青少年に有害な情報を送信する行為
                </li>
                <li className={s.sub_list_item}>
                  異性交際に関する情報を送信する行為
                </li>
                <li className={s.sub_list_item}>
                  本サービスにおいて、事実に反する、又はその恐れのある情報を提供する行為
                </li>
                <li className={s.sub_list_item}>
                  実態のない取引を行う行為
                </li>
                <li className={s.sub_list_item}>
                  コンピューター・ウィルスその他の有害なコンピューター・プログラムを含む情報を送信する行為
                </li>
                <li className={s.sub_list_item}>
                  当方が定める一定のデータ容量以上のデータを本サービスを通じて送信する行為
                </li>
                <li className={s.sub_list_item}>
                  サーバその他本サービスのコンピュータに不正にアクセスする行為
                </li>
                <li className={s.sub_list_item}>
                  許認可等が必要となる取引を行う行為
                </li>
                <li className={s.sub_list_item}>
                  当方による本サービスの運営を妨害するおそれのあると合理的に認められる行為
                </li>
                <li className={s.sub_list_item}>
                  他人になりすまして情報を送信、受信又は表示する行為
                </li>
                <li className={s.sub_list_item}>
                  法令又は当方若しくはユーザーが所属する業界団体の内部規則に違反する行為
                </li>
                <li className={s.sub_list_item}>
                  その他、当方が不適切と合理的に判断する行為
                </li>
              </ol>
            </li>
            <li className={s.terms_list_a_item}>
              当方は、本サービスにおけるユーザーによる情報の送信行為が前項各号のいずれかに該当し、又は該当するおそれがあると当方が合理的に判断した場合には、ユーザーに事前に通知することなく、当該情報の全部又は一部について削除、送信停止その他の措置をとることができるものとします。当方は、本項に基づき当方が行った措置に基づきユーザーに生じた損害について一切の責任を負いません。また、当方は当該措置を行った理由について、当該 ユーザーに開示する義務を負いません。
            </li>
          </ol>
        </div>


        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第10条 本サービスの停止等
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              当方は、以下のいずれかに該当する場合には、ユーザーに事前に通知することなく、本サービスの利用の全部又は一部を停止又は中断することができるものとします。
              <ol className={s.sub_list}>
                <li className={s.sub_list_item}>
                  本サービスに係るコンピューター・システムの点検又は保守作業を定期的又は緊急に行う場合
                </li>
                <li className={s.sub_list_item}>
                  コンピューター、通信回線等が事故により停止した場合
                </li>
                <li className={s.sub_list_item}>
                  火災、停電、天災地変などの不可抗力により本サービスの運営ができなくなった場合
                </li>
                <li className={s.sub_list_item}>
                  外部サービスに、トラブル、サービス提供の中断又は停止、本サービスとの連携の停止、仕様変更等が生じた場合
                </li>
                <li className={s.sub_list_item}>
                  その他、当方が停止又は中断を合理的に必要と判断した場合
                </li>
              </ol>
            </li>
            <li className={s.terms_list_a_item}>
              当方は、当方の合理的な判断により、本サービスの提供を終了することができます。この場合、当方はユーザーに事前に通知するものとします。
            </li>
            <li className={s.terms_list_a_item}>
              当方は、本条に基づき当方が行った措置に基づきユーザーに生じた損害について一切の責任を負いません。
            </li>
          </ol>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第11条 設備の負担等
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              本サービスの提供を受けるために必要な、コンピューター、スマートフォン、ソフトウェアその他の機器、通信回線その他の通信環境等の準備及び維持は、ユーザーの費用と責任において行うものとします。
            </li>
            <li className={s.terms_list_a_item}>
              ユーザーは自己の本サービスの利用環境に応じて、コンピューター・ウィルスの感染の防止、不正アクセス及び情報漏洩の防止等のセキュリティ対策を自己の費用と責任において講じるものとします。
            </li>
            <li className={s.terms_list_a_item}>
              当方は、ユーザーが送受信したメッセージその他の情報を運営上一定期間保存していた場合であっても、かかる情報を保存する義務を負うものではなく、当方はいつでもこれらの情報を削除できるものとします。
            </li>
            <li className={s.terms_list_a_item}>
              ユーザーは、本サービスの利用開始に際し又は本サービスの利用中に、当方ウェブサイトからのダウンロードその他の方法によりソフトウェア等をユーザーのコンピューター、スマートフォン等にインストールする場合には、ユーザーが保有する情報の消滅若しくは改変又は機器の故障、損傷等が生じないよう十分な注意を払うものとします。
            </li>
          </ol>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第12条 個人情報等の取扱い
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              当方は、ユーザーから提供された個人情報(個人情報の保護に関する法律第2条第1項に定める「個人情報」を意味します。以下同じ。)を本サービスの提供に必要な範囲及び当方が別途定める<a href="/privacy_policy" rel="noreferrer" target="_blank" >プライバシーポリシー</a>で定められた目的の範囲で使用することができるものとします。
            </li>
            <li className={s.terms_list_a_item}>
              ユーザーは、当方に個人情報を提供する場合その他本サービスを利用するに当たり、個人情報の保護に関する法律を遵守しなければなりません。
            </li>
            <li className={s.terms_list_a_item}>
              当方は、オーガナイザーとカスタマー、外部サービス事業者その他の第三者との間で、顧客情報の取扱いに関してトラブルが発生した場合であっても、これに関して一切の責任を負いません。
            </li>
          </ol>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第13条 権利帰属
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              当方ウェブサイト及び本サービスに関する所有権及び知的財産権は全て当方又は当方にライセンスを許諾している者に帰属しており、本規約に定める登録に基づく本サービスの利用許諾は、本規約において明示されているものを除き、当方ウェブサイト又は本サービスに関する当方又は当方にライセンスを許諾している者の知的財産権の譲渡又は使用許諾を意味するものではありません。ユーザーは、いかなる理由によっても当方又は当方にライセンス を許諾している者の知的財産権を侵害するおそれのある行為(逆アセンブル、逆コンパイル、リバースエンジニアリングを含みますが、これらに限定されません。)をしないものとします。
            </li>
            <li className={s.terms_list_a_item}>
              当方ウェブサイト又は本サービスにおいて、ユーザーが投稿その他送信を行った文章、 画像、動画その他のデータについては、当方において、本サービス上の宣伝又は広告に必要な範囲で、無償で利用(複製、複写、改変、第三者への再許諾その他のあらゆる利用を含みます。)することができるものとします。
            </li>
          </ol>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第14条 登録取消等
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              当方は、ユーザーが、以下の各号のいずれかの事由に該当する場合は、事前に通知又は催告することなく、当該ユーザーについて本サービスの利用を一時的に停止し、又はユーザーとしての登録を取り消すことができます。
              <ol className={s.sub_list}>
                <li className={s.sub_list_item}>
                  本規約のいずれかの条項に違反した場合
                </li>
                <li className={s.sub_list_item}>
                  登録情報に虚偽の事実があることが判明した場合
                </li>
                <li className={s.sub_list_item}>
                  当方、他のユーザー、外部サービス事業者その他の第三者に損害を生じさせるおそれのある目的又は方法で本サービスを利用した、又は利用しようとした場合
                </li>
                <li className={s.sub_list_item}>
                  外部サービス利用規約に違反したことその他の理由によって、ユーザーが外部サービス事業者から、そのサービスの提供や連携を受けられなくなった場合
                </li>
                <li className={s.sub_list_item}>
                  手段の如何を問わず、本サービスの運営を妨害した場合
                </li>
                <li className={s.sub_list_item}>
                  支払停止若しくは支払不能となり、又は破産手続開始、民事再生手続開始、会社更生手続開始、特別清算開始若しくはこれらに類する手続の開始の申立てがあった場合
                </li>
                <li className={s.sub_list_item}>
                  自ら振出し、若しくは引受けた手形若しくは小切手につき、不渡りの処分を受けた場合、又は手形交換所の取引停止処分その他これに類する措置を受けた場合(8) 差押、仮差押、仮処分、強制執行又は競売の申立てがあった場合
                </li>
                <li className={s.sub_list_item}>
                  差押、仮差押、仮処分、強制執行又は競売の申立てがあった場合
                </li>
                <li className={s.sub_list_item}>
                  租税公課の滞納処分を受けた場合
                </li>
                <li className={s.sub_list_item}>
                  死亡した場合又は後見開始、保佐開始若しくは補助開始の審判を受けた場合
                </li>
                <li className={s.sub_list_item}>
                  6ヶ月以上本サービスの利用がなく、当方からの連絡に対して応答がない場合
                </li>
                <li className={s.sub_list_item}>
                  第3条第3項各号に該当する場合
                </li>
                <li className={s.sub_list_item}>
                  その他、当方がユーザーとしての登録の継続を適当でないと合理的に判断した場合
                </li>
              </ol>
            </li>
            <li className={s.terms_list_a_item}>
              前項各号のいずれかの事由に該当した場合、ユーザーは、当方に対して負っている債務の一切について当然に期限の利益を失い、直ちに当方に対して全ての債務の支払を行わなければなりません。
            </li>
            <li className={s.terms_list_a_item}>
              当方は、30日前までに当方所定の方法でユーザーに通知することにより、ユーザーの登録を取り消すことができます。
            </li>
            <li className={s.terms_list_a_item}>
              当方は、本条に基づき当方が行った行為によりユーザーに生じた損害について一切の責任を負いません。
            </li>
          </ol>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第15条 退会
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              ユーザーは、当方所定の手続により、ユーザーの登録を取り消すことができるものとします。
            </li>
            {false ? (
              <li className={s.terms_list_a_item}>
                ユーザーは、本規約に別段の定めがある場合を除き、登録取消時点において第13条に基づき支払いを申請することができる実施契約代金相当額については、当方所定の手続を行うことにより、ユーザーの登録取消後1ヶ月間に限り、当方から支払いを受けることができるものとし、かかる期間が経過した後は、当方は、自らの裁量により、没収又はカスタマーに 返金することができるものとします。
              </li>
            ) : null}
            <li className={s.terms_list_a_item}>
              ユーザーが本条に規定に基づきユーザーの登録を取り消した場合、当方は、当方の裁量により、当該ユーザーが本サービス上で保有していた情報及び成果物(カレンダー情報やユーザー情報を含みますが、これらに限定されません。)を削除することができるものとし、これによって当該ユーザーに生じた損害について一切の責任を負わないものとします。
            </li>
          </ol>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第16条 保証の否認及び免責
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              本サービスは現状有姿で提供されるものであり、当方は本サービスについて、特定の目的への適合性、商業的有用性、完全性、継続性等を含め、一切保証を致しません。
            </li>
            <li className={s.terms_list_a_item}>
              ユーザーが当方から直接又は間接に、本サービス、当方ウェブサイト、本サービスの他のユーザーその他の事項に関する何らかの情報を得た場合であっても、当方はユーザーに対し本規約において規定されている内容を超えて如何なる保証も行うものではありません。
            </li>
            <li className={s.terms_list_a_item}>
              当方は、ユーザーが本サービスを利用する際に、コンピュータウィルスなど有害なプログラム等による損害を受けないことを保証しないものとします。
            </li>
            <li className={s.terms_list_a_item}>
              当方は、ユーザーが本サービスを利用する際に使用するいかなる機器、ソフトウェアについても、その動作保証を一切しないものとします。
            </li>
            <li className={s.terms_list_a_item}>
              本サービスは、外部サービスと連携することがありますが、かかる連携を保証するものではなく、外部サービスとの連携の支障等について、当方の責に帰すべき場合を除き、当方は一切の責任を負いません。
            </li>
            <li className={s.terms_list_a_item}>
              本サービスが外部サービスと連携している場合において、ユーザーは外部サービス利用規約を自己の責任で遵守するものとし、その違反によってユーザーと当該外部サービスを運営する外部サービス事業者との間で紛争等が生じた場合でも、当方は当該紛争等について一切の責任を負いません。
            </li>
            <li className={s.terms_list_a_item}>
              当方は、ユーザーが本サービスを利用することにより一定の売上を得ることができることを保証するものではありません。
            </li>
            <li className={s.terms_list_a_item}>
              ユーザーは、本サービスを利用するに当たっては、自己の責任において、当方ウェブサイト等において提示している利用方法を確認するものとし、ユーザーの操作ミスについて当方は一切の責任を負わないものとします。
            </li>
            <li className={s.terms_list_a_item}>
              ユーザーは、本サービスを利用することが、ユーザーに適用のある法令、業界団体の内部規則等に違反するか否かを自己の費用と責任に基づいて調査するものとし、当方は、ユーザーによる本サービスの利用が、ユーザーに適用のある法令、業界団体の内部規則等に適合することを何ら保証するものではありません。
            </li>
            <li className={s.terms_list_a_item}>
              本サービス又は当方ウェブサイトに関連してユーザーと他のユーザー、外部サービス事業者又は第三者との間において生じた取引、連絡、紛争等については、ユーザーの責任において処理及び解決するものとし、当方の責に帰すべき場合を除き、当方はかかる事項について一切責任を負いません。
            </li>
            <li className={s.terms_list_a_item}>
              ユーザーは、自己の費用と責任において、オーガナイザーサービスに関する情報等につい てのバックアップをとらなければなりません。当方は、当方による本サービスの提供の中断、停止、終了、利用不能又は変更、ユーザーのメッセージ又は情報の削除又は消失、ユー ザーの登録の取消、本サービスの利用によるデータの消失又は機器の故障若しくは損傷、そ の他本サービスに関連してユーザーが被った損害につき、当方の責に帰すべき場合を除き、 賠償する責任を一切負わないものとします。
            </li>
            <li className={s.terms_list_a_item}>
              当方ウェブサイトから他のウェブサイトへのリンク又は他のウェブサイトから当方ウェブサイトへのリンクが提供されている場合でも、当方は、当方ウェブサイト以外のウェブサイト及びそこから得られる情報に関して、当方の責に帰すべき場合を除き、一切の責任を負わないものとします。
            </li>
            <li className={s.terms_list_a_item}>
              当方は、当方の合理的な支配の及ばない状況(火事、停電、ハッキング、コンピューター・ウィルスの侵入、地震、洪水、戦争、疫病、通商停止、ストライキ、暴動、物資及び輸 送施設の確保不能、政府当局若しくは地方自治体による介入、指示若しくは要請、又は内外法令の制定若しくは改廃を含みますが、これらに限定されません。)により利用契約上の義務を履行できない場合、その状態が継続する期間中ユーザーに対し債務不履行責任を負わないものとします。
            </li>
            <li className={s.terms_list_a_item}>
              消費者契約法その他の強行法規の適用その他何らかの理由により、当方がユーザーに対して損害賠償責任を負う場合においても、当方の賠償責任は、直接かつ通常の損害に限り、 逸失利益等の間接的な損害を含まないものし、また、1000円を上限とします。但し、当方がカスタマーに対して損害賠償責任を負う場合で、当方に故意又は重大な過失があるときはこの限りではありません。
            </li>
          </ol>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第17条 ユーザーの賠償等の責任
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              ユーザーは、本規約に違反することにより、又は本サービスの利用に関連して当方に損害を与えた場合、当方に対しその損害を賠償しなければなりません。
            </li>
            <li className={s.terms_list_a_item}>
              ユーザーが、本サービスに関連して他のユーザー、外部サービス事業者その他の第三者からクレームを受け又はそれらの者との間で紛争を生じた場合には、直ちにその内容を当方に通知するとともに、ユーザーの費用と責任において当該クレーム又は紛争を処理し、当方からの要請に基づき、その経過及び結果を当方に報告するものとします。
            </li>
            <li className={s.terms_list_a_item}>
              ユーザーによる本サービスの利用に関連して、当方が、他のユーザー、外部サービス事業者その他の第三者から権利侵害その他の理由により何らかの請求を受けた場合は、ユーザーは当該請求に基づき当方が当該第三者に支払を余儀なくされた金額を賠償しなければなりません。
            </li>
          </ol>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第18条 秘密保持
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              本規約において「秘密情報」とは、利用契約又は本サービスに関連して、ユーザーが、 当方より書面、口頭若しくは記録媒体等により提供若しくは開示されたか、又は知り得た、 当方の技術、営業、業務、財務、組織、その他の事項に関する全ての情報を意味します。但し、以下の各号に該当する情報を除きます。
              <ol className={s.sub_list}>
                <li className={s.sub_list_item}>
                  当方から提供若しくは開示がなされたとき又は知得したときに、既に一般に公知となっていた、又は既に知得していたもの。
                </li>
                <li className={s.sub_list_item}>
                  当方から提供若しくは開示又は知得した後、自己の責めに帰せざる事由により刊行物その他により公知となったもの。
                </li>
                <li className={s.sub_list_item}>
                  提供又は開示の権限のある第三者から秘密保持義務を負わされることなく適法に取得したもの。
                </li>
                <li className={s.sub_list_item}>
                  秘密情報によることなく単独で開発したもの。
                </li>
                <li className={s.sub_list_item}>
                  当方から秘密保持の必要なき旨書面で確認されたもの。
                </li>
              </ol>
            </li>
            <li className={s.terms_list_a_item}>
              ユーザーは、秘密情報を本サービスの利用の目的のみに利用するとともに、当方の書面による承諾なしに第三者に当方の秘密情報を提供、開示又は漏洩しないものとします。
            </li>
            <li className={s.terms_list_a_item}>
              第2項の定めに拘わらず、ユーザーは、法律、裁判所又は政府機関の命令、要求又は要請に基づき、秘密情報を開示することができます。但し、当該命令、要求又は要請があった場合、速やかにその旨を当方に通知しなければなりません。
            </li>
            <li className={s.terms_list_a_item}>
              ユーザーは、秘密情報を記載した文書又は磁気記録媒体等を複製する場合には、事前に当方の書面による承諾を得ることとし、複製物の管理については第2項に準じて厳重に行うものとします。
            </li>
            <li className={s.terms_list_a_item}>
              ユーザーは、当方から求められた場合にはいつでも、遅滞なく、当方の指示に従い、秘密情報並びに秘密情報を記載又は包含した書面その他の記録媒体物及びその全ての複製物を返却又は廃棄しなければなりません。
            </li>
          </ol>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第19条 有効期間
            </div>
          </div>
          <div className={s.terms_row_description}>
            <div className={s.terms_row_description_text}>
              利用契約は、ユーザーについて第3条に基づく登録が完了した日から当該ユーザーの登録が取り消された日又は本サービスの提供が終了した日のいずれか早い日まで、当方とユーザーとの間で有効に存続するものとします。
            </div>
          </div>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第20条 本規約等の変更
            </div>
          </div>
          <div className={s.terms_row_description}>
            <div className={s.terms_row_description_text}>
              当方は、当方が必要と認めた場合は、本規約を変更できるものとします。本規約を変更する場合、変更後の本規約の施行時期及び内容を当方ウェブサイト上での掲示その他の適切な方法により周知し、又は登録ユーザーに通知します。ただし、法令上登録ユーザーの同意が必要となるような内容の変更の場合は、当方所定の方法で登録ユーザーの同意を得るものとします。
            </div>
          </div>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第21条 連絡/通知
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              本サービスに関する問い合わせその他登録ユーザーから当方に対する連絡又は通知、及び本規約の変更に関する通知その他当方から登録ユーザーに対する連絡又は通知は、当方の定める方法で行うものとします。
            </li>
            <li className={s.terms_list_a_item}>
              当方が登録事項に含まれるメールアドレスその他の連絡先に連絡又は通知を行った場合、登録ユーザーは当該連絡又は通知を受領したものとみなします。
            </li>
          </ol>
        </div>


        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第22条 サービス利用契約上の地位の譲渡等
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              登録ユーザーは、当方の書面による事前の承諾なく、利用契約上の地位又は本規約に基づく権利若しくは義務につき、第三者に対し、譲渡、移転、担保設定、その他の処分をすることはできません。
            </li>
            <li className={s.terms_list_a_item}>
              当方は本サービスにかかる事業を他社に譲渡した場合には、当該事業譲渡に伴い利用契約上の地位、本規約に基づく権利及び義務並びに登録ユーザーの登録事項その他の顧客情報を当該事業譲渡の譲受人に譲渡することができるものとし、登録ユーザーは、かかる譲渡につき本項において予め同意したものとします。なお、本項に定める事業譲渡には、通常の事業譲渡のみならず、会社分割その他事業が移転するあらゆる場合を含むものとします。
            </li>
          </ol>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第23条 分離可能性
            </div>
          </div>
          <div className={s.terms_row_description}>
            <div className={s.terms_row_description_text}>
              本規約のいずれかの条項又はその一部が、消費者契約法その他の法令等により無効又は執行不能と判断された場合であっても、本規約の残りの規定及び一部が無効又は執行不能と判断された規定の残りの部分は、継続して完全に効力を有するものとします。
            </div>
          </div>
        </div>


        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第24条 存続規定
            </div>
          </div>
          <div className={s.terms_row_description}>
            <div className={s.terms_row_description_text}>
              下記の規定は利用契約の終了後も有効に存続するものとします。
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              第3条第5項
            </li>
            <li className={s.terms_list_a_item}>
              第6条第2項
            </li>
            <li className={s.terms_list_a_item}>
              第7条第2項
            </li>
            <li className={s.terms_list_a_item}>
              第7条第6項
            </li>
            <li className={s.terms_list_a_item}>
              第7条第7項
            </li>
            <li className={s.terms_list_a_item}>
              第8条第1項
            </li>
            <li className={s.terms_list_a_item}>
              第8条第3項
            </li>
            <li className={s.terms_list_a_item}>
              第9条第2項
            </li>
            <li className={s.terms_list_a_item}>
              第10条第3項
            </li>
            <li className={s.terms_list_a_item}>
              第11条から第13条まで
            </li>
            <li className={s.terms_list_a_item}>
              第14条第2項及び第4項
            </li>
            <li className={s.terms_list_a_item}>
              第15条第2項及び第3項
            </li>
            <li className={s.terms_list_a_item}>
              第16条から第18条まで
            </li>
            <li className={s.terms_list_a_item}>
              第22条から第25条まで
            </li>
          </ol>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第25条 準拠法及び管轄裁判所
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              本規約及びサービス利用契約の準拠法は日本法とします。
            </li>
            <li className={s.terms_list_a_item}>
              本規約又はサービス利用契約に起因し、又は関連する一切の紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </li>
          </ol>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第26条 協議解決
            </div>
          </div>
          <div className={s.terms_row_description}>
            <div className={s.terms_row_description_text}>
              当方及びユーザーは、本規約に定めのない事項又は本規約の解釈に疑義が生じた場合には、互いに信義誠実の原則に従って協議の上速やかに解決を図るものとします。
           </div>
          </div>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_description}>
            <div className={s.terms_row_description_text}>
              2022年6月31日制定
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default TermsScreen;