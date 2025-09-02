import React from "react";

import { Link } from "react-router-dom";

const AdmissionsMenu = () => {
  const sections = [
    {
      title: "Admissions",
      links: ["Admission Notices", "Help Desk"],
    },
    {
      title: "Programmes",
      links: ["Degree Course", "Degree Course (PU-LEET)", "Doctorate (PhD)"],

    },
    {
      title: "JAC",
      links: [
        { name: "Portal", url: "https://jacchd.admissions.nic.in/" },
        {
          name: "Counselling Schedule",
          url: "https://jacchd.admissions.nic.in/schedule/",
        },
        "JAC Brochure 2025",
        "Opening/Closing Rank",
      ],
    },
    {
      title: "Criteria",
      links: [
        {
          name: "Eligibility",
          url: "https://jacchd.admissions.nic.in/eligibility-status/",
        },
      ],
    },
  ];

  return (
    <div className="absolute top-full left-1/2 transform -translate-x-[65%] hidden group-hover:grid grid-cols-4 bg-white/70 backdrop-blur-md shadow-xl z-50 p-6 gap-6 text-1xl text-gray-800 rounded-lg border border-gray-100 min-w-[1000px] max-w-[90vw]">

      links: [
        { name: "Admission Notices", path: "/admissions/notices" },
        { name: "Help Desk", path: "/admissions/helpdesk" },
      ],
    },
    {
      title: "Programmes",
      links: [
        { name: "Degree Course", path: "/programmes/degree" },
        { name: "Degree Course (PU-LEET)", path: "/programmes/pu-leet" },
        { name: "Doctorate (PhD)", path: "/programmes/phd" },
      ],
    },
    {
      title: "JAC",
      links: [
        { name: "Portal", url: "https://jacchd.admissions.nic.in/" },
        {
          name: "Counselling Schedule",
          url: "https://jacchd.admissions.nic.in/schedule/",
        },

        {
          name: "JAC Brochure 2025",
          url: "https://jacchd.admissions.nic.in/information-bulletin/",
        },
        {
          name: "Opening/Closing Rank",
          url: "https://jacchd.admissions.nic.in/or-cr/",
        },
      ],
    },
    {
      title: "Criteria",
      links: ["Eligibility"],

      links: [{ name: "Eligibility", path: "/criteria/eligibility" }],
    },
  ];

  return (

    <div className="absolute top-full left-1/2 transform -translate-x-[65%] hidden group-hover:grid grid-cols-4 bg-white/70 backdrop-blur-md shadow-xl z-50 p-6 gap-6 text-1xl text-gray-800 rounded-lg border border-gray-100 min-w-[1000px] max-w-[90vw]">

      {sections.map((section, i) => (
        <div key={i}>
          <div className="font-semibold border-b border-gray-200 pb-2 mb-3 text-red-700">
            {section.title}
          </div>
          <ul className="space-y-2">

            {section.links.map((link, idx) => {
              if (typeof link === "string") {
                return (
                  <li
                    key={idx}
                    className="hover:bg-[#FB923C] hover:text-white cursor-pointer transition-colors duration-200 px-2 py-1 rounded"
                  >
                    {link}
                  </li>
                );
              } else if (link.url) {
                // external links
                return (
                  <li
                    key={idx}
                    className="hover:bg-[#FB923C] hover:text-white cursor-pointer transition-colors duration-200 px-2 py-1 rounded"
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  </li>
                );
              } else if (link.path) {
                // internal links
                return (
                  <li
                    key={idx}
                    className="hover:bg-[#FB923C] hover:text-white cursor-pointer transition-colors duration-200 px-2 py-1 rounded"
                  >
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                );
              }
              return null;
            })}

            {section.links.map((link, idx) => (
              <li
                key={idx}
                className="hover:bg-[#FB923C] hover:text-white cursor-pointer transition-colors duration-200 px-2 py-1 rounded"
              >
                {typeof link === "string" ? (
                  link
                ) : link.url.startsWith("http") ? (

                {link.url ? (


                  <span>{link}</span>
                ) : link.url ? (
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                ) : (

                  <a href={link.url}>{link.name}</a>
                  <Link to={link.path}>{link.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AdmissionsMenu;
