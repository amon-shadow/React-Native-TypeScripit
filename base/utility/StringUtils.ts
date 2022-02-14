export function isNullOrEmpty(string: any) {
    return string == "undefined" || string == null || string == "";
}

export function isValidEmailId(string: any) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(string);
}


export function isValidMobileNumber(string: any) {
    var re = /^[6-9]{1}[0-9]{9}$/;
    return re.test(string);
}

export function capitalizedByWord(value: any) {
    // \s matches a whitespace character
    // \S matches a non - whitespace character
    //     (x | y) matches any of the specified alternatives
    return (value != undefined && value != null) ? value.replace(/[^A-Z0-9]/g, (l: any) => l.toUpperCase()) : "";
}

export function numericOnly(value: string) {
    // \s matches a whitespace character
    // \S matches a non - whitespace character
    //     (x | y) matches any of the specified alternatives
    return value.replace(/\D/g, '');
}

export function hasNumber(myString: string) {
    return isNullOrEmpty(myString) ? false : /\d/.test(myString);
}

export function isEqualObject(a: any, b: any) {
    try {
        return JSON.stringify(a) === JSON.stringify(b);
    } catch (error) {
        return false;
    }
}