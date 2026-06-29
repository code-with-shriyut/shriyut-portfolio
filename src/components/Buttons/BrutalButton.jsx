function BrutalButton({
  children,
  bgColor,
  textColor = "black",
  href,
}) {
  return (
    <a
      href={href}
      className="
      brutal-button
      inline-block
      px-6
      py-3
      rounded-xl
      font-bold
      "
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {children}
    </a>
  );
}

export default BrutalButton;