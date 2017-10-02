//F4 PENGATURAN
//=====================================
function r_f4Pengaturan() {
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part	= ['',''];
		content = '';

		//--open
		head	= '';
		body	= '<div class="row no-head"><div class="container">';
		part[0] = '';
			
		if(r_getCookie('TABAH_lingkupAreaLihat') == '1') { 
			part[0] = part[0] + 
			'<div class="col-md-4 col-sm-6">' +
				'<div class="cards">' +
					'<div class="group-box body">' +
						'<div class="icon-set bg-green"><span class="fa fa-object-group fa-2x"></span></div>' +
						'<p class="title-set">Tim Wilayah</p>' +
						'<p class="text-set">Pengaturan pembatasan anggota tim untuk dialokasikan ke masing-masing wilayah.</p>' +
					'</div>' +
				'</div>' + 
				'<div class="cards flush">' +
					'<div class="group-box foot fixed">' +
						'<div class="button-set">' +
							'<div class="button-frame"><button type="button" class="btn-link" id="pPembagianTim">Pembagian tim</button></div>' +
							'<div class="button-frame"><button type="button" class="btn-link" id="pAnggota">Anggota</button></div>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>';
		}

		if(r_getCookie('TABAH_pengaturanVerifikasiLihat') == '1') { 
			part[0] = part[0] + 
			'<div class="col-md-4 col-sm-6">' +
				'<div class="cards">' +
					'<div class="group-box body">' +
						'<div class="icon-set bg-purple"><span class="fa fa-list-ol fa-2x"></span></div>' +
						'<p class="title-set">Persyaratan</p>' +
						'<p class="text-set">Pengelolaan bantuan hibah memiiki persyaratan yang perlu dipenuhi.</p>' +
					'</div>' +
				'</div>' +
				'<div class="cards flush">' +
					'<div class="group-box foot fixed">' +
						'<div class="button-set">' +
							'<div class="button-frame"><button type="button" class="btn-link" id="pDaftarPersyaratan">Atur konten</button></div>' +
							'<div class="button-frame"><button type="button" class="btn-link" id="pGrupPersyaratan">Grup Persyaratan</button></div>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>';
		}

		if(r_getCookie('TABAH_beritaLihat') == '1') { 
			part[0] = part[0] + 
			'<div class="col-md-4 col-sm-6">' +
				'<div class="cards">' +
					'<div class="group-box body">' +
						'<div class="icon-set bg-yellow"><span class="fa fa-newspaper-o fa-2x"></span></div>' +
						'<p class="title-set">Berita</p>' +
						'<p class="text-set">Kelola berita terkini untuk dibagikan dan tampilkan dihalaman utama.</p>' +
					'</div>' +
				'</div>' +
				'<div class="cards flush">' +
					'<div class="group-box foot fixed">' +
						'<div class="button-set">' +
							'<div class="button-frame"><button type="button" class="btn-link" id="pDaftarBerita">Daftar berita</button></div>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>';
		}

		if(r_getCookie('TABAH_konfigurasiLihat') == '1') { 
			part[0] = part[0] + 
				'<div class="col-md-4 col-sm-6">' +
				'<div class="cards">' +
					'<div class="group-box body">' +
						'<div class="icon-set bg-theme"><span class="fa fa-gears fa-2x"></span></div>' +
						'<p class="title-set">Konfigurasi</p>' +
						'<p class="text-set">Kemudahaan untuk mengontrol aplikasi.</p>' +
					'</div>' +
				'</div>' +
				'<div class="cards flush">' +
					'<div class="group-box foot fixed">' +
						'<div class="button-set">' +
							//'<div class="button-frame"><button type="button" class="btn-link" id="pImportData">Import data</button></div>' +
							'<div class="button-frame"><button type="button" class="btn-link" id="pBackupRestore">Backup & restore</button></div>' +
							// '<div class="button-frame"><button type="button" class="btn-link" id="pSetelan">Setelan</button></div>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>';
		}

		part[0] = part[0] + 
		'<div class="col-md-4 col-sm-6">' +
			'<div class="cards">' +
				'<div class="group-box body">' +
					'<div class="icon-set bg-sky"><span class="fa fa-shield fa-2x"></span></div>' +
					'<p class="title-set">Preferensi akun</p>' +
					'<p class="text-set">Proteksi demi kenyamanan penggunaan anda.</p>' +
				'</div>' +
			'</div>' +
			'<div class="cards flush">' +
				'<div class="group-box foot fixed">' +
					'<div class="button-set">' +
						'<div class="button-frame"><button type="button" class="btn-link" id="pInformasiPersonal">Informasi personal</button></div>' +
						'<div class="button-frame"><button type="button" class="btn-link" id="pGantiPassword">Ganti password</button></div>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>';

		part[0] = part[0] + 
		'</div>';
		
		part[0] = part[0] + '</div>';
		body	= body 	  + part[0] + '</div></div>';
		content = '<section id="">' + head + body + '</section>';
		//--close
		
		//--gen
		headPage.html(r_headPageHtml(3, 'Pengaturan'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');
		$("#preload").remove();
		
		//--command reactor
		$("#pPembagianTim").unbind().on		 ('click', function(){ r_navigateTo(41); });
		$("#pAnggota").unbind().on	 		 ('click', function(){ r_navigateTo(3); });
		$("#pDaftarPersyaratan").unbind().on ('click', function(){ r_navigateTo(42); });
		$("#pGrupPersyaratan").unbind().on	 ('click', function(){ r_navigateTo(421); });
		$("#pDaftarBerita").unbind().on		 ('click', function(){ r_navigateTo(44); });
		$("#pBackupRestore").unbind().on	 ('click', function(){ r_navigateTo(451); });
		$("#pSetelan").unbind().on			 ('click', function(){ r_navigateTo(452); });
		$("#pInformasiPersonal").unbind().on ('click', function(){ r_navigateTo(46); });
		$("#pGantiPassword").unbind().on	 ('click', function(){ r_navigateTo(461); });
		$(".back-button").unbind().on		 ('click', function(){ r_navigateTo(0); });
		r_navbarReactor();
	});
}

function r_f4TimWilayah() {
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part	= ['','','',''];
		content = '';
		counter = 0;

		data = p_getData('f4', 'f401');
		data = data.feedData;
		optionBatch = r_f4OptionList(401); 
		
		//--open
		head = '';
		body = '<div class="row no-head"><div class="container">';
		
		//-- open part
		part[0] = '<div id="timWilayah" class="col-md-8 col-md-offset-2">';
		
		//-- fill part
		if(data != null && data.length > 0){
			for(var loop = 0; loop < data.length; loop++){
				part[0] = part[0] + 
				'<div class="cards timWilayah-list list-edit" id ="'+ loop +'timWilayah-' + data[loop].idData + '">' +
					'<div class="row default">' +
						'<div class="col-xs-12">' +
							'<div class="list-box">' +
								'<div class="list-icon bg-green"><span class="fa fa-object-group"></span></div>' +
								'<p class="list-text">' + data[loop].namaTim + '</p>' +
								'<div class="list-button click-option"' + 
									'p-label		="' + data[loop].namaTim + '"' + 
									'p-id			="' + data[loop].idData + '"' +
									'p-group		="f4"' + 
									'p-target		="f401"' +
									'p-container	="' + loop + 'timWilayah-' + data[loop].idData + '">' +
									'<span class="fa fa-ellipsis-v"></span>' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<div class="clearfix"></div>' +
					'</div>' +
				'</div>';
			}
		}else{
			part[0] = part[0] + 
			'<div class="cards emptyList">' +
				'<div class="row default">' +
					'<div class="col-xs-12">' +
						'<div class="list-box text-center clear">' +
							'<p class="list-text">Data tidak ditemukan</p>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>';
		}
		
		//-- close part
		part[0] = part[0] + '</div>';
		body       = body + part[0];
		
		body	= body + '</div></div>';
		content = '<section>' + head + body + '</section>';
		//--close
		
		//--gen
		headPage.html(r_headPageHtml(3, 'Tim wilayah'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');
		$("#preload").remove();
		
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(4); });
		$(".click-option").unbind().on("click", function(){ 
			//packet session
			clearPacket();
			pGroup 			= $(this).attr('p-group');
			pTarget			= $(this).attr('p-target')
			pId				= $(this).attr('p-id');
			pLabel			= $(this).attr('p-label');
			pContainer		= $(this).attr('p-container');
			showOptionList(); 
			
			//-- option activator
			$("#add-card").unbind().on("click", function(){ hideOptionList(); r_navigateTo(410, pId + "::" + pLabel); });
			
		});
		
		r_navbarReactor();
	
		//form reactor
		p_formHandler("f-timWilayah-create" , "addData");
	});
}

// function r_f4TimWilayahEditor(id, label){
// 	$("#f-timWilayah-create [name='idData']").val(id).attr('readonly','readonly');
// 	$("#f-timWilayah-create [name='nama']").val(label);
// 	p_formHandler("f-timWilayah-create" , "updateData");
// } 

// function r_f4TimWilayahDataGenerator(formType, data){
// 	var genHtml = "";
// 	if(data.length > 0){
// 		for(var loop=0; loop<data.length; loop++){
// 			genHtml = genHtml +
// 			'<div class="cards timWilayah-list list-edit" id ="timWilayah-' + data[loop].idData + '">' +
// 				'<div class="row default">' +
// 					'<div class="col-xs-12">' +
// 						'<div class="list-box">' +
// 							'<div class="list-icon bg-green"><span class="fa fa-object-group"></span></div>' +
// 							'<p class="list-text">' + data[loop].namaTim + '</p>' +
// 							'<div class="list-button click-option"' + 
// 								'p-label		="' + data[loop].namaTim + '"' + 
// 								'p-id			="' + data[loop].idData + '"' +
// 								'p-group		="f4"' + 
// 								'p-target		="f401"' +
// 								'p-container	="timWilayah-' + data[loop].idData + '">' +
// 								'<span class="fa fa-ellipsis-v"></span>' +
// 							'</div>' +
// 						'</div>' +
// 					'</div>' +
// 					'<div class="clearfix"></div>' +
// 				'</div>' +
// 			'</div>';
// 		}
// 	}else{
// 		genHtml = genHtml +
// 		'<div class="cards emptyList">' +
// 			'<div class="row default">' +
// 				'<div class="col-xs-12">' +
// 					'<div class="list-box text-center clear">' +
// 						'<p class="list-text">Data tidak ditemukan</p>' +
// 					'</div>' +
// 				'</div>' +
// 			'</div>' +
// 		'</div>';
// 	}

// 	if(formType == "addData"){
// 		$("#timWilayah .emptyList").remove();
// 		$("#timWilayah").append(genHtml);
// 	}else if (formType == "updateData"){
// 		$("#" + pContainer).replaceWith(genHtml);
// 	}
	
// 	//reactor
// 	$(".click-option").unbind().on("click", function(){ 
// 		//packet session
// 		clearPacket();
// 		pGroup 		= $(this).attr('p-group');
// 		pTarget		= $(this).attr('p-target')
// 		pId			= $(this).attr('p-id');
// 		pLabel		= $(this).attr('p-label');
// 		pContainer	= $(this).attr('p-container');
// 		showOptionList(); 
		
// 		//-- option activator
// 		$("#edit-card").unbind().on("click", function(){ 
// 			hideOptionList(); 
// 			r_f4TimWilayahEditor(pId, pLabel); 
// 		});
		
// 		$("#delete-card").unbind().on("click", function(){ 
// 			hideOptionList(); 
// 			showOptionConfirm('delete');
// 			$(".option-yes").unbind().on("click", function(){ 
// 				hideOptionList(); 
// 				if(p_removeData(pGroup, pTarget, pId) == 'success'){ 
// 					$('#' + pContainer).remove();
// 					clearPacket();
// 				}; 
// 			});
// 		});
// 	});
// }

function r_f4AnggotaTimWilayah(packet) {
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part	= ['','','',''];
		content = '';
		counter = 0;

		if(packet[0] == undefined || packet == "" || packet == null || packet == "start"){
			packet = tim_look_reader();
		}

		packet 		= packet.split("::");
		packetLabel = packet[1];
		packet 		= packet[0];

		tim_look_set(packet + "::" + packetLabel);

		data = p_getData('f4', 'f410', packet);
		data = data.feedData;
		optionBatch = r_f4OptionList(410); 
		
		//--open
		head = '';
		body = '<div class="row no-head"><div class="container">';
		
		//-- open part
		part[0] = '<div id="anggotaTimWilayah" class="col-md-8 col-md-offset-2">';
		
		//-- fill part
		//-- Provinsi ==========================================================================
		if(r_getCookie('lingkupAreaTambah') == '1' || r_getCookie('lingkupAreaUbah') == '1'){
			part[0] = part[0] +
			'<form id="f-anggotaTimWilayah-create" f-group = "f4" f-target = "f410">' +
				'<div class="cards">' +
					'<div class="cards-header">' +
						'<h4>Tambah anggota wilayah</h4>' +
						'<p class="offset">form untuk menambahkan data wilayah kedalam tim wilayah.</p>' +
						'<div class="btn-collapse right">' +
							'<button class="clear" type="reset"><span class="fa fa-refresh"></span></button>' +
							'<button class="clear" type="submit"><span class="fa fa-check-circle-o"></span></button>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="cards flush">' +
					'<div class="row default">' +
						'<div class="col-md-12">' +
							'<div class="select-box">' +
								'<input name="idTim" tabindex="1" type="hidden" value="' + packet + '" />' +
								'<select tabindex="1" name="idWilayah">' +
									'<option value="" selected>Pilih Wilayah (*)</option>' +
									r_optionDHtml('wilayahSpecial') +
								'</select>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</form>';
		}
		
		if(data != null && data.length > 0){
			for(var loop = 0; loop < data.length; loop++){
				part[0] = part[0] + 
				'<div class="cards anggotaTimWilayah-list list-edit" id ="'+ loop +'anggotaTimWilayah-' + data[loop].idData + '">' +
					'<div class="row default">' +
						'<div class="col-xs-12">' +
							'<div class="list-box">' +
								'<div class="list-icon bg-green"><span class="fa fa-map-marker"></span></div>' +
								'<p class="list-text">' + data[loop].namaWilayah + '</p>' +
								'<div class="list-button click-option"' + 
									'p-label		="' + data[loop].namaWilayah + '"' + 
									'p-id			="' + packet + '"' +
									'p-references	="' + data[loop].idData + '"' +
									'p-group		="f4"' + 
									'p-target		="f410"' +
									'p-container	="' + loop + 'anggotaTimWilayah-' + data[loop].idData + '">' +
									'<span class="fa fa-ellipsis-v"></span>' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<div class="clearfix"></div>' +
					'</div>' +
				'</div>';
			}
		}else{
			part[0] = part[0] + 
			'<div class="cards emptyList">' +
				'<div class="row default">' +
					'<div class="col-xs-12">' +
						'<div class="list-box text-center clear">' +
							'<p class="list-text">Data tidak ditemukan</p>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>';
		}
		
		//-- close part
		part[0] = part[0] + '</div>';
		body       = body + part[0];
		
		body	= body + '</div></div>';
		content = '<section>' + head + body + '</section>';
		//--close
		
		//--gen
		headPage.html(r_headPageHtml(3, packetLabel));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');
		$("#preload").remove();
		
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(400); });
		$(".click-option").unbind().on("click", function(){ 
			//packet session
			clearPacket();
			pGroup 			= $(this).attr('p-group');
			pTarget			= $(this).attr('p-target')
			pId				= $(this).attr('p-id');
			pLabel			= $(this).attr('p-label');
			pContainer		= $(this).attr('p-container');
			pReferencesKey  = $(this).attr('p-references');
			showOptionList(); 
			
			//-- option activator
			$("#delete-card").unbind().on("click", function(){ 
				hideOptionList(); 
				showOptionConfirm('delete');
				$(".option-yes").unbind().on("click", function(){ 
					hideOptionList(); 
					if(p_removeData(pGroup, pTarget, pId, pReferencesKey) == 'success'){ 
						dataAdd = {'idData': pReferencesKey, "caption": pLabel};
						r_f4AddArrayList(optionSpecial, dataAdd);
						r_f4AnggotaTimWilayahOptionGenerator();
						$('#' + pContainer).remove();
						clearPacket();
					}; 
				});
			});
		});
		
		r_navbarReactor();
	
		//form reactor
		p_formHandler("f-anggotaTimWilayah-create" , "addData");
	});
}

function r_f4BeritaGenerator(data){
	var genHtml = "";
	if(data.length > 0){
		// genHtml = genHtml +
		// '<div class="cards-label plus emptyList">' +
		// 	'<p>' +
		// 		'<strong>Daftar berita (<span id=counter>' + counter + '</span>)</strong>' +
		// 	'</p>' +
		// '</div>';
		for(var loop = 0; loop < data.length; loop++){	
			$('.emptyList').remove();
			genHtml = genHtml +
			'<div class="cards clear" id = "berita-'+data[loop].idBerita+'">' +
				'<div class="article-box">' +
					'<div class="body">' +
						'<p class="title">' + data[loop].judul + '</p>	' +
						'<p class="content">' + data[loop].isiBerita + '</p>' +
					'</div>' +
					'<div class="foot">' +
						'<button '+
							'id 		= "'+data[loop].idBerita +'" '+
							'title 		= "'+data[loop].judul +'" '+
							'description= "'+data[loop].isiBerita+'" '+
						'type="button" class="clear btn-link detail-click text-cyan">Baca lebih lanjut</button>';

			if(r_getCookie('TABAH_beritaHapus') == '1'){			
				genHtml = genHtml +
				' | <button id-button = '+data[loop].idBerita+' type="reset" class="clear btn-link text-pink">Hapus</button>';
			}

			genHtml = genHtml +
					'</div>' +
				'</div>' +
			'</div>';
		}
	}else{
		genHtml = genHtml +
		'<div class="cards emptyList">' +
			'<div class="row default">' +
				'<div class="col-xs-12">' +
					'<div class="list-box text-center clear">' +
						'<p class="list-text">Data tidak ditemukan</p>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>';
	}
	$('#renderData').append(genHtml);
	$('#renderData  [type=reset]').unbind().on("click", function(e){
			e.preventDefault();
			idBerita = $(this).attr('id-button');
			showOptionConfirm('delete');
			$(".option-yes").unbind().on("click", function(){ 
				hideOptionList();
				if(p_removeData('f4', 'f441', idBerita) == 'success'){
					$('#berita-'+idBerita).remove();
				}; 
			});
		});
	$(".detail-click").unbind().on('click', function(){
	idDetail = $(this).attr('id');
	 r_navigateTo(441,idDetail); 
	});
}

//F4 TRANSFER LEMBAGA
//=====================================
function r_f4TransferLembaga() {
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part	= ['','','',''];
		content = '';
		data = p_getData('f1', 'f1110', "", 'single,');
		data = data.feedData;
		
		//--open
		head = '';
		body = '<div class="row no-head"><div class="container"><div class="col-md-10 col-md-offset-1">';
		body = body + 
		'<div class="row default">' +
			'<div class="col-md-4">' +
				'<form id="f-filter-select">' +
					'<div class="cards">' +
						'<div class="cards-header">' +
							'<p class="fixed offset">Filter lembaga</p>' +
							'<div class="btn-collapse right">' +
								'<button class="clear toggle-click" toggle-target="filter-option" type="button"><span class="fa fa-chevron-down"></span></button>' +
								'<button class="clear" type="reset"><span class="fa fa-refresh"></span></button>' +
								'<button class="clear" type="sumbit"><span class="fa fa-filter text-yellow"></span></button>' +
							'</div>' +
						'</div>' +
					'</div>' +
					'<div class="cards flush toggle-content filter-option">' +
						'<div class="row default">' +
							'<div class="col-md-12">' +
								'<div class="select-box">' +
									'<select tabindex="1" id="filter-bentukLembaga">' +
										'<option value="" selected>Bentuk lembaga</option>' +
										r_optionDHtml('kelembagaan') +
									'</select>' +
								'</div>' +
								'<div class="select-box">' +
									'<select tabindex="1" id="filter-provinsi">' +
										'<option value="" selected>Provinsi</option>' +
										r_optionDHtml('provinsi') +
									'</select>' +
								'</div>' +
								'<div class="select-box">' +
									'<select tabindex="1" id="filter-wilayah">' +
										'<option value="" selected>Wilayah</option>' +
										r_optionDHtml('wilayah') +
									'</select>' +
								'</div>' +
								'<div class="select-box">' +
									'<select tabindex="1" id="filter-kecamatan">' +
										'<option value="" selected>Kecamatan</option>' +
										r_optionDHtml('kecamatan') +
									'</select>' +
								'</div>' +
								'<div class="select-box">' +
									'<select tabindex="1" id="filter-kelurahan">' +
										'<option value="" selected>Kelurahan</option>' +
										r_optionDHtml('kelurahan') +
									'</select>' +
								'</div>' +
								'<div class="space-box"></div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</form>' +
			'<!--/div>' +
			'<div class="col-md-6"-->' +
				'<form id="f-transfer-create" f-group="f1" f-target="f123">' +
					'<div class="cards">' +
						'<div class="cards-header">' +
							'<p class="fixed offset">Area transfer</p>' +
							'<div class="btn-collapse right">' +
								'<button class="clear" type="reset"><span class="fa fa-refresh"></span></button>' +
								'<button class="clear" type="submit"><span class="fa fa-random text-purple"></span></button>' +
							'</div>' +
						'</div>' +
					'</div>' +
					'<div class="cards">' +
						'<div class="cards-header">' +
							'<p class="fixed offset text-bold text-cyan">Lembaga terpilih</p>' +
							'<div class="btn-collapse right">' +
								'<span id="counter-select" class="text-bold">0</span>' +
							'</div>' +
						'</div>' +
					'</div>' +
					'<div class="cards flush">' +
						'<input type="hidden" name="noreg" />' +
						'<div class="row default">' +
							'<div class="col-md-12">' +
								'<div class="select-box">' +
									'<select tabindex="1" name="kodeProvinsi">' +
										'<option value="" selected>Provinsi (*)</option>' +
										r_optionDHtml('provinsi') +
									'</select>' +
								'</div>' +
								'<div class="select-box">' +
									'<select tabindex="1" name="kodeWilayah">' +
										'<option value="" selected>Wilayah (*)</option>' +
										r_optionDHtml('wilayah') +
									'</select>' +
								'</div>' +
								'<div class="select-box">' +
									'<select tabindex="1" name="kodeKecamatan">' +
										'<option value="" selected>Kecamatan (*)</option>' +
										r_optionDHtml('kecamatan') +
									'</select>' +
								'</div>' +
								'<div class="select-box">' +
									'<select tabindex="1" name="kodeKelurahan">' +
										'<option value="" selected>Kelurahan (*)</option>' +
										r_optionDHtml('kelurahan') +
									'</select>' +
								'</div>' +
								'<div class="space-box"></div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</form>' +
			'</div>';
		
		body = body + '<div class="col-md-8" id="transfer-list">';
		body = body + r_f1LembagaSelectionGenerator(data);	
		body = body + '</div>';
		
		body = body + 
			'<div class="clearfix"></div>' +
		'</div>';
		
		body	= body + '</div></div></div>';
		content = '<section id="">' + head + body + '</section>';
		//--close
		
		//--gen
		headPage.html(r_headPageHtml(4, 'Transfer lembaga'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');
		$("#preload").remove();
		
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(4); });
		toggleBoxActivator();
		r_navbarReactor();
		
		// --custom reactor
		r_f4TransferLembagaEventActivator();


		//search-box
		searchBoxActivator();
		$(".search-input").on('keyup', function(){ 
			var kodeBentukLembagaState = $('#f-filter-select #filter-bentukLembaga').val();
			var dataKey = p_getData('f1', 'f1110', $(this).val(), 
						'multipart,' + kodeBentukLembagaState + ',' +
						$('#f-filter-select #filter-provinsi').val()  + ',' + 
						$('#f-filter-select #filter-wilayah').val()   + ',' + 
						$('#f-filter-select #filter-kecamatan').val() + ',' + 
						$('#f-filter-select #filter-kelurahan').val());
				dataKey = dataKey.feedData;
			$("#transfer-list").html('');
			$("#transfer-list").html(r_f1LembagaSelectionGenerator(dataKey));
			$('.select-button').prop('checked', false);
			$('#counter-select').html(0);
			clearTargetForm('f-transfer-create');
			r_f4TransferLembagaEventActivator();
		});

		//filter activation
		$('#f-filter-select').unbind().on('submit', function(e) {
			e.preventDefault();
			var kodeBentukLembagaState = $('#f-filter-select #filter-bentukLembaga').val();
			var dataKey = p_getData('f1', 'f1110', $(".search-input").val(), 
						'multipart,' + kodeBentukLembagaState + ',' +
						$('#f-filter-select #filter-provinsi').val()  + ',' + 
						$('#f-filter-select #filter-wilayah').val()   + ',' + 
						$('#f-filter-select #filter-kecamatan').val() + ',' + 
						$('#f-filter-select #filter-kelurahan').val());
				dataKey = dataKey.feedData;
			$("#transfer-list").html('');
			$("#transfer-list").html(r_f1LembagaSelectionGenerator(dataKey));
			$('.select-button').prop('checked', false);
			$('#counter-select').html(0);
			clearTargetForm('f-transfer-create');
			r_f4TransferLembagaEventActivator();
		});

		/* form reactor */
		p_formHandler('f-transfer-create', 'updateData');
	});
}

function r_f4TransferLembagaEventActivator(){
	customArray = [];
	$(".select-button").on('click', function(){
		if($(this).is(":checked")){
			$('#counter-select').html(parseInt($('#counter-select').html()) + 1);
			r_f4AddArrayList(customArray, $(this).attr('p-id'));
		}else{
			$('#counter-select').html(parseInt($('#counter-select').html()) - 1);
			r_f4RemoveArrayList(customArray, $(this).attr('p-id'));
		}
		$('#f-transfer-create [name=noreg]').val(customArray.toString());
	});
}

//F4 VERIFIKASI
//=====================================
function r_f4DaftarPersyaratan() {
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part	= ['','','',''];
		content = '';
		data    = [
			{'noreg': '1', 'group': 'Verifikasi lapangan', 'caption': 'lorem dolor sit amet 2.'},
			{'noreg': '2', 'group': 'Verifikasi lapangan', 'caption': 'lorem dolor sit amet 3.'},
			{'noreg': '3', 'group': 'Verifikasi lapangan', 'caption': 'lorem dolor sit amet 4.'},
		];
		
		optionBatch = r_f4OptionList(421); 
		
		counter = 0;
		data = p_getData('f4', 'f422', '');
		data = data.feedData;
		if(data != null && data.length > 0){ counter = data.length; }
		
		dataGrup = p_getData('f4', 'f421', '');
		dataGrup = dataGrup.feedData;
		grupHtml = "";
		for(var loop=0; loop<dataGrup.length;loop++){
			grupHtml = grupHtml +
			'<option value="' + dataGrup[loop].noreg + '">' + dataGrup[loop].caption + '</option>';
		}
		
		//--open
		head = '';
		body = '<div class="row no-head"><div class="container"><div id="section-verifikasi" class="col-md-8 col-md-offset-2">';

		if(r_getCookie('TABAH_pengaturanVerifikasiTambah') == '1' || r_getCookie('TABAH_pengaturanVerifikasiUbah') == '1'){
			body = body + 
			'<form id="f-verifikasi-create" f-group = "f4" f-target = "f422">' +
				'<div class="cards">' +
					'<div class="cards-header">' +
						'<h4>Persyaratan</h4>' +
						'<p class="offset">form untuk menambahkan subjek persyaratan.</p>' +
						'<div class="btn-collapse right">' +
							'<button class="clear" type="reset"><span class="fa fa-refresh"></span></button>' +
							'<button class="clear" type="submit"><span class="fa fa-check-circle-o"></span></button>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="cards flush">' +
					'<div class="row default">' +
						'<div class="col-md-6">' +
							'<div class="input-box">' +
								'<input name="pId" tabindex="1" type="hidden" value="" />' +
								'<input placeholder="persyaratan (*)" name="nama" tabindex="2" type="text" value="" />' +
							'</div>' +
						'</div>' +
						'<div class="col-md-6">' +
							'<div class="select-box">' +
								'<select tabindex="1" name="referensi">' +
									'<option value="" selected>Grup persyaratan (*)</option>' +
									grupHtml +
								'</select>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</form>' +
			'<!--div class="cards-label plus">' +
				'<p>' +
					'<strong>Daftar verifikasi (' + counter + ')</strong>' +
				'</p>' +
			'</div-->';
		}
			
		if(counter > 0){
			for(var loop = 0; loop < data.length; loop++){
				body = body + 
				'<div class="cards verifikasi-list" id="verifikasi-' + data[loop].noreg + '">' +
					'<div class="row default">' +
						'<div class="col-xs-8">' +
							'<div class="list-box">' +
								'<div class="list-icon bg-purple"><span class="fa fa-list-ol"></span></div>' +
								'<p class="list-text">' + data[loop].caption + '</p>' +
							'</div>' +
						'</div>' +
						'<div class="col-xs-4">' +
							'<div class="list-box clear-small">' +
								'<p class="list-text">' + data[loop].group + '</p>' +
								'<div class="list-button click-option"' + 
									'p-label		="' + data[loop].caption + '"' + 
									'p-id			="' + data[loop].noreg + '"' +
									'p-references	="' + data[loop].referencesKey + '"' +
									'p-group		="f4"' + 
									'p-target		="f422"' +
									'p-container	="verifikasi-' + data[loop].noreg + '">' +
									'<span class="fa fa-ellipsis-v"></span>' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<div class="clearfix"></div>' +
					'</div>' +
				'</div>';
			}
		}else{
			body = body + 
			'<div class="cards emptyList">' +
				'<div class="row default">' +
					'<div class="col-xs-12">' +
						'<div class="list-box text-center clear">' +
							'<p class="list-text">Data tidak ditemukan</p>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>';
		}
		
		body	= body + '</div></div></div>';
		content = '<section id="">' + head + body + '</section>';
		//--close
		
		//--gen
		headPage.html(r_headPageHtml(3, 'Persyaratan'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');
		$("#preload").remove();
		
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(4); });
		$(".click-option").unbind().on("click", function(){ 
			//packet session
			clearPacket();
			pGroup 			= $(this).attr('p-group');
			pTarget			= $(this).attr('p-target');
			pId				= $(this).attr('p-id');
			pLabel			= $(this).attr('p-label');
			pContainer		= $(this).attr('p-container');
			pReferences		= $(this).attr('p-references');
			pReferencesKey	= $(this).attr('p-referencesKey');
			showOptionList(); 
			
			//-- option activator
			$("#edit-card").unbind().on("click", function(){ 
				hideOptionList(); 
				r_f4VerifikasiDataEditor(pTarget, pId, pLabel, pReferences); 
			});
			
			$("#delete-card").unbind().on("click", function(){ 
				hideOptionList(); 
				showOptionConfirm('delete');
				$(".option-yes").unbind().on("click", function(){ 
					hideOptionList(); 
					if(p_removeData(pGroup, pTarget, pId) == 'success'){ 
						$('#' + pContainer).remove(); 
						clearPacket();
					}; 
				});
			});
		});

		r_navbarReactor();
	
		//form reactor
		p_formHandler("f-verifikasi-create" , "addData");
	});
}

function r_f4GrupPersyaratan() {
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part	= ['','','',''];
		content = '';
		data    = [
			{'noreg': '1', 'caption': 'lorem dolor sit amet 2.'},
			{'noreg': '2', 'caption': 'lorem dolor sit amet 3.'},
			{'noreg': '3', 'caption': 'lorem dolor sit amet 4.'},
		];
		
		optionBatch = r_f4OptionList(421); 
		
		counter = 0;
		data = p_getData('f4', 'f421', '');
		data = data.feedData;
		if(data != null && data.length > 0){ counter = data.length; }

		
		//--open
		head = '';
		body = '<div class="row no-head"><div class="container"><div id="section-grupVerifikasi" class="col-md-8 col-md-offset-2">';
		if(r_getCookie('TABAH_pengaturanVerifikasiTambah') == '1' || r_getCookie('TABAH_pengaturanVerifikasiUbah') == '1'){
			body = body + 
			'<form id="f-grupVerifikasi-create" f-group = "f4" f-target = "f421">' +
				'<div class="cards">' +
					'<div class="cards-header">' +
						'<h4>Grup Verifikasi</h4>' +
						'<p class="offset">form untuk menambahkan grup verifikasi.</p>' +
						'<div class="btn-collapse right">' +
							'<button class="clear" type="reset"><span class="fa fa-refresh"></span></button>' +
							'<button class="clear" type="submit"><span class="fa fa-check-circle-o"></span></button>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="cards flush">' +
					'<div class="row default">' +
						'<div class="col-md-12">' +
							'<div class="input-box">' +
								'<input name="pId" tabindex="1" type="hidden" value="" />' +
								'<input placeholder="Grup verifikasi" name="nama" tabindex="1" type="text" value="" />' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</form>' +
			'<!--div class="cards-label plus">' +
				'<p>' +
					'<strong>Daftar grup (' + counter + ')</strong>' +
				'</p>' +
			'</div-->';
		}
		
		if(counter > 0){
			for(var loop = 0; loop < data.length; loop++){
				body = body + 
				'<div class="cards grupVerifikasi-list" id="grupVerifikasi-' + data[loop].noreg + '">' +
					'<div class="row default">' +
						'<div class="col-xs-12">' +
							'<div class="list-box">' +
								'<div class="list-icon bg-purple"><span class="fa fa-list-ul"></span></div>' +
								'<p class="list-text">' + data[loop].caption + '</p>' +
								'<div class="list-button click-option"' + 
									'p-label		="' + data[loop].caption + '"' + 
									'p-id			="' + data[loop].noreg + '"' +
									'p-group		="f4"' + 
									'p-target		="f421"' +
									'p-container	="grupVerifikasi-' + data[loop].noreg + '">' +
									'<span class="fa fa-ellipsis-v"></span>' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<div class="clearfix"></div>' +
					'</div>' +
				'</div>';
			}	
		}else{
			body = body + 
			'<div class="cards emptyList">' +
				'<div class="row default">' +
					'<div class="col-xs-12">' +
						'<div class="list-box text-center clear">' +
							'<p class="list-text">Data tidak ditemukan</p>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>';
		}
		
		body	= body + '</div></div></div>';
		content = '<section id="">' + head + body + '</section>';
		//--close
		
		//--gen
		headPage.html(r_headPageHtml(3, 'Grup Persyaratan'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');
		$("#preload").remove();
		
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(4); });
		$(".click-option").unbind().on("click", function(){ 
			//packet session
			clearPacket();
			pGroup 			= $(this).attr('p-group');
			pTarget			= $(this).attr('p-target')
			pId				= $(this).attr('p-id');
			pLabel			= $(this).attr('p-label');
			pContainer		= $(this).attr('p-container');
			pReferences		= $(this).attr('p-references');
			pReferencesKey	= $(this).attr('p-referencesKey');
			showOptionList(); 
			
			//-- option activator
			$("#edit-card").unbind().on("click", function(){ 
				hideOptionList(); 
				r_f4VerifikasiDataEditor(pTarget, pId, pLabel, pReferences); 
			});
			
			$("#delete-card").unbind().on("click", function(){ 
				hideOptionList(); 
				showOptionConfirm('delete');
				$(".option-yes").unbind().on("click", function(){ 
					hideOptionList(); 
					if(p_removeData(pGroup, pTarget, pId) == 'success'){ 
						$('#' + pContainer).remove(); 
						clearPacket();
					}; 
				});
			});
		});

		r_navbarReactor();
	
		//form reactor
		p_formHandler("f-grupVerifikasi-create" , "addData");
	});
}

function r_f4VerifikasiDataEditor(target, id, label, referencesKey){
	switch(target){
		case "f421":
			$("#f-grupVerifikasi-create [name='pId']").val(id).attr('readonly','readonly');
			$("#f-grupVerifikasi-create [name='nama']").val(label);
			p_formHandler("f-grupVerifikasi-create" , "updateData");
		break;
		case "f422":
			$("#f-verifikasi-create [name='pId']").val(id).attr('readonly','readonly');
			$("#f-verifikasi-create [name='nama']").val(label);
			$("#f-verifikasi-create [name='referensi']").val(referencesKey);
			p_formHandler("f-verifikasi-create" , "updateData");
		break;
	}
} 

function r_f4VerifikasiDataGenerator(formType, type, data, sectionId){
	var genHtml = "";
	if(data.length > 0){
		if(type == 'grupVerifikasi'){
			for(var loop=0; loop<data.length; loop++){
				genHtml = genHtml +
				'<div class="cards grupVerifikasi-list list-edit" id ="grupVerifikasi-' + data[loop].noreg + '">' +
					'<div class="row default">' +
						'<div class="col-xs-12">' +
							'<div class="list-box">' +
								'<div class="list-icon bg-purple"><span class="fa fa-list-ul"></span></div>' +
								'<p class="list-text">' + data[loop].caption + '</p>' +
								'<div class="list-button click-option"' + 
									'p-label		="' + data[loop].caption + '"' + 
									'p-id			="' + data[loop].noreg + '"' +
									'p-group		="f4"' + 
									'p-target		="f421"' +
									'p-container	="grupVerifikasi-' + data[loop].noreg + '">' +
									'<span class="fa fa-ellipsis-v"></span>' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<div class="clearfix"></div>' +
					'</div>' +
				'</div>';
			}
		}else if(type == 'verifikasi'){
			for(var loop=0; loop<data.length; loop++){
				genHtml = genHtml +
				'<div class="cards verifikasi-list" id="verifikasi-' + data[loop].noreg + '">' +
					'<div class="row default">' +
						'<div class="col-xs-8">' +
							'<div class="list-box">' +
								'<div class="list-icon bg-purple"><span class="fa fa-list-ol"></span></div>' +
								'<p class="list-text">' + data[loop].caption + '</p>' +
							'</div>' +
						'</div>' +
						'<div class="col-xs-4">' +
							'<div class="list-box clear">' +
								'<p class="list-text">' + data[loop].references + '</p>' +
								'<div class="list-button click-option"' + 
									'p-label		="' + data[loop].caption + '"' + 
									'p-id			="' + data[loop].noreg + '"' +
									'p-references	="' + data[loop].referencesKey + '"' +
									'p-group		="f4"' + 
									'p-target		="f422"' +
									'p-container	="verifikasi-' + data[loop].noreg + '">' +
									'<span class="fa fa-ellipsis-v"></span>' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<div class="clearfix"></div>' +
					'</div>' +
				'</div>';
			}
		}
	}else{
		genHtml = genHtml +
		'<div class="cards emptyList">' +
			'<div class="row default">' +
				'<div class="col-xs-12">' +
					'<div class="list-box text-center clear">' +
						'<p class="list-text">Data tidak ditemukan</p>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>';
	}
	
	if(formType == "addData"){
		$("#" + sectionId + ' .emptyList').remove();
		$("#" + sectionId).append(genHtml);
	}else if (formType == "updateData"){
		$("#" + pContainer).replaceWith(genHtml);
	}
	
	//reactor
	$(".click-option").unbind().on("click", function(){ 
		//packet session
		clearPacket();
		pGroup 		= $(this).attr('p-group');
		pTarget		= $(this).attr('p-target')
		pId			= $(this).attr('p-id');
		pLabel		= $(this).attr('p-label');
		pContainer		= $(this).attr('p-container');
		pReferences		= $(this).attr('p-references');
		pReferencesKey	= $(this).attr('p-referencesKey');
		showOptionList(); 
		
		//-- option activator
		$("#edit-card").unbind().on("click", function(){ 
			hideOptionList(); 
			r_f4VerifikasiDataEditor(pTarget, pId, pLabel, pReferences); 
		});
		
		$("#delete-card").unbind().on("click", function(){ 
			hideOptionList(); 
			showOptionConfirm('delete');
			$(".option-yes").unbind().on("click", function(){ 
				hideOptionList(); 
				if(p_removeData(pGroup, pTarget, pId) == 'success'){ 
					$('#' + pContainer).remove(); 
					clearPacket();
				}; 
			});
		});
	});
}

//F4 KELEMBAGAAN :: BENTUK LEMBAGA, LEGALITAS LEMBAGA, BIDANG GERAK
//=====================================
function r_f4TimWilayahs() {
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part	= ['','','',''];
		content = '';
		
		optionBatch = r_f4OptionList(431); 
		
		counter = 0;
		data = p_getData('f4', 'f431', '');
		data = data.feedData;
		if(data != null && data.length > 0){ counter = data.length; }
		
		//--open
		head = '';
		body = '<div class="row no-head"><div class="container"><div id="section-bentukLembaga" class="col-md-8 col-md-offset-2">';

		if(r_getCookie('TABAH_pengaturanKelembagaanTambah') == '1' || r_getCookie('TABAH_pengaturanKelembagaanUbah') == '1'){
			body = body + 
			'<form id="f-bentukLembaga-create" f-group="f4" f-target="f431">' +
				'<div class="cards">' +
					'<div class="cards-header">' +
						'<h4>Tim wilayah</h4>' +
						'<p class="offset">form untuk menambahkan data tim pembagian wilayah.</p>' +
						'<div class="btn-collapse right">' +
							'<button class="clear" type="reset"><span class="fa fa-refresh"></span></button>' +
							'<button class="clear" type="submit"><span class="fa fa-check-circle-o"></span></button>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="cards flush">' +
					'<div class="row default">' +
						'<div class="col-md-12">' +
							'<div class="input-box">' +
								'<input name="pId" tabindex="1" type="hidden" value="" />' +
								'<input placeholder="Tim wilayah" name="nama" tabindex="1" type="text" value="" />' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</form>' +
			'<!--div class="cards-label plus">' +
				'<p>' +
					'<strong>Daftar grup (' + counter + ')</strong>' +
				'</p>' +
			'</div-->';
		}
		
		if(counter > 0){
			for(var loop = 0; loop < data.length; loop++){
				body = body + 
				'<div class="cards bentukLembaga-list" id="bentukLembaga-' + data[loop].noreg + '">' +
					'<div class="row default">' +
						'<div class="col-xs-4">' +
							'<div class="list-box">' +
								'<div class="list-icon bg-red"><span class="fa fa-sitemap"></span></div>' +
								'<p class="list-text">' + data[loop].caption + '</p>' +
							'</div>' +
						'</div>' +
						'<div class="col-xs-8">' +
							'<div class="list-box clear-small">' +
								'<p class="list-text">' + data[loop].description + '</p>' +
								'<div class="list-button click-option"' + 
									'p-label		="' + data[loop].caption + '"' + 
									'p-id			="' + data[loop].noreg + '"' +
									'p-group		="f4"' + 
									'p-target		="f431"' +
									'p-container	="bentukLembaga-' + data[loop].noreg + '" ' +
									'p-description	="' + data[loop].description + '">' +
									'<span class="fa fa-ellipsis-v"></span>' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<div class="clearfix"></div>' +
					'</div>' +
				'</div>';
			}
		}else{
			body = body + 
			'<div class="cards emptyList">' +
				'<div class="row default">' +
					'<div class="col-xs-12">' +
						'<div class="list-box text-center clear">' +
							'<p class="list-text">Data tidak ditemukan</p>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>';
		}
		
		body	= body + '</div></div></div>';
		content = '<section id="">' + head + body + '</section>';
		//--close
		
		//--gen
		headPage.html(r_headPageHtml(3, 'Tim wilayah'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');
		$("#preload").remove();
		
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(4); });
		$(".click-option").unbind().on("click", function(){ 
			//packet session
			clearPacket();
			pGroup 			= $(this).attr('p-group');
			pTarget			= $(this).attr('p-target')
			pId				= $(this).attr('p-id');
			pLabel			= $(this).attr('p-label');
			pContainer		= $(this).attr('p-container');
			pReferences		= $(this).attr('p-references');
			pReferencesKey	= $(this).attr('p-referencesKey');
			pDecription		= $(this).attr('p-description');
			showOptionList(); 
			
			//-- option activator
			$("#edit-card").unbind().on("click", function(){ 
				hideOptionList(); 
				r_f4KelembagaanSectionEditor(pTarget, pId, pLabel, pReferences, pDecription); 
			});
			
			$("#delete-card").unbind().on("click", function(){ 
				hideOptionList(); 
				showOptionConfirm('delete');
				$(".option-yes").unbind().on("click", function(){ 
					hideOptionList(); 
					if(p_removeData(pGroup, pTarget, pId) == 'success'){ 
						$('#' + pContainer).remove(); 
						clearPacket();
					}; 
				});
			});
		});

		r_navbarReactor();
	
		//form reactor
		p_formHandler("f-bentukLembaga-create" , "addData");
	});
}

function r_f4LegalitasLembaga() {
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part	= ['','','',''];
		content = '';
		
		optionBatch = optionBatch = r_f4OptionList(432); 
		
		counter = 0;
		data = p_getData('f4', 'f432', '');
		data = data.feedData;
		if(data != null && data.length > 0){ counter = data.length; }
		
		dataGrup = p_getData('f4', 'f431', '');
		dataGrup = dataGrup.feedData;
		grupHtml = "";
		for(var loop=0; loop<dataGrup.length;loop++){
			grupHtml = grupHtml +
			'<option value="' + dataGrup[loop].noreg + '">' + dataGrup[loop].caption + '</option>';
		}
		
		//--open
		head = '';
		body = '<div class="row no-head"><div class="container"><div id="section-legalitas" class="col-md-8 col-md-offset-2">';

		if(r_getCookie('TABAH_pengaturanKelembagaanTambah') == '1' || r_getCookie('TABAH_pengaturanKelembagaanUbah') == '1'){
			body = body + 
			'<form id="f-legalitas-create" f-group="f4" f-target="f432">' +
				'<div class="cards">' +
					'<div class="cards-header">' +
						'<h4>Legalitas</h4>' +
						'<p class="offset">form untuk menambahkan data legalitas berdasarkan bentuk lembaga.</p>' +
						'<div class="btn-collapse right">' +
							'<button class="clear" type="reset"><span class="fa fa-refresh"></span></button>' +
							'<button class="clear" type="submit"><span class="fa fa-check-circle-o"></span></button>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="cards flush">' +
					'<div class="row default">' +
						'<div class="col-md-8">' +
							'<div class="input-box">' +
								'<input tabindex="2" name="pId" type="hidden" value="" />' +
								'<input placeholder="legalitas" name="nama" tabindex="2" type="text" value="" />' +
							'</div>' +
						'</div>' +
						'<div class="col-md-4">' +
							'<div class="select-box">' +
								'<select tabindex="1" name="referensi">' +
									'<option value="" selected>Bentuk lembaga</option>' +
									grupHtml +
								'</select>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</form>' +
			'<!--div class="cards-label plus">' +
				'<p>' +
					'<strong>Daftar legalitas (' + counter + ')</strong>' +
				'</p>' +
			'</div-->';
		}
		
		if(counter > 0){
			for(var loop = 0; loop < data.length; loop++){
				body = body + 
				'<div class="cards legalitas-list" id="legalitas-' + data[loop].noreg + '">' +
					'<div class="row default">' +
						'<div class="col-xs-8">' +
							'<div class="list-box">' +
								'<div class="list-icon bg-red"><span class="fa fa-file-text-o"></span></div>' +
								'<p class="list-text">' + data[loop].caption + '</p>' +
							'</div>' +
						'</div>' +
						'<div class="col-xs-4">' +
							'<div class="list-box clear">' +
								'<p class="list-text">' + data[loop].references + '</p>' +
								'<div class="list-button click-option"' + 
									'p-label		="' + data[loop].caption + '"' + 
									'p-id			="' + data[loop].noreg + '"' +
									'p-references	="' + data[loop].referencesKey + '"' +
									'p-group		="f4"' + 
									'p-target		="f432"' +
									'p-container	="legalitas-' + data[loop].noreg + '">' +
									'<span class="fa fa-ellipsis-v"></span>' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<div class="clearfix"></div>' +
					'</div>' +
				'</div>';
			}	
		}else{
			body = body + 
			'<div class="cards emptyList">' +
				'<div class="row default">' +
					'<div class="col-xs-12">' +
						'<div class="list-box text-center clear">' +
							'<p class="list-text">Data tidak ditemukan</p>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>';
		}
		
		body	= body + '</div></div></div>';
		content = '<section id="">' + head + body + '</section>';
		//--close
		
		//--gen
		headPage.html(r_headPageHtml(3, 'Legalitas lembaga'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');
		$("#preload").remove();
		
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(4); });
		$(".click-option").unbind().on("click", function(){ 
			//packet session
			clearPacket();
			pGroup 			= $(this).attr('p-group');
			pTarget			= $(this).attr('p-target')
			pId				= $(this).attr('p-id');
			pLabel			= $(this).attr('p-label');
			pContainer		= $(this).attr('p-container');
			pReferences		= $(this).attr('p-references');
			pReferencesKey	= $(this).attr('p-referencesKey');
			showOptionList(); 
			
			//-- option activator
			$("#edit-card").unbind().on("click", function(){ 
				hideOptionList(); 
				r_f4KelembagaanSectionEditor(pTarget, pId, pLabel, pReferences); 
			});
			
			$("#delete-card").unbind().on("click", function(){ 
				hideOptionList(); 
				showOptionConfirm('delete');
				$(".option-yes").unbind().on("click", function(){ 
					hideOptionList(); 
					if(p_removeData(pGroup, pTarget, pId) == 'success'){ 
						$('#' + pContainer).remove(); 
						clearPacket();
					}; 
				});
			});
		});

		r_navbarReactor();
	
		//form reactor
		p_formHandler("f-legalitas-create" , "addData");
	});
}

function r_f4BidangGerakLembaga() {
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part	= ['','','',''];
		content = '';
		
		optionBatch = optionBatch = r_f4OptionList(432); ; 
		
		counter = 0;
		data = p_getData('f4', 'f433', '');
		data = data.feedData;
		if(data != null && data.length > 0){ counter = data.length; }
		
		//--open
		head = '';
		body = '<div class="row no-head"><div class="container"><div id="section-bidangGerak" class="col-md-8 col-md-offset-2">';

		if(r_getCookie('TABAH_pengaturanKelembagaanTambah') == '1' || r_getCookie('TABAH_pengaturanKelembagaanUbah') == '1'){
			body = body + 
			'<form id="f-bidangGerak-create" f-group="f4" f-target="f433">' +
				'<div class="cards">' +
					'<div class="cards-header">' +
						'<h4>Bidang gerak lembaga</h4>' +
						'<p class="offset">form untuk menambahkan data bidang gerak lembaga.</p>' +
						'<div class="btn-collapse right">' +
							'<button class="clear" type="reset"><span class="fa fa-refresh"></span></button>' +
							'<button class="clear" type="submit"><span class="fa fa-check-circle-o"></span></button>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="cards flush">' +
					'<div class="row default">' +
						'<div class="col-md-12">' +
							'<div class="input-box">' +
								'<input name="pId" tabindex="2" type="hidden" value="" />' +
								'<input placeholder="Bidang gerak lembaga" name="nama" tabindex="2" type="text" value="" />' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</form>' +
			'<!--div class="cards-label plus">' +
				'<p>' +
					'<strong>Daftar bidang (' + counter + ')</strong>' +
				'</p>' +
			'</div-->';
		}
		
		if(counter > 0){
			for(var loop = 0; loop < data.length; loop++){
				body = body + 
				'<div class="cards bidangGerak-list" id="bidangGerak-' + data[loop].noreg + '">' +
					'<div class="row default">' +
						'<div class="col-xs-12">' +
							'<div class="list-box">' +
								'<div class="list-icon bg-red"><span class="fa fa-road"></span></div>' +
								'<p class="list-text">' + data[loop].caption + '</p>' +
								'<div class="list-button click-option"' + 
									'p-label		="' + data[loop].caption + '"' + 
									'p-id			="' + data[loop].noreg + '"' +
									'p-group		="f4"' + 
									'p-target		="f433"' +
									'p-container	="bidangGerak-' + data[loop].noreg + '">' +
									'<span class="fa fa-ellipsis-v"></span>' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<div class="clearfix"></div>' +
					'</div>' +
				'</div>';
			}	
		}else{
			body = body + 
			'<div class="cards emptyList">' +
				'<div class="row default">' +
					'<div class="col-xs-12">' +
						'<div class="list-box text-center clear">' +
							'<p class="list-text">Data tidak ditemukan</p>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>';
		}
		
		body	= body + '</div></div></div>';
		content = '<section id="">' + head + body + '</section>';
		//--close
		
		//--gen
		headPage.html(r_headPageHtml(3, 'Bidang gerak'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');
		$("#preload").remove();
		
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(4); });
		$(".click-option").unbind().on("click", function(){ 
			//packet session
			clearPacket();
			pGroup 			= $(this).attr('p-group');
			pTarget			= $(this).attr('p-target')
			pId				= $(this).attr('p-id');
			pLabel			= $(this).attr('p-label');
			pContainer		= $(this).attr('p-container');
			pReferences		= $(this).attr('p-references');
			pReferencesKey	= $(this).attr('p-referencesKey');
			showOptionList(); 
			
			//-- option activator
			$("#edit-card").unbind().on("click", function(){ 
				hideOptionList(); 
				r_f4KelembagaanSectionEditor(pTarget, pId, pLabel, pReferences); 
			});
			
			$("#delete-card").unbind().on("click", function(){ 
				hideOptionList(); 
				showOptionConfirm('delete');
				$(".option-yes").unbind().on("click", function(){ 
					hideOptionList(); 
					if(p_removeData(pGroup, pTarget, pId) == 'success'){ 
						$('#' + pContainer).remove(); 
						clearPacket();
					}; 
				});
			});
		});

		r_navbarReactor();
	
		//form reactor
		p_formHandler("f-bidangGerak-create" , "addData");
	});
}

function r_f4KelembagaanSectionEditor(target, id, label, referencesKey, description){
	switch(target){
		case "f431":
			$("#f-bentukLembaga-create [name='pId']").val(id).attr('readonly','readonly');
			$("#f-bentukLembaga-create [name='nama']").val(label);
			$("#f-bentukLembaga-create [name='deskripsi']").val(description);
			p_formHandler("f-bentukLembaga-create" , "updateData");
		break;
		case "f432":
			$("#f-legalitas-create [name='pId']").val(id).attr('readonly','readonly');
			$("#f-legalitas-create [name='nama']").val(label);
			$("#f-legalitas-create [name='referensi']").val(referencesKey);
			p_formHandler("f-legalitas-create" , "updateData");
		break;
		case "f433":
			$("#f-bidangGerak-create [name='pId']").val(id).attr('readonly','readonly');
			$("#f-bidangGerak-create [name='nama']").val(label);
			p_formHandler("f-bidangGerak-create" , "updateData");
		break;
	}
} 

function r_f4KelembagaanSectionGenerator(formType, type, data, sectionId){
	var genHtml = "";
	if(data.length > 0){
		if(type == 'bentukLembaga'){
			for(var loop=0; loop<data.length; loop++){
				genHtml = genHtml +
				'<div class="cards bentukLembaga-list list-edit" id ="bentukLembaga-' + data[loop].noreg + '">' +
					'<div class="row default">' +
						'<div class="col-xs-4">' +
							'<div class="list-box">' +
								'<div class="list-icon bg-red"><span class="fa fa-sitemap"></span></div>' +
								'<p class="list-text">' + data[loop].caption + '</p>' +
							'</div>' +
						'</div>' +
						'<div class="col-xs-8">' +
							'<div class="list-box clear-small">' +
								'<p class="list-text">' + data[loop].description + '</p>' +
								'<div class="list-button click-option"' + 
									'p-label		="' + data[loop].caption + '"' + 
									'p-id			="' + data[loop].noreg + '"' +
									'p-group		="f4"' + 
									'p-target		="f431"' +
									'p-description	="' + data[loop].description + '"' +
									'p-container	="bentukLembaga-' + data[loop].noreg + '">' +
									'<span class="fa fa-ellipsis-v"></span>' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<div class="clearfix"></div>' +
					'</div>' +
				'</div>';
			}
		}else if(type == 'legalitas'){
			for(var loop=0; loop<data.length; loop++){
				genHtml = genHtml +
				'<div class="cards legalitas-list" id="legalitas-' + data[loop].noreg + '">' +
					'<div class="row default">' +
						'<div class="col-xs-8">' +
							'<div class="list-box">' +
								'<div class="list-icon bg-red"><span class="fa fa-file-text-o"></span></div>' +
								'<p class="list-text">' + data[loop].caption + '</p>' +
							'</div>' +
						'</div>' +
						'<div class="col-xs-4">' +
							'<div class="list-box clear">' +
								'<p class="list-text">' + data[loop].references + '</p>' +
								'<div class="list-button click-option"' + 
									'p-label		="' + data[loop].caption + '"' + 
									'p-id			="' + data[loop].noreg + '"' +
									'p-references	="' + data[loop].referencesKey + '"' +
									'p-group		="f4"' + 
									'p-target		="f432"' +
									'p-container	="legalitas-' + data[loop].noreg + '">' +
									'<span class="fa fa-ellipsis-v"></span>' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<div class="clearfix"></div>' +
					'</div>' +
				'</div>';
			}
		}else if(type == 'bidangGerak'){
			for(var loop=0; loop<data.length; loop++){
				genHtml = genHtml +
				'<div class="cards bidangGerak-list" id="bidangGerak-' + data[loop].noreg + '">' +
					'<div class="row default">' +
						'<div class="col-xs-12">' +
							'<div class="list-box">' +
								'<div class="list-icon bg-red"><span class="fa fa-road"></span></div>' +
								'<p class="list-text">' + data[loop].caption + '</p>' +
								'<div class="list-button click-option"' + 
									'p-label		="' + data[loop].caption + '"' + 
									'p-id			="' + data[loop].noreg + '"' +
									'p-group		="f4"' + 
									'p-target		="f433"' +
									'p-container	="bidangGerak-' + data[loop].noreg + '">' +
									'<span class="fa fa-ellipsis-v"></span>' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<div class="clearfix"></div>' +
					'</div>' +
				'</div>';
			}
		}
	}else{
		genHtml = genHtml +
		'<div class="cards emptyList">' +
			'<div class="row default">' +
				'<div class="col-xs-12">' +
					'<div class="list-box text-center clear">' +
						'<p class="list-text">Data tidak ditemukan</p>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>';
	}
	
	if(formType == "addData"){
		$("#" + sectionId + ' .emptyList').remove();
		$("#" + sectionId).append(genHtml);
	}else if (formType == "updateData"){
		$("#" + pContainer).replaceWith(genHtml);
	}
	
	//reactor
	$(".click-option").unbind().on("click", function(){ 
		//packet session
		clearPacket();
		pGroup 			= $(this).attr('p-group');
		pTarget			= $(this).attr('p-target')
		pId				= $(this).attr('p-id');
		pLabel			= $(this).attr('p-label');
		pContainer		= $(this).attr('p-container');
		pReferences		= $(this).attr('p-references');
		pReferencesKey	= $(this).attr('p-referencesKey');
		pDecription		= $(this).attr('p-description');
		showOptionList(); 
		
		//-- option activator
		$("#edit-card").unbind().on("click", function(){ 
			hideOptionList(); 
			r_f4KelembagaanSectionEditor(pTarget, pId, pLabel, pReferences, pDecription); 
		});
		
		$("#delete-card").unbind().on("click", function(){ 
			hideOptionList(); 
			showOptionConfirm('delete');
			$(".option-yes").unbind().on("click", function(){ 
				hideOptionList(); 
				if(p_removeData(pGroup, pTarget, pId) == 'success'){ 
					$('#' + pContainer).remove(); 
					clearPacket();
				}; 
			});
		});
	});
}


//F4 BERITA
//=====================================
function r_f4DaftarBerita() {
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part	= ['',''];
		content = '';
		genHtml = '';
		data = p_getData('f4','f441','');
		data = data.feedData;
		if(data !=null){
			counter = data.length;
		}
		
		//--open
		head	= '';
		body	= '<div class="row no-head"><div class="container">';
		body	= body + '<div class="col-md-8 col-md-offset-2">';
		if(r_getCookie('TABAH_beritaTambah') == '1'){
			body 	= body + 
			'<form id="f-berita-create" f-group = "f4" f-target = "f441">' +
				'<div class="cards">' +
					'<div class="cards-header">' +
						'<h4>Berita</h4>' +
						'<p class="offset">form untuk menambahkan berita.</p>' +
						'<div class="btn-collapse right">' +
							'<button class="clear" type="reset"><span class="fa fa-refresh"></span></button>' +
							'<button class="clear" type="submit"><span class="fa fa-check-circle-o"></span></button>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="cards flush">' +
					'<div class="row default">' +
						'<div class="col-md-12">' +
							'<div class="input-box">' +
								'<input name="judul" placeholder="Judul berita (*)" tabindex="2" type="text" value="" />' +
							'</div>' +
						'</div>' +
						'<div class="col-md-12">' +
							'<div class="input-box rows-4">' +
								'<textarea name="isiBerita" placeholder="Isi berita (*)" tabindex="2" class="rows-4"></textarea>' +
							'</div>' +
						'</div>' +
						'<div class="col-md-12">' +
							// '<div class="empty-box"></div>' +
							'<p>Sisipkan gambar pada berita.</p>' +
							'<div class="input-box fixed">' +
								'<div class="icon-box both">' +
									'<label class="browser-box" id="gambar-berita">' +
										'<p class="placeholder" name="imgName" id="berkas">berkas belum diunggah...</p>' +
										'<input name="urlFile" type="file" tabindex="32" />' +
									'</label>' +
									'<button type="button" browser-id="gambar-berita" class="browser-clear clear"><i class="fa fa-times-circle"></i></button>' +
									'<span class="left fa fa-paperclip text-purple"></span>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</form>';
		}

		//--render data
		body = body +
		'<div id="renderData">';
	
		body = body + '</div>';
		//--render data end
		body	= body + '</div></div></div>';
		content = '<section id="">' + head + body + '</section>';
		//--close
		
		//-- cek position
		// var pageType = 2;
		// if(r_pagePreviousReader() != null && r_pagePreviousReader() != 99){ pageType = 3 }
		
		//--gen
		headPage.html(r_headPageHtml(3, 'Berita'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');
		$("#preload").remove();
		
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(4); });
		$(".detail-click").unbind().on('click', function(){ r_navigateTo(441); });

		r_f4BeritaGenerator(data);
		fileBrowserActivator();
		r_navbarReactor();
		p_formHandler("f-berita-create"  , "addData");
		$('#renderData  [type=reset]').unbind().on("click", function(e){
			e.preventDefault();
			idBerita = $(this).attr('id-button');
			showOptionConfirm('delete');
			$(".option-yes").unbind().on("click", function(){ 
				hideOptionList();
				if(p_removeData('f4', 'f441', idBerita) == 'success'){
					counter = counter -1;
					$('#berita-'+idBerita).remove();
					
					if(counter == 0){
						genHtml = genHtml +
						'<div class="cards emptyList">' +
							'<div class="row default">' +
								'<div class="col-xs-12">' +
									'<div class="list-box text-center clear">' +
										'<p class="list-text">Data tidak ditemukan</p>' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>';
						$('#renderData').html(genHtml);
					}
				}; 
			});
		});
	});
}

function r_f4DetailBerita(packet) {
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part	= ['',''];
		content = '';
		
		if(packet == undefined || packet == "" || packet == null || packet == "start"){
			packet = news_look_reader();
		}

		data = p_getData('f4','f441', packet);
		data = data.feedData;

		news_look_set(packet);

		//--open
		head	= '';
		body	= '<div class="row no-head"><div class="container">';
		body	= body + '<div class="col-md-8 col-md-offset-2">';

		//--render data
		for(var loop = 0; loop < data.length; loop++){
			body = body +
			'<div class="cards clear">' +
				'<div class="article-box">' +
					'<div class="body full no-foot">' +
						'<h2 class="title">' + data[loop].judul + '</h2>	' +
						'<p>' + timeSince(new Date(Date.parse(data[loop].createdDate))) + '</p>	';
			
			if(data[loop].picture != ""){
				body = body +
				'<img src="img/news/' + data[loop].urlGambar + '"/>';
			}
			
			body = body +
						'<p class="content">' + data[loop].isiBerita + '</p>' +
					'</div>' +
				'</div>' +
			'</div>';
		}
		
		body	= body + '</div></div></div>';
		content = '<section id="">' + head + body + '</section>';
		//--close
		
		//--gen
		headPage.html(r_headPageHtml(3, 'Baca berita'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');
		$("#preload").remove();
		
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(44); });
		r_navbarReactor();
	});
}

//F4 CONTROL
//=====================================
function r_f4ImportData() {
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part	= ['','','',''];
		content = '';
		data    = [
			{'noreg': '1', 'date': '2017/05/01', 'importBy': 'admin', 'caption': 'lorem dolor sit amet 2.'},
			{'noreg': '2', 'date': '2017/05/01', 'importBy': 'admin', 'caption': 'lorem dolor sit amet 3.'},
			{'noreg': '3', 'date': '2017/05/01', 'importBy': 'admin', 'caption': 'lorem dolor sit amet 4.'},
		];
		
		//--open
		head = '';
		body = '<div class="row no-head"><div class="container"><div class="col-md-8 col-md-offset-2">';
		body = body + 
		'<div class="cards">' +
			'<div class="cards-header">' +
				'<h4>Import data</h4>' +
				'<p class="offset">fasilitas untuk import data lembaga sesuai format template yang disediakan.</p>' +
				'<div class="btn-collapse right">' +
					'<button class="clear" type="button"><span class="fa fa-file-excel-o"></span></button>' +
					'<button class="clear" type="button"><span class="fa fa-refresh"></span></button>' +
					'<button class="clear" type="button"><span class="fa fa-check-circle-o"></span></button>' +
				'</div>' +
			'</div>' +
		'</div>' +
		'<div class="cards flush">' +
			'<form id="f-import-create">' +
				'<div class="row default">' +
					'<div class="col-md-12">' +
						'<p>Pilih file untuk import dengan format xls atau xlsx.</p>' +
						'<div class="input-box fixed">' +
							'<div class="icon-box both">' +
								'<label class="browser-box" id="import-data">' +
									'<p class="placeholder">berkas belum diunggah...</p>' +
									'<input type="file" tabindex="12" />' +
								'</label>' +
								'<button type="button" browser-id="import-data" class="browser-clear clear"><i class="fa fa-times-circle"></i></button>' +
								'<span class="left fa fa-paperclip text-purple"></span>' +
							'</div>' +
						'</div>' +
						'<p class="text-danger">Catatan : Penting untuk melakukan back up data terlebih dahulu untuk mencegah hal yang tidak diinginkan !</p>' +
					'</div>' +
				'</div>' +
			'</form>' +
		'</div>' +
		'<div class="cards-label plus">' +
			'<p>' +
				'<strong>Riwayat import (' + data.length + ')</strong>' +
			'</p>' +
		'</div>';
		
		for(var loop = 0; loop < data.length; loop++){
			body = body + 
			'<div class="cards import-list">' +
				'<div class="row default">' +
					'<div class="col-xs-6">' +
						'<div class="list-box">' +
							'<div class="list-icon bg-theme"><span class="fa fa-file-excel-o"></span></div>' +
							'<p class="list-text">' + data[loop].caption + '</p>' +
						'</div>' +
					'</div>' +
					'<div class="col-xs-3">' +
						'<div class="list-box clear">' +
							'<p class="list-text">' + data[loop].importBy + '</p>' +
						'</div>' +
					'</div>' +
					'<div class="col-xs-3">' +
						'<div class="list-box clear">' +
							'<p class="list-text">' + data[loop].date + '</p>' +
							'<div class="list-remove" p-id="' + data[loop].noreg + '"><span class="fa fa-trash"></span></div>' +
						'</div>' +
					'</div>' +
					'<div class="clearfix"></div>' +
				'</div>' +
			'</div>';
		}	
		
		body	= body + '</div></div></div>';
		content = '<section id="">' + head + body + '</section>';
		//--close
		
		//--gen
		headPage.html(r_headPageHtml(3, 'Import data'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');
		$("#preload").remove();
		
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(4); });
		fileBrowserActivator();
		r_navbarReactor();
	});
}

function r_f4BackupRestore() {
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part	= ['','','',''];
		content = '';
		data    = p_getData('dumb', 'f451');
		data 	= data.feedData;

		//--open
		head = '';
		body = '<div class="row no-head"><div class="container"><div class="col-md-8 col-md-offset-2">';
		body = body + 
		'<form id="f-bakcup-create" f-group="dumb" f-target="">' +
			'<div class="cards">' +
				'<div class="cards-header">' +
					'<h4>Backup & restore</h4>' +
					'<p class="offset">Lakukan backup secara berkala untuk mencegah kehilangan data.</p>' +
					'<div class="btn-collapse right">' +
						'<button class="clear" type="submit"><span class="fa fa-recycle"></span></button>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</form>' +
		'<!--div class="cards flush">' +
			'<div class="row default">' +
				'<div class="col-md-12">' +
					'<div class="input-box">' +
						'<input placeholder="Ketik nama file" tabindex="1" type="text" value="" />' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>' +
		'<div class="cards-label plus">' +
			'<p>' +
				'<strong>File backup ()</strong>' +
			'</p>' +
		'</div-->';
		
		if(data != null){
			for(var loop = 0; loop < data.length; loop++){
				body = body + 
				'<div class="cards bakcup-list">' +
					'<div class="row default">' +
						'<div class="col-xs-6">' +
							'<div class="list-box">' +
								'<div class="list-icon bg-theme"><span class="fa fa-server"></span></div>' +
								'<p class="list-text">' + data[loop].caption + '</p>' +
							'</div>' +
						'</div>' +
						'<div class="col-xs-3">' +
							'<div class="list-box clear">' +
								'<p class="list-text">' + data[loop].createdBy + '</p>' +
							'</div>' +
						'</div>' +
						'<div class="col-xs-3">' +
							'<div class="list-box clear">' +
								'<p class="list-text">' + timeSince(new Date(Date.parse(data[loop].createdDate))) + '</p>' +
								'<div class="list-remove" p-id="' + data[loop].id + '" p-referencesKey="' + data[loop].caption + '"><span class="fa fa-life-ring"></span></div>' +
							'</div>' +
						'</div>' +
						'<div class="clearfix"></div>' +
					'</div>' +
				'</div>';
			}	
		}	
		
		body	= body + '</div></div></div>';
		content = '<section id="">' + head + body + '</section>';
		//--close
		
		//--gen
		headPage.html(r_headPageHtml(3, 'Backup & restore'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');
		$("#preload").remove();
		
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(4); });
		r_navbarReactor();

		$('.list-remove').unbind().on("click", function(e){
			clearPacket();
			pId				= $(this).attr('p-id');
			pReferencesKey	= $(this).attr('p-referencesKey');
			showOptionConfirm('restore');
			$(".option-yes").unbind().on("click", function(){ 
				showNotification('info', 'waiting', 'sedang me-restore data...', false);
				hideOptionList(); 
				setTimeout(function(){ p_restore('dumb', '', pId, pReferencesKey); }, 1000); 
			});
		});

		p_formHandler('f-bakcup-create', 'backup');
	});
}

function r_f4Setelan(){
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part	= ['','','',''];
		content = '';
		data    = [
			{'noreg': '1', 'date': '2017/05/01', 'importBy': 'admin', 'caption': 'lorem dolor sit amet 2.'},
			{'noreg': '2', 'date': '2017/05/01', 'importBy': 'admin', 'caption': 'lorem dolor sit amet 3.'},
			{'noreg': '3', 'date': '2017/05/01', 'importBy': 'admin', 'caption': 'lorem dolor sit amet 4.'},
		];
		
		//--open
		head = '';
		body = '<div class="row no-head"><div class="container"><div class="col-md-8 col-md-offset-2">';
		body = body + 
		'<div class="cards">' +
			'<div class="cards-header">' +
				'<h4>Setelan</h4>' +
				'<p class="offset">Pengaturan aplikasi oleh admin.</p>' +
				'<div class="btn-collapse right">' +
					'<button class="clear" type="button"><span class="fa fa-check-circle-o"></span></button>' +
				'</div>' +
			'</div>' +
		'</div>' +
		'<div class="cards flush">' +
			'<form id="f-setting-create">' +
				'<h5>Wallpaper</h5>' +
				'<img src="img/avatar/avatar-default-x3.jpg" class="big-pic" />' +
				'<div class="input-box fixed">' +
					'<div class="icon-box both">' +
						'<label class="browser-box" id="import-data">' +
							'<p class="placeholder">berkas belum diunggah...</p>' +
							'<input type="file" tabindex="12" />' +
						'</label>' +
						'<button type="button" browser-id="import-data" class="browser-clear clear"><i class="fa fa-times-circle"></i></button>' +
						'<span class="left fa fa-paperclip text-purple"></span>' +
					'</div>' +
				'</div>' +
			'</form>' +
		'</div>' +
		'<div class="cards-label plus">' +
			'<p>' +
				'<strong>File backup (' + data.length + ')</strong>' +
			'</p>' +
		'</div>';
		
		for(var loop = 0; loop < data.length; loop++){
			body = body + 
			'<div class="cards bakcup-list">' +
				'<div class="row default">' +
					'<div class="col-xs-6">' +
						'<div class="list-box">' +
							'<div class="list-icon bg-theme"><span class="fa fa-server"></span></div>' +
							'<p class="list-text">' + data[loop].caption + '</p>' +
						'</div>' +
					'</div>' +
					'<div class="col-xs-3">' +
						'<div class="list-box clear">' +
							'<p class="list-text">' + data[loop].importBy + '</p>' +
						'</div>' +
					'</div>' +
					'<div class="col-xs-3">' +
						'<div class="list-box clear">' +
							'<p class="list-text">' + data[loop].date + '</p>' +
							'<div class="list-remove" p-id="' + data[loop].noreg + '"><span class="fa fa-life-ring"></span></div>' +
						'</div>' +
					'</div>' +
					'<div class="clearfix"></div>' +
				'</div>' +
			'</div>';
		}	
		
		body	= body + '</div></div></div>';
		content = '<section id="">' + head + body + '</section>';
		//--close
		
		//--gen
		headPage.html(r_headPageHtml(3, 'Backup & restore'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');
		$("#preload").remove();
		
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(4); });
		r_navbarReactor();
	});
}

//F4 ACCOUNT
//=====================================
function r_f4GantiPassword() {
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part	= ['','','',''];
		content = '';
		data    = [];
		
		//--open
		head = '';
		
		body = '<div class="row no-head"><div class="container"><div class="col-md-8 col-md-offset-2">';
		body = body + 
		'<form id="f-password-create" f-group="f3" f-target="f313">' +
			'<div class="cards">' +
				'<div class="cards-header">' +
					'<h4>Ganti password</h4>' +
					'<p class="offset">Demi privasi dan kenyamanan, anda dapat mengganti password akun anda.</p>' +
					'<div class="btn-collapse right">' +
						'<button class="clear" type="submit"><span class="fa fa-check-circle-o"></span></button>' +
					'</div>' +
				'</div>' +
			'</div>' +
			'<div class="cards">' +
				'<div class="row default">' +
					'<div class="col-md-6">' +
						'<div class="input-box">' +
							'<input name="oldPassword" placeholder="Password lama" tabindex="1" type="password" value="" />' +
						'</div>' +
						'<div class="input-box">' +
							'<input name="newPassword" placeholder="Password baru" tabindex="1" type="password" value="" />' +
						'</div>' +
						'<div class="input-box">' +
							'<input name="rePassword" placeholder="Ketik ulang password" tabindex="1" type="password" value="" />' +
						'</div>' +
						'<div class="space-box"></div>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</form>';	
		
		body	= body + '</div></div></div>';
		content = '<section id="">' + head + body + '</section>';
		//--close
		
		//--gen
		headPage.html(r_headPageHtml(3, 'Ganti password'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');
		$("#preload").remove();
		
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(4); });
		r_navbarReactor();

		//form reactor
		p_formHandler("f-password-create" , "updateData");
	});
}

function r_f4InfoPersonal() {
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part	= ['','','',''];
		content = '';
		data    = [
			// {'date': 'Kamis, 25 Mei 2017', 'time': '10:30 AM', 'duration': '10 menit'},
			// {'date': 'Kamis, 25 Mei 2017', 'time': '10:20 AM', 'duration': '10 menit'},
			// {'date': 'Kamis, 25 Mei 2017', 'time': '10:10 AM', 'duration': '10 menit'},
		];

		dataProfile = p_getData('f3', 'f312');
		dataProfile = dataProfile.feedData;

		//--open
		head = '<div class="row head"><div class="container"><div class="col-md-8 col-md-offset-2">';
		head = head +
		'<div class="cards">' +
			'<div class="cards-header">' +
				'<h4>Informasi personal</h4>' +
				'<p class="offset">pastikan informasi yang tercatat adalah benar.</p>' +
				'<div class="btn-collapse right">' +
					'<button class="clear" type="button" id="pEditInformasiPersonal">_<span class="fa fa-pencil"></span></button>' +
				'</div>' +
			'</div>' +
		'</div>';
		head = head + '</div></div></div>';
		
		var imgDir = ((dataProfile.noRegistrasi != "") ? 'img/logo/' : 'img/avatar/');
		body = '<div class="row"><div class="container"><div class="col-md-8 col-md-offset-2">';
		body = body + 
		'<div class="cards fluid">' +
			'<div class="col-md-4 text-center">' +
				'<img src="' + imgDir + ((dataProfile.urlGambar != "" && dataProfile.urlGambar != null) ? dataProfile.urlGambar : 'avatar-default-x3.jpg') + '" class="big-pic" />' +
			'</div>' +
			'<div class="col-md-8">' +
				'<div class="desc-frame">' +
					'<div class="desc-box">' +
						'<div class="labels"><p class="text-set">Nama</p></div>' +
						'<div class="divider"><p class="text-set">' + ((dataProfile.nama) ? dataProfile.nama : '...') + '</p></div>' +
					'</div>' +
					'<div class="desc-box">' +
						'<div class="labels"><p class="text-set">Jabatan</p></div>' +
						'<div class="divider"><p class="text-set">' + ((dataProfile.jabatan) ? dataProfile.jabatan : '...') + '</p></div>' +
					'</div>' +
					'<div class="desc-box">' +
						'<div class="labels"><p class="text-set">Alamat</p></div>' +
						'<div class="divider"><p class="text-set">' + ((dataProfile.alamat) ? dataProfile.alamat : '...') + '</p></div>' +
					'</div>' +
					'<div class="desc-box">' +
						'<div class="labels"><p class="text-set">Telp</p></div>' +
						'<div class="divider"><p class="text-set">' + ((dataProfile.telp) ? dataProfile.telp : '...') + '</p></div>' +
					'</div>' +
					'<div class="desc-box">' +
						'<div class="labels"><p class="text-set">Email</p></div>' +
						'<div class="divider"><p class="text-set">' + ((dataProfile.email) ? dataProfile.email : '...') + '</p></div>' +
					'</div>' +
				'</div>' +
			'</div>' +
			'<div class="clearfix"></div>' +
		'</div>' +
		'<div class="cards">' +
			'<div class="cards-header">' +
				'<p class="fixed offset">Informasi Akun</p>' +
				'<div class="btn-collapse right">' +
					'<button class="toggle-click clear" toggle-target="info-group" type="button"><span class="fa fa-chevron-down"></span></button>' +
				'</div>' +
			'</div>' +
		'</div>' +
		'<div class="cards flush toggle-content info-group">' +
			'<div class="desc-frame">' +
				'<div class="desc-box">' +
					'<div class="labels"><p class="text-set">Username</p></div>' +
					'<div class="divider"><p class="text-set">' + ((dataProfile.username) ? dataProfile.username : '...') + '</p></div>' +
				'</div>' +
				'<div class="desc-box">' +
					'<div class="labels"><p class="text-set">User level</p></div>' +
					'<div class="divider"><p class="text-set">' + ((dataProfile.userLevel) ? dataProfile.userLevel : '...') + '</p></div>' +
				'</div>';
		if(dataProfile.access != null && dataProfile.access.length > 0){
			for(loop=0; loop<dataProfile.access.length; loop++){
				body = body + 
				'<div class="desc-box">' +
					'<div class="labels"><p class="text-set">' + dataProfile.access[loop].label + '</p></div>' +
					'<div class="divider"><p class="text-set">' + ((dataProfile.access[loop].status == '1') ? 'Aktif' : 'Tidak aktif') + '</p></div>' +
				'</div>';
			}
		}

		body = body + 		
			'</div>' +
		'</div>' +
		'<div class="cards-label plus">' +
			'<p>' +
				'<strong>Riwayat login</strong>' +
			'</p>' +
		'</div>';

		if(data != null && data.length > 0){
			for(var loop = 0; loop < data.length; loop++){
				body = body + 
				'<div class="cards bakcup-list">' +
					'<div class="row default">' +
						'<div class="col-xs-6">' +
							'<div class="list-box clear">' +
								'<p class="list-text">' + data[loop].date + '</p>' +
							'</div>' +
						'</div>' +
						'<div class="col-xs-3">' +
							'<div class="list-box clear">' +
								'<p class="list-text">' + data[loop].time + '</p>' +
							'</div>' +
						'</div>' +
						'<div class="col-xs-3">' +
							'<div class="list-box clear">' +
								'<p class="list-text">' + data[loop].duration + '</p>' +
							'</div>' +
						'</div>' +
						'<div class="clearfix"></div>' +
					'</div>' +
				'</div>';
			}	
		}else{
			body = body + 
			'<div class="cards">' +
				'<div class="cards-header">' +
					'<p class="fixed offset text-black">Data tidak ditemukan.</p>' +
				'</div>' +
			'</div>';
		}
		
		body	= body + '</div></div></div>';
		content = '<section id="">' + head + body + '</section>';
		//--close
		
		//--gen
		res = (r_getCookie('TABAH_userLevel') == '1') ? 2 : 3;
		headPage.html(r_headPageHtml(res, 'Informasi personal'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');
		$("#preload").remove();
		
		//--command reactor
		res = (r_getCookie('TABAH_userLevel') == '1') ? 12 : 4;
		$("#pEditInformasiPersonal").unbind().on('click', function(){ r_navigateTo(462); });
		$(".back-button").unbind().on('click', function(){ r_navigateTo(res); });
		toggleBoxActivator();
		r_navbarReactor();
	});
}

function r_f4FormInfoPersonal() {
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part	= ['','','',''];
		content = '';

		data    = p_getData('f3', 'f3111');
		data 	= data.feedData;
		
		//-- get data lingkup area
		dataTemp 		  	= p_getData('f4', 'f401', ''); 
		sourcesData 	  	= (dataTemp.feedData != null) ? dataTemp.feedData[0] : ""; 
		sourcesDetailData 	= (dataTemp.feedData != null) ? dataTemp.feedDataDetail : "";
		
		//--open
		head = '';
		
		body = '<div class="row no-head"><div class="container"><div class="col-md-8 col-md-offset-2">';

		var imgDir = ((data.noRegistrasi != "") ? 'img/logo/' : 'img/avatar/');
		body = body + 
		'<form id="f-user-update" f-group="f3" f-target="f314">' +
			'<div class="cards">' +
				'<div class="cards-header">' +
					'<p class="fixed offset">Form info personal</p>' +
					'<div class="btn-collapse right">' +
						'<button class="clear" type="submit"><span class="fa fa-check-circle-o"></span></button>' +
					'</div>' +
				'</div>' +
			'</div>' +
			'<div class="cards">' +
				'<div class="col-sm-5">' +
					'<div class="picture-box relative">' +
						'<img viewer-id="v-user" class="pic-default pic-relative changed" src="' + imgDir + ((data.urlGambar != "" && data.urlGambar != null) ? data.urlGambar : 'avatar-default-x3.jpg')  + '" />' +
					'</div>' +
					'<div class="input-box">' +
						'<div class="icon-box both">' +
							'<label class="browser-box" id="v-user">' +
								'<p class="placeholder" name="imageName">berkas belum diunggah...</p>' +
								'<input preview-id="v-user" name="imageUrl" type="file" accept="image/*" tabindex="5" />' +
								'<input browser-state="fileState" name="fileState" type="hidden" tabindex="1" value="add" />' +
							'</label>' +
							'<button type="button" browser-id="v-user" class="browser-clear clear"><i class="fa fa-times-circle"></i></button>' +
							'<span class="left fa fa-paperclip text-purple"></span>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="col-sm-7">' +
					'<div class="input-box">' +
						'<input name="nama" placeholder="Nama (*)" tabindex="1" type="text" value="' + data.nama + '" />' +
					'</div>' +
					'<div class="input-box">' +
						'<input name="jabatan" placeholder="Jabatan" tabindex="1" type="text" value="' + data.jabatan + '" />' +
					'</div>' +
					'<div class="input-box rows-2">' +
						'<textarea name="alamat" placeholder="Alamat" tabindex="1" class="rows-2">' + data.alamat + '</textarea>' +
					'</div>' +
					'<div class="input-box">' +
						'<input name="rt" placeholder="RT" tabindex="1" class="half" type="text" value="' + data.noRt + '" />' +
						'<input name="rw" placeholder="RW" tabindex="1" class="half" type="text" value="' + data.noRw + '" />' +
					'</div>' +
					'<div class="input-box">' +
						'<div class="icon-box left">' +
							'<input id="f111_lingkupArea" name="kelurahan" placeholder="Kelurahan" tabindex="1" type="text" value="' + data.namaKelurahan + '" />' +
							'<input id="f111_lingkupArea_kode" name="kodeKelurahan" tabindex="1" type="hidden" value="' + data.kodeKelurahan + '" />' +
							'<span class="fa fa-magic"></span>' +
						'</div>' +
					'</div>' +
					'<div class="input-box">' +
						'<div class="icon-box left">' +
							'<input id="f111_lingkupArea_2" name="kecamatan" placeholder="Kecamatan" tabindex="1" type="text" value="' + data.namaKecamatan + '" readonly />' +
							'<input id="f111_lingkupArea_kode2" name="kodeKecamatan" tabindex="1" type="hidden" value="' + data.kodeKecamatan + '" readonly />' +
							'<span class="fa fa-repeat"></span>' +
						'</div>' +
					'</div>' +
					'<div class="input-box">' +
						'<div class="icon-box left">' +
							'<input id="f111_lingkupArea_3" name="wilayah" placeholder="Wilayah" tabindex="1" type="text" value="' + data.namaWilayah + '" readonly />' +
							'<input id="f111_lingkupArea_kode3" name="kodeWilayah" tabindex="1" type="hidden" value="' + data.kodeWilayah + '" readonly />' +
							'<span class="fa fa-repeat"></span>' +
						'</div>' +
					'</div>' +
					'<div class="input-box">' +
						'<div class="icon-box left">' +
							'<input id="f111_lingkupArea_4" name="provinsi" placeholder="Provinsi" tabindex="1" type="text" value="' + data.namaProvinsi + '" readonly />' +
							'<input id="f111_lingkupArea_kode4" name="kodeProvinsi" tabindex="1" type="hidden" value="' + data.kodeProvinsi + '" readonly />' +
							'<span class="fa fa-repeat"></span>' +
						'</div>' +
					'</div>' +
					'<div class="input-box">' +
						'<input name="telp" placeholder="Telp" tabindex="2" type="text" value="' + data.noTelp + '" />' +
					'</div>' +
					'<div class="input-box">' +
						'<input name="email" placeholder="Email (*)" tabindex="2" type="text" value="' + data.email + '" />' +
					'</div>' +
					'<div class="empty-box"></div>' +
				'</div>' +
				'<div class="clearfix"></div>' +
			'</div>' +
		'</form>';
		
		body	= body + '</div></div></div>';
		content = '<section id="">' + head + body + '</section>';
		//--close
		
		//--gen
		res = (r_getCookie('TABAH_userLevel') == '1') ? 2 : 3;
		headPage.html(r_headPageHtml(res, 'Form info personal'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');
		$("#preload").remove();
		
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(46); });

		//autocomplete
		autoCompleteActivator("f111_lingkupArea", sourcesData, sourcesDetailData, "lingkupArea");

		fileBrowserActivator();
		imagePreviewActivator();
		r_navbarReactor();

		numberOnlyActivator("[name=telp], [name=rt], [name=rw]");

		//form reactor
		p_formHandler("f-user-update" , "updateData");
	});
}

function r_f4AddLingkupAreaArray(data, dataAdd){
	data.push(dataAdd); 
	
	return false;
}

function r_f4ChangeLingkupAreaArray(data, dataChange, id){
	var indexArr = data.map(function(o){ return o.idData;}).indexOf(id); 
	if(indexArr >= 0) {
		data[indexArr].noreg = dataChange.noreg; 
		data[indexArr].caption = dataChange.caption; 
		data[indexArr].references = dataChange.references; 
		data[indexArr].referencesKey = dataChange.referencesKey; 
	}
	
	return false;
}

function r_f4RemoveLingkupAreaArray(data, id){
	var indexArr = data.map(function(o){ return o.idData;}).indexOf(id); 
	if(indexArr >= 0) {
		data.splice(indexArr, 1); 
	}
	
	return false;
}

function r_f4OptionList(target){
	var res = [];
	switch(target){
		case 401 :
			if(r_getCookie('TABAH_lingkupAreaTambah') == '1' || r_getCookie('TABAH_lingkupAreaUbah') == '1'){ res.push({'selector': 'add-card', 'icon': 'plus', 'label': 'Tambah anggota'}); }
		break;

		case 42 :
		case 421: 
			if(r_getCookie('TABAH_pengaturanVerifikasiUbah') == '1'){ res.push({'selector': 'edit-card', 'icon': 'pencil', 'label': 'Ubah data'}); }
			if(r_getCookie('TABAH_pengaturanVerifikasiHapus') == '1'){ res.push({'selector': 'delete-card', 'icon': 'trash', 'label': 'Hapus data'}); }
		break;
		
		case 43 : 
		case 431:
		case 432: 
			if(r_getCookie('TABAH_pengaturanKelembagaaUbah') == '1'){ res.push({'selector': 'edit-card', 'icon': 'pencil', 'label': 'Ubah data'}); }
			if(r_getCookie('TABAH_pengaturanKelembagaaHapus') == '1'){ res.push({'selector': 'delete-card', 'icon': 'trash', 'label': 'Hapus data'}); }
		break;
	}

	return res;
}

/**/
function r_f4AddArrayList(data, dataAdd){
	data.push(dataAdd); 
	return false;
}

function r_f4ChangeArrayList(data, dataChange, id){
	var indexArr = data.map(function(o){ return o;}).indexOf(id); 
	if(indexArr >= 0) {
		data[indexArr] = dataChange; 
	}
	
	return false;
}

function r_f4RemoveArrayList(data, id){
	var indexArr = data.map(function(o){ return o;}).indexOf(id); 
	if(indexArr >= 0) {
		data.splice(indexArr, 1); 
	}
	
	return false;
}


