import React, { useState } from 'react';
import { Stack, Image, InputGroup, FormControl, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getPlaylist, add, remove, play } from '../reducer';
import { youtubeUrlParser, validateUrl } from '../_helpers/helper';
const PlayList = () => {
  const [newLink, setNewLink] = useState('');
  const dispatch = useDispatch();
  const playList = useSelector(getPlaylist);
  const getThumbnailImageByLink = (link) => {
    return `https://img.youtube.com/vi/${youtubeUrlParser(link)}/2.jpg`;
  };

  return (
    <Stack gap={1}>
      <div className="bg-light border video_list_section">
        {playList.map((link, index) => {
          return (
            <div
              className="player-list"
              onClick={() => {
                dispatch(play(index));
              }}
              key={index}>
              <Image src={getThumbnailImageByLink(link)} height={120} width={150} />
              <div className="item_title">{link}</div>
              <Button
                className="video-delete"
                size={'xs'}
                variant="danger"
                onClick={() => {
                  dispatch(remove(index));
                }}>
                x
              </Button>
            </div>
          );
        })}
      </div>
      <div className="bg-light border p-10">
        <h5>Add New Video in list</h5>
        <div className="add_new-video">
          <InputGroup className="">
            <FormControl
              placeholder="Video Link"
              aria-label="Video Link"
              aria-describedby="basic-addon1"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
            />
          </InputGroup>
          <Button
            onClick={() => {
              if (!validateUrl(newLink)) {
                alert('Please provide valid Youtube link');
                return;
              }
              dispatch(add(newLink));
              setNewLink('');
            }}
            size={'md'}
            variant="dark">
            Save
          </Button>
        </div>
      </div>
    </Stack>
  );
};
export default PlayList;
