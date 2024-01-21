function simpleTemplate(template: string, data: { [x: string]: string }) {
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      const placeholder = new RegExp(`\\$${key}\\$`, "g");
      template = template.replace(placeholder, data[key]);
    }
  }
  return template;
}
export { simpleTemplate };
