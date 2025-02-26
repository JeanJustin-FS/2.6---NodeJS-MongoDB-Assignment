const {todoService, todoServiceById} = require('./todoService');

jest.mock('./todoService'); // Corrected the module path

describe ('Todo Service Test ', () => {
    test('It gets all todos', async () => {
         const result = await todoService();
        expect(result.data.length).toHaveLength(3);
    });

        test('It gets a todo by ID', async () => {
             const result = await todoServiceById(2);
            expect(result.data.userId).toEqual(1);
            expect(result.data.completed).toEqual(true);

        });
});


