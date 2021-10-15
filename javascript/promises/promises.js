//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const promisify = (funcao) => {
  return function (parametro) {
    return new Promise((resolve, reject) => {
      funcao(parametro, (error, data) => {
        error ? reject(error) : resolve(data);
      });
    });
  };
};

export const all = () => {
  throw new Error("Remove this statement and implement this function");
};

export const allSettled = async (array) => {
  let list = [];
  
  for(let promises of array){
    try {
      list.push(await promises);
    } catch (error) {
      list.push(error);
    }
  } 

  return list;
};


export const race = () => {
  throw new Error("Remove this statement and implement this function");
};

export const any = () => {
  throw new Error("Remove this statement and implement this function");
};
