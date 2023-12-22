var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KECAMATAN_MUARA_WIS_1 = new ol.format.GeoJSON();
var features_KECAMATAN_MUARA_WIS_1 = format_KECAMATAN_MUARA_WIS_1.readFeatures(json_KECAMATAN_MUARA_WIS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KECAMATAN_MUARA_WIS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KECAMATAN_MUARA_WIS_1.addFeatures(features_KECAMATAN_MUARA_WIS_1);
var lyr_KECAMATAN_MUARA_WIS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KECAMATAN_MUARA_WIS_1, 
                style: style_KECAMATAN_MUARA_WIS_1,
                interactive: true,
                title: '<img src="styles/legend/KECAMATAN_MUARA_WIS_1.png" /> KECAMATAN_MUARA_WIS'
            });
var format_SUNGAI_2 = new ol.format.GeoJSON();
var features_SUNGAI_2 = format_SUNGAI_2.readFeatures(json_SUNGAI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_2.addFeatures(features_SUNGAI_2);
var lyr_SUNGAI_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_2, 
                style: style_SUNGAI_2,
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_2.png" /> SUNGAI'
            });
var format_SARANAIBADAH_3 = new ol.format.GeoJSON();
var features_SARANAIBADAH_3 = format_SARANAIBADAH_3.readFeatures(json_SARANAIBADAH_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SARANAIBADAH_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SARANAIBADAH_3.addFeatures(features_SARANAIBADAH_3);
var lyr_SARANAIBADAH_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SARANAIBADAH_3, 
                style: style_SARANAIBADAH_3,
                interactive: true,
                title: '<img src="styles/legend/SARANAIBADAH_3.png" /> SARANAIBADAH'
            });
var format_PUSKESMAS_4 = new ol.format.GeoJSON();
var features_PUSKESMAS_4 = format_PUSKESMAS_4.readFeatures(json_PUSKESMAS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUSKESMAS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUSKESMAS_4.addFeatures(features_PUSKESMAS_4);
var lyr_PUSKESMAS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PUSKESMAS_4, 
                style: style_PUSKESMAS_4,
                interactive: true,
                title: '<img src="styles/legend/PUSKESMAS_4.png" /> PUSKESMAS'
            });
var format_MAKAM_5 = new ol.format.GeoJSON();
var features_MAKAM_5 = format_MAKAM_5.readFeatures(json_MAKAM_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAKAM_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAKAM_5.addFeatures(features_MAKAM_5);
var lyr_MAKAM_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MAKAM_5, 
                style: style_MAKAM_5,
                interactive: true,
                title: '<img src="styles/legend/MAKAM_5.png" /> MAKAM'
            });
var format_LAYANANKESEHATAN_6 = new ol.format.GeoJSON();
var features_LAYANANKESEHATAN_6 = format_LAYANANKESEHATAN_6.readFeatures(json_LAYANANKESEHATAN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAYANANKESEHATAN_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAYANANKESEHATAN_6.addFeatures(features_LAYANANKESEHATAN_6);
var lyr_LAYANANKESEHATAN_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LAYANANKESEHATAN_6, 
                style: style_LAYANANKESEHATAN_6,
                interactive: true,
                title: '<img src="styles/legend/LAYANANKESEHATAN_6.png" /> LAYANANKESEHATAN'
            });
var format_JEMBATAN_7 = new ol.format.GeoJSON();
var features_JEMBATAN_7 = format_JEMBATAN_7.readFeatures(json_JEMBATAN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JEMBATAN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JEMBATAN_7.addFeatures(features_JEMBATAN_7);
var lyr_JEMBATAN_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JEMBATAN_7, 
                style: style_JEMBATAN_7,
                interactive: true,
                title: '<img src="styles/legend/JEMBATAN_7.png" /> JEMBATAN'
            });
var format_JALAN_8 = new ol.format.GeoJSON();
var features_JALAN_8 = format_JALAN_8.readFeatures(json_JALAN_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_8.addFeatures(features_JALAN_8);
var lyr_JALAN_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_8, 
                style: style_JALAN_8,
                interactive: true,
                title: '<img src="styles/legend/JALAN_8.png" /> JALAN'
            });
var format_BANGUNAN_9 = new ol.format.GeoJSON();
var features_BANGUNAN_9 = format_BANGUNAN_9.readFeatures(json_BANGUNAN_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_9.addFeatures(features_BANGUNAN_9);
var lyr_BANGUNAN_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BANGUNAN_9, 
                style: style_BANGUNAN_9,
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_9.png" /> BANGUNAN'
            });
var format_BANGUNANNN_10 = new ol.format.GeoJSON();
var features_BANGUNANNN_10 = format_BANGUNANNN_10.readFeatures(json_BANGUNANNN_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNANNN_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNANNN_10.addFeatures(features_BANGUNANNN_10);
var lyr_BANGUNANNN_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BANGUNANNN_10, 
                style: style_BANGUNANNN_10,
                interactive: true,
                title: '<img src="styles/legend/BANGUNANNN_10.png" /> BANGUNANNN'
            });
var format_ADMINISTRASI_11 = new ol.format.GeoJSON();
var features_ADMINISTRASI_11 = format_ADMINISTRASI_11.readFeatures(json_ADMINISTRASI_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_11.addFeatures(features_ADMINISTRASI_11);
var lyr_ADMINISTRASI_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASI_11, 
                style: style_ADMINISTRASI_11,
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_11.png" /> ADMINISTRASI'
            });
var format_PENDIDIKAN_12 = new ol.format.GeoJSON();
var features_PENDIDIKAN_12 = format_PENDIDIKAN_12.readFeatures(json_PENDIDIKAN_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENDIDIKAN_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_12.addFeatures(features_PENDIDIKAN_12);
var lyr_PENDIDIKAN_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PENDIDIKAN_12, 
                style: style_PENDIDIKAN_12,
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_12.png" /> PENDIDIKAN'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_KECAMATAN_MUARA_WIS_1.setVisible(true);lyr_SUNGAI_2.setVisible(true);lyr_SARANAIBADAH_3.setVisible(true);lyr_PUSKESMAS_4.setVisible(true);lyr_MAKAM_5.setVisible(true);lyr_LAYANANKESEHATAN_6.setVisible(true);lyr_JEMBATAN_7.setVisible(true);lyr_JALAN_8.setVisible(true);lyr_BANGUNAN_9.setVisible(true);lyr_BANGUNANNN_10.setVisible(true);lyr_ADMINISTRASI_11.setVisible(true);lyr_PENDIDIKAN_12.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KECAMATAN_MUARA_WIS_1,lyr_SUNGAI_2,lyr_SARANAIBADAH_3,lyr_PUSKESMAS_4,lyr_MAKAM_5,lyr_LAYANANKESEHATAN_6,lyr_JEMBATAN_7,lyr_JALAN_8,lyr_BANGUNAN_9,lyr_BANGUNANNN_10,lyr_ADMINISTRASI_11,lyr_PENDIDIKAN_12];
lyr_KECAMATAN_MUARA_WIS_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SARANAIBADAH_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FGSIBD': 'FGSIBD', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PUSKESMAS_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'SRS_ID': 'SRS_ID', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'KWKPKM_': 'KWKPKM_', 'KMPPKM_': 'KMPPKM_', 'JPLPKM_': 'JPLPKM_', 'PKMKODE_': 'PKMKODE_', 'PKMKAT_': 'PKMKAT_', 'PKMLMT_': 'PKMLMT_', });
lyr_MAKAM_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TPMKM': 'TPMKM', });
lyr_LAYANANKESEHATAN_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'LKALMT': 'LKALMT', 'TPLYST': 'TPLYST', });
lyr_JEMBATAN_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPJMB': 'TIPJMB', 'FGSJMB': 'FGSJMB', 'TONJMB': 'TONJMB', 'TGGJMB': 'TGGJMB', 'LBRJMB': 'LBRJMB', 'MATJMB': 'MATJMB', 'STRJMB': 'STRJMB', 'DEKJMB': 'DEKJMB', 'BTSJMB': 'BTSJMB', 'AYUJMB': 'AYUJMB', 'JBTJMB': 'JBTJMB', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_JALAN_8.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_BANGUNAN_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_BANGUNANNN_10.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASI_11.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PENDIDIKAN_12.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_KECAMATAN_MUARA_WIS_1.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SUNGAI_2.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_SARANAIBADAH_3.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'FGSIBD': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_PUSKESMAS_4.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'SRS_ID': '', 'REMARK': '', 'METADATA': '', 'KWKPKM_': '', 'KMPPKM_': '', 'JPLPKM_': '', 'PKMKODE_': '', 'PKMKAT_': '', 'PKMLMT_': '', });
lyr_MAKAM_5.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'TPMKM': '', });
lyr_LAYANANKESEHATAN_6.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'REMARK': '', 'SRS_ID': '', 'METADATA': '', 'LKALMT': '', 'TPLYST': '', });
lyr_JEMBATAN_7.set('fieldImages', {'NAMOBJ': '', 'TIPJMB': '', 'FGSJMB': '', 'TONJMB': '', 'TGGJMB': '', 'LBRJMB': '', 'MATJMB': '', 'STRJMB': '', 'DEKJMB': '', 'BTSJMB': '', 'AYUJMB': '', 'JBTJMB': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_JALAN_8.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_BANGUNAN_9.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_BANGUNANNN_10.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_ADMINISTRASI_11.set('fieldImages', {'KARKTR': '', 'STSBTS': '', 'FCODE': '', 'KELAS': '', 'UUPP': '', 'LOKASI': '', 'REMARK': '', 'NAMOBJ': '', 'ADMIN1': '', 'ADMIN2': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'WAKLD1': '', 'WAKLD2': '', 'WADKC1': '', 'WADKC2': '', 'WAKBK1': '', 'WAKBK2': '', 'WAPRO1': '', 'WAPRO2': '', 'TIPTBT': '', 'PJGBTS': '', 'KLBADM': '', 'TIPLOK': '', 'SHAPE_Leng': '', });
lyr_PENDIDIKAN_12.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'KATPDK': '', 'JLPDDK': '', 'FGGPDK': '', 'REMARK': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JJGPDF': '', 'JNSPDL': '', });
lyr_KECAMATAN_MUARA_WIS_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SUNGAI_2.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SARANAIBADAH_3.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FGSIBD': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PUSKESMAS_4.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'SRS_ID': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'KWKPKM_': 'no label', 'KMPPKM_': 'no label', 'JPLPKM_': 'no label', 'PKMKODE_': 'no label', 'PKMKAT_': 'no label', 'PKMLMT_': 'no label', });
lyr_MAKAM_5.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TPMKM': 'no label', });
lyr_LAYANANKESEHATAN_6.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'METADATA': 'no label', 'LKALMT': 'no label', 'TPLYST': 'no label', });
lyr_JEMBATAN_7.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPJMB': 'no label', 'FGSJMB': 'no label', 'TONJMB': 'no label', 'TGGJMB': 'no label', 'LBRJMB': 'no label', 'MATJMB': 'no label', 'STRJMB': 'no label', 'DEKJMB': 'no label', 'BTSJMB': 'no label', 'AYUJMB': 'no label', 'JBTJMB': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_JALAN_8.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_BANGUNAN_9.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_BANGUNANNN_10.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ADMINISTRASI_11.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_PENDIDIKAN_12.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_PENDIDIKAN_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});