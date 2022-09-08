import SidebarComponent from './SidebarComponent'
import FeedComponent from './FeedComponent'

const PigtterComponent = ({setUser}) => {
    return(
            <div className="container">
             <div className="row">
                 <div className="col-md-4 col-sm-5 col-4">
                     <SidebarComponent setUser={setUser} />
                 </div>
                 <div className="col-md-8 col-sm-7 col-8">
                     <FeedComponent />
                 </div>
             </div>
         </div>
    )

}

export default PigtterComponent