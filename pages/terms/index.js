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
        <title>イベコレ | オーガナイザー利用規約</title>
        <meta name="description" content="イベコレはイベントや交流会の予定をカレンダーで簡単に共有できるWebサイトです。URLを友達に送ったりSNSのプロフィールに貼ることで、自分の活動をみんなに簡単に共有することができます。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={s.terms}>
        <PageHead title={"利用規約"} description={`この利用規約(以下「本規約」といいます)には、${C.SERVICE_NAME}運営者以下「当方」といいます)が「${C.SERVICE_NAME}」という名称(理由の如何を問わずサービスの名称又は内容が変更された場合は、当該変更後のサービスを含みます)で提供するサービス(以下「本サービス」といいます)のご利用にあたり、オーガナイザー(第2条に定義します)の皆様に遵守していただかなければならない事項及び当方とオーガナイザーの皆様との間の権利義務関係が定められております。本サービスをオーガナイザーとしてご利用になる方は、本規約に同意する前に、必ず全文お読み下さいますようお願いいたします。`} />
        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第1条 適用
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              本規約は、本サービスの利用に関する当方とオーガナイザーとの間の権利義務関係を定めることを目的とし、オーガナイザーと当方の間の本サービスの利用に関わる一切の関係に適用されます。
            </li>
            <li className={s.terms_list_a_item}>
              当方が当方ウェブサイト(第2条に定義します)上で随時掲載する本サービスに関するルール、 諸規程等は本規約の一部を構成するものとします。
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
              本規約において使用する以下の各号に掲げる用語は、各々以下の各号に定める意味を有するものとします。
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              「オーガナイザー」とは、第3条に基づき本サービスにオーガナイザーとして登録をしたうえで、カスタマーに対してオーガナイザーサービスを提供する個人又は法人を意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「オーガナイザーサービス」とは、オーガナイザーがカスタマーに提供する、レッスン、オンラインイベント、交流会、その他オーガナイザーのサービスの総称を意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「オーガナイザーページ」とは、オーガナイザーがカレンダー情報の公開やオーガナイザービスの提供のために本サービス上で作成できる、各オーガナイザー固有のウェブページを意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「外部サービス」とは、Google、Apple、Twitterその他当方所定のサービスで、本サービスの実施に利用されるサービスを意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「外部サービス事業者」とは、外部サービスのサービス提供者を意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「外部サービス規約」とは、オーガナイザーと外部サービス事業者との間における外部サービスの利用に関する権利関係を定める規約、契約その他合意を意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「カスタマー」とは、オーガナイザーが提供するオーガナイザーサービスを受ける個人又は法人を意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「カレンダー情報」とは、オーガナイザーがカスタマーに向けて活動の実施状況及び内容を説明するためのプロフィール情報を意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「知的財産権」とは、著作権、特許権、実用新案権、商標権、意匠権その他の知的財産権(それらの権利を取得し、又はそれらの権利につき登録等を出願する権利を含みます) を意味します。
            </li>
            <li className={s.terms_list_a_item}>
              「当方ウェブサイト」とは、そのドメインが「evecale.com」である当方が運営するウェブサイト(理由の如何を問わず当方のウェブサイトのドメイン又は内容が変更された場合は、当該変更後のウェブサイトを含みます)を意味します。
            </li>
          </ol>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第3条 登録
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              本サービスのオーガナイザーとしての利用を希望する者(以下「ユーザー登録希望者」といいます)は、本規約を遵守することに同意し、かつ当方の定める一定の情報(以下「登録情報」といいます)を当方の定める方法で当方に提供することにより、当方に対し、本サービスの利用の登録を申請することができます。
            </li>
            <li className={s.terms_list_a_item}>
              ユーザー登録希望者は自己名義の外部サービスを利用したログイン(以下「認証ログイン」といいます)を行う場合、当方が外部サービスのアカウント上の情報(ユーザー名、写真情報を含みます)を取得し、本サービスにおいて利用することを予め了承します。
            </li>
            <li className={s.terms_list_a_item}>
              当方は、第1項及び第2項に基づき登録を申請した者が、以下の各号のいずれかの事由に該当する場合は、登録を拒否することがあります。
              <ol className={s.sub_list}>
                <li className={s.sub_list_item}>
                  本規約に違反するおそれがあると当方が判断した場合
                </li>
                <li className={s.sub_list_item}>
                  当方に提供された登録情報の全部又は一部につき虚偽、誤記又は記載漏れがあった場合
                </li>
                <li className={s.sub_list_item}>
                  過去に本サービスの利用の登録を取り消された者である場合
                </li>
                <li className={s.sub_list_item}>
                  未成年者、成年被後見人、被保佐人又は被補助人のいずれかであり、法定代理人、後見人、保佐人又は補助人の同意等を得ていなかった場合
                </li>
                <li className={s.sub_list_item}>
                  反社会的勢力等(暴力団、暴力団員、暴力団準構成員、暴力団員又は暴力団準構成員でなくなった日から5年を経過しない者、暴力団関係企業、総会屋、社会運動等標ぼうゴロ、特殊知能暴力集団その他暴力、威力又は詐欺的手法を使用して経済的利益を追求する集団又は個人を意味し、以下同じとします)である、又は資金提供その他を通じて反社会的勢力の維持、運営若しくは経営に協力若しくは関与する等反社会的勢力との何らかの交流若しくは関与を行っていると当方が判断した場合
                </li>
                <li className={s.sub_list_item}>
                  その他、当方が登録を適当でないと合理的に判断した場合
                </li>
              </ol>
            </li>
            <li className={s.terms_list_a_item}>
              当方は、前項その他当方の基準に従って、ユーザー登録希望者の登録の可否を判断し、 当方が登録を認める場合にはその旨をユーザー登録希望者に通知します。かかる通知によりユーザー登録希望者のオーガナイザーとしての登録は完了し、本規約の諸規定に従った本サービスの利用にかかる契約(以下「利用契約」といいます)がオーガナイザーと当方の間に成立します。
            </li>
            <li className={s.terms_list_a_item}>
              オーガナイザーは、登録情報に変更があった場合は、遅滞なく、当方の定める方法により、当該変更事項を当方に通知し、当方から要求された資料を提出するものとします。本項に基づき登録情報の変更がなされなかったことによりオーガナイザーに生じた損害については、全て当該オーガナイザーが負うものとし、当方は一切の責任を負いません。            </li>
          </ol>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第4条 本サービスの利用
            </div>
          </div>
          <div className={s.terms_row_description}>
            <div className={s.terms_row_description_text}>
              オーガナイザーは、利用契約の有効期間中、本規約に従って、当方の定める方法に従い、本サービスを利用することができます。
            </div>
          </div>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第5条 本サービスの機能及び有料プラン
            </div>
          </div>
          <div className={s.terms_row_description}>
            <div className={s.terms_row_description_text}>
              本サービスには、主に以下の機能が含まれるものとします。なお、本サービスの内容及び各機能の詳細については、本サービス上の各機能の説明ページの記載に従うものとします。
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              カレンダー情報の管理機能

              <ol className={s.sub_list}>
                <li className={s.sub_list_item}>
                  本サービスでは、オーガナイザーに対して有料プラン（以下「有料プラン」といいます）を提供する場合があります。オーガナイザーは、有料プランの利用を希望する場合、当方所定の方法により申し込むものとします。オーガナイザーは、当該申込時において、当方が別途定める有料プランの利用料金を、当方所定により方法にて支払うものとします。
                </li>
                <li className={s.sub_list_item}>
                  オーガナイザーが前項に定める利用料金の支払を遅滞した場合、オーガナイザーは年14.6％の割合による遅延損害金を当方に支払うものとします。
                </li>
              </ol>
            </li>
          </ol>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第6条 パスワード及びユーザーIDの管理
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              オーガナイザーは、自己の責任において、本サービスに関するパスワード及びユーザーIDを適切に管理及び保管するものとし、これを第三者に利用させ、又は貸与、譲渡、名義変更、売買等をしてはならないものとします。            </li>
            <li className={s.terms_list_a_item}>
              パスワード又はユーザーIDの管理不十分、使用上の過誤、第三者の使用等によって生じた損害に関する責任はオーガナイザーが負うものとします。
            </li>
            <li className={s.terms_list_a_item}>
              オーガナイザーは、パスワード又はユーザーIDが盗まれたり、第三者に使用されていることが判明した場合には、直ちにその旨を当方に通知するとともに、当方からの指示に従うものとします。
            </li>
          </ol>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第7条 オーガナイザーページ
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              オーガナイザーは、当方の定める方法により、オーガナイザーページの作成及び変更を行うことができるものとします。
            </li>
            <li className={s.terms_list_a_item}>
              オーガナイザーは、オーガナイザーページの作成及び変更にあたり、法令に違反し、また、第三者の権利を侵害しないように留意すると共に、オーガナイザーページに掲載された文章、画像その他の情報が、第三者のいかなる権利も侵害していないことを当方に保証するものとします。
            </li>
            <li className={s.terms_list_a_item}>
              オーガナイザーは、オーガナイザーページの作成、変更及び利用にあたり、以下の各号に掲げる内容及び当方が別途登録禁止情報として定める内容を、オーガナイザーページにおける表示をしてはならないとともに、オーガナイザーサービスとして提供してはならないものとします。
              <ol className={s.sub_list}>
                <li className={s.sub_list_item}>
                  盗作、剽窃等、他者の知的財産権を侵害しているもの
                </li>
                <li className={s.sub_list_item}>
                  当方又は第三者の肖像権、プライバシー、名誉その他の権利又は利益を侵害する行為
                </li>
                <li className={s.sub_list_item}>
                  過度に暴力的な表現、露骨な性的表現、人種、国籍、信条、性別、社会的身分、又は門地等による差別につながる表現、自殺、自傷行為、薬物乱用を誘引又は助長する表現、若しくはその他反社会的な内容を含み他人に不快感を与える表現を、投稿又は送信する行為
                </li>
                <li className={s.sub_list_item}>
                  詐欺その他法令違反行為に該当するもの
                </li>
                <li className={s.sub_list_item}>
                  差別につながる民族・宗教・人種・性別・年齢等に関するもの
                </li>
                <li className={s.sub_list_item}>
                  自殺、集団自殺、自傷、違法薬物使用、脱法薬物使用等を勧誘・誘発・助長するもの
                </li>
                <li className={s.sub_list_item}>
                  マルチ商法等、当方がユーザーに不利益をもたらすと判断する情報商材
                </li>
                <li className={s.sub_list_item}>
                  株式の銘柄推奨、その他金融商品取引法に抵触するもの
                </li>
                <li className={s.sub_list_item}>
                  「必ずもうかる」等、著しい誤解を招く表現を用いたもの
                </li>
                <li className={s.sub_list_item}>
                  コンピュータウィルスその他有害なコンピューター・プログラムを含むもの
                </li>
                <li className={s.sub_list_item}>
                  オンラインゲーム等のアカウント、キャラクター、アイテム、通貨及び仮想通貨等を譲渡しようとするもの
                </li>
                <li className={s.sub_list_item}>
                  不当景品類及び不当表示防止法、医薬品、医療機器等の品質、有効性及び安全性の確保等に関する法律、並びに医療法その他法令に違反するもの
                </li>
                <li className={s.sub_list_item}>
                  特定の個人、特定のグループ又は組織になりすますもの
                </li>
                <li className={s.sub_list_item}>
                  マルチ商法等当方がカスタマーに対して不利益をもたらすものであると判断する情報商材の宣伝に直接若しくは間接的に利用するもの
                </li>
                <li className={s.sub_list_item}>
                  マルチ商法等当方がカスタマーに対して不利益をもたらすものであると判断する情報商材の宣伝に直接若しくは間接的に利用するもの
                </li>
                <li className={s.sub_list_item}>
                  性行為やわいせつな行為を目的とするもの、面識のない異性との出会いや交際（援助交際、パパ活等を含む）を目的とするもの、又は第三者に対する嫌がらせや誹謗中傷を目的とするもの、その他本サービスが予定している利用目的と異なる目的で本サービスを利用するもの
                </li>
                <li className={s.sub_list_item}>
                  資金洗浄、マネーロンダリングその他犯罪による収益の移転防止に関する法律に違反するもの
                </li>
                <li className={s.sub_list_item}>
                  公序良俗に反するもの
                </li>
                <li className={s.sub_list_item}>
                  前項各号に該当又は該当するおそれがあると当方が判断するもの
                </li>
                <li className={s.sub_list_item}>
                  その他当方が不適切と判断するもの
                </li>
              </ol>
            </li>
            <li className={s.terms_list_a_item}>
              オーガナイザーは、特定商取引に関する法律で要求される事項及び当方が要求する事項を、 オーガナイザーページにおいて適切に表示しなければならないものとし、表示内容及び方法について当方からの指示がある場合、当該指示に従って適切に表示しなければならないものとします。
            </li>
            <li className={s.terms_list_a_item}>
              当方は、オーガナイザーが本規約に違反していると判断した場合、当方の裁量において、 当該オーガナイザーが作成したオーガナイザーページに記載された情報の全部又は一部について削除、変更、公開停止その他の措置をとることができるものとします。
            </li>
            <li className={s.terms_list_a_item}>
              前項の定めにかかわらず、当方は、オーガナイザーページの内容を確認する義務を負わず、その内容に起因して生じたトラブル(オーガナイザーとカスタマー、外部サービス事業者その他第三者との間で生じたトラブルを含みます)について、責任を負いません。
            </li>
            <li className={s.terms_list_a_item}>
              当方は、本条に基づき当方が行った措置によりオーガナイザーに生じた損害について責任を負わないものとします。
            </li>
          </ol>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第8条 オーガナイザーサービスの提供
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              オーガナイザーは、カスタマーに対するオーガナイザーサービスの提供について、 自己の費用と責任において、適切に履行するものとします。
            </li>
            <li className={s.terms_list_a_item}>
              オーガナイザーは、オーガナイザーサービスの提供にあたり、特定商取引に関する法律、割賦販売法、不当景品類及び不当表示防止法、古物営業法、個人情報の保護に関する法律、資金決済に関する法律、消費者契約法、犯罪による収益の移転防止に関する法律その他関係法令を遵守しなければならないものとします。
            </li>
          </ol>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第9条 禁止行為
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              オーガナイザーは、本サービスの利用にあたり、以下の各号のいずれかに該当する行為をしてはなりません。

              <ol className={s.sub_list}>
                <li className={s.sub_list_item}>
                  本規約に違反する行為
                </li>
                <li className={s.sub_list_item}>
                  当方、他のオーガナイザー、カスタマー、外部サービス事業者その他の第三者の知的財産権、肖像権、 プライバシーの権利、名誉、その他の権利又は利益を侵害する行為(かかる侵害を直接又は間接に惹起する行為を含みます。)
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
                  本サービスにおいて、事実に反する、又はその恐れのある情報を提供する行為
                </li>
                <li className={s.sub_list_item}>
                  実態のない取引を行う行為
                </li>
                <li className={s.sub_list_item}>
                  コンピューター・ウィルスその他の有害なコンピューター・プログラムを含む情報を送信する行為
                </li>
                <li className={s.sub_list_item}>
                  当方が定める一定のデータ容量以上のデータを本サービスを通じて送信する行為
                </li>
                <li className={s.sub_list_item}>
                  サーバその他本サービスのコンピュータに不正にアクセスする行為
                </li>
                <li className={s.sub_list_item}>
                  許認可等が必要となる取引を行う行為
                </li>
                <li className={s.sub_list_item}>
                  当方による本サービスの運営を妨害するおそれのあると合理的に認められる行為
                </li>
                <li className={s.sub_list_item}>
                  他人になりすまして情報を送信、受信又は表示する行為
                </li>
                <li className={s.sub_list_item}>
                  法令又は当方若しくはオーガナイザーが所属する業界団体の内部規則に違反する行為
                </li>
                <li className={s.sub_list_item}>
                  その他、当方が不適切と合理的に判断する行為
                </li>
              </ol>
            </li>
            <li className={s.terms_list_a_item}>
              当方は、本サービスにおけるオーガナイザーによる情報の送信行為が前項各号のいずれかに該当し、又は該当するおそれがあると当方が合理的に判断した場合には、オーガナイザーに事前に通知することなく、オーガナイザーページ及び当該情報の全部又は一部について削除、送信停止その他の措置をとることができるものとします。当方は、本項に基づき当方が行った措置によりオーガナイザーに生じた損害について責任を負いません。また、当方は当該措置を行った理由について、当該オーガナイザーに開示する義務を負いません。
            </li>
          </ol>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第10条 本サービスの停止等
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              当方は、以下のいずれかに該当する場合には、オーガナイザーに事前に通知することなく、本サービスの利用の全部又は一部を停止又は中断することができるものとします。

              <ol className={s.sub_list}>
                <li className={s.sub_list_item}>
                  本サービスに係るコンピューター・システムの点検又は保守作業を定期的又は緊急に行う場合
                </li>
                <li className={s.sub_list_item}>
                  コンピューター、通信回線等が事故により停止した場合
                </li>
                <li className={s.sub_list_item}>
                  火災、停電、天災地変等の不可抗力により本サービスの運営ができなくなった場合
                </li>
                <li className={s.sub_list_item}>
                  外部サービスに、トラブル、サービス提供の中断又は停止、本サービスとの連携の停止、仕様変更等が生じた場合
                </li>
                <li className={s.sub_list_item}>
                  その他、当方が停止又は中断を合理的に必要と判断した場合
                </li>
                <li className={s.sub_list_item}>
                  その他、当方が停止又は中断を合理的に必要と判断した場合
                </li>
              </ol>
            </li>
            <li className={s.terms_list_a_item}>
              当方は、当方の合理的な判断により、本サービスの提供を終了することができます。この場合、当方はオーガナイザーに事前に通知するものとします。
            </li>
            <li className={s.terms_list_a_item}>
              当方は、本条に基づき当方が行った措置によりオーガナイザーに生じた損害について責任を負いません。
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
              本サービスの提供を受けるために必要な、コンピューター、スマートフォン、ソフトウェアその他の機器、通信回線その他の通信環境等の準備及び維持は、オーガナイザーの費用と責任において行うものとします。
            </li>
            <li className={s.terms_list_a_item}>
              オーガナイザーは自己の本サービスの利用環境に応じて、コンピューター・ウィルスの感染の防止、不正アクセス及び情報漏洩の防止等のセキュリティ対策を自己の費用と責任において講じるものとします。
            </li>
            <li className={s.terms_list_a_item}>
              当方は、オーガナイザーページ、オーガナイザーが送受信したメッセージその他の情報を運営上一定期間保存していた場合であっても、かかる情報を保存する義務を負うものではなく、当方はいつでもこれらの情報を削除できるものとします。
            </li>
            <li className={s.terms_list_a_item}>
              オーガナイザーは、本サービスの利用開始に際し又は本サービスの利用中に、当方ウェブサイトからのダウンロードその他の方法によりソフトウェア等をオーガナイザーのコンピューター、スマートフォン等にインストールする場合には、オーガナイザーが保有する情報の消滅若しくは改変又は機器の故障、損傷等が生じないよう十分な注意を払うものとします。
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
              当方は、オーガナイザーから提供された個人情報(個人情報の保護に関する法律第2条第1項に定める「個人情報」を意味し、以下同じとします)を本サービスの提供に必要な範囲及び当方が別途定めるプライバシーポリシーで定められた目的の範囲で使用することができるものとします。
              </li>
            <li className={s.terms_list_a_item}>
              オーガナイザーは、当方に個人情報を提供する場合その他本サービスを利用するに当たり、個人情報の保護に関する法律を遵守しなければなりません。
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
              当方ウェブサイト及び本サービスに関する所有権及び知的財産権は全て当方又は当方にライセンスを許諾している者に帰属しており、本規約に定める登録に基づく本サービスの利用許諾は、本規約において明示されているものを除き、当方ウェブサイト又は本サービスに関する当方又は当方にライセンスを許諾している者の知的財産権の譲渡又は使用許諾を意味するものではありません。オーガナイザーは、いかなる理由によっても当方又は当方にライセンス を許諾している者の知的財産権を侵害するおそれのある行為(逆アセンブル、逆コンパイル、リバースエンジニアリングを含みますが、これらに限定されません)をしないものとします。
            </li>
            <li className={s.terms_list_a_item}>
              当方ウェブサイト又は本サービスにおいて、オーガナイザーが投稿その他送信を行った文章、 画像、動画その他のデータについては、当方において、本サービスの宣伝又は広告に必要な範囲で、無償で利用(複製、複写、改変、第三者への再許諾その他のあらゆる利用を含みます)することができるものとします。
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
              当方は、オーガナイザーが、以下の各号のいずれかの事由に該当する場合は、事前に通知又は催告することなく、当該オーガナイザーについて本サービスの利用を一時的に停止し、又はオーガナイザーとしての登録を取り消すことができます。

              <ol className={s.sub_list}>
                <li className={s.sub_list_item}>
                  本規約のいずれかの条項に違反した場合
                </li>
                <li className={s.sub_list_item}>
                  登録情報に虚偽の事実があることが判明した場合
                </li>
                <li className={s.sub_list_item}>
                  当方、他のオーガナイザー、カスタマー、外部サービス事業者その他の第三者に損害を生じさせるおそれのある目的又は方法で本サービスを利用した、又は利用しようとした場合
                </li>
                <li className={s.sub_list_item}>
                  外部サービス規約に違反したことその他の理由によって、オーガナイザーが外部サービス事業者から、そのサービスの提供や連携を受けられなくなった場合
                </li>
                <li className={s.sub_list_item}>
                  手段を問わず、本サービスの運営を妨害した場合
                </li>
                <li className={s.sub_list_item}>
                  支払停止若しくは支払不能となり、又は破産手続開始、民事再生手続開始、会社更生手続開始、特別清算開始若しくはこれらに類する手続の開始の申立てがあった場合
                </li>
                <li className={s.sub_list_item}>
                  自ら振出し、若しくは引受けた手形若しくは小切手につき、不渡りの処分を受けた場合、又は手形交換所の取引停止処分その他これに類する措置を受けた場合
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
                  6ヶ月以上本サービスの利用がなく、当方からの連絡に対して応答がない場合
                </li>
                <li className={s.sub_list_item}>
                  第3条第3項各号に該当する場合
                </li>
                <li className={s.sub_list_item}>
                  その他、当方がオーガナイザーとしての登録の継続を適当でないと合理的に判断した場合
                </li>
              </ol>
            </li>
            <li className={s.terms_list_a_item}>
              前項各号のいずれかの事由に該当した場合、オーガナイザーは、当方に対して負っている債務の一切について当然に期限の利益を失い、直ちに当方に対して全ての債務の支払を行わなければなりません。
            </li>
            <li className={s.terms_list_a_item}>
              当方は、30日前までに当方所定の方法でオーガナイザーに通知することにより、オーガナイザーの登録を取り消すことができます。
            </li>
            <li className={s.terms_list_a_item}>
              当方は、本条に基づき当方が行った行為によりオーガナイザーに生じた損害について責任を負いません。
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
              オーガナイザーは、当方所定の手続により、オーガナイザーの登録を取り消すことができるものとします。
            </li>
            <li className={s.terms_list_a_item}>
              オーガナイザーが本条に規定に基づきオーガナイザーの登録を取り消した場合、当方は、当方の裁量により、当該オーガナイザーが本サービス上で保有していた情報及び成果物(オーガナイザーページ、カレンダー情報を含みますが、これらに限定されません)を削除することができるものとし、これによって当該オーガナイザーに生じた損害について責任を負わないものとします。
            </li>
          </ol>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第16条 保証の否認及び免責
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              本サービスは現状有姿で提供されるものであり、当方は本サービスについて、特定の目的への適合性、商業的有用性、完全性、継続性等を含め、保証をいたしません。
            </li>
            <li className={s.terms_list_a_item}>
              オーガナイザーが当方から直接又は間接に、本サービス、当方ウェブサイト、本サービスの他のオーガナイザーその他の事項に関する何らかの情報を得た場合であっても、当方はオーガナイザーに対し本規約において規定されている内容を超えていかなる保証もいたしません。
            </li>
            <li className={s.terms_list_a_item}>
              当方は、オーガナイザーが本サービスを利用する際に、コンピュータウィルス等有害なプログラム等による損害を受けないことを保証しないものとします。
            </li>
            <li className={s.terms_list_a_item}>
              当方は、オーガナイザーが本サービスを利用する際に使用するいかなる機器、ソフトウェアについても、その動作保証をしないものとします。
            </li>

            <li className={s.terms_list_a_item}>
              本サービスは、外部サービスと連携することがありますが、かかる連携を保証するものではなく、外部サービスとの連携の支障等について、当方の責に帰すべき場合を除き、当方は責任を負いません。
            </li>
            <li className={s.terms_list_a_item}>
              本サービスが外部サービスと連携している場合において、オーガナイザーは外部サービス規約を自己の責任で遵守するものとし、その違反によってオーガナイザーと当該外部サービスを運営する外部サービス事業者との間で紛争等が生じた場合でも、当方は当該紛争等について責任を負いません。
            </li>
            <li className={s.terms_list_a_item}>
              当方は、オーガナイザーが本サービスを利用することにより一定の売上を得ることができることを保証するものではありません。
            </li>
            <li className={s.terms_list_a_item}>
              オーガナイザーは、本サービスを利用するに当たっては、自己の責任において、当方ウェブサイト等において提示している利用方法を確認するものとし、オーガナイザーの操作ミスについて当方は責任を負わないものとします。
            </li>
            <li className={s.terms_list_a_item}>
              オーガナイザーは、本サービスを利用することが、オーガナイザーに適用のある法令、業界団体の内部規則等に違反するか否かを自己の費用と責任に基づいて調査するものとし、当方は、オーガナイザーによる本サービスの利用が、オーガナイザーに適用のある法令、業界団体の内部規則等に適合することを何ら保証するものではありません。
            </li>
            <li className={s.terms_list_a_item}>
              本サービス又は当方ウェブサイトに関連してオーガナイザーと他のオーガナイザー、カスタマー、外部サービス事業者その他第三者との間において生じた取引、連絡、紛争等については、オーガナイザーの責任において処理及び解決するものとし、当方の故意又は重過失による場合を除き、当方はかかる事項について責任を負いません。
            </li>
            <li className={s.terms_list_a_item}>
              オーガナイザーは、自己の費用と責任において、オーガナイザーサービスに関する情報等についてのバックアップをとらなければなりません。当方は、当方による本サービスの提供の中断、停止、終了、利用不能又は変更、オーガナイザーのメッセージ又は情報の削除又は消失、オーガナイザーの登録の取消、本サービスの利用によるデータの消失又は機器の故障若しくは損傷、そ の他本サービスに関連してオーガナイザーが被った損害につき、当方の故意又は重過失による場合を除き、 賠償する責任を負わないものとします。
            </li>
            <li className={s.terms_list_a_item}>
              当方ウェブサイトから他のウェブサイトへのリンク又は他のウェブサイトから当方ウェブサイトへのリンクが提供されている場合でも、当方は、当方ウェブサイト以外のウェブサイト及びそこから得られる情報に関して、当方の故意又は重過失による場合を除き、責任を負わないものとします。
            </li>
            <li className={s.terms_list_a_item}>
              当方は、当方の合理的な支配の及ばない状況(火事、停電、ハッキング、コンピューター・ウィルスの侵入、地震、洪水、戦争、疫病、通商停止、ストライキ、暴動、物資及び輸 送施設の確保不能、政府当局若しくは地方自治体による介入、指示若しくは要請、又は内外法令の制定若しくは改廃を含みますが、これらに限定されません)により利用契約上の義務を履行できない場合、その状態が継続する期間中オーガナイザーに対し債務不履行責任を負わないものとします。
            </li>
            <li className={s.terms_list_a_item}>
              当方がオーガナイザーに対して損害賠償責任を負う場合においても、当方に故意又は重大な過失があるときを除き、当方の賠償責任は、直接かつ通常の損害に限り、 逸失利益等の間接的な損害を含まないものし、また、1万円を上限とします。
            </li>
          </ol>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第17条 オーガナイザーの賠償等の責任
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              オーガナイザーは、本規約に違反することにより、又は本サービスの利用に関連して当方に損害を与えた場合、当方に対しその損害を賠償しなければなりません。
            </li>
            <li className={s.terms_list_a_item}>
              オーガナイザーが、本サービスに関連して他のオーガナイザー、カスタマー、外部サービス事業者その他の第三者からクレームを受け又はそれらの者との間で紛争を生じた場合には、直ちにその内容を当方に通知するとともに、オーガナイザーの費用と責任において当該クレーム又は紛争を処理し、当方からの要請に基づき、その経過及び結果を当方に報告するものとします。
            </li>
            <li className={s.terms_list_a_item}>
              オーガナイザーによる本サービスの利用に関連して、当方が、他のオーガナイザー、カスタマー、外部サービス事業者その他の第三者から権利侵害その他の理由により何らかの請求を受けた場合は、オーガナイザーは当該請求に基づき当方が当該第三者に支払を余儀なくされた金額を賠償しなければなりません。
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
              本規約において「秘密情報」とは、利用契約又は本サービスに関連して、オーガナイザーが、 当方より書面、口頭若しくは記録媒体等により提供若しくは開示されたか、又は知り得た、 当方の技術、営業、業務、財務、組織、その他の事項に関する全ての情報を意味します。ただし、個人情報以外の情報であって、以下の各号に該当する情報を除きます。

              <ol className={s.sub_list}>
                <li className={s.sub_list_item}>
                  当方から提供若しくは開示がなされたとき又は知得したときに、既に一般に公知となっていた、又は既に知得していたもの
                </li>
                <li className={s.sub_list_item}>
                  当方から提供若しくは開示又は知得した後、オーガナイザーの過失によらずに、刊行物その他により公知となったもの
                </li>
                <li className={s.sub_list_item}>
                  提供又は開示の権限のある第三者から秘密保持義務を負わされることなく適法に取得したもの
                 </li>
                <li className={s.sub_list_item}>
                  秘密情報によることなく単独で開発したもの
                </li>
              </ol>
            </li>
            <li className={s.terms_list_a_item}>
              オーガナイザーは、秘密情報を本サービスの利用の目的のみに利用するとともに、当方の書面による承諾なしに第三者に当方の秘密情報を提供、開示又は漏洩しないものとします。
            </li>
            <li className={s.terms_list_a_item}>
              第2項の定めにかかわらず、オーガナイザーは、法律、裁判所又は政府機関の命令、要求又は要請に基づき、秘密情報を開示することができます。ただし、当該命令、要求又は要請があった場合、事前にその旨を当方に通知しなければなりません。
            </li>
            <li className={s.terms_list_a_item}>
              オーガナイザーは、当方から求められた場合にはいつでも、遅滞なく、当方の指示に従い、秘密情報並びに秘密情報を記載又は包含した書面その他の記録媒体物及びその全ての複製物を返却又は廃棄しなければなりません。
            </li>
          </ol>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第19条 有効期間
            </div>
          </div>
          <ol className={s.terms_list_a}>
            <li className={s.terms_list_a_item}>
              利用契約は、オーガナイザーについて第3条に基づく登録が完了した日から当該オーガナイザーの登録が取り消された日又は本サービスの提供が終了した日のいずれか早い日まで、当方とオーガナイザーとの間で有効に存続するものとします。
            </li>
            <li className={s.terms_list_a_item}>
              前項にかかわらず、5条3項、7条6項、11条3項、13条2項、14条4項、15条2項、16条乃至19条及び22条から24条は利用契約の終了後も有効に存続するものとします。
            </li>
          </ol>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_title}>
            <div className={s.terms_row_title_text}>
              第20条 本規約等の変更
            </div>
          </div>
          <div className={s.terms_row_description}>
            <div className={s.terms_row_description_text}>
              当方は、当方が必要と認めた場合は、本規約を変更できるものとします。本規約を変更する場合、変更後の本規約の施行時期及び内容を当方ウェブサイト上での掲示その他の適切な方法により周知し、又はオーガナイザーに通知します。ただし、法令上オーガナイザーの同意が必要となるような内容の変更の場合は、当方所定の方法でオーガナイザーの同意を得るものとします。
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
              本サービスに関する問い合わせその他オーガナイザーから当方に対する連絡又は通知、及び本規約の変更に関する通知その他当方からオーガナイザーに対する連絡又は通知は、当方の定める方法で行うものとします。
            </li>
            <li className={s.terms_list_a_item}>
              当方が登録事項に含まれるメールアドレスその他の連絡先に連絡又は通知を行った場合、オーガナイザーは当該連絡又は通知を受領したものとみなします。
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
              オーガナイザーは、当方の書面による事前の承諾なく、利用契約上の地位又は本規約に基づく権利若しくは義務につき、第三者に対し、譲渡、移転、担保設定、その他の処分をすることはできません。
            </li>
            <li className={s.terms_list_a_item}>
              当方は本サービスにかかる事業を第三者に譲渡した場合には、当該事業譲渡に伴い利用契約上の地位、本規約に基づく権利及び義務並びにオーガナイザーの登録事項その他の顧客情報を当該事業譲渡の譲受人に譲渡することができるものとし、オーガナイザーは、かかる譲渡につき本項において予め同意したものとします。なお、本項に定める事業譲渡には、通常の事業譲渡のみならず、会社分割その他事業が移転するあらゆる場合を含むものとします。
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
              第24条 準拠法及び管轄裁判所
            </div>
          </div>
          <div className={s.terms_row_description}>
            <div className={s.terms_row_description_text}>
              利用契約は、ユーザーについて第3条に基づく登録が完了した日から当該ユーザーの登録が取り消された日又は本サービスの提供が終了した日のいずれか早い日まで、当方とユーザーとの間で有効に存続するものとします。
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
              第25条 協議解決
            </div>
          </div>
          <div className={s.terms_row_description}>
            <div className={s.terms_row_description_text}>
              当方及びオーガナイザーは、本規約に定めのない事項又は本規約の解釈に疑義が生じた場合には、互いに信義誠実の原則に従って協議の上速やかに解決を図るものとします。
            </div>
          </div>
        </div>

        <div className={s.terms_row}>
          <div className={s.terms_row_description}>
            <div className={s.terms_row_description_text}>
              2022年6月30日制定
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default TermsScreen;