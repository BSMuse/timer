const arguments = process.argv.slice(2);

const timer1 = (array) => {
  if (array.length === 0) {
    return;
  }

  const el = array.shift();

  if (!isNaN(el) && el > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
      timer1(array);
    }, el * 1000);
  } else {
    timer1(array);
  }
};

timer1(arguments);