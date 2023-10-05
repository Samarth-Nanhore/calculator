let add = (...arg) => {
  return arg.reduce((total, curr) => total + curr, 0);
};

let subtract = (...arg) => {
  return arg.reduce((total, curr) => total - curr);
};

let multiply = (...arg) => {
  return arg.reduce((total, curr) => total * curr, 1);
};

let divide = (...arg) => {
  return arg.reduce((total, curr) => total / curr);
};
