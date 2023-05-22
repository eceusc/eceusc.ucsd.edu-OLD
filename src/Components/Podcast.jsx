export default function Podcast( {episode, guest, description, url } ){
    return(
        <div style = {{ flexBasis: "47%", border: 'solid', height: 480, margin: 10, backgroundColor: 'white', borderRadius: 5 }} >
            <h2 style= {{ marginBottom: 0, marginTop: 20 }}>EP{episode}: {guest}</h2>
            <h3 style = {{ textAlign: 'center', width: '80%', height: '20%', fontSize: '1rem', marginBotton: 10, marginTop: 5, marginLeft:'auto', marginRight: 'auto'}}>{ description }</h3>
            <iframe width="500" height="280" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style = {{ paddingBottom: 20 }}></iframe>
        </div>
    )
}
