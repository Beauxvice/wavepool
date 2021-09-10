import React, { useContext } from "react";
import {
  Flex,
  chakra,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  Button,
  Image,
  IconButton,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

import { BiLogOut } from "react-icons/bi";
import { SunIcon, MoonIcon, SettingsIcon } from "@chakra-ui/icons";
import { UserContext } from "../../contexts/UserContext";
import AudioPlayer from "../Utils/AudioPlayer/AudioPlayer";
import Search from "../Utils/Search/Search";

import AddFriend from "../Utils/AddFriend/AddFriend";

import CreatePlaylist from "./CreatePlaylist";

const Nav = (props: any) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isLoggedIn, currPlayback, userObj }: any = useContext(UserContext);
  console.log(userObj);
  return (
    <>
      <chakra.header>
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex m={4}>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              🌊
            </chakra.a>
            <chakra.h1 textStyle="h1.xl" fontWeight="medium" ml="2">
              WavePool
            </chakra.h1>
          </Flex>
          {currPlayback && <AudioPlayer />}
          <Menu>
            <MenuButton
              m={4}
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="ghost"
            />
            <MenuList bg={useColorModeValue("brand.50", "brand.900")}>
              {isLoggedIn && (
                <chakra.div>
                  <MenuItem>
                  {userObj.photo !== "no photo" && <Image
                   boxSize="2rem"
                   borderRadius="full"
                   src={userObj.photo}
                   alt="Profile Pic"
                   mr="12px"
                 /> }{userObj.user_name}
                  </MenuItem>
                  <MenuItem>
                    <Search />
                  </MenuItem>
                  <MenuItem>
                    <AddFriend />
                  </MenuItem>
                  <MenuItem>
                    <CreatePlaylist />
                  </MenuItem>
                </chakra.div>
              )}
              <MenuItem onClick={props.toggleFont}>
                <Button variant="ghost">
                  <SettingsIcon />
                  Toggle Bigger Font{" "}
                </Button>
              </MenuItem>
              <MenuItem onClick={toggleColorMode}>
                <Button variant="ghost">
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}Change
                  Color Mode{" "}
                </Button>
              </MenuItem>
              {isLoggedIn && (
                <MenuItem>
                  {" "}
                  <Link href="/logout">
                    <Button variant="ghost">
                      <BiLogOut size={25} /> Log Out
                    </Button>
                  </Link>
                </MenuItem>
              )}
            </MenuList>
          </Menu>
        </Flex>
      </chakra.header>
    </>
  );
};

export default Nav;
