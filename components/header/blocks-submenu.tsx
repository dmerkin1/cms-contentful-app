import React from "react";
import Link from "next/link";
import { BlocksSubMenuProps, LinkItem } from "@/lib/types";

const BlocksSubMenu: React.FC<BlocksSubMenuProps> = ({ items }) => {
  const elements1 = items.filter((link: LinkItem) =>
    ["Headers", "Footers", "Brands", "Call to action", "Counters"].includes(
      link.label
    )
  );
  const elements2 = items.filter((link: LinkItem) =>
    [
      "Gallery",
      "Gallery album",
      "Maps",
      "Call Services page",
      "Sliders",
    ].includes(link.label)
  );
  const elements3 = items.filter((link: LinkItem) =>
    [
      "Forms",
      "Subscribe forms",
      "Small features",
      "Team page",
      "Testimonials",
    ].includes(link.label)
  );

  const groups = [
    { title: "ELEMENTS 1", items: elements1 },
    { title: "ELEMENTS 2", items: elements2 },
    { title: "ELEMENTS 3", items: elements3 },
  ];

  return (
    <div className="flex justify-center">
      <ul className="fixed right-20 p-7 border-gray-200 md:right-36 mt-4 bg-white shadow-md z-50 space-x-10 grid grid-cols-3 gap-8 opacity-0 invisible transition-opacity duration-300 group-hover:opacity-100 group-hover:visible w-9/12 font-light min-w-[268px]">
        {groups.map((group, index) => (
          <li key={index} className="space-y-1">
            <h3 className="font-normal text-gray-600 text-md">
              {group.title}
            </h3>
            {group.items.map((link: LinkItem, subIndex: number) => (
              <Link
                key={subIndex}
                href={link.href}
                className="block pl-3 py-1 text-left font-light text-gray-500 hover:text-hover-blue "
              >
                {link.label}
              </Link>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlocksSubMenu;
