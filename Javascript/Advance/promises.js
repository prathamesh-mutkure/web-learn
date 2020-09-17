const uno = () => {
  return "Uno -> 1";
};

const dos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Dos -> 2");
    }, 1000);
  });
};

const tres = () => {
  return "Tres -> 3";
};

const callMe = async () => {
  const val1 = uno();
  console.log(val1);

  const val2 = await dos();
  console.log(val2);

  const val3 = tres();
  console.log(val3);
};

callMe();
