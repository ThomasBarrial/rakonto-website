function TexteSmall({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-josefin text-[14px] text-textColor md:text-[18px] ${className}`}
    >
      {children}
    </p>
  );
}

export default TexteSmall;
