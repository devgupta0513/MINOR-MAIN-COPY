import { Button } from '@chakra-ui/button';
import { Box, Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuDivider, MenuItem, MenuList } from '@chakra-ui/menu';
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Tooltip } from '@chakra-ui/tooltip';
import React, { useState } from 'react';
import { Avatar } from '@chakra-ui/avatar';
import ProfileModal from './ProfileModel';

const SideDrawer = ({ user }) => {
    const [search, setSearch] = useState(" ");
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingChat, setLoadingChat] = useState();

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            bg="white" 
            w="100%"
            p="5px 10px 5px 10px"
            borderWidth="5px"
        >
            <Tooltip
                label="Search User to chat"
                hasArrow
                placement='bottom-end'
            >
                <Button variant='ghost'>
                    <i className="fas fa-search"></i>
                    <Text d={{ base: "none", md: "flex" }} px={4}>
                        Search User
                    </Text>
                </Button>
            </Tooltip>
            <Text fontSize="2xl" fontFamily="work sans">
                LinkUs
            </Text>
            <div>
                <Menu>
                    <MenuButton p={1}>
                        <BellIcon fontSize="2xl" m={1} />
                    </MenuButton>
                </Menu>
                <Menu>
                    <MenuButton as={Button} bg="white" rightIcon={<ChevronDownIcon />}>
                        {user && <Avatar size="sm" cursor="pointer" name={user.name}
                            src={user.pic} />}
                    </MenuButton>
                    <MenuList>
                        <ProfileModal user={user} >
                            <MenuItem>My Profile</MenuItem>
                        </ProfileModal>
                        <MenuDivider />
                        <MenuItem>Log Out</MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </Box>

    );

};

export default SideDrawer;
