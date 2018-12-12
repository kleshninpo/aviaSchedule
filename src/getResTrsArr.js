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
            flight['flight']['iataNumber'] ? numbers.push(flight['flight']['iataNumber']) : numbers.push('no information');
            flight['aircraft']['iataCode'] ? planes.push(flight['aircraft']['iataCode']) : planes.push('no information');
            flight['departure']['iataCode'] ? from.push(flight['departure']['iataCode']) : from.push('no information');
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