export function Welcome() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h1> Welcome to the site</h1>
      <div style={{ position: "sticky", top: "0", marginCenter: "20px" }}>
        <img
          src="https://www.samisachaflowers.com/media/Red-Anemones.jpeg"
          style={{ width: "600px", height: "auto" }}
        />
      </div>
    </div>
  );
}
