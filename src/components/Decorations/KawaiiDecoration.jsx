function KawaiiDecoration({
  src,
  alt,
  className = "",
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={`
        absolute
        pointer-events-none
        select-none
        ${className}
      `}
    />
  );
}

export default KawaiiDecoration;