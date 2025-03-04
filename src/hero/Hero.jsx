import bulb from "../assets/bigbulb.png"

function Hero() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#150e28",
        padding: "10 70px",
        gap: "25px"
      }}
    >
      <div
        style={{
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "5px"
        }}
      >
        <img src= {bulb} alt="" />
      </div>
      <div
        style={{
          height: "50vh",
          display: "block",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ textTransform: "capitalize", fontSize: "35px", color: "#fff", margin: "5px" }}>
          Introduction to getlinked{" "}
        </h1>
        <h2 style={{ color: "#9c28bf", margin: "5px" }}>tech Hackathon 1.0</h2>
        <p style={{ textAlign: "justify", color: "#fff", margin: "5px" }}>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding genius,
          a design maverick, or a concept wizard, you&apos;ll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that&apos;s what we&apos;re all about!
        </p>
      </div>
    </div>
  );
}

export default Hero;
