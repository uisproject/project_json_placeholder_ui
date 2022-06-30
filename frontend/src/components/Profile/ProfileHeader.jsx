import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfileService } from "../../features/getProfileSliceAPI";
import UseAxiosPrivate from "../../hooks/UseAxiosPrivate";
import { UseSelectProfile } from "../../features/getProfileSliceAPI";
import { Card, Skeleton } from "antd";

const { Meta } = Card;

const ProfileHeader = () => {
  const dispatch = useDispatch();
  const instance = UseAxiosPrivate();
  const { isLoading, data, isError } = UseSelectProfile();

  useEffect(() => {
    dispatch(getProfileService({ instance: instance }));
  }, []);

  return (
    <>
      {!isLoading ? (
        <Card className="my-3 max-w-[1000px] rounded-xl">
          <h1 className="font-bold text-xl">{data?.data?.userInfo?.email}</h1>
          <p>
            Hi!, my name is {data?.data?.userInfo?.name}. Welcome to my profile
          </p>
        </Card>
      ) : (
        <Card className="my-3 max-w-[1000px] rounded-xl">
          <Skeleton loading={isLoading} active paragraph={{ rows: 1 }} />
        </Card>
      )}
    </>
  );
};

export default ProfileHeader;
