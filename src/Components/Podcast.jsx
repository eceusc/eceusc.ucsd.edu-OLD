export default function Podcast( {episode, host, guest, description, url } ){
    return(
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <h2 style= {{ marginBottom: 0, marginTop: 20 }}>EP{episode}: {guest}</h2>
            <h3 style = {{ marginTop: 0 }}>Host by {host} </h3>
            <iframe width="560" height="315" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h4 style = {{ width: '60vw', fontSize: '1.3rem' }}>{ description }</h4>
        </div>
    )
}
