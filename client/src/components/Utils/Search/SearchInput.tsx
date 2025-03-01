import React, {useState} from "react";
import { Input, Flex, useColorModeValue, Button } from "@chakra-ui/react";

import axios from "axios";

const querySpotify = (query: string, user_id: string) => {
  return axios.get(`/spotify/query/${user_id}/${query}`).then((data) => {
    return data.data;
  });
};

const SearchInput = (props: any) => {
  const bg = useColorModeValue('brand.50', 'brand.900')
  const [query, setQuery] = useState('')
  return (
    <Flex zIndex="1" position="fixed">
      <Input
        w="90%"
        bg={bg}
        focusBorderColor={useColorModeValue('brand.400', 'brand.600')}
        variant="filled"
        placeholder="Search Songs"
        onChange={(e) => {
          setQuery(e.target.value);
        }}

      ></Input>
      <Button  onClick={async () => {
          if(query === ''){
            return;
          }
        await props.setSearchQuery(query);
         await querySpotify(query, props.userObj.user_id).then(
            (data: any) => {
              if(data){
              return props.setTrackList(data);
              }
            }
          );
        }}
>Search</Button>
    </Flex>
  );
};
export default SearchInput;
