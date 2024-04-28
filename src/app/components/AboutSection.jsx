"use client";
import React,{useState, useTransition} from 'react'
import Image from "next/image";
import { TabButton } from './TabButton';

const TAB_DATA=[
{
  title:"Skills",
  id:"skills",
  content:(
    <ul className="list-disc pl-2">
      <li>Node.js</li>
      <li>Python</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>C#</li>
      <li>NoSQL</li>
    </ul>
  )
},
{
  title:"Certification",
  id:"certification",
  content:(
    <ul className="list-disc pl-2">
  <li>harvard ML scientist</li>
    </ul>
)
},
{title:"Education",
id:"education",
content:(
  <ul className="list-disc pl-2">
    <li>ESILV</li>
  </ul>
)},
  
];

const AboutSection = () => {
  const [tab,setTab] = useState("certification");
  const [isPending,startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() =>{
      setTab(id);
    }
  )
  }

  return (
    <section className ='text-white'>
            <div className = 'md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-4'>
            <Image src="/images/about-image.png" width={500} height={500}/>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
              <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
              <p className = " text-base lg:text-lg"> I am a full stack web developer with a passion for creating interactive and responsive web app</p>
            <div className = 'flex flex-row mt-8 justify-start'>
            <TabButton
            selectTab={() => handleTabChange("skills")} active={tab==="skills"}>Skills</TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab==="education"}>education</TabButton>
            <TabButton selectTab={() => handleTabChange("certification")} active={tab==="certification"}>certification</TabButton>

            </div>
            <div className={"mt-8"}>
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
            </div>
            </div>
        </section>
  )
}

export default AboutSection