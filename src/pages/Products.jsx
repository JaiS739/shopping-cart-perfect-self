import { Grid, GridItem, Image, Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getProducts } from "../redux/AppReducer/action";
import Cart from "./Cart";

const Products = () => {
  const products = useSelector((state) => state.AppReducer.products);
  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
    console.log(id);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} margin={"10px"}>
        {products.map((ele) => (
          <GridItem key={ele.id}>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg">
              <Image src={ele.img} alt={ele.img} />

              <Box p="6">
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                >
                  {ele.title}
                </Box>

                <Box>
                  $ {ele.price}
                  <Box as="span" color="gray.600" fontSize="sm"></Box>
                </Box>
                <Box>
                  <Button m={"5px"}>View</Button>
                  <Button m={"5px"} onClick={() => handleAddToCart(ele.id)}>
                    Add To Cart
                  </Button>
                </Box>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default Products;
