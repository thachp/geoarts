import { RandomDrawing } from "../random.drawing";

describe("Random Drawing", () => {
    //

    it("should return random point", () => {
        // Arrange
        const randomDrawing = new RandomDrawing();

        // Act
        const results = randomDrawing.randomPoint(100, 100);

        // Assert
        expect(results).toBeDefined();
        expect(results[0]).toBeGreaterThanOrEqual(0);
        expect(results[1]).toBeGreaterThanOrEqual(0);
    });

    it("should return a thick type", () => {
        // Arrange
        const randomDrawing = new RandomDrawing();

        // Act
        const results = randomDrawing.randomThick();

        // Assert
        expect(results).toBeDefined();
        expect(results).toBeGreaterThanOrEqual(0);
    });

    it("should return a border type", () => {
        // Arrange
        const randomDrawing = new RandomDrawing();

        // Act
        const results = randomDrawing.randomBorder();

        // Assert

        const borderTypes = ["none", "solid", "dashed", "dotted", "double", "curvy"];
        expect(results).toBeDefined();
        expect(borderTypes.includes(results)).toBeTruthy();
    });

    it("should return boolean", () => {
        // Arrange
        const randomDrawing = new RandomDrawing();

        // Act
        const results = randomDrawing.randomFill();

        // Assert

        expect(results).toBeDefined();
        expect([true, false].includes(results)).toBeTruthy();
    });
});
