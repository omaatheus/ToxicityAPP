import React, { useState } from 'react';
import Posts from '../Screens/Posts/Posts';
import PageBan from '../Screens/PageBan/PageBan';

export default function TextBan() {
  const [bannedPostContent, setBannedPostContent] = useState<string | null>(null);

  const handlePostBanned = (postContent: string) => {
    setBannedPostContent(postContent);
  };

  return (
    <>
      {bannedPostContent ? (
        <PageBan reason={bannedPostContent} />  
      ) : (
        <Posts onPostBanned={handlePostBanned} />
      )}
    </>
  );
};
