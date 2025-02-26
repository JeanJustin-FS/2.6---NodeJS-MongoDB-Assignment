=
const todoService = async () => {
    return await Promise.resolve({ data: [
      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },];
     });
    
};

const todoServiceById = async () => {
    return await Promise.resolve({ data: {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      }
    });

};

module.exports = { todoService, todoServiceById };