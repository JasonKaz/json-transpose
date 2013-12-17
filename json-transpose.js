Array.transpose = function (data) {
    var obj = {},
        i, k;

    //Iterate through first first object's keys and create an array for each value
    for (k in data[0]) {
        obj[k] = [];
    }

    //Go through all data, putting values into the transposed object's value
    for (i = 0; i < data.length; i++) {
        for (k in data[i]) {
            obj[k].push(data[i][k]);
        }
    }

    return obj;
};

Array.untranspose = function (data) {
    var array = [],
        keys,
        obj = {},
        i, k;

    keys = Object.keys(data);

    for (i = 0; i < data[keys[0]].length; i++) {
        obj = {};

        for (k in keys) {
            obj[keys[k]] = data[keys[k]][i];
        }

        array.push(obj);
    }

    return array;
};
