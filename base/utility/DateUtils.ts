import Moment from 'moment';

export const monthNameDateFormat = "DD MMM, YYYY";
export const hyphenDateDateFormat = "DD-MM-YYYY";
export const hyphenFullMonthDateFormat = "DD-MMM-YYYY";
export const reverseHyphenDateDateFormat = "YYYY-MM-DD";
export const fullHyphenDateDateFormat = "YYYY-MM-DD hh:mm:ss";
export const secondTimeFormatDateFormat = "hh:mm:ss";
export const minuteTimeFormatDateFormat = "hh:mm";


export function convertDateFormat(strDate: any, format: any) {
    try {
        return Moment(strDate).format(format);
    } catch (error) {
        return "";
    }
}

export function convertToLocal(strDate: any, format: any) {
    try {
        return Moment(Moment.utc(strDate).toDate()).format(format);
    } catch (error) {
        return "";
    }
}

export function convertFormatedDate(strDate: any, inputFormat: any, outputFormat: any) {
    try {
        return Moment(strDate, inputFormat).format(outputFormat);
    } catch (error) {
        return "";
    }
}

export function getTodayDate(dateFormat: any) {
    try {
        return Moment().format(dateFormat);
    } catch (error) {
        return "";
    }

}

export function getFutureDate(value: any, valueType: any, dateFormat: any) {
    try {
        return Moment().add(value, valueType).format(dateFormat);
    } catch (error) {
        return "";
    }

}

export function getPerviousDate(value: any, valueType: any, dateFormat: any) {
    try {
        return Moment().add(value, valueType).format(dateFormat);
    } catch (error) {
        return "";
    }

}

export function convertYear(strDate: any) {
    try {
        return Moment(strDate).format('YYYY');
    } catch (error) {
        return "";
    }

}

export function convertInDay(strDate: any) {
    try {
        return Moment(strDate).format('D');
    } catch (error) {
        return "";
    }

}

export function convertAMPM(strDate: any) {
    try {
        return Moment(strDate).format('hh:mm A');
    } catch (error) {
        return "";
    }

}

export function convertInMonth(strDate: any) {
    try {
        return Moment(strDate).format('MMMM');
    } catch (error) {
        return "";
    }

}

export function getCurrentDayNumber() {
    try {
        return Moment().day();
    } catch (error) {
        return "";
    }
}

export function isDateGreater(fromDate: any, toDate: any) {
    try {
        return Moment(fromDate).isAfter(toDate);
    } catch (error) {
        return "";
    }
}


