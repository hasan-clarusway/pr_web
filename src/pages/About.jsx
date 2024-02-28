import React from "react";
import Subscribe from "../components/Subscribe";
import '../index.css';

const About = () => {
  return (
    <div className="h-full">
      <Subscribe />

      <section className="mt-20 p-12">
        <div className="w-4/5 m-auto overflow-hidden">
          <article className="float-left w-[65%]">
            <h1 className="font-bold text-2xl ">About Us</h1>
            <p className="mt-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              varius auctor lacus nec feugiat.
            </p>
            <p className="p-4 bg-[#35424a] text-[#ffffff] my-2">
              Aliquam eget pharetra diam. Nulla placerat lorem at turpis tempor,
              vel ultrices dui tincidunt.
            </p>
          </article>

          <aside className="float-right w-[30%] mt-7 ">
            <div className="p-4 bg-[#35424a] text-[#ffffff] my-1">
              <h3 className="bg-[#35424a] text-2xl">What We Do</h3>
              <p className="bg-[#35424a]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                varius auctor lacus nec feugiat.
              </p>
            </div>
          </aside>
        </div>
        <br />
      </section>
    </div>
  );
};
export default About;