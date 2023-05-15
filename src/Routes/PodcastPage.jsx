import Podcast from "../Components/Podcast";
import Podcast_Info from "./Podcast_Info";

export default function PodcastPage(){
    return(
        <div className="Contain">
          <div class="ui grid" style={{paddingTop: "127px", backgroundImage: "url('../../public/background.svg')", paddingBottom:"100px"}}>
          <div class="ui centered row" style={{backgroundImage: "url('../../public/background.svg')", width: "100%"}}>
            <h1 class="ui centered header" style={{ width: "80%"}}>
              Podcast Series!
              <div
                class="ui divider"
                style={{ marginTop: ".25rem", marginBottom: ".5rem" }}
              ></div>

              <div class="Text">
                In our podcast series, we'll interview undergraduate students from the ECE majors about their experiences in 
                the major as well as extracurricular activities that they did during their time in college. Whether you're 
                studying electrical engineering, planning on transferring to ECE, or simply curious about what’s going on in 
                our major, this podcast is for you! So sit back, relax, and join us as we explore the world of electrical engineering.
              </div>
              
            </h1>
          { Podcast_Info.map( pi =>
            <Podcast {...pi} />
          )}
          </div>
          </div>
          
        </div>
    )
}