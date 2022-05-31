import Head from "next/head";

import Main from "../components/main/Main";

import type { GetServerSideProps, NextPage } from "next";
export async function getServerSideProps(context: GetServerSideProps) {
    return {
        props: {}
    };
}

const Artwork: NextPage = (props: any) => {
    return (
        <div className="h-screen">
            <Head>
                <title>patrick's collections</title>
                <meta name="description" content="Geometric Arts by Patrick Thach and others" />
                <meta name="keywords" content="Geometric Arts" />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main {...props} />
        </div>
    );
};

export default Artwork;
