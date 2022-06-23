import React from 'react'
import Head from 'next/head'

const CustomHead = ({
    children
}) => {
    return (
        <Head>
            <link rel="icon" href="/favicon.ico" />
            {children}
        </Head>
    )
};

export default CustomHead;