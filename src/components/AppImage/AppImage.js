/* eslint-disable @next/next/no-img-element */
const AppImage = ({
  className,
  src,
  width,
  height,
  alt = "space jelly image",
}) => {
  return (
    <img
      className={className}
      src={src}
      width={width}
      height={height}
      alt={alt}
    />
  );
};

export default AppImage;
