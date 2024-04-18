"use client";

export default function HamburgerMenu() {
  const toggleMenu = () => {
    const menu = document.getElementById("menu");
    if (menu) {
        document.body.classList.toggle("menu-open");
    }
};


  return (
    <button
      className="block md:hidden text-white"
      onClick={toggleMenu}
      aria-expanded="false"
    >
      <svg
        className="w-6 h-6 fill-custom-blue"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M21 5H3a1 1 0 110-2h18a1 1 0 110 2zm0 6H3a1 1 0 110-2h18a1 1 0 110 2zm0 6H3a1 1 0 110-2h18a1 1 0 110 2z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
