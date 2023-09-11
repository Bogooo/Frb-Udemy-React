import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImg from './images/alexa.png';
import CortanaImg from './images/cortana.png';
import SiriImg from './images/siri.png';
function App(){

    return(
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">
                        Personal Digital Assistants
                    </p>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-3">
                            <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImg} description="alexa by amazon"/>
                        </div>

                        <div className="column is-3">
                            <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImg} description="cortana by microsoft"/>
                        </div>

                        <div className="column is-3">
                            <ProfileCard title="Siri" handle="@siri01" image={SiriImg} description="siri by apple"/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;