import { Box, Flex, Image, Button } from "@chakra-ui/react/";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  deleteCartItems,
  getCartData,
} from "../redux/AppReducer/action";

const Cart = () => {
  const cartProducts = useSelector((state) => state.AppReducer.cartProducts);
  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
  };

  const handleDeleteItem = (id) => {
    dispatch(deleteCartItems(id));
  };

  useEffect(() => {
    dispatch(getCartData());
  }, []);
  console.log(cartProducts);

  return (
    <>
      <Flex margin={"10px"}>
        {cartProducts.map((ele) => (
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" key={ele.id}>
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

              <Box>$ {ele.price}</Box>
              <Button onClick={() => handleDeleteItem(ele.id)}>-</Button>
              <Box as="span" color="gray.600" fontSize="sm">
                {ele.qty}
              </Box>
              <Button onClick={() => handleAddToCart(ele.id)}>+</Button>

              <Box>
                <Button m={"5px"}>❌</Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default Cart;
