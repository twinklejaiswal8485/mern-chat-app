import React from 'react'
import { Avatar } from "@chakra-ui/avatar"
import { ChatState } from '../../Context/ChatProvider'
import { Box, Text } from '@chakra-ui/react';

const UserListItem = ({ user,  handleFunction }) => {
  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      bg="#e9589e"
      _hover={{
        background: "#f0a6ca",
        color: "white",
      }}
      w="100%"
      d="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      <Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        name={user.name}
        src={user.pic}
       />
       <Box>
         <Text>{user.name}</Text>
         <Text fontSize='xs'>
          <b>Email: </b>
          {user.email}
         </Text>
        </Box>
    </Box>
  );
};

export default UserListItem