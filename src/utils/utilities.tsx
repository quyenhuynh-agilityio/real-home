export const filterByField = (data) =>
  data.reduce(function (acc, curr) {
    const findIfNameExist = acc.findIndex((item) => {
      return item.country === curr.country;
    });

    if (findIfNameExist === -1) {
      const obj = {
        country: curr.country,
        items: [curr],
      };
      acc.push(obj);
    } else {
      acc[findIfNameExist].items.push(curr);
    }
    return acc;
  }, []);

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};
