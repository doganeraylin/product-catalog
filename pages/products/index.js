
import axios from 'axios';
import Products from "../../components/Products/Products"

export const getStaticProps = async () => {
  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0cmluZyIsImlhdCI6MTY0OTg2MDExMiwiZXhwIjoxNjc1NzgwMTEyfQ.z8XYELsP1GBKkGpyvI14WzJKQAAbtQUwCl3hlLs_U4M";
  const baseURL = 'https://assignment-api.piton.com.tr/api/v1/product/all';

  const config = {
    headers: {
      "access-token": accessToken,
    },
  };

  const response = await axios.get(baseURL, config);
  const productsData = response.data.products;

  return {
    props: {
      productsData,
    },
  };
};

const productsPage = ({productsData}) => {
  return (
    <Products products={productsData} />
  )

}

export default productsPage;