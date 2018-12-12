import React from 'react';

export default (data) => {
    let numbers = [],
        planes = [],
        from = [],
        to = [],
        statuses = [],
        dataArr = [],
        resTrsArr = [];

    if (data.forEach) {
        data.forEach(flight => {
            numbers.push(flight['flight']['iataNumber']);
            planes.push(flight['aircraft']['iataCode']);
            from.push(flight['departure']['iataCode']);
            to.push(flight['arrival']['iataCode']);
            statuses.push(flight['status']);
        });
    }

    dataArr.push(numbers, planes, from, to, statuses);

    for (let i = 0; i < numbers.length; i++) {
        let trArr = [];
        dataArr.forEach(arr => trArr.push(arr[i]));
        resTrsArr.push(trArr);
    }
    return resTrsArr;
}