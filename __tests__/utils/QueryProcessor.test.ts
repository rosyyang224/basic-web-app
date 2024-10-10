import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrew id description', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "rey"
          ));
    });
    
    test('should add numbers', () => {
        expect(QueryProcessor("What is 5 plus 52?")).toEqual("57");
        expect(QueryProcessor("What is 12 plus 1?")).toEqual("13");
    });

    test('should multiply numbers', () => {
        expect(QueryProcessor("What is 18 multiplied by 8?")).toEqual("144");
        expect(QueryProcessor("What is 75 multiplied by 65?")).toEqual("4875");
    });

    test('should subtract numbers', () => {
        expect(QueryProcessor("What is 76 minus 32?")).toEqual("44");
        expect(QueryProcessor("What is 5 minus 70?")).toEqual("-65");
    });
});