import React from "react";
import { Skeleton, Card } from "antd";
import { UseSelectProfile } from "../../features/getProfileSliceAPI";
import SingleAlbum from "./SingleAlbum";

const ProfileAlbums = () => {
  const { isLoading, data, isError } = UseSelectProfile();
  return (
    <>
      <div className="min-w-[90%] mx-auto flex flex-wrap justify-center">
        {isLoading
          ? Array.from([1, 2, 3, 4, 5, 6]).map((_, idx) => (
              <Card
                className="rounded-xl m-3 min-w-[100%] lg:min-w-[20em] lg:max-w-[20em] "
                key={idx}
              >
                <Skeleton active />
              </Card>
            ))
          : data?.data?.albums?.map((album, idx) => (
              <Card
                key={idx}
                className="rounded-xl m-1  min-w-[90%] lg:min-w-[20em] lg:max-w-[20em] justify-center items-center cursor-pointer"
              >
                <SingleAlbum {...album} />
              </Card>
            ))}
      </div>
    </>
  );
};

export default ProfileAlbums;
