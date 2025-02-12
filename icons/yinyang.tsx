export default function YinYang({
  className
}: React.HTMLAttributes<SVGElement>) {
  return (
    <svg
      width="227"
      height="226"
      viewBox="0 0 227 226"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} yinyang`}
    >
      <circle className="light" cx="113" cy="113" r="113" fill="white" />
      <path
        className="dark"
        d="M226.937 112C226.937 174.96 175.897 226 112.937 226C34.4399 220.5 50.4401 115 113.94 115C177.44 115 199.94 12.5 112.937 0C175.898 0 226.937 49.0395 226.937 112Z"
        fill="black"
      />
      <circle className="light" cx="116" cy="171" r="19" fill="white" />
      <circle className="dark" cx="113" cy="56" r="19" fill="black" />
    </svg>
  );
}
