import Button from "./Button";
import MyPhoto from "./assets/hero.jpg"
const Hero = () => {
  return (
    <div className="flex justify-center items-center flex-col space-y-2">
        <img src={MyPhoto} className="h-32 rounded-full" alt=""/>
        <h1 className="font-extrabold text-gray-900" >Hi! I am Prajwal Sharma</h1>
        <h1 className="font-medium text-gray-800">Game Developer</h1>
        <p className="mx-8 font-extralight font-serif text-gray-800 text-justify border-gray-200 border-2 rounded-2xl py-1 px-1 ">I am a game developer with a passion for creating immersive and engaging experiences. My journey began with a fascination for video games and the worlds they build, leading me to pursue a career in game development. Over the years, I have honed my skills in various programming languages, game engines, and design principles
        </p>
      <div className="flex gap-4">
        <Button title="Contact Me" type="orange" icon="contact" />

        <Button title="My Projects" type="blue" icon="github" />
      </div>
    </div>
  );
};
export default Hero;
