import { ERROR_MEESAGE } from "../constants.js";
class InputValidator {
    static validateCarName(input) {
        const names = this.#parseNames(input);

        this.#validateEmptyNames(names);
        this.#validateNameLength(names);
        this.#validateDuplicateNames(names);

        return names;
    }

    static #parseNames(input) {
        return input.split(",").map((name) => name.trim());
    }

    static #validateEmptyNames(names) {
        if(names.length === 0 || names.some((n) => n === "")) {
            throw new Error(ERROR_MEESAGE.emptyName);
        }
    }

    static #validateNameLength(names) {
        if(names.some((n) => n.length > 5)) {
            throw new Error(ERROR_MEESAGE.overNameSize);
        }
    }

    static #validateDuplicateNames(names) {
        if(new Set(names).size !== names.length) {
            throw new Error(ERROR_MEESAGE.existSameName);
        }
    }

    static validateTryCount(input) {
        const num = Number(input);
        if(isNaN(num) || num < 1) {
            throw new Error(ERROR_MEESAGE.tryCount);
        }
        return num;
    }
}

export default InputValidator;