import Head from "next/head";
import Products from './../components/Products';


export default function Home(props) {
  
  return (
    <div >
      <Head>
        <title>home page</title>
        <meta  name="description" content="home page" />
      </Head>
      <Products />
    </div>
  )
}
