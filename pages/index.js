
import axios from "axios";
import Footer from "../src/components/layouts/footer";
import Header from "../src/components/layouts/header";
import {HEADER_FOOTER_ENDPOINT} from "../src/utils/constants/endpoints.js";

export default function Home({data}) {
  const {header, footer} = data;
  return (
    <div>
      
      <Header header={header} />
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
          <p className="text-red-500">Hello Woocommerce</p>
        </h1>
      </main>

      <Footer footer={footer}/>
    </div>
  )
}

export async function getStaticProps() {
  
  const {data} = await axios.get(HEADER_FOOTER_ENDPOINT);

  return {
    props: data || {},
    

    /*
      * Revalidate means that if a new request comes to server, then every 1 second it will check
      * if the data has changed, if it is changed then it will update the
      * static file inside .next folder with the new data, so that any 'SUBSQUENT' requests should have updated
    */

    revalidate: 1,
  }
}
