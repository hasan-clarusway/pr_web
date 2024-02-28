import html from "../assets/html.png";
import css from "../assets/css.png";
import logo from "../assets/brush.png";
import Card from "../components/Card";
import Subscribe from "../components/Subscribe";
import '../index.css';

const Home = () => {
  return (
    <div className='h-full'>
      <section className="min-h-[400px] text-center bg-no-repeat bg-center
        bg-cover bg-[url('./assets/showcase.jpg')]">

        <div className="w-4/5 m-auto overflow-hidden bg-transparent ">
          
          <h1 className="mt-24 text-6xl font-bold mb-2.5 text-[#ffffff] bg-transparent">Proffessional Web Design</h1>
          <p className="text-[20px] font-bold text-[#ffffff] bg-transparent">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Explicabo dicta culpa fugiat eum sapiente architecto excepturi, 
            consequatur animi deserunt nisi.
          </p>
 z       </div>
      </section>
      <Subscribe />
      <section className="mt-[20px] ">
        <div className="w-4/5 m-auto overflow-hidden bg-transparent ">
          <Card className=" " src={html} title="HTML Markup" url="html" />
          <Card src={css} title="CSS3 styling" url="css" />
          <Card src={logo} title="Graphic Design" url="logo" />
        </div>
      </section>
    </div>
  )
}

export default Home