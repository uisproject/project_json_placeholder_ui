import React from "react";

const SingleAlbum = ({ albumId, data }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((item, idx) => (
        <div
          key={idx}
          className="sm:w-[8em] w-[100%] min-w-[100px] inline-block sm:inline-block first:block hidden"
        >
          <img src={item.thumbnailUrl} className="w-[100%]" />
        </div>
      ))}
    </div>
  );
};

export default SingleAlbum;
