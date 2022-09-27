import { Box, Flex, Badge } from "@chakra-ui/react/";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCartData } from "../redux/AppReducer/action";

const Navbar = () => {
  const cartProducts = useSelector((state) => state.AppReducer.cartProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartData());
  }, []);

  const totalCartItems = cartProducts.reduce((acc, ele) => {
    return (acc = acc + ele.qty);
  }, 0);

  return (
    <>
      <Flex
        h={"80px"}
        bg="blue.400"
        justifyContent={"right"}
        alignItems={"center"}
        gap={"20px"}
        padding={"10px"}
      >
        <NavLink to={"/"}>Products</NavLink>

        <NavLink to={"/cart"}>
          Cart <Badge colorScheme="green">{totalCartItems}</Badge>{" "}
        </NavLink>
      </Flex>
    </>
  );
};

export default Navbar;
