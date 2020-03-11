Highcharts.mapChart('container', {
    chart: {
        //map: 'countries/mx/mx-all'
        map: Highcharts.maps["countries/mx/mx-all"],
        backgroundColor: '#e0c9a3',

    },
    exporting:false,

    title: {
        text: '<h2>ENTIDADES FEDERATIVAS</h2>',
        useHTML:true,
        style: {
            font: '16px "Montserrat", Verdana, sans-serif',

        }
    },
    mapNavigation: {
        enabled: true,
        enableMouseWheelZoom: false,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },
    legend: {
        enabled: true,
    },
    colors:
    ['#ffffff'],
    colorAxis: {
        dataClasses: [{
            from: 1,
            to: 1,
            color: '#2A4E43',
            name: 'Primera Etapa 2020'
        }, {
            from: 2,
            to: 2,
            color: '#37856D',
            name: 'Segunda Etapa 2021'
        },{
            from: 3,
            to: 3,
            color: '#82CACE',
            name: 'Tercera Etapa 2022'
        }
        ]
    },
    tooltip: {
        enabled: true,
        formatter:function(){
            return this.key;
        }
    },
    series: [{
        data: datamap,
        name: 'Entidad',
        states: {
            hover: {
                color: '#AD3233'
            }
        },
        point: {
            events: {
                click: function(){
                    var row = this.options.row,
                        $div = $('<div class="ventana" style="background-color: white; ">' +
                            '<div class="titulo" ><h5>'+this.nombre+'</h5></div>'+
                            '<div class="row" ><div class="col-md-5"><p class="pnegritas"><h5>Fecha de creación:</h5></p></div><div class="col-md-7"><h6>'+this.fechaCreacion+'</h6></div></div>'+
                            '<div class="panel-group ficha-collapse" id="accordion"><div class="panel panel-default"><div class="panel-heading pnegritas"><h4 class="panel-title"><a data-parent="#accordion" data-toggle="collapse" href="#panel-01" aria-expanded="true" aria-controls="panel-01">Planes y Programas</a></h4><button type="button" class="collpase-button collapsed" data-parent="#accordion" data-toggle="collapse" href="#panel-'+this.edo+'"></button></div><div class="panel-collapse collapse" id="panel-'+this.edo+'"><div class="panel-body">'+this.planes+'<div class="panel-group ficha-collapse" id="accordion" style="margin-top: 20px; "><div class=""><div class="pnegritas"><h4 class="panel-title"><a data-parent="#accordion" data-toggle="collapse" href="#panel-01" aria-expanded="true" aria-controls="panel-01"><p type="button" class="collapsed" data-parent="#accordion" data-toggle="collapse" href="#ampliaciones-'+this.edo+'">Ampliaciones</p></a></h4></div><div class="panel-collapse collapse" id="ampliaciones-'+this.edo+'"><div class="panel-body">'+this.planes+'</div></div></div></div></div></div></div></div><div class="panel-group ficha-collapse" id="accordion"><div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title"><a data-parent="#accordion" data-toggle="collapse" href="#panel-01" aria-expanded="true" aria-controls="panel-01">Legislación</a></h4><button type="button" class="collpase-button collapsed" data-parent="#accordion" data-toggle="collapse" href="#ampl-'+this.edo+'"></button></div><div class="panel-collapse collapse " id="ampl-'+this.edo+'"><div class="panel-body">'+this.planes+'</div></div></div></div><div class="panel-group ficha-collapse" id="accordion"><div class="panel panel-default"><div class="panel-heading pnegritas"><h4 class="panel-title"><a data-parent="#accordion" data-toggle="collapse" href="#panel-01" aria-expanded="true" aria-controls="panel-01">Planeación</a></h4><button type="button" class="collpase-button collapsed" data-parent="#accordion" data-toggle="collapse" href="#plan-'+this.edo+'"></button></div><div class="panel-collapse collapse" id="plan-'+this.edo+'"><div class="panel-body">'+this.planes+'<div class="panel-group ficha-collapse" id="accordion"><div class="panel panel-default"><div class="panel-heading pnegritas"><h4 class="panel-title"><a data-parent="#accordion" data-toggle="collapse" href="#panel-01" aria-expanded="true" aria-controls="panel-01">Presupuesto</a></h4><button type="button" class="collpase-button collapsed" data-parent="#accordion" data-toggle="collapse" href="#presupuesto-'+this.edo+'"></button></div><div class="panel-collapse collapse" id="presupuesto-'+this.edo+'"><div class="panel-body">'+this.planes+'</div></div></div></div></div></div></div></div>'+                       
                            //'<div class="fecha" ><p class="pnegritas" >Planes y Programas</p></div>'+
                            //'<div class="planes" >'+this.planes+'</div>'+
                            '</div>')

                            .dialog({

                                title: this.name,
                                align: 'center',                           
                                width: 600,
                                height: 450                            
                            });
                }
            }
        },
        dataLabels: {
            enabled: false,
            format: '{point.name}',
            style: {
                color: '#245c4d',
                font: '16px "Montserrat", Verdana, sans-serif'
            }
        }

    }]
}, function(chart) {

});
