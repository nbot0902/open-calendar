import React from 'react'
import Head from 'next/head'
import C from '../../constants'
import defaultOgpImg from '../../public/images/default_ogp_img.png'

const CustomHead = ({
    pageTitle = "不明",
    pageDescription = "不明",
    pagePath = "/",
}) => {
    const defaultTitle = 'demo'
    const defaultDescription = 'demo'

    const title = pageTitle
    const description = pageDescription ? pageDescription : defaultDescription
    const url = `${C.SERVICE_FULL_URL}${pagePath}`
    const imgUrl = defaultOgpImg
    const imgWidth = 1280
    const imgHeight = 630

    return (
        <Head>
            <title>{title}</title>
            <description>{description}</description>
            <meta name="viewport" content="width=device-width,initial-scale=1.0" />
            <meta name="description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:site_name" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={imgUrl} />
            <meta property="og:image:width" content={String(imgWidth)} />
            <meta property="og:image:height" content={String(imgHeight)} />
            <link rel="icon" href="/favicon.ico" />
            <link rel="canonical" href={url} />
        </Head>
    )
};

export default CustomHead;