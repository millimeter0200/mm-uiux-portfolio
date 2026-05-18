import { useState } from "react";

import profile from "./assets/profile.png";

import uiuxIcon from "./assets/uiux.png";
import developmentIcon from "./assets/development.png";
import otherIcon from "./assets/other.png";

import emailIcon from "./assets/email.png";
import facebookIcon from "./assets/facebook.png";
import discordIcon from "./assets/discord.png";
import linkedinIcon from "./assets/linkedin.png";
import clockIcon from "./assets/clock.png";
import calendarIcon from "./assets/calendar.png";

import mycondoImg from "./assets/mycondo.png";
import boocasImg from "./assets/boocas.png";
import dashboardImg from "./assets/dashboard.png";
import upvdogtrackerImg from "./assets/upvdogtracker.png";
import dpwhImg from "./assets/dpwh.png";
import upvlmsImg from "./assets/upvlms.png";
import upvcrsImg from "./assets/upvcrs.png";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Left Glow */}
      <div
        className="
          absolute
          -left-40
          bottom-0
          w-[600px]
          h-[600px]
          rounded-full
          bg-pink-500/20
          blur-[160px]
        "
      />

      {/* Right Glow */}
      <div
        className="
          absolute
          right-[-100px]
          top-[180px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-fuchsia-500/20
          blur-[140px]
        "
      />

      {/* Center Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[700px]
          h-[700px]
          rounded-full
          bg-purple-500/10
          blur-[180px]
        "
      />

      {/* Tunnel Rings */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">

        <div className="relative w-[900px] h-[900px]">

          <div className="absolute inset-0 rounded-full border border-pink-500/30"></div>

          <div className="absolute inset-[80px] rounded-full border border-pink-500/20"></div>

          <div className="absolute inset-[160px] rounded-full border border-pink-500/20"></div>

          <div className="absolute inset-[240px] rounded-full border border-pink-500/20"></div>

        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10">

        {/* Navbar */}
        <nav
          className="
            flex
            justify-between
            items-center
            px-10
            py-0
            border-b
            border-pink-500/20
            bg-black
            fixed
            top-0
            left-0
            w-full
            z-50
          "
        >

          <h1 className="text-2xl font-bold tracking-wide pl-10">
            MAE MARICAR’S PORTFOLIO ✦
          </h1>

          {/* STATUS */}
          <div className="flex items-center gap-3 mb-10 translate-y-5">

            <div className="w-4 h-4 rounded-full bg-pink-400 animate-pulse"></div>

            <p className="text-lg text-pink-300 font-medium">
              Available for internships
            </p>

          </div>

        </nav>

        {/* HERO SECTION */}
        <section
          className="
            max-w-7xl
            mx-auto
            px-10
            pt-25
            pb-10
            grid
            md:grid-cols-2
            gap-10
            items-center
          "
        >

          {/* LEFT */}
          <div className="pl-10">

            <h1 className="font-black leading-[0.95]">

              <span className="text-[40px] text-white">
                Hello, I'm
              </span>

              <br />

              <span className="text-[72px] text-pink-400 whitespace-nowrap">
                MAE MARICAR
              </span>

            </h1>

            <p className="text-2xl text-gray-300 leading-relaxed max-w-xl mt-8 mb-12">
              A Computer Science student and UI/UX enthusiast
              exploring the intersection of design, usability,
              and front-end development.
            </p>

            <div className="flex items-center gap-6 mt-10">

              <button
                className="
                  px-8 py-4
                  rounded-full
                  border border-pink-500
                  text-pink-400
                  font-bold
                  text-xl
                  shadow-[0_0_25px_rgba(255,0,128,0.5)]
                  hover:scale-105
                  transition-all duration-300
                "
              >
                View Projects
              </button>

              <a
                href="https://github.com/millimeter0200"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-8 py-4
                  rounded-full
                  border border-pink-500
                  text-pink-400
                  font-bold
                  text-xl
                  shadow-[0_0_25px_rgba(255,0,128,0.5)]
                  hover:scale-105
                  transition-all duration-300
                "
              >
                View GitHub Repo
              </a>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center">

            <img
              src={profile}
              alt="profile"
              className="
                w-[520px]
                object-contain
              "
            />

          </div>

        </section>

        {/* ABOUT + SKILLS */}
        <section className="max-w-7xl mx-auto px-16 relative">

          <div className="grid md:grid-cols-2 gap-24 items-center">

            {/* LEFT SIDE */}
            <div>

              {/* Heading */}
              <div className="flex items-center gap-6 mb-6">

                <h2 className="text-6xl font-black text-pink-400">
                  ABOUT ME
                </h2>

              </div>

              {/* About Cards */}
              <div className="space-y-5">

                {/* Card 1 */}
                <div
                  className="
                    group
                    w-[500px]
                    border
                    border-pink-500/20
                    bg-black/30
                    backdrop-blur-xl
                    rounded-[28px]
                    p-4
                    hover:border-pink-400
                    transition-all
                    duration-300
                  "
                >

                  <div className="flex items-start gap-5">

                    <div
                      className="
                        w-6
                        h-7
                        rounded-full
                        bg-pink-400
                        mt-1
                        shadow-[0_0_20px_rgba(236,72,153,0.9)]
                      "
                    ></div>

                    <div>

                      <p className="text-pink-300 text-sm tracking-[0.3em] mb-3">
                        EDUCATION
                      </p>

                      <p className="text-lg text-gray-100 leading-relaxed">
                        Currently studying Computer Science at the
                        University of the Philippines Visayas.
                      </p>

                    </div>

                  </div>

                </div>

                {/* Card 2 */}
                <div
                  className="
                    group
                    w-[500px]
                    border
                    border-pink-500/20
                    bg-black/30
                    backdrop-blur-xl
                    rounded-[28px]
                    p-4
                    hover:border-pink-400
                    transition-all
                    duration-300
                  "
                >

                  <div className="flex items-start gap-5">

                    <div
                      className="
                        w-6
                        h-7
                        rounded-full
                        bg-pink-400
                        mt-1
                        shadow-[0_0_20px_rgba(236,72,153,0.9)]
                      "
                    ></div>

                    <div>

                      <p className="text-pink-300 text-sm tracking-[0.3em] mb-3">
                        INTERESTS
                      </p>

                      <p className="text-lg text-gray-100 leading-relaxed">
                        Interested in UI/UX design, front-end
                        development, and creating engaging
                        digital experiences.
                      </p>

                    </div>

                  </div>

                </div>

                {/* Card 3 */}
                <div
                  className="
                    group
                    w-[500px]
                    border
                    border-pink-500/20
                    bg-black/30
                    backdrop-blur-xl
                    rounded-[28px]
                    p-4
                    hover:border-pink-400
                    transition-all
                    duration-300
                  "
                >

                  <div className="flex items-start gap-5">

                    <div
                      className="
                        w-6
                        h-7
                        rounded-full
                        bg-pink-400
                        mt-1
                        shadow-[0_0_20px_rgba(236,72,153,0.9)]
                      "
                    ></div>

                    <div>

                      <p className="text-pink-300 text-sm tracking-[0.3em] mb-3">
                        EXPERIENCE
                      </p>

                      <p className="text-lg text-gray-100 leading-relaxed">
                        Worked on redesign concepts,
                        dashboard systems, and responsive
                        interfaces focused on usability.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="relative">

              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  bg-pink-500/20
                  blur-[120px]
                  rounded-full
                "
              ></div>

              {/* Main Tech Card */}
              <div
                className="
                  relative
                  w-[590px]
                  h-[540px]
                  -ml-15
                  mt-10
                  border
                  border-pink-500/30
                  rounded-[36px]
                  bg-black/40
                  backdrop-blur-2xl
                  overflow-hidden
                  shadow-[0_0_60px_rgba(236,72,153,0.15)]
                "
              >

                {/* Top Bar */}
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    px-8
                    py-5
                    border-b
                    border-pink-500/20
                  "
                >

                  <div className="w-4 h-4 rounded-full bg-pink-400"></div>
                  <div className="w-4 h-4 rounded-full bg-pink-400/60"></div>
                  <div className="w-4 h-4 rounded-full bg-pink-400/30"></div>

                  <p className="text-3xl font-black leading-none mb-1">
                    Skills & Expertise
                  </p>

                </div>

                {/* Content */}
                <div className="p-10">

                  {/* Skill Groups */}
                  <div className="space-y-8">

                    {/* UI / UX */}
                    <div className="mb-10">

                      <p className="text-lg tracking-[0.3em] mb-4">
                        UI / UX
                      </p>

                      <div className="flex flex-wrap gap-4">

                        {[
                          { name: "Figma", level: 90 },
                          { name: "Wireframing", level: 90 },
                          { name: "Prototyping", level: 85 },
                          { name: "User Flow", level: 84 },
                        ].map((skill) => (
                          <div
                            key={skill.name}
                            className="
                              group
                              relative
                              px-4
                              py-1
                              rounded-full
                              border
                              border-pink-400
                              text-pink-400
                              text-lg
                              overflow-hidden
                              cursor-pointer
                              transition-all
                              duration-300
                              hover:bg-pink-400
                            "
                          >

                            {/* Skill Name */}
                            <span
                              className="
                                block
                                transition-opacity
                                duration-200
                                group-hover:opacity-0
                              "
                            >
                              {skill.name}
                            </span>

                            {/* Percentage */}
                            <span
                              className="
                                absolute
                                inset-0
                                flex
                                items-center
                                justify-center
                                opacity-0
                                group-hover:opacity-100
                                text-black
                                transition-opacity
                                duration-200
                              "
                            >
                              {skill.level}%
                            </span>

                          </div>
                        ))}

                      </div>

                    </div>

                    {/* FRONTEND */}
                    <div className="mb-10">

                      <p className="text-lg tracking-[0.3em] mb-4">
                        FRONTEND
                      </p>

                      <div className="flex flex-wrap gap-4">

                        {[
                          { name: "HTML", level: 90 },
                          { name: "CSS", level: 90 },
                          { name: "JavaScript", level: 85 },
                          { name: "React", level: 84 },
                          { name: "Tailwind CSS", level: 90 },
                          { name: "Flutter", level: 85 },
                        ].map((skill) => (
                          <div
                            key={skill.name}
                            className="
                              group
                              relative
                              px-4
                              py-1
                              rounded-full
                              border
                              border-pink-400
                              text-pink-400
                              text-lg
                              overflow-hidden
                              cursor-pointer
                              transition-all
                              duration-300
                              hover:bg-pink-400
                            "
                          >

                            {/* Skill Name */}
                            <span
                              className="
                                block
                                transition-opacity
                                duration-200
                                group-hover:opacity-0
                              "
                            >
                              {skill.name}
                            </span>

                            {/* Percentage */}
                            <span
                              className="
                                absolute
                                inset-0
                                flex
                                items-center
                                justify-center
                                opacity-0
                                group-hover:opacity-100
                                text-black
                                transition-opacity
                                duration-200
                              "
                            >
                              {skill.level}%
                            </span>

                          </div>
                        ))}

                      </div>

                    </div>

                    {/* TOOLS */}
                    <div className="mb-10">

                      <p className="text-lg tracking-[0.3em] mb-4">
                        TOOLS
                      </p>

                      <div className="flex flex-wrap gap-4">

                        {[
                          { name: "Canva", level: 95 },
                          { name: "Notion", level: 90 },
                        ].map((skill) => (
                          <div
                            key={skill.name}
                            className="
                              group
                              relative
                              px-4
                              py-1
                              rounded-full
                              border
                              border-pink-400
                              text-pink-400
                              text-lg
                              overflow-hidden
                              cursor-pointer
                              transition-all
                              duration-300
                              hover:bg-pink-400
                            "
                          >

                            {/* Skill Name */}
                            <span
                              className="
                                block
                                transition-opacity
                                duration-200
                                group-hover:opacity-0
                              "
                            >
                              {skill.name}
                            </span>

                            {/* Percentage */}
                            <span
                              className="
                                absolute
                                inset-0
                                flex
                                items-center
                                justify-center
                                opacity-0
                                group-hover:opacity-100
                                text-black
                                transition-opacity
                                duration-200
                              "
                            >
                              {skill.level}%
                            </span>

                          </div>
                        ))}

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Projects */}
        <section
          id="projects"
          className="max-w-7xl mx-auto px-16 pt-30 pb-25"
        >

          <h2 className="text-6xl font-bold mb-5 tracking-wide text-pink-400">
            PROJECTS
          </h2>

          {/* Horizontal Scroll */}
          <div
            className="
              flex
              gap-8
              overflow-x-auto
              snap-x
              snap-mandatory
              scroll-smooth
              py-4
              px-4
            "
          >

            {/* Project Card 1 */}
            <div
              className="
                min-w-[300px]
                max-w-[300px]
                h-[500px]
                bg-black/40
                backdrop-blur-lg
                rounded-[25px]
                overflow-hidden
                snap-center
                hover:scale-[1.02]
                transition-all
                duration-300
                border
                border-pink-400
              "
            >

              <div className="p-5">

                <p className="text-sm uppercase tracking-widest text-pink-300 mb-4">
                  Mobile App
                </p>

                <img
                  src={mycondoImg}
                  alt="myCondo App"
                  className="w-full h-[220px] object-cover rounded-lg"
                />

                <h3 className="text-3xl font-bold leading-tight mb-2 mt-4">
                  myCondo: Condo
                  <br />
                  Management App
                </h3>

                <p className="text-sm text-gray-300 text-lg leading-relaxed">
                  A Flutter condo management app for property managers and residents.
                </p>

                <div className="flex gap-4 mt-6">
                  <a
                    href="https://github.com/InnovaTxch/myCondo"
                    className="
                      text-sm
                      text-pink-400
                      font-semibold
                      hover:text-pink-300
                      transition-all
                      duration-300
                    "
                  >
                    ✦ View GitHub
                  </a>

                  <div className="w-px h-6 bg-pink-100 opacity-50"></div>

                  <a
                    href="https://github.com/InnovaTxch/myCondo/releases/tag/v0.2.0"
                    className="
                      text-sm
                      text-pink-400
                      font-semibold
                      hover:text-pink-300
                      transition-all
                      duration-300
                    "
                  >
                    ✦ Download APK
                  </a>

                </div>

              </div>

            </div>

            {/* Project Card 2 */}
            <div
              className="
                min-w-[300px]
                max-w-[300px]
                h-[500px]
                bg-black/40
                backdrop-blur-lg
                rounded-[25px]
                overflow-hidden
                snap-center
                hover:scale-[1.02]
                transition-all
                duration-300
                border
                border-pink-400
              "
            >

              <div className="p-5">

                <p className="text-sm uppercase tracking-widest text-pink-300 mb-4">
                  Web App
                </p>

                <img
                  src={upvdogtrackerImg}
                  alt="Dog Tracker Web App"
                  className="w-full h-[220px] object-cover rounded-lg"
                />

                <h3 className="text-3xl font-bold leading-tight mb-2 mt-4">
                  Dog Tracker
                  <br />
                  Web App
                </h3>

                <p className="text-sm text-gray-300 text-lg leading-relaxed">
                  A web-based application designed to manage and monitor dogs within UP.
                </p>

                <a
                  href="https://github.com/ChristelHope/CMSC129-Lab3-YapMM-OngCH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-sm
                    text-pink-400
                    font-semibold
                    hover:text-pink-300
                    transition-all
                    duration-300
                  "
                >
                  <br />
                  ✦ View GitHub Repository
                </a>

              </div>

            </div>

            {/* Project Card 3 */}
            <div
              className="
                min-w-[300px]
                max-w-[300px]
                h-[500px]
                bg-black/40
                backdrop-blur-lg
                rounded-[25px]
                overflow-hidden
                snap-center
                hover:scale-[1.02]
                transition-all
                duration-300
                border
                border-pink-400
              "
            >

              <div className="p-5">

                <p className="text-sm uppercase tracking-widest text-pink-300 mb-4">
                  Web App Design
                </p>

                <img
                  src={dashboardImg}
                  alt="Dashboard UI"
                  className="w-full h-[220px] object-cover rounded-lg"
                />

                <h3 className="text-3xl font-bold leading-tight mb-2 mt-4">
                  booCAS
                  <br />
                  Dashboard UI
                </h3>

                <p className="text-sm text-gray-300 text-lg leading-relaxed">
                  Developed a clean dashboard interface for booking and management.
                </p>

                <a
                  href="https://www.figma.com/design/L2kzlM5mGuDXMY2XBiGZPf/CMSC-126-Final-Project?node-id=0-1&t=hoG1UE7fIYGN83JC-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-sm
                    text-pink-400
                    font-semibold
                    hover:text-pink-300
                    transition-all
                    duration-300
                  "
                >
                  <br />
                  ✦ View Figma
                </a>

              </div>

            </div>

            {/* Project Card 4 */}
            <div
              className="
                min-w-[300px]
                max-w-[300px]
                h-[500px]
                bg-black/40
                backdrop-blur-lg
                rounded-[25px]
                overflow-hidden
                snap-center
                hover:scale-[1.02]
                transition-all
                duration-300
                border
                border-pink-400
              "
            >

              <div className="p-5">

                <p className="text-sm uppercase tracking-widest text-pink-300 mb-4">
                  Website Redesign
                </p>

                <img
                  src={dpwhImg}
                  alt="DPWH Website"
                  className="w-full h-[220px] object-cover rounded-lg"
                />

                <h3 className="text-3xl font-bold leading-tight mb-2 mt-4">
                  DPWH Official
                  <br />
                  Site Redesign
                </h3>

                <p className="text-sm text-gray-300 text-lg leading-relaxed">
                  Redesigned DPWH pages for better navigation and visual organization.
                </p>

                <a
                  href="https://www.figma.com/design/xMKfUam2yH8is2eqQzDBic/DPWH-Official-Site---Redesigned?node-id=0-1&t=tOjXCfvW3CZtroiF-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-sm
                    text-pink-400
                    font-semibold
                    hover:text-pink-300
                    transition-all
                    duration-300
                  "
                >
                  <br />
                  ✦ View Figma
                </a>

              </div>

            </div>

            {/* Project Card 5 */}
            <div
              className="
                min-w-[300px]
                max-w-[300px]
                h-[500px]
                bg-black/40
                backdrop-blur-lg
                rounded-[25px]
                overflow-hidden
                snap-center
                hover:scale-[1.02]
                transition-all
                duration-300
                border
                border-pink-400
              "
            >

              <div className="p-5">

                <p className="text-sm uppercase tracking-widest text-pink-300 mb-4">
                  Website Redesign
                </p>

                <img
                  src={upvlmsImg}
                  alt="UPV LMS IV Redesign"
                  className="w-full h-[220px] object-cover rounded-lg"
                />

                <h3 className="text-3xl font-bold leading-tight mb-2 mt-4">
                  UPV LMS IV
                  <br />
                  Redesign
                </h3>

                <p className="text-sm text-gray-300 text-lg leading-relaxed">
                  Redesigned the UPV LMS for better usability and navigation.
                </p>

                <a
                  href="https://www.figma.com/design/IiB3rnQVgQOJunOgxC6Kgb/UPV-LMS-IV---Redesigned?node-id=0-1&t=jxas9C2BC4nd05d2-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-sm
                    text-pink-400
                    font-semibold
                    hover:text-pink-300
                    transition-all
                    duration-300
                  "
                >
                  <br />
                  ✦ View Figma
                </a>

              </div>

            </div>

            {/* Project Card 6 */}
            <div
              className="
                min-w-[300px]
                max-w-[300px]
                h-[500px]
                bg-black/40
                backdrop-blur-lg
                rounded-[25px]
                overflow-hidden
                snap-center
                hover:scale-[1.02]
                transition-all
                duration-300
                border
                border-pink-400
              "
            >

              <div className="p-5">

                <p className="text-sm uppercase tracking-widest text-pink-300 mb-4">
                  Website Redesign
                </p>

                <img
                  src={upvcrsImg}
                  alt="UPV CRS Redesign"
                  className="w-full h-[220px] object-cover rounded-lg"
                />

                <h3 className="text-3xl font-bold leading-tight mb-2 mt-4">
                  UPV CRS
                  <br />
                  Redesign
                </h3>

                <p className="text-sm text-gray-300 text-lg leading-relaxed">
                  Modernized the UPV CRS with improved layout and readability.
                </p>

                <a
                  href="https://www.figma.com/design/9OUXivNRXd0V3tcbwlNwi0/UPV-CRS---Redesigned?node-id=2005-278&t=iWj3pzGtYu1crxaK-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-sm
                    text-pink-400
                    font-semibold
                    hover:text-pink-300
                    transition-all
                    duration-300
                  "
                >
                  <br />
                  ✦ View Figma
                </a>

              </div>

            </div>

          </div>


        </section>

        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="relative px-6 md:px-16 pt-0 pb-24 overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.18),transparent_40%)] pointer-events-none"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-14 items-start">

            {/* LEFT SIDE */}
            <div className="flex flex-col h-full">

              <div>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-[3rem] md:text-[4rem] font-black text-pink-400 leading-none whitespace-nowrap">
                    CONTACT ME
                  </h2>
                </div>

                <p className="text-gray-300 text-xl leading-relaxed max-w-md">
                  Open to internships, collaborations, UI/UX projects, and creative opportunities in design, usability, and front-end development.
                </p>
              </div>

              {/* 24 HOURS CARD */}
              <div
                className="
                  mt-4
                  -ml-6
                  px-5 py-5
                  w-100 h-20
                  flex items-center gap-3
                "
              >
                <img
                  src={clockIcon}
                  alt="Clock"
                  className="w-6 h-6 object-contain"
                />

                <div>
                  <h3 className="text-pink-400 font-semibold text-lg">
                    Usually replies within 24 hours
                  </h3>

                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative">

              {/* TOP LABEL */}
              <div className="flex items-center gap-4 mb-4">
                <p className="tracking-[0.4em] text-pink-300 text-sm">
                  REACH ME THROUGH
                </p>

                <div className="flex-1 h-[1px] bg-pink-500/60"></div>

                <span className="text-pink-400 text-xl">✦</span>
              </div>

              {/* CONTACT GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                {/* EMAIL */}
                <a
                  href="mailto:mryap2@up.edu.ph"
                  className="
                    group
                    border border-pink-500/30
                    rounded-[20px]
                    bg-black/30
                    backdrop-blur-xl
                    p-6
                    w-80 h-18
                    flex items-center gap-5
                    transition-all duration-300
                    hover:border-pink-400
                    hover:shadow-[0_0_35px_rgba(236,72,153,0.25)]
                  "
                >
                  <img
                    src={emailIcon}
                    alt="Email"
                    className="w-7 h-7 object-contain"
                  />

                  <div>
                    <h3 className="text-2xl font-bold text-white">Email</h3>
                    <p className="text-gray-400 text-sm">
                      mryap2@up.edu.ph
                    </p>
                  </div>
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/mryap2/"
                  className="
                    group
                    border border-pink-500/30
                    rounded-[20px]
                    bg-black/30
                    backdrop-blur-xl
                    p-6
                    w-80 h-18
                    flex items-center gap-5
                    transition-all duration-300
                    hover:border-pink-400
                    hover:shadow-[0_0_35px_rgba(236,72,153,0.25)]
                  "
                >
                  <img
                    src={linkedinIcon}
                    alt="LinkedIn"
                    className="w-7 h-7 object-contain"
                  />

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      LinkedIn
                    </h3>

                    <p className="text-gray-400 text-sm">
                      Connect with me
                    </p>
                  </div>
                </a>

                {/* FACEBOOK */}
                <a
                  href="#"
                  className="
                    group
                    border border-pink-500/30
                    rounded-[20px]
                    bg-black/30
                    backdrop-blur-xl
                    p-6
                    w-80 h-18
                    flex items-center gap-5
                    transition-all duration-300
                    hover:border-pink-400
                    hover:shadow-[0_0_35px_rgba(236,72,153,0.25)]
                  "
                >
                  <img
                    src={facebookIcon}
                    alt="Facebook"
                    className="w-7 h-7 object-contain"
                  />

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Facebook
                    </h3>

                    <p className="text-gray-400 text-sm">
                      Message or reach out
                    </p>
                  </div>
                </a>

                {/* DISCORD */}
                <a
                  href="https://discord.gg/BqrsPmVz"
                  className="
                    group
                    border border-pink-500/30
                    rounded-[20px]
                    bg-black/30
                    backdrop-blur-xl
                    p-6
                    w-80 h-18
                    flex items-center gap-5
                    transition-all duration-300
                    hover:border-pink-400
                    hover:shadow-[0_0_35px_rgba(236,72,153,0.25)]
                  "
                >
                  <img
                    src={discordIcon}
                    alt="Discord"
                    className="w-7 h-7 object-contain"
                  />

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Discord
                    </h3>

                    <p className="text-gray-400 text-sm">
                      Let’s chat and collaborate
                    </p>
                  </div>
                </a>
              </div>

              {/* SCHEDULE CARD */}
              <div
                className="
                  mt-3
                  border border-pink-500/30
                  rounded-[20px]
                  bg-black/30
                  backdrop-blur-xl
                  p-6
                  w-166 h-18
                  flex flex-col md:flex-row
                  md:items-center
                  md:justify-between
                  gap-6
                  shadow-[0_0_40px_rgba(236,72,153,0.15)]
                "
              >
                <div className="flex items-center gap-5">

                  <img
                    src={calendarIcon}
                    alt="Calendar"
                    className="w-7 h-7 object-contain"
                  />

                  <div>
                    <h3 className="text-2xl font-bold text-pink-400">
                      Schedule a Meeting
                    </h3>

                    <p className="text-gray-400">
                      Pick a time that works for you
                    </p>
                  </div>
                </div>

                {/* BUTTON */}
                <a
                  href="https://calendly.com/mryap2-up/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    whitespace-nowrap
                    px-4 py-1
                    rounded-full
                    bg-pink-400
                    text-black
                    font-bold
                    text-lg
                    hover:scale-105
                    transition-all duration-300
                    shadow-[0_0_35px_rgba(236,72,153,0.5)]
                  "
                >
                  Schedule Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}