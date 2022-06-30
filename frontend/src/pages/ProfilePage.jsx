import React from "react";
import ProfileAlbums from "../components/Profile/ProfileAlbums";
import ProfileHeader from "../components/Profile/ProfileHeader";

import Container from "../layouts/Container";
import MainLayout from "../layouts/MainLayout";

const ProfilePage = () => {
  return (
    <>
      <MainLayout>
        <Container>
          <ProfileHeader />
          <ProfileAlbums />
        </Container>
      </MainLayout>
    </>
  );
};

export default ProfilePage;
