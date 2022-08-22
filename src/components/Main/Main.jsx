import Head from "../Head/Head";
import Project from "../Project/Project";
import ViewBoard from "../ViewBoard/ViewBoard";
import "./Main.scss"

const Main = () => {

    return(
        <div className="Main">
            <Head />
            <ViewBoard />
            <Project />
        </div>
    )
}

export default Main;