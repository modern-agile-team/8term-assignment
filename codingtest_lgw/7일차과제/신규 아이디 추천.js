function solution(new_id) {
  new_id = new_id.toLowerCase(); // 1
  new_id = new_id.replace(/[^a-z0-9-_.]/g, ""); // 2
  new_id = new_id.replace(/\.+/g, "."); // 3
  new_id = new_id.replace(/^\./, ""); // 4
  if (!/./.test(new_id)) {
    new_id = "a";
  } // 5
  new_id = new_id.replace(new_id, new_id.substring(0, 15)); // 6
  if (/\.$/.test(new_id)) {
    new_id = new_id.replace(/\.+$/, "");
  }
  if (new_id.length <= 2) {
    for (let i = new_id.length; i < 3; i++) {
      new_id += new_id[new_id.length - 1];
    } // 7
  }

  return new_id;
}
