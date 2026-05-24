"use client";

import { personalData } from "@/../src/utils/Data/PersonalData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import Link from "next/link";
import { useRef } from "react";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

import Tilt from "react-parallax-tilt";

const HeroSection = () => {
  const containerRef =
    useRef<HTMLDivElement>(null);

  const designationRef =
    useRef<HTMLElement>(null);

  const codeCardRef =
    useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(
        SplitText
      );

      const titles =
        personalData.designationAlternateWords;

      let index = 0;

      const introTl =
        gsap.timeline();

      introTl
        .fromTo(
          ".hero-tag",

          {
            opacity: 0,
            x: -20,
          },

          {
            opacity: 1,
            x: 0,
            duration: 0.8,
          }
        )

        .fromTo(
          ".hero-heading",

          {
            opacity: 0,
            scale: 0.95,
          },

          {
            opacity: 1,
            scale: 1,
            duration: 1,
          },

          "-=0.5"
        )

        .fromTo(
          ".hero-cta",

          {
            opacity: 0,
            y: 20,
          },

          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
          },

          "-=0.6"
        )

        .fromTo(
          codeCardRef.current,

          {
            opacity: 0,
            x: 50,
          },

          {
            opacity: 1,
            x: 0,
            duration: 1.2,
          },

          "-=1"
        );

      const runDesignationAnimation =
        () => {
          const el =
            designationRef.current;

          if (!el) return;

          const tl =
            gsap.timeline({
              onComplete:
                () => {
                  index =
                    (index + 1) %
                    titles.length;

                  runDesignationAnimation();
                },
            });

          el.textContent =
            titles[index];

          const split =
            new SplitText(
              el,

              {
                type:
                  "chars",
              }
            );

          tl.from(
            split.chars,

            {
              opacity: 0,

              y: 10,

              rotateX: -90,

              stagger: 0.04,

              duration: 0.6,
            }
          )

          .to(
            split.chars,

            {
              opacity: 0,

              y: -10,

              rotateX: 90,

              stagger: 0.02,

              duration: 0.5,

              delay: 2,

              onComplete:
                () =>
                  split.revert(),
            }
          );
        };

      runDesignationAnimation();

      gsap.to(
        ".social-icon",

        {
          y: -5,

          duration: 2,

          repeat: -1,

          yoyo: true,

          stagger: 0.2,
        }
      );
    },

    {
      scope:
        containerRef,
    }
  );

  return (
    <section
      ref={containerRef}
      className="
      relative

      min-h-[90vh]

      flex

      items-center

      justify-center

      overflow-hidden
      "
    >

      <div className="
      grid

      grid-cols-1

      lg:grid-cols-2

      gap-12

      items-center

      max-w-7xl

      mx-auto

      px-4
      ">

        <div>

          <span className="
          hero-tag

          px-4

          py-2

          rounded-full

          bg-red-500/10

          border

          border-red-500/20

          text-red-500
          ">

            WELCOME TO MY UNIVERSE

          </span>

          <h1 className="
          hero-heading

          text-5xl

          md:text-6xl

          lg:text-7xl

          font-black
          ">

            Crafting

            <span className="
            text-transparent

            bg-clip-text

            bg-gradient-to-r

            from-red-500

            to-red-800
            ">

              {" "}Digital

            </span>

            <br/>

            <span className="
            text-transparent

            bg-clip-text

            bg-gradient-to-r

            from-red-800

            to-red-950
            ">

              Masterpieces

            </span>

          </h1>

          <p className="
          text-slate-400

          mt-6
          ">

            I'm

            <span className="
            text-white
            ">

              {" "}
              {personalData.name}

            </span>

            <span
              ref={
                designationRef
              }

              className="
              text-red-500

              ml-2
              "
            />

          </p>

        </div>

        <div>

          <Tilt>

            <div
              ref={codeCardRef}

              className="
              rounded-3xl

              border

              border-white/10

              bg-[#050505]/80

              p-10
              "
            >

              <pre>

{`const developer = {

name:'Shekhar Singh',

focus:'MERN + DSA',

skills:[
'React',
'Node',
'MongoDB'
],

passionate:true,

motto:'Keep Building'

};

developer.showcase();
`}

              </pre>

            </div>

          </Tilt>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;