import NextLink from "next/link";

// const NavLinks = [
//   {
//     href: "/About us",
//     name: "About us",
//   },
//   {
//     href: "/creators",
//     name: "Creators",
//   },
//   {
//     href: "/goals",
//     name: "Goals",
//   },

//   {
//     href: "/contact",
//     name: "Contact",
//   },
// ];

export const Navigation = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img
          src="/edutoolslogo.png"
          style={{
            width: 220,
            fontSize: 52,
            marginLeft: "16%",
            marginTop: -30,
          }}
          alt=""
        />

        {/* <button
          id="heromenu"
          style={{
            backgroundColor: "#fff",
            border: "2px solid #eee",
            borderRadius: 200,
            width: 60,
            height: 60,
            marginTop: 35,
            marginLeft: "4%",
            alignItems: "center",
            justifyContent: "center",
            display: "none",
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="6"
              y="9"
              width="20"
              height="2"
              rx="1"
              fill="currentColor"
              transform-origin="0px 0px"
            ></rect>
            <rect
              x="6"
              y="15"
              width="20"
              height="2"
              rx="1"
              fill="currentColor"
              opacity="1"
            ></rect>
            <rect
              x="6"
              y="21"
              width="20"
              height="2"
              rx="1"
              fill="currentColor"
              transform-origin="0px 0px"
            ></rect>
          </svg>
        </button> */}

        {/* <nav
          className="skew-menu"
          style={{
            zoom: 1.2,
            position: "absolute",
            zIndex: 200,
            top: "-14%",
            left: "31%",
          }}
        >
          <ul>
            {NavLinks.map((l) => (
              <li style={{ cursor: "pointer" }} key={l.name}>
                <a>{l.name}</a>
              </li>
            ))}
          </ul>
        </nav> */}
      </div>
    </>
  );
};
