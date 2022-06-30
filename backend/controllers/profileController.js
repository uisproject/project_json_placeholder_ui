const asyncHandler = require("express-async-handler");

const { photoData, albumData } = require("../data/data");

const getUserData = asyncHandler(async (req, res) => {
  const userInfo = req.userInfo.data;

  const foundUserData = albumData.find(
    (data) => data.userId === userInfo.userId
  );

  const foundUserAlbum = albumData.filter(
    (data) => data.userId === userInfo.userId
  );

  let allAlbums = [];

  foundUserAlbum.forEach((userAlbum, idx) => {
    const selectedData = photoData
      .filter((userPhoto) => userAlbum.albumId === userPhoto.albumId)
      .slice(0, 4);

    allAlbums.push({
      albumId: idx + 1,
      data: selectedData,
    });
  });

  res.status(200).json(allAlbums);
});

module.exports = { getUserData };
