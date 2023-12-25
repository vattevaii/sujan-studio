export default function sanityImageLoader({ src, width, quality }: any) {
  const prj = "ub1sk5dc";
  const dataset = "production";
  const url = new URL(`${src}`);
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "max");
  url.searchParams.set("w", width.toString());
  if (quality) {
    url.searchParams.set("q", quality.toString());
  }
  return url.href;
}
