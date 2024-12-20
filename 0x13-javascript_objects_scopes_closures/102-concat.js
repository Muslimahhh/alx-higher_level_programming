const fs = require("fs");

const files = process.argv.slice(2);

files.forEach((file) => {
  try {
    const content = fs.readFileSync(file, "utf8");
    console.log(content);
  } catch (err) {
    console.error(err);
  }
});
