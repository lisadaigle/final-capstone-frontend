// export function HomePage() {
//   return (
//     <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
//       <div>
//         <p></p>
//         <p></p>
//         <p></p>
//         <h1 style={{ textAlign: "center" }}> welcome </h1>
//         <iframe
//           src="https://calendar.google.com/calendar/embed?src=beacongathers%40gmail.com&ctz=America%2FNew_York"
//           style={{ border: "solid 1px #777", width: "350px", height: "350px" }}
//           frameborder="0"
//           scrolling="no"
//         ></iframe>
//         <img
//           src="https://www.samisachaflowers.com/media/Red-Anemones.jpeg"
//           style={{ width: "600px", height: "auto" }}
//         />
//       </div>
//     </div>
//   );
// }

export function HomePage() {
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
      <div style={{ position: "sticky", top: "0", marginRight: "20px" }}>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=450&wkst=1&bgcolor=%237CB342&ctz=America%2FNew_York&showTitle=1&title=%20Schedule%20&showPrint=0&showDate=1&showNav=1&showCalendars=0&showTz=1&src=YmVhY29uZ2F0aGVyc0BnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679"
          style={{ border: "solid 1px #777", width: "450px", height: "450px", margin: "0 auto" }}
          frameborder="0"
          scrolling="no"
        ></iframe>
        <img
          src="https://www.samisachaflowers.com/media/Red-Anemones.jpeg"
          style={{ width: "600px", height: "auto" }}
        />
      </div>
    </div>
  );
}
