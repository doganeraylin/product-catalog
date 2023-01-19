import ProductDetails from "../../components/ProductDetails/ProductDetail";
import axios from "axios";


export const getStaticPaths = async () => {
    
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0cmluZyIsImlhdCI6MTY0OTg2MDExMiwiZXhwIjoxNjc1NzgwMTEyfQ.z8XYELsP1GBKkGpyvI14WzJKQAAbtQUwCl3hlLs_U4M";
    const baseURL = 'https://assignment-api.piton.com.tr/api/v1/product/all';
  
    const config = {
      headers: {
        "access-token": accessToken,
      },
    };
  
    const response = await axios.get(baseURL, config);
    const productsData = response.data.products;
    const sortedProductsData = productsData.sort((a, b) => a.id - b.id); // sort the array by the id field in ascending order
    const paths = sortedProductsData.map(product => {
      return {
        params: { id: product.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }


  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0cmluZyIsImlhdCI6MTY0OTg2MDExMiwiZXhwIjoxNjc1NzgwMTEyfQ.z8XYELsP1GBKkGpyvI14WzJKQAAbtQUwCl3hlLs_U4M";
    const baseURL = "https://assignment-api.piton.com.tr/api/v1/product/get/";
    
    const config = {
        headers: {
          "access-token": accessToken,
        },
      };
    
      const response = await axios.get(`${baseURL}${id}`, config);
      const singleProduct = response.data.product;

      return {
        props: { product: singleProduct }
      }

 }

const Details = ({product}) => {
  console.log(product.id)
    return (
      <ProductDetails
        id={product.id}
        name={product.name}
        description={product.description}
        likes={product.likes.length}
        price={product.price}
        image={product.image}
      />
    )
}

export default Details