import React, { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../../contexts/UserContext';
import SendTrack from './buttons/SendTrack';
import {
  chakra,
  Center,
  Text,
  Flex,
  Box,
  Stack,
  Image,
  Spacer,
  Button,
  useColorModeValue,
  Tooltip,
  Skeleton,
} from '@chakra-ui/react';

import { BsPerson } from "react-icons/bs";
import { BiHeadphone, BiAlbum } from "react-icons/bi";
import { MdQueueMusic } from "react-icons/md";
import AddToPlaylist from "./buttons/AddToPlaylist";
import PlayNow from "./buttons/PlayNow";

const TrackComp = (props: any) => {

  const [imgLoaded, setImgLoaded] = useState(false);
  const { userObj, userPlaylists } = useContext(UserContext);
  const {
    album_art,
    track_title,
    artists,
    album_title,
    track_uri,
    user_id
  } = props.track;

  const bg = useColorModeValue('brand.50', 'brand.900');

  const addToQueue = () => {
    axios
      .get(`/spotify/addToQueue/${userObj.user_id}/${track_uri}`)
      .then((data) => data)
      .catch((err) => console.error(err));
  };

  return (
    <chakra.div bg={bg} h='auto' borderRadius='2vh' m={2}>
      <Flex mx={5} p={4}>
        <Center>
          <Box>
            <Skeleton isLoaded={imgLoaded}>
              <Image
                aspect-ratio={1}
                m={2}
                minW='120px'
                minH='120px'
                boxSize='120px'
                float='left'
                fit='contain'
                onLoad={() => {
                  setImgLoaded(true);
                }}
                src={album_art}
                alt='Album Cover'
              />
            </Skeleton>
          </Box>
        </Center>
        <Center>
          <Stack padding={2} borderRadius='15px' m={2} mr={4}>
            <Flex alignItems='center' minW='200px'>
              <chakra.div mr={2}>
                <BiHeadphone />
              </chakra.div>
              <Text fontSize='md'>{track_title}</Text>
            </Flex>
            <chakra.div>
              <Flex alignItems='center' minW='200px'>
                <chakra.div mr={2}>
                  <BsPerson />
                </chakra.div>
                <chakra.div maxW={'150px'}>
                {artists.map((artist: any, i: number) => {
                  if (i === artists.length - 1) {
                    return (
                      <chakra.p key={i} fontSize='md'>
                        {artist}
                      </chakra.p>
                    );
                  }
                  return (
                    <Text key={i} fontSize='md'>
                      {artist},{'  '}
                    </Text>
                  );
                })}
                </chakra.div>
              </Flex>
            </chakra.div>
            <Flex alignItems='center' minW='200px'>
              <chakra.div mr={2}>
                <BiAlbum />
              </chakra.div>
              <Text fontSize='md'>{album_title}</Text>
            </Flex>
            <hr></hr>
          </Stack>
        </Center>
        <Spacer />
        <Stack>
          <Tooltip placement='left' label='Add to Queue'>
            <Button variant='ghost' onClick={addToQueue}>
              <MdQueueMusic />
            </Button>
          </Tooltip>
          <SendTrack track={props.track} />
          {userPlaylists && (
            <AddToPlaylist user_id={user_id} playlists={userPlaylists} trackUri={track_uri} />
          )}
          <PlayNow user_id={userObj.user_id} friend_id={user_id} track_uri={track_uri} />
        </Stack>
      </Flex>
    </chakra.div>
  );
};

export default TrackComp;
