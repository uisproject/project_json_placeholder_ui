const pagination = (Limit = 10, Page = 1, Data = []) => {
  const totalData = Data.length;
  const limit = Limit;
  const totalPage = Math.ceil(totalData / Limit);
  const currentPage = Page;
  const hasPrev = Page > 1 ? true : false;
  const hasNext = Page < totalPage ? true : false;
  const data = Data.slice((Page - 1) * Limit, Limit * Page);

  return {
    totalData,
    limit,
    totalPage,
    currentPage,
    hasNext,
    hasPrev,
    data,
  };
};

module.exports = { pagination };
