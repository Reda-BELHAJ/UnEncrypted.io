import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="robots" content="index"/>
                    <meta name="keywords" content="UnEncrypted, Reda BELHAJ, Next.JS, Blog, PortFolio, WriteUps, Walkthrough, CTF, Reda, BELHAJ" />
                    <meta name="author" content="Reda BELHAJ" />
                    <link rel="apple-touch-icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;