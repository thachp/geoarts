import { GenerateRarity } from "../generate.rarity";

describe("Generate Rarity", () => {
    //

    it("should return a rarity", () => {
        // Arrange
        const generateRarity = new GenerateRarity();

        // Act
        const results = generateRarity.toRarity();

        // Assert
        expect(results).toBeDefined();
        expect(results.score).toBeGreaterThanOrEqual(0);
    });
});
