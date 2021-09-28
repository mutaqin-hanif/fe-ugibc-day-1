import React from "react";
import { useRouter } from "next/router";

const About = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return <div>About {id}</div>;
};

export default About;
