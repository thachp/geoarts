import Head from "next/head";

import Me from "../components/about/me";

import type { GetServerSideProps, NextPage } from "next";
export async function getServerSideProps(context: GetServerSideProps) {
    return {
        props: {}
    };
}

const About: NextPage = (props: any) => {
    return (
        <div className="h-screen">
            <Head>
                <title>patrick's collections - about me</title>
                <meta name="description" content="Geometric Arts by Patrick Thach and others" />
                <meta name="keywords" content="Geometric Arts" />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Me {...props} />
        </div>
    );
};

export default About;
