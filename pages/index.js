
import axios from "axios";
import Footer from "../src/components/layouts/footer";
import Header from "../src/components/layouts/header";
import {HEADER_FOOTER_ENDPOINT, GET_PRODUCTS_ENDPOINT} from "../src/utils/constants/endpoints.js";
import Products from "../src/components/layouts/products";

export default function Home({ headerFooter, products }) {
  const {header, footer} = headerFooter || {};

  return (
    <div>
      
      <Header header={header} />
      <main className="container mx-auto py-4">
        <Products products={products} />
      </main>

      <Footer footer={footer}/>
    </div>
  )
}

export async function getStaticProps() {
  
  const { data: headerFooterData } = await axios.get(HEADER_FOOTER_ENDPOINT);
  const { data: productsData } = await axios.get(GET_PRODUCTS_ENDPOINT);

  return {
    props: {
      headerFooter: headerFooterData?.data ?? {},
      products: productsData?.products ?? {}
    },
    

    /*
      * Revalidate means that if a new request comes to server, then every 1 second it will check
      * if the data has changed, if it is changed then it will update the
      * static file inside .next folder with the new data, so that any 'SUBSQUENT' requests should have updated
    */

    revalidate: 1,
  }
}
