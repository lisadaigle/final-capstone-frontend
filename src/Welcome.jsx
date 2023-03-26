export function Welcome() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "200vh",
        padding: "40px",
        backgroundColor: "#e6ffe6",
      }}
    >
      <h1
        style={{
          fontSize: "56px",
          textAlign: "center",
          marginBottom: "10px",
          border: "2px solid #333",
          borderRadius: "8px",
          padding: "10px",
        }}
      >
        A Place For Plants
      </h1>
      <div style={{ position: "center", alignSelf: "center" }}>
        <img
          src="https://cdn.shopify.com/s/files/1/0045/5340/8576/articles/Living_Room_Up.jpg?v=1624134760"
          style={{ width: "1000px", height: "auto" }}
        />
      </div>
    </div>
  );
}
