import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../Lib/gtag'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="robots" content="index"/>
                    <meta name="keywords" content="UnEncrypted, Reda BELHAJ, Next.JS, Blog, PortFolio, WriteUps, Walkthrough, CTF, Reda, BELHAJ, Github, Vercel, UIR, Universite Internationale de Rabat, Training, Courses, Challenges, Git, Examples" />
                    <meta name="author" content="Reda BELHAJ" />
                    <link rel="apple-touch-icon" href="/favicon.ico" />
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_TRACKING_ID}', {
                        page_path: window.location.pathname,
                        });
                    `,
                        }}
                    />
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