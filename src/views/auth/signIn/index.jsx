/* eslint-disable */
/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import { NavLink, Redirect } from "react-router-dom";
// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
  Select,
} from "@chakra-ui/react";
// Custom components
import { HSeparator } from "components/separator/Separator";
import DefaultAuth from "layouts/auth/Default";
// Assets
import illustration from "assets/img/auth/testing.png";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import axios from "axios";

function SignIn() {
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
  const googleText = useColorModeValue("navy.700", "white");
  const googleHover = useColorModeValue(
    { bg: "gray.200" },
    { bg: "whiteAlpha.300" }
  );
  const googleActive = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.200" }
  );
  const [showSingIn, setShowSingIn] = React.useState(true);
  const [show, setShow] = React.useState(false);
  const [redirect, setRedirect] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    clubName: "",
    countryName: "",
    firstColor: "#F50000",
    secondColor: "#FFFFFF",
  });

  const handleClick = () => setShow(!show);
  const changeToRegister = () => setShowSingIn(!showSingIn);

  const handleChange = (e) => {
    if (e && e.target) {
      const { name, value } = e.target;

      // Perform validations based on the field name
      switch (name) {
        case "email":
          // Check if the email is not empty
          if (value.trim() === "") {
            console.log("Email cannot be empty");
          } else {
            // Validate if the email is in a correct format using a regular expression
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
              console.log("Invalid email format");
            }
          }
          break;
        case "password":
          // Check if the password is not empty
          if (value.trim() === "") {
            console.log("Password cannot be empty");
          } else {
            // Enforce password complexity rules, e.g., minimum length
            if (value.length < 6) {
              console.log("Password must be at least 6 characters long");
            }
            // Add more password complexity validations as needed
          }
          break;
        case "clubName":
          // Check if the club name is not empty
          if (value.trim() === "") {
            console.log("Club name cannot be empty");
          }
          break;
        case "countryName":
          // Check if the country name is not empty
          if (value.trim() === "") {
            console.log("Country name cannot be empty");
          }
          break;
        default:
          break;
      }

      // Update the form data state
      if (name === "email") {
        setFormData((prevData) => ({
          ...prevData,
          email: value,
          name: value,
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    }
  };

  const handleRegister = async () => {
    console.log("LLAMANDO A REGISTER");
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:3000/user/register",
        formData
      );

      console.log("Registration successful");
      setRedirect(true);
      // You can handle the response data here if needed
    } catch (error) {
      console.error("Registration error:", error);
      // Handle any errors that occur during the request
    }
  };

  return (
    <DefaultAuth illustrationBackground={illustration} image={illustration}>
      {redirect && <Redirect to="/ruta-deseada" />}
      {showSingIn ? (
        <Flex
          maxW={{ base: "100%", md: "max-content" }}
          w="100%"
          mx={{ base: "auto", lg: "0px" }}
          me="auto"
          h="100%"
          alignItems="start"
          justifyContent="center"
          mb={{ base: "30px", md: "60px" }}
          px={{ base: "25px", md: "0px" }}
          mt={{ base: "40px", md: "5vh" }}
          flexDirection="column"
        >
          <Box me="auto">
            <Heading color={textColor} fontSize="36px" mb="10px">
              Sign In
            </Heading>
            <Text
              mb="36px"
              ms="4px"
              color={textColorSecondary}
              fontWeight="400"
              fontSize="md"
            >
              Enter your email and password to sign in!
            </Text>
          </Box>
          <Flex
            zIndex="2"
            direction="column"
            w={{ base: "100%", md: "420px" }}
            maxW="100%"
            background="transparent"
            borderRadius="15px"
            mx={{ base: "auto", lg: "unset" }}
            me="auto"
            mb={{ base: "20px", md: "auto" }}
          >
            <Button
              fontSize="sm"
              me="0px"
              mb="26px"
              py="15px"
              h="50px"
              borderRadius="16px"
              bg={googleBg}
              color={googleText}
              fontWeight="500"
              _hover={googleHover}
              _active={googleActive}
              _focus={googleActive}
            >
              <Icon as={FcGoogle} w="20px" h="20px" me="10px" />
              Sign in with Google
            </Button>
            <Flex align="center" mb="25px">
              <HSeparator />
              <Text color="gray.400" mx="14px">
                or
              </Text>
              <HSeparator />
            </Flex>
            <FormControl>
              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                mb="8px"
              >
                Email<Text color={brandStars}>*</Text>
              </FormLabel>
              <Input
                isRequired={true}
                variant="auth"
                fontSize="sm"
                ms={{ base: "0px", md: "0px" }}
                type="email"
                placeholder="mail@simmmple.com"
                mb="24px"
                fontWeight="500"
                size="lg"
              />
              <FormLabel
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                display="flex"
              >
                Password<Text color={brandStars}>*</Text>
              </FormLabel>
              <InputGroup size="md">
                <Input
                  isRequired={true}
                  fontSize="sm"
                  placeholder="Min. 8 characters"
                  mb="24px"
                  size="lg"
                  type={show ? "text" : "password"}
                  variant="auth"
                />
                <InputRightElement display="flex" alignItems="center" mt="4px">
                  <Icon
                    color={textColorSecondary}
                    _hover={{ cursor: "pointer" }}
                    as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                    onClick={handleClick}
                  />
                </InputRightElement>
              </InputGroup>
              <Flex justifyContent="space-between" align="center" mb="24px">
                <FormControl display="flex" alignItems="center">
                  <Checkbox
                    id="remember-login"
                    colorScheme="brandScheme"
                    me="10px"
                  />
                  <FormLabel
                    htmlFor="remember-login"
                    mb="0"
                    fontWeight="normal"
                    color={textColor}
                    fontSize="sm"
                  >
                    Keep me logged in
                  </FormLabel>
                </FormControl>
                <NavLink to="/auth/forgot-password">
                  <Text
                    color={textColorBrand}
                    fontSize="sm"
                    w="124px"
                    fontWeight="500"
                  >
                    Forgot password?
                  </Text>
                </NavLink>
              </Flex>
              <Button
                fontSize="sm"
                variant="brand"
                fontWeight="500"
                w="100%"
                h="50"
                mb="24px"
              >
                Sign In
              </Button>
            </FormControl>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="start"
              maxW="100%"
              mt="0px"
            >
              <Text color={textColorDetails} fontWeight="400" fontSize="14px">
                Not registered yet?
                <Text
                  onClick={changeToRegister}
                  color={textColorBrand}
                  as="span"
                  ms="5px"
                  fontWeight="500"
                >
                  Create an Account
                </Text>
              </Text>
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Flex
          maxW={{ base: "100%", md: "max-content" }}
          w="100%"
          mx={{ base: "auto", lg: "0px" }}
          me="auto"
          h="100%"
          alignItems="start"
          justifyContent="center"
          mb={{ base: "30px", md: "60px" }}
          px={{ base: "25px", md: "0px" }}
          mt={{ base: "40px", md: "5vh" }}
          flexDirection="column"
        >
          <Box me="auto">
            <Heading color={textColor} fontSize="36px" mb="10px">
              Register
            </Heading>
            <Text
              mb="25px"
              ms="4px"
              color={textColorSecondary}
              fontWeight="400"
              fontSize="md"
            >
              Create your new account and team!
            </Text>
          </Box>
          <Flex
            zIndex="2"
            direction="column"
            w={{ base: "100%", md: "420px" }}
            maxW="100%"
            background="transparent"
            borderRadius="15px"
            mx={{ base: "auto", lg: "unset" }}
            me="auto"
            mb={{ base: "10px", md: "auto" }}
          >
            <Button
              fontSize="sm"
              me="0px"
              mb="10px"
              py="15px"
              h="50px"
              borderRadius="16px"
              bg={googleBg}
              color={googleText}
              fontWeight="500"
              _hover={googleHover}
              _active={googleActive}
              _focus={googleActive}
            >
              <Icon as={FcGoogle} w="20px" h="20px" me="10px" />
              Create account with Google
            </Button>
            <Flex align="center" mb="0px">
              <HSeparator />
              <Text color="gray.400" mx="14px">
                or
              </Text>
              <HSeparator />
            </Flex>
            <FormControl>
              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                mb="8px"
              >
                Email<Text color={brandStars}>*</Text>
              </FormLabel>
              <Input
                isRequired={true}
                variant="auth"
                fontSize="sm"
                ms={{ base: "0px", md: "0px" }}
                type="email"
                placeholder="mail@example.com"
                mb="15px"
                fontWeight="500"
                size="lg"
                onChange={handleChange}
                name="email"
              />
              <FormLabel
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                display="flex"
              >
                Password<Text color={brandStars}>*</Text>
              </FormLabel>
              <InputGroup size="md">
                <Input
                  isRequired={true}
                  fontSize="sm"
                  placeholder="Min. 8 characters"
                  mb="15px"
                  size="lg"
                  type={show ? "text" : "password"}
                  variant="auth"
                  onChange={handleChange}
                  name="password"
                />
                <InputRightElement display="flex" alignItems="center" mt="4px">
                  <Icon
                    color={textColorSecondary}
                    _hover={{ cursor: "pointer" }}
                    as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                    onClick={handleClick}
                  />
                </InputRightElement>
              </InputGroup>
              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                mb="8px"
              >
                Team name<Text color={brandStars}>*</Text>
              </FormLabel>
              <Input
                isRequired={true}
                variant="auth"
                fontSize="sm"
                ms={{ base: "0px", md: "0px" }}
                type="text"
                placeholder="Team name"
                mb="15px"
                fontWeight="500"
                size="lg"
                onChange={handleChange}
                name="clubName"
              />
              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                mb="8px"
              >
                Country<Text color={brandStars}>*</Text>
              </FormLabel>
              <Select
                isRequired={true}
                variant="auth"
                fontSize="sm"
                ms={{ base: "0px", md: "0px" }}
                placeholder="Select your country"
                mb="15px"
                fontWeight="500"
                size="lg"
                onChange={handleChange}
                name="countryName"
              >
                <option value="Argentina">Argentina</option>
                <option value="Brazil">Brazil</option>
                <option value="Uruguay">Uruguay</option>
              </Select>
              <Button
                fontSize="sm"
                variant="brand"
                fontWeight="500"
                w="100%"
                h="50"
                mb="24px"
                onClick={handleRegister}
              >
                Register
              </Button>
            </FormControl>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="start"
              maxW="100%"
              mt="0px"
            >
              <Text color={textColorDetails} fontWeight="400" fontSize="14px">
                Already registered?
                <Text
                  onClick={changeToRegister}
                  color={textColorBrand}
                  as="span"
                  ms="5px"
                  fontWeight="500"
                >
                  Sing in
                </Text>
              </Text>
            </Flex>
          </Flex>
        </Flex>
      )}
    </DefaultAuth>
  );
}

export default SignIn;
