import welcomeImage from "../assets/images/welcome-image.png"


export default function Welcome () {
    return(

        <div className="bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url('./assets/images/bgimage.png')] bg-cover bg-center h-screen flex flex-col place-items-center place-content-center">
            <h1 className="text-white text-center text-4xl">Savory & Sweet</h1>
           < img src={welcomeImage} alt="WelcomeImage"/>
        </div>
    )
}