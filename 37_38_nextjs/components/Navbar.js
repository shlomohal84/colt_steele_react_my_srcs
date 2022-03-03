import Link from "next/link";
const Navbar = () => {
  const styles = {
    display: "flex",
    backgroundColor: "gray",
    justifyContent: "space-around",
    padding: "1rem",
  };
  // console.log("******RUNNING NAVBAR COMPONENT!*******");
  return (
    <div style={styles}>
      <Link href="/">HomePage</Link>
      <Link href="/about">About Page</Link>
      <Link href="/contact">Contact Page</Link>
    </div>
  );
};

export default Navbar;
