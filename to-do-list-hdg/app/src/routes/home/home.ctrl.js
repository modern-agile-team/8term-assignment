"use strict";

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
};

const process = {
  lists: () => {},
};

module.exports = {
  output,
  process,
};
