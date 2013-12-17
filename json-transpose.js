Array.transpose = function (data) {
    var obj = {},
        i, k, l = data.length;

    //Iterate through first first object's keys and create an array for each value
    for (k in data[0]) {
        obj[k] = [];
    }

    //Go through all data, putting values into the transposed object's value
    for (i = 0; i < l; i++) {
        for (k in data[i]) {
            obj[k].push(data[i][k]);
        }
    }

    return obj;
};

Array.untranspose = function (data) {
    var array = [],
        keys = Object.keys(data),
        obj = {},
        i, k, key, l;

    for (i = 0, l = data[keys[0]].length; i < l; i++) {
        obj = {};

        for (k in keys) {
            key = keys[k];
            obj[key] = data[key][i];
        }

        array.push(obj);
    }

    return array;
};
