import Image from "next/image";

export default function OCFBadge() {
  return (
    <a href="https://www.ocf.berkeley.edu" target="_blank">
      <Image
        src="http://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin-dark.svg"
        alt="Hosted by the OCF"
        width="125"
        height="50"
        style={{ border: 0 }}
      />
    </a>
  );
}
