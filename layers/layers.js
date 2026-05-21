var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_jangkauan_per_kelurahan_1 = new ol.format.GeoJSON();
var features_jangkauan_per_kelurahan_1 = format_jangkauan_per_kelurahan_1.readFeatures(json_jangkauan_per_kelurahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jangkauan_per_kelurahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jangkauan_per_kelurahan_1.addFeatures(features_jangkauan_per_kelurahan_1);
var lyr_jangkauan_per_kelurahan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jangkauan_per_kelurahan_1, 
                style: style_jangkauan_per_kelurahan_1,
                popuplayertitle: 'jangkauan_per_kelurahan',
                interactive: true,
    title: 'jangkauan_per_kelurahan<br />\
    <img src="styles/legend/jangkauan_per_kelurahan_1_0.png" /> Embong Kaliasin<br />\
    <img src="styles/legend/jangkauan_per_kelurahan_1_1.png" /> Genteng<br />\
    <img src="styles/legend/jangkauan_per_kelurahan_1_2.png" /> Kapasari<br />\
    <img src="styles/legend/jangkauan_per_kelurahan_1_3.png" /> Ketabang<br />\
    <img src="styles/legend/jangkauan_per_kelurahan_1_4.png" /> Peneleh<br />\
    <img src="styles/legend/jangkauan_per_kelurahan_1_5.png" /> <br />' });
var format_kecamatan_genteng_ar_2 = new ol.format.GeoJSON();
var features_kecamatan_genteng_ar_2 = format_kecamatan_genteng_ar_2.readFeatures(json_kecamatan_genteng_ar_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kecamatan_genteng_ar_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kecamatan_genteng_ar_2.addFeatures(features_kecamatan_genteng_ar_2);
var lyr_kecamatan_genteng_ar_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kecamatan_genteng_ar_2, 
                style: style_kecamatan_genteng_ar_2,
                popuplayertitle: 'kecamatan_genteng_ar',
                interactive: true,
    title: 'kecamatan_genteng_ar<br />\
    <img src="styles/legend/kecamatan_genteng_ar_2_0.png" /> Embong Kaliasin<br />\
    <img src="styles/legend/kecamatan_genteng_ar_2_1.png" /> Genteng<br />\
    <img src="styles/legend/kecamatan_genteng_ar_2_2.png" /> Kapasari<br />\
    <img src="styles/legend/kecamatan_genteng_ar_2_3.png" /> Ketabang<br />\
    <img src="styles/legend/kecamatan_genteng_ar_2_4.png" /> Peneleh<br />\
    <img src="styles/legend/kecamatan_genteng_ar_2_5.png" /> <br />' });
var format_Jangkauanperhalte_3 = new ol.format.GeoJSON();
var features_Jangkauanperhalte_3 = format_Jangkauanperhalte_3.readFeatures(json_Jangkauanperhalte_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jangkauanperhalte_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jangkauanperhalte_3.addFeatures(features_Jangkauanperhalte_3);
var lyr_Jangkauanperhalte_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jangkauanperhalte_3, 
                style: style_Jangkauanperhalte_3,
                popuplayertitle: 'Jangkauan per halte ',
                interactive: true,
                title: '<img src="styles/legend/Jangkauanperhalte_3.png" /> Jangkauan per halte '
            });
var format_jalan_4 = new ol.format.GeoJSON();
var features_jalan_4 = format_jalan_4.readFeatures(json_jalan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_4.addFeatures(features_jalan_4);
var lyr_jalan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_4, 
                style: style_jalan_4,
                popuplayertitle: 'jalan',
                interactive: true,
                title: '<img src="styles/legend/jalan_4.png" /> jalan'
            });
var format_jalan_menjangkau_400m_5 = new ol.format.GeoJSON();
var features_jalan_menjangkau_400m_5 = format_jalan_menjangkau_400m_5.readFeatures(json_jalan_menjangkau_400m_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_menjangkau_400m_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_menjangkau_400m_5.addFeatures(features_jalan_menjangkau_400m_5);
var lyr_jalan_menjangkau_400m_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_menjangkau_400m_5, 
                style: style_jalan_menjangkau_400m_5,
                popuplayertitle: 'jalan_menjangkau_400m',
                interactive: true,
                title: '<img src="styles/legend/jalan_menjangkau_400m_5.png" /> jalan_menjangkau_400m'
            });
var format_halte_pt_6 = new ol.format.GeoJSON();
var features_halte_pt_6 = format_halte_pt_6.readFeatures(json_halte_pt_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_halte_pt_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_halte_pt_6.addFeatures(features_halte_pt_6);
var lyr_halte_pt_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_halte_pt_6, 
                style: style_halte_pt_6,
                popuplayertitle: 'halte_pt',
                interactive: true,
    title: 'halte_pt<br />\
    <img src="styles/legend/halte_pt_6_0.png" /> Halte Balai Kota<br />\
    <img src="styles/legend/halte_pt_6_1.png" /> Halte Bambu Runcing<br />\
    <img src="styles/legend/halte_pt_6_2.png" /> Halte Basra<br />\
    <img src="styles/legend/halte_pt_6_3.png" /> Halte Cak Durasim A<br />\
    <img src="styles/legend/halte_pt_6_4.png" /> Halte Cak Durasim B<br />\
    <img src="styles/legend/halte_pt_6_5.png" /> Halte Embong Kemiri<br />\
    <img src="styles/legend/halte_pt_6_6.png" /> Halte Embong Malang<br />\
    <img src="styles/legend/halte_pt_6_7.png" /> Halte Embong Malang 2<br />\
    <img src="styles/legend/halte_pt_6_8.png" /> Halte Embong Wungu<br />\
    <img src="styles/legend/halte_pt_6_9.png" /> Halte Genteng Kali A<br />\
    <img src="styles/legend/halte_pt_6_10.png" /> Halte Genteng Kali B<br />\
    <img src="styles/legend/halte_pt_6_11.png" /> Halte Gondosuli<br />\
    <img src="styles/legend/halte_pt_6_12.png" /> Halte Grand City<br />\
    <img src="styles/legend/halte_pt_6_13.png" /> Halte Gubernur Suryo<br />\
    <img src="styles/legend/halte_pt_6_14.png" /> Halte Jaksa Agung Suprapto<br />\
    <img src="styles/legend/halte_pt_6_15.png" /> Halte Jimerto<br />\
    <img src="styles/legend/halte_pt_6_16.png" /> Halte Kaliasin<br />\
    <img src="styles/legend/halte_pt_6_17.png" /> Halte Kantor Dinas Pendidikan<br />\
    <img src="styles/legend/halte_pt_6_18.png" /> Halte Kayoon 1A<br />\
    <img src="styles/legend/halte_pt_6_19.png" /> Halte Kayoon 1B<br />\
    <img src="styles/legend/halte_pt_6_20.png" /> Halte Kayoon 2A<br />\
    <img src="styles/legend/halte_pt_6_21.png" /> Halte Kayoon 2B<br />\
    <img src="styles/legend/halte_pt_6_22.png" /> Halte Ketabang Ngemplak<br />\
    <img src="styles/legend/halte_pt_6_23.png" /> Halte MMPA SIOLA A<br />\
    <img src="styles/legend/halte_pt_6_24.png" /> Halte Monkasel<br />\
    <img src="styles/legend/halte_pt_6_25.png" /> Halte Monumen Sudirman<br />\
    <img src="styles/legend/halte_pt_6_26.png" /> Halte MPP SIOLA B<br />\
    <img src="styles/legend/halte_pt_6_27.png" /> Halte Ngemplak<br />\
    <img src="styles/legend/halte_pt_6_28.png" /> Halte Pangsud<br />\
    <img src="styles/legend/halte_pt_6_29.png" /> Halte Pemuda<br />\
    <img src="styles/legend/halte_pt_6_30.png" /> Halte PMI<br />\
    <img src="styles/legend/halte_pt_6_31.png" /> Halte Simpang Dukuh<br />\
    <img src="styles/legend/halte_pt_6_32.png" /> Halte Sindoro<br />\
    <img src="styles/legend/halte_pt_6_33.png" /> Halte SIOLA<br />\
    <img src="styles/legend/halte_pt_6_34.png" /> Halte Slamet<br />\
    <img src="styles/legend/halte_pt_6_35.png" /> Halte SMPN 3<br />\
    <img src="styles/legend/halte_pt_6_36.png" /> Halte Sono Kembang<br />\
    <img src="styles/legend/halte_pt_6_37.png" /> Halte Sono Kembang 2<br />\
    <img src="styles/legend/halte_pt_6_38.png" /> Halte Taman Apsari<br />\
    <img src="styles/legend/halte_pt_6_39.png" /> Halte Taman Prestasi<br />\
    <img src="styles/legend/halte_pt_6_40.png" /> Halte Tunjungan<br />\
    <img src="styles/legend/halte_pt_6_41.png" /> Halte Urip Sumoharjo 1<br />\
    <img src="styles/legend/halte_pt_6_42.png" /> Halte Wuni<br />\
    <img src="styles/legend/halte_pt_6_43.png" /> Halte Yos Sudarso<br />\
    <img src="styles/legend/halte_pt_6_44.png" /> <br />' });

lyr_GoogleMaps_0.setVisible(true);lyr_jangkauan_per_kelurahan_1.setVisible(true);lyr_kecamatan_genteng_ar_2.setVisible(true);lyr_Jangkauanperhalte_3.setVisible(true);lyr_jalan_4.setVisible(true);lyr_jalan_menjangkau_400m_5.setVisible(true);lyr_halte_pt_6.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_jangkauan_per_kelurahan_1,lyr_kecamatan_genteng_ar_2,lyr_Jangkauanperhalte_3,lyr_jalan_4,lyr_jalan_menjangkau_400m_5,lyr_halte_pt_6];
lyr_jangkauan_per_kelurahan_1.set('fieldAliases', {'fid': 'fid', 'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', 'Informasi Halte__RUTE': 'Informasi Halte__RUTE', 'Informasi Halte__Destinasi': 'Informasi Halte__Destinasi', 'kecamatan_genteng_ar_Kelurahan': 'kecamatan_genteng_ar_Kelurahan', });
lyr_kecamatan_genteng_ar_2.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Luas': 'Luas', });
lyr_Jangkauanperhalte_3.set('fieldAliases', {'fid': 'fid', 'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', 'Informasi Halte__RUTE': 'Informasi Halte__RUTE', 'Informasi Halte__Destinasi': 'Informasi Halte__Destinasi', });
lyr_jalan_4.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'bridge': 'bridge', 'tunnel': 'tunnel', 'width': 'width', 'highway': 'highway', 'surface': 'surface', 'railway': 'railway', 'layer': 'layer', 'oneway': 'oneway', 'name': 'name', 'smoothness': 'smoothness', });
lyr_jalan_menjangkau_400m_5.set('fieldAliases', {'fid': 'fid', 'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', });
lyr_halte_pt_6.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'Informasi Halte__RUTE': 'Informasi Halte__RUTE', 'Informasi Halte__Destinasi': 'Informasi Halte__Destinasi', });
lyr_jangkauan_per_kelurahan_1.set('fieldImages', {'fid': 'TextEdit', 'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Informasi Halte__RUTE': 'TextEdit', 'Informasi Halte__Destinasi': 'TextEdit', 'kecamatan_genteng_ar_Kelurahan': 'TextEdit', });
lyr_kecamatan_genteng_ar_2.set('fieldImages', {'full_id': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'Luas': 'TextEdit', });
lyr_Jangkauanperhalte_3.set('fieldImages', {'fid': 'TextEdit', 'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Informasi Halte__RUTE': 'TextEdit', 'Informasi Halte__Destinasi': 'TextEdit', });
lyr_jalan_4.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'width': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'railway': 'TextEdit', 'layer': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'smoothness': 'TextEdit', });
lyr_jalan_menjangkau_400m_5.set('fieldImages', {'fid': 'TextEdit', 'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_halte_pt_6.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'Informasi Halte__RUTE': 'TextEdit', 'Informasi Halte__Destinasi': 'TextEdit', });
lyr_jangkauan_per_kelurahan_1.set('fieldLabels', {'fid': 'no label', 'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', 'Informasi Halte__RUTE': 'no label', 'Informasi Halte__Destinasi': 'no label', 'kecamatan_genteng_ar_Kelurahan': 'no label', });
lyr_kecamatan_genteng_ar_2.set('fieldLabels', {'full_id': 'no label', 'Kecamatan': 'no label', 'Kelurahan': 'no label', 'Luas': 'no label', });
lyr_Jangkauanperhalte_3.set('fieldLabels', {'fid': 'no label', 'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', 'Informasi Halte__RUTE': 'no label', 'Informasi Halte__Destinasi': 'no label', });
lyr_jalan_4.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'width': 'no label', 'highway': 'no label', 'surface': 'no label', 'railway': 'no label', 'layer': 'no label', 'oneway': 'no label', 'name': 'no label', 'smoothness': 'no label', });
lyr_jalan_menjangkau_400m_5.set('fieldLabels', {'fid': 'no label', 'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_halte_pt_6.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'Informasi Halte__RUTE': 'no label', 'Informasi Halte__Destinasi': 'no label', });
lyr_halte_pt_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});