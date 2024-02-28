import React from "react";
import Subscribe from "../components/Subscribe";
import '../index.css';

const Services = () => {
  return (
    <div className="h-full">
      <Subscribe />

      <div className="w-4/5 m-auto overflow-auto">
        <article className="float-left w-[65%]">
          <h1 className="page-title text-2xl font-bold">Services</h1>
            <ul id="services" className="">
              <li className="p-5 mb-[5px] bg-[#e6e6e6] border-solid border-2">
                <h3 className="bg-[#e6e6e6] font-extrabold">Website Design</h3>
                <p className="bg-[#e6e6e6]">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Repudiandae iure officia optio provident quam ex.
                </p>
                <p className="bg-[#e6e6e6]">Pricing: $1000 - $3000</p>
              </li>
              <li className="p-5 mb-[5px] bg-[#e6e6e6] border-solid border-2">
              <h3 className="bg-[#e6e6e6] font-extrabold">Website Maintenance</h3>
              <p className="bg-[#e6e6e6]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Hic, minus obcaecati necessitatibus veritatis corporis consectetur!
                </p>
                <p className="bg-[#e6e6e6]">Pricing: $25 per month</p>
              </li>
              <li className="p-5 mb-[5px] bg-[#e6e6e6] border-solid border-2">
              <h3 className="bg-[#e6e6e6] font-extrabold">Website Hosting</h3>
              <p className="bg-[#e6e6e6]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Hic, minus obcaecati necessitatibus veritatis corporis consectetur!
                </p>
                <p className="bg-[#e6e6e6]">Pricing: $25 per month</p>
              </li>
            </ul>
        </article>

        <aside className="float-right w-[30%] mt-8 bg-[#35424a]">
          <div className="p-4 bg-[#35424a] text-[#ffffff] my-2.5">
            <h3 className="bg-[#35424a]">Get A Quote</h3>
            <form className="quote " >
              <div className="bg-[#35424a]">
                <label className="bg-[#35424a]">Name</label>
                <br />
                <input type="text" placeholder="Name" className="w-[90%] p-[5px] " />
                <div className="bg-[#35424a]">
                <label className="bg-[#35424a]">Email</label>
                  <br />
                  <input type="email" placeholder="Email Address" className="w-[90%] p-[5px]" />
                </div>
                <div className="bg-[#35424a]">
                <label className="bg-[#35424a]">Message</label>
                  <br />
                  <textarea placeholder="Message" className="w-[90%] p-[5px]"></textarea>  
                </div>  
                <button className="h-[38px] bg-red-500 hover:bg-red-700 border-0 px-5 text-[#ffffff]" type="submit">
                  Send
                </button>
              </div>  
            </form>  
          </div> 
        </aside>
      </div>
    </div>
  )
}
export default Services;