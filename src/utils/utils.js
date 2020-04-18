import moment from 'moment';
import _ from 'lodash';

export const fromNow = unixTime => {
    const diff = moment().dayOfYear() - moment(unixTime).dayOfYear();
    if (diff === 0) return moment(unixTime).format("H:mm");
    if (diff < 7) return moment(unixTime).format("ddd");
    else return moment(unixTime).format("MMM D");
};

export const truncate = (str, len) => {
    return _.truncate(str, {
        'length': len,
        'separator': /,? +/
    });
};

export const range = n => {
    let i = 0;
    const result = [];
    while (i < n) {
        result.push(i);
        i++;
    }
    return result;
};

export const toQueryString= json => {
    return Object.keys(json)
      .map(k => `${k}=${encodeURIComponent(json[k])}`)
      .join('&');
};

export const delay = ms => new Promise((res, rej) => setTimeout(res, ms));

export const findLimit = (data, minimum, number = false) => {
    const length = !number ? data.length : data;
    let i = minimum;
    while (length % i > 0 && i < length)
        i++;
    return i;
};

export const transAuthors = (authors, maxLength) => {
    if (_.isEmpty(authors)) return "";
    let authorsStr = authors[0];
    let i = 1;
    const n = authors.length;
    while (i < n) {
        if (authorsStr.length + 2 + authors[i].length <= maxLength) {
            authorsStr = `${authorsStr}, ${authors[i]}`;
            i++;
        }
        else {
            authorsStr = `${authorsStr} and ${n - i} others`;
            i = n + 1;
        }
    }   
    return authorsStr;
};

export const roundStarRating = rating => {
    if (rating > 5) return 5;
    else if (rating < 0) return 0;
    const ceil = _.ceil(rating);
    if (rating < ceil) return ceil - 0.5;
    else return rating;
};

export const  numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const minutesToHour = mins => {
    if (mins < 60) return `${mins} mins`;
    let num = mins;
    let hours = (num / 60);
    let rhours = _.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = _.round(minutes);
    return rminutes > 0 ? `${rhours}h${rminutes}m` : `${rhours}h`;
};

export const checkValidLinkWithoutProtocol = link => {
    const hrefRegex = /^([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+.*)$/;
	return hrefRegex.test(link);
};

export const checkValidLink = link => {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(link);
};

export const capitalText = name => {
    const matches = name.match(/\b(\w)/g); // ['J','S','O','N']
    return _.join(_.takeRight(matches, 2), '');
};

export const checkEmail = email => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};

export const bytesToSize = (bytes) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Byte';
    const i = parseInt(_.floor(Math.log(bytes) / Math.log(1024)));
    return _.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};

export const secondsToTime = time => {
    const minutes = _.floor(time / 60);
    const seconds = _.toInteger(time - minutes * 60);
    const padTime = val => val < 10 ? `0${val}` : val;
    return `${padTime(minutes)}:${padTime(seconds)}`;
};

export const parsePathname = pathname => {
    const trimmedPath = _.trim(pathname, '/');
    return _.split(trimmedPath, '/');
};