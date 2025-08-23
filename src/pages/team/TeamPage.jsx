import { useState } from "react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import teamMembers from "../../config/teammate";

const TeamPage = () => {
  const [activeTeam, setActiveTeam] = useState("All");

  const teams = [
    "All",
    "Executive Body",
    "Team Bluebird",
    "Team Bluestreak",
    "Team Blueprint",
  ];

  const filteredMembers =
    activeTeam === "All"
      ? Array.from(new Map(teamMembers.map((m) => [m.name, m])).values())
      : teamMembers.filter((member) => member.team === activeTeam);

  return (
    <section className="bg-white text-black min-h-screen">
      <div className="text-center px-4 max-w-4xl mx-auto scroll-mt-24 pt-20 lg:pt-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#021640] mb-4">
          Meet Our Team
        </h2>
        <p className="text-gray-700 pb-6 text-lg"></p>
      </div>

      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {teams.map((team) => (
          <button
            key={team}
            onClick={() => setActiveTeam(team)}
            className={`px-4 py-2 rounded-full border text-lg font-medium transition cursor-pointer hover:bg-blue-400 ${
              activeTeam === team
                ? "bg-[#021640] text-white"
                : "bg-white text-[#021640] border-gray-300"
            }`}
          >
            {team}
          </button>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-lg font-bold mb-6">
        {activeTeam === "Executive Body" && (
          <p className="text-center text-gray-600">
            The Executive Body is the core leadership team of the ASME Student
            Section, responsible for planning, organizing, and executing all
            technical, professional, and outreach activities. It ensures
            coordination among members, represents the section, and drives
            initiatives that promote engineering knowledge and collaboration.
          </p>
        )}
        {activeTeam === "Team Bluestreak" && (
          <p className="text-center text-gray-600">
            Bluestreak, a team within ASME at NIT Rourkela, is a dedicated team
            focused on research, analysis, and innovation. They specialize in
            designing human-powered vehicles from scratch, incorporating
            indigenous elements. Bluestreak actively participates in the eHPV
            competition at ASME Efest, showcasing their commitment to pushing
            the boundaries of human-powered vehicle design and contributing to
            the advancement of sustainable transportation solutions.
          </p>
        )}
        {activeTeam === "Team Bluebird" && (
          <p className="text-center text-gray-600">
            Bluebird, a team from ASME NIT Rourkela, specializes in CAD modeling
            and coding for virtual competitions. Their expertise extends to
            designing vehicles for diverse challenges, including autonomous
            vehicle competitions, lunar lander simulations, and ocean cleanup
            missions. Through innovation and technical prowess, Team Bluebird
            consistently participates in and excels at a variety of virtual
            events, showcasing their commitment to engineering excellence and
            problem-solving in the digital realm.
          </p>
        )}
        {activeTeam === "Team Blueprint" && (
          <p className="text-center text-gray-600">
            Team Blueprint, a team of ASME NIT Rourkela, engages in research,
            innovation, and design. They utilize CAD software to create diverse
            models, subsequently manufacturing them through 3D printing
            technology. The team actively participates in the IAM3D competition
            as part of ASME Efest, showcasing their skills and expertise in
            engineering and design within the ASME community
          </p>
        )}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {filteredMembers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-full max-w-xs border rounded-md overflow-hidden shadow transition-shadow duration-300 hover:shadow-2xl ">
                  <img
                    src={
                      member.img ||
                      "https://via.placeholder.com/300x250?text=Photo"
                    }
                    alt={member.name}
                    className="w-full h-68 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="font-bold text-xl">
                    {member.name || "Full name"}
                  </h3>
                  <p className="text-lg text-gray-600">{member.title || ""}</p>
                  <p className="text-lg text-gray-600">{member.team || ""}</p>
                  <div className="flex justify-center space-x-3 mt-2">
                    <a
                      href={member.linkedin || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-blue-700"
                    >
                      <FaLinkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="text-6xl text-gray-300 mb-4">👥</div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                No team members found
              </h3>
              <p className="text-gray-500">
                There are currently no members in the {activeTeam} team.
                {activeTeam !== "All" &&
                  " Try selecting a different team or check back later."}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamPage;
