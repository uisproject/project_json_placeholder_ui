import React from "react";
import ProfileHeader from "../components/Profile/ProfileHeader";

import Container from "../layouts/Container";
import MainLayout from "../layouts/MainLayout";

const ProfilePage = () => {
  return (
    <>
      <MainLayout>
        <Container>
          <ProfileHeader />
        </Container>
      </MainLayout>
    </>
  );
};

export default ProfilePage;
