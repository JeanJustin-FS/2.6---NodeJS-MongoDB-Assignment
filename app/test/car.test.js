const { Car } = require('../models/car');

describe('Car Model', () => {
    describe('Initialization', () => {
        it('should create an instance with the provided make, model, and year', () => {
            const car = new Car('Toyota', 'Camry', 2021);
            expect(car.make).toBe('Toyota');
            expect(car.model).toBe('Camry');
            expect(car.year).toBe(2021);
        });

        it('should throw an error if required fields are missing', () => {
            expect(() => new Car()).toThrow();
        });
    });

    describe('Behavior', () => {
        it('should start and return the "Car started" message', () => {
            const car = new Car('Honda', 'Accord', 2020);
            expect(car.start()).toBe('Car started');
        });
        
        it('should stop and return the "Car stopped" message', () => {
            const car = new Car('Ford', 'Mustang', 2019);
            expect(car.stop()).toBe('Car stopped');
        });
    });
});