

const Helmet = ({title, description, imageURL, imageALT}) => {
    return (
        <>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageURL}/>
            <meta property="og:url" content={window.location.href}/>
            <meta name="twitter:card" content="summary_large_image" />

            <meta property="og:site_name" content="European Travel, Inc." />
            <meta name="twitter:image:alt" content={imageALT} />
        </>
    )
}

export default Helmet
