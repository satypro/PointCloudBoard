function GetGeometryColorMap(code)
{
    var colorMap =
    {
        Surface :
        {
            Code : 0,
            R : 255,
            G : 0,
            B : 0,
            color : "rgb(255,0,0)"
        },
        Line :
        {
            Code : 2,
            R : 0,
            G : 0,
            B : 255,
            color : "rgb(0,0,255)"
        },
        Point :
        {
            Code : 3,
            R : 0,
            G : 255,
            B : 0,
            color : "rgb(0,255,0)"
        }
    };

    switch(code)
    {
        case 0 : return colorMap.Surface;
        case 2 : return colorMap.Line;
        case 3 : return colorMap.Point;
        default : return colorMap.Point;
    }
}

function GetSemanticColorMap(code)
{
    var colorMap = 
    {
        PowerLine : 
        {
            Code : 0,
            R : 255,
            G : 255,
            B : 125,
            color : "rgb(255,255,125)"
        },
        Lowvegetation : 
        {
            Code : 1,
            R : 0,
            G : 255,
            B : 255,
            color : "rgb(0,255,255)"
        },
        Impervioussurfaces : 
        {
            Code : 2,
            R : 255,
            G : 255,
            B : 255,
            color : "rgb(255,255,255)"
        },
        Car : 
        {
            Code : 3,
            R : 255,
            G : 255,
            B : 0,
            color : "rgb(255,255,0)"
        },
        FenceHedge : 
        {
            Code : 4,
            R : 0,
            G : 255,
            B : 125,
            color : "rgb(0,255,125)"
        },
        Roof: 
        {
            Code : 5,
            R : 0,
            G : 0,
            B : 255,
            color : "rgb(0,0,255)"
        },
        Facade: 
        {
            Code : 6,
            R : 0,
            G : 125,
            B : 255,
            color : "rgb(0,125,255)"
        },
        Shrub: 
        {
            Code : 7,
            R : 125,
            G : 255,
            B : 0,
            color : "rgb(125,255,0)"
        },
        Tree: 
        {
            Code : 8,
            R : 0,
            G : 255,
            B : 0,
            color : "rgb(0,255,0)"
        }
    };

    switch(code)
    {
        case 0 : return colorMap.PowerLine;
        case 1 : return colorMap.Lowvegetation;
        case 2 : return colorMap.Impervioussurfaces;
        case 3 : return colorMap.Car;
        case 4 : return colorMap.FenceHedge;
        case 5 : return colorMap.Roof;
        case 6 : return colorMap.Facade;
        case 7 : return colorMap.Shrub;
        case 8 : return colorMap.Tree;
        default : return colorMap.Impervioussurfaces;
    }
}