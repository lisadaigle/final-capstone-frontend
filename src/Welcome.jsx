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
          src="https://cdn.discordapp.com/attachments/1110005785938890773/1174568518071627847/pestogirl_cartoon_indoor_plants_in_an_apartment_mary_blair_styl_27fea27e-7b5c-4088-95cb-2564c41943fd.png?ex=6568112d&is=65559c2d&hm=3dbf37ff23d1ca68672ffc7277140a8f4d7fbf2b2bd33dbce11099917e53b84c&"
          style={{ width: "1200px", height: "auto" }}
        />
      </div>
    </div>
  );
}
