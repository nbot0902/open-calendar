import React from 'react'
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux'
import Head from 'next/head'

import A from "../../../actions";
import common from '../../../styles/common.module.scss'

const SettingScreen = () => {
    const router = useRouter();
    const { articleId } = router.query;

    const dispatch = useDispatch()
    const article = useSelector((state) => state.article)
    const articleData = article.hash[articleId] ?? null

    const [isActive, setIsActive] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)

    const _onOpenCreateModal = () => {
        setIsActive(true)
    }

    const _onCloseModal = () => {
        A.cleanFormPostArticleState({ dispatch });
        setIsActive(false)
    }

    React.useLayoutEffect(() => {
        try {
            A.getArticleDispatch({ dispatch, articleId: articleId })
            setIsLoading(false);
        } catch (_error) {
            setIsLoading(false);
        }
    }, [])

    return React.useMemo(() => {
        if (!articleData) {
            return <div></div>
        }

        return (
            <div className={common.wrapper}>
                <Head>
                    <title>JUIZ</title>
                    <meta name="description" content="説明文が入ります" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header />
                <Footer />
            </div>
        );
    }, [articleData, isActive])
};

// export const getServerSideProps = async (ctx) => {
//     return null
// };

export default SettingScreen