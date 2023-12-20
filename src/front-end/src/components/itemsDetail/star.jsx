const Star = ({ rates = "5" }) => {
  const fullStars = Math.floor(parseFloat(rates));
  const remaining = parseFloat(rates) - fullStars;
  const greyStars = 5 - fullStars - 1;

  const renderStars = () => {
    let stars = [];

    // Ngôi sao hoàn chỉnh
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="21"
          viewBox="0 0 22 21"
          fill="#FFCB45"
        >
          <path d="M10.6745 0.418945L14.3029 6.60512L21.3487 8.12026L16.5453 13.4587L17.2715 20.5813L10.6745 17.6944L4.07753 20.5813L4.80374 13.4587L0.000366211 8.12026L7.04618 6.60512L10.6745 0.418945Z" />
        </svg>
      );
    }

    // Ngôi sao bán sáng
    if (remaining > 0) {
      const gradientId = `halfStar${fullStars}`;
      stars.push(
        <svg
          key="half"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="21"
          viewBox="0 0 22 21"
        >
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset={`${remaining * 100}%`} stopColor="#FFCB45" />
              <stop offset={`${remaining * 100}%`} stopColor="#D9D9D9" />
            </linearGradient>
          </defs>
          <path
            d="M10.6745 0.418945L14.3029 6.60512L21.3487 8.12026L16.5453 13.4587L17.2715 20.5813L10.6745 17.6944L4.07753 20.5813L4.80374 13.4587L0.000366211 8.12026L7.04618 6.60512L10.6745 0.418945Z"
            fill={`url(#${gradientId})`}
          />
        </svg>
      );
    }

    // Ngôi sao xám
    for (let i = 0; i < greyStars; i++) {
      stars.push(
        <svg
          key={`grey-${i}`}
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="21"
          viewBox="0 0 22 21"
          fill="#D9D9D9"
        >
          <path d="M10.6745 0.418945L14.3029 6.60512L21.3487 8.12026L16.5453 13.4587L17.2715 20.5813L10.6745 17.6944L4.07753 20.5813L4.80374 13.4587L0.000366211 8.12026L7.04618 6.60512L10.6745 0.418945Z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="flex flex-row gap-[7.116px] pl-4">{renderStars()}</div>
  );
};

export default Star;
