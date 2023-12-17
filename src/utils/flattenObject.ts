const getEntries: (
  o: { [x: string]: any },
  prefix: string
) => [string, any][] = (o, prefix = "") =>
  Object.entries(o).flatMap(([k, v]) =>
    Object(v) === v ? getEntries(v, `${prefix}${k}.`) : [[`${prefix}${k}`, v]]
  );

function flattenObject(o: { [x: string]: any }) {
  return Object.fromEntries(getEntries(o, ""));
}

export default flattenObject;
