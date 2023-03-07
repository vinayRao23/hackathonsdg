export const Navigation = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img
          src={"/edutoolslogo.png"}
          style={{
            width: 220,
            fontSize: 52,
            marginLeft: "16%",
            marginTop: localStorage.getItem("theme") === "light" ? -30 : 20,
          }}
          alt=""
        />
      </div>
    </>
  );
};
