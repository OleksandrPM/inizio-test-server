function createResultsString(objects) {
  const strings = objects.map((object) => {
    return parseToString(object);
  });

  return strings.join("\n\n");
}

function parseToString(object) {
  let result = "";

  const keys = Object.keys(object);

  const strings = keys.map((key) => {
    const value = object[key];
    if (typeof value === "object" && value !== null) {
      return parseToString(value);
    } else {
      return `${key}: ${value}`;
    }
  });

  return strings.join(",\n");
}

export { createResultsString, parseToString };
