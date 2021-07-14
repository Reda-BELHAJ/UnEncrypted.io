
const Helmet = ({title, description, imageURL, imageALT, url}) => {

    return (
        <>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageURL}/>
            <meta property="og:url" content={url}/>
            <meta name="twitter:card" content="summary_large_image" />

            <meta property="og:site_name" content="UnEncrypted." />
            <meta name="twitter:image:alt" content={imageALT} />

            <meta name="twitter:site" content="UnEncrypted." />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:creator" content="@RedaBELHAJ" />
            <meta name="twitter:image" content={imageURL} />
        </>
    )
}

export default Helmet
