import Head from "next/head";
import {useEffect, useState} from "react";

const Meta = ({ title, keywords, description }: any) => {

  const [rendered , setRendered] = useState(false);
  useEffect(() => {
    setTimeout(()=>{
      setRendered((toggle) =>!toggle);
    },330)
  }, []);
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.png" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "NationWide Surveyors",
  keywords: "",
  description: "",
};

export default Meta;
