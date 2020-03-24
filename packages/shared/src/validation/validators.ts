export function validateEmail(email: string) {
    const exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return exp.test(String(email).toLowerCase());
}

export function validateRequired(value: string) {
    return value.length > 0;
}

export function validateMinLen(value: string, length: number) {
    return value.length >= length;
}

export function validateEquals(value: string, valueToCompare: string) {
    return value === valueToCompare;
}

export function validatePhoneNumber(number: string) {
    const exp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    return exp.test(number);
}

export function validateIsTrue(value: boolean) {
    return value;
}
