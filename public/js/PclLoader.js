var server = 'http://localhost:3000';

function GetPclChunk(index, cb)
{
    $.getJSON(server + "/data?index="+ index, function(result)
    {
        console.log("Loaded Data");
        cb(result);
    });
}

function GetDataSize(fileName, cb)
{
    $.getJSON(server + "/datasize?file=" + fileName, function(result)
    {
        cb(result.count);
    });
}