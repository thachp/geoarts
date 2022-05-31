import Head from "next/head";

import { GalleryContent } from "../components/gallery/Gallery.content";

import type { GetServerSideProps, NextPage } from "next";
export async function getServerSideProps(context: GetServerSideProps) {
    return {
        props: {}
    };
}

const Gallery: NextPage = (props: any) => {
    return (
        <div className="h-screen">
            <Head>
                <title>patrick's collections - gallery of geometric arts</title>
                <meta name="description" content="Geometric Arts by Patrick Thach and others" />
                <meta name="keywords" content="Geometric Arts" />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <GalleryContent {...props} />
        </div>
    );
};

export default Gallery;
