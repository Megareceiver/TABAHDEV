<<<<<<< HEAD
//F1 PROPOSAL
//=====================================
function r_f1Perberkasan(){
=======
//F1
//=====================================
function r_f1Pemberkasan(){
>>>>>>> 822f2b187eb42984aa144f63fb57b54c2e0be5b4
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
<<<<<<< HEAD
		part 	= ['',''];
		content = '';

		//--start
		body	= '<div class="row no-head"><div class="container">';
		part[0] = '<div class="col-md-6">';
		part[1] = '<div class="col-md-6" id="proposal-group">';
		
		part[0] = part[0] + 
		'<div class="">' +
			'<div></div>' +
		'</div>';

		//--left
		part[0] = part[0] + '</div>';
		part[1] = part[1] + '</div>';

		body	= body 	  + part[0] + part[1] + '</div></div>';
		content = '<section id="proposal">' + head + body + '</section>';
		//--close
		
		//--gen
		headPage.html(r_headPageHtml(3, 'Proposal pencairan'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');
=======
		content = '';
		data    = [];
		
		//--start
		body	= '<div class="row no-head"><div class="container">';

		body	= body + '</div></div>';
		content = '<section id="pemberkasan">' + head + body + '</section>';
		//--close
		
		//--gen
		headPage.html(r_headPageHtml(4, 'pemberkasan'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');

>>>>>>> 822f2b187eb42984aa144f63fb57b54c2e0be5b4
		$("#preload").remove();
		
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(0); });
<<<<<<< HEAD
=======
		detailBoxActivator();
>>>>>>> 822f2b187eb42984aa144f63fb57b54c2e0be5b4
		searchBoxActivator();
		r_navbarReactor();
	});
}

function r_f1DaftarProposalAwal(){
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part 	= ['',''];
		content = '';
		data    =  p_getData('f1', 'ft111', '', 'single');
		
		//-- set option list on a session
		optionBatch = ((typeof data.feedData.option != "undefined" && (data.feedData.option instanceof Array) && data.feedData.option.length > 0 ? data.feedData.option : null));
		data 		= ((typeof data.feedData.data != "undefined" && (data.feedData.data instanceof Array) && data.feedData.data.length > 0 ? data.feedData.data : null));

		//--start
		body	= '<div class="row no-head"><div class="container">';
		part[0] = '<div class="col-md-3">';
		part[1] = '<div class="col-md-8" id="proposal-list">';
		
		part[1] = part[1] + r_f1ProposalGenerator(data);

		//--left
		part[0] = part[0] + r_f1FilterForm('lingkupArea');
		part[0] = part[0] + '</div>';
		part[1] = part[1] + '</div>';

		body	= body 	  + part[0] + part[1] + '</div></div>';
		content = '<section id="proposal">' + head + body + '</section>';
		//--close
		
		//--gen
		headPage.html(r_headPageHtml(4, 'Proposal awal'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');

		$("#preload").remove();
		
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(0); });
		detailBoxActivator();
		searchBoxActivator();
		r_navbarReactor();
	});
}

function r_f1DaftarProposalPencairan(){
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part 	= ['',''];
		content = '';
		data    =  p_getData('f1', 'f');
		data 	= ((typeof data.feedData != "undefined" && (data.feedData instanceof Array) && data.feedData.length > 0 ? data.feedData : null));

		//--start
		body	= '<div class="row no-head"><div class="container">';
		part[0] = '<div class="col-md-3">';
		part[1] = '<div class="col-md-8" id="proposal-list">';
		
		part[1] = part[1] + r_f1ProposalGenerator(data);

		//--left
		part[0] = part[0] + r_f1FilterForm('lingkupArea');
		part[0] = part[0] + '</div>';
		part[1] = part[1] + '</div>';

		body	= body 	  + part[0] + part[1] + '</div></div>';
		content = '<section id="proposal">' + head + body + '</section>';
		//--close
		
		//--gen
		headPage.html(r_headPageHtml(3, 'Proposal pencairan'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');
		$("#preload").remove();
		
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(0); });
		searchBoxActivator();
		r_navbarReactor();
	});
}

function r_f1DaftarLaporan(){
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part 	= ['',''];
		content = '';
		data    =  p_getData('f1', 'f');
		data 	= ((typeof data.feedData != "undefined" && (data.feedData instanceof Array) && data.feedData.length > 0 ? data.feedData : null));

		//--start
		body	= '<div class="row no-head"><div class="container">';
		part[0] = '<div class="col-md-3">';
		part[1] = '<div class="col-md-8" id="proposal-list">';
		
		part[1] = part[1] + r_f1ProposalGenerator(data);

		//--left
		part[0] = part[0] + r_f1FilterForm('lingkupArea');
		part[0] = part[0] + '</div>';
		part[1] = part[1] + '</div>';

		body	= body 	  + part[0] + part[1] + '</div></div>';
		content = '<section id="proposal">' + head + body + '</section>';
		//--close
		
		//--gen
		headPage.html(r_headPageHtml(3, 'Daftar laporan'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');
		$("#preload").remove();
		
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(0); });
		searchBoxActivator();
		r_navbarReactor();
	});
}

function r_f1DaftarRiwayatPengajuan(){
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part 	= ['',''];
		content = '';
		data    =  p_getData('f1', 'f');
		data 	= ((typeof data.feedData != "undefined" && (data.feedData instanceof Array) && data.feedData.length > 0 ? data.feedData : null));

		//--start
		body	= '<div class="row no-head"><div class="container">';
		part[0] = '<div class="col-md-3">';
		part[1] = '<div class="col-md-8" id="proposal-list">';
		
		part[1] = part[1] + r_f1ProposalGenerator(data);

		//--left
		part[0] = part[0] + r_f1FilterForm('lingkupArea');
		part[0] = part[0] + '</div>';
		part[1] = part[1] + '</div>';

		body	= body 	  + part[0] + part[1] + '</div></div>';
		content = '<section id="proposal">' + head + body + '</section>';
		//--close
		
		//--gen
		headPage.html(r_headPageHtml(3, 'Riwayat pengajuan'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');
		$("#preload").remove();
		
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(0); });
		searchBoxActivator();
		r_navbarReactor();
	});
}

function r_f1DaftarRiwayatPencairan(){
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part 	= ['',''];
		content = '';
		data    =  p_getData('f1', 'f');
		data 	= ((typeof data.feedData != "undefined" && (data.feedData instanceof Array) && data.feedData.length > 0 ? data.feedData : null));

		//--start
		body	= '<div class="row no-head"><div class="container">';
		part[0] = '<div class="col-md-3">';
		part[1] = '<div class="col-md-8" id="proposal-list">';
		
		part[1] = part[1] + r_f1ProposalGenerator(data);

		//--left
		part[0] = part[0] + r_f1FilterForm('lingkupArea');
		part[0] = part[0] + '</div>';
		part[1] = part[1] + '</div>';

		body	= body 	  + part[0] + part[1] + '</div></div>';
		content = '<section id="proposal">' + head + body + '</section>';
		//--close
		
		//--gen
		headPage.html(r_headPageHtml(3, 'Riwayat pencairan'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');
		$("#preload").remove();
		
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(0); });
		searchBoxActivator();
		r_navbarReactor();
	});
}

function r_f1ProposalGenerator(data = null){
	var genHtml 	= "";
	var expandHtml 	= "";
	var breakHtml 	= "";
	if(data != null){
		for(var loop = 0; loop < data.length; loop++){	
			if(loop > 0){ breakHtml = "plus"; }
			expandHtml = '<span class="btn-collapse">Lihat semua</span>'; 

			//--group
			genHtml = genHtml +
			'<div class="cards-label ' + breakHtml + '">' +
				'<p>' +
					'<strong> Proposal (' + data.length + ')</strong>' +
					expandHtml +
				'</p>' +
			'</div>';

			genHtml  = genHtml +
			'<div id="proposal-' + data[loop].idData + '" class="cards clear">' +
				'<div class="description-box">' +
					'<div class="click-frame">' +
						'<div class="icon-set bg-sky"><span class="fa fa-file-text-o"></span></div>' +
						'<p class="title-set">' + data[loop].namaLembaga + '</p>' +
						'<div class="text-set">' +
							'<span class="id-set">' + data[loop].noRegistrasi + '</span>' +
							'<span class="desc-text">' + data[loop].nominal + '</span>' +
						'</div>' +
					'</div>' +
					'<button type="button" class="click-option btn-set" ' + 
						'p-label		="' + data[loop].namaLembaga + '"' + 
						'p-id			="' + data[loop].idData + '"' +
						'p-group		="f1"' + 
						'p-target		="f111"' +
						'p-container	="proposal-' + data[loop].idData + '">' +
					'<span class="fa fa-ellipsis-v"></span></button>' +
				'</div>' +
				'<div class="detail-box">' +
					'<div class="row">' +
						'<div class="col-md-6">' +
							'<div class="list-box">' +
								'<div class="list-icon"><span class="fa fa-phone"></span></div>' +
								'<p class="list-text">' + data[loop].noTelp + '</p>' +
							'</div>' +
							'<div class="list-box">' +
								'<div class="list-icon"><span class="fa fa-envelope"></span></div>' +
								'<p class="list-text">' + data[loop].email + '</p>' +
							'</div>' +
							'<div class="list-box">' +
								'<div class="list-icon"><span class="fa fa-map-marker"></span></div>' +
								'<p class="list-text">' + data[loop].alamat + '</p>' +
							'</div>' +
						'</div>' +
						'<div class="col-md-6">' +
							'<div class="list-box">' +
								'<div class="list-icon"><span class="fa fa-flag"></span></div>' +
								'<p class="list-text">' + data[loop].tujuan + '</p>' +
							'</div>' +
							'<div class="list-box">' +
								'<div class="list-icon"><span class="fa fa-tag"></span></div>' +
								'<p class="list-text">' + data[loop].latarBelakang + '</p>' +
							'</div>' +
							'<div class="list-box">' +
								'<div class="list-icon"><span class="fa fa-money"></span></div>' +
								'<p class="list-text">' + data[loop].nominal + '</p>' +
							'</div>' +
						'</div>' +
						'<div class="clearfix"></div>' +
						'<div class="col-md-6">' +
							'<div class="list-box">' +
								'<div class="list-icon"><span class="fa fa-files-o"></span></div>' +
								'<p class="list-text text-purple">Belum ada berkas</p>' +
							'</div>' +
						'</div>' +
					'</div>' +
					'<div class="list-box foot">' +
						'<button type="button" class="clear list-text btn-link detail-click" p-id="">Lihat selengkapnya</button>' +
					'</div>' +
				'</div>' +
			'</div>';
		}
	}else{
		genHtml = genHtml +
		'<div class="cards">' +
			'<div class="cards-header">' +
				'<p class="fixed offset text-black">Data tidak ditemukan.</p>' +
			'</div>' +
		'</div>';
	}

	r_f1ProposalEventActivator();

	return genHtml;
}

function r_f1ProposalEventActivator(){
	$("body").on("click", ".click-option", function(){ 
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
		//-- popup
		// $("#view-card").unbind().on("click", function(){ hideOptionList(); r_navigateTo(12, pId); });
		// $("#verification-card").unbind().on("click", function(){ hideOptionList(); r_navigateTo(13, pId); });
		// $("#edit-card").unbind().on("click", function(){ hideOptionList(); r_tabSet(1); r_navigateTo(15, pId); });
		// $("#delete-card").unbind().on("click", function(){ 
		// 	hideOptionList(); 
		// 	showOptionConfirm('delete');
		// 	$(".option-yes").unbind().on("click", function(){ 
		// 		hideOptionList(); 
		// 		if(p_removeData(pGroup, pTarget, pId) == 'success'){ 
		// 			$('#' + pContainer).remove(); 
		// 			lembagaCounter = lembagaCounter - 1;
		// 			if(lembagaCounter <= 0){
		// 				$(".cards-label").remove();
		// 				//$("#lembaga-list").append(r_f1LembagaGenerator([{"lembaga" : null}]));
		// 			}
		// 			clearPacket();
		// 		}; 
		// 	});
		// });
	});
}

function r_f1FilterForm(type){
	var html = "";
	switch(type){
		case "lingkupArea":
			html = 
			'<form id="f-filter-select">' +
				'<div class="cards">' +
					'<div class="cards-header">' +
						'<p class="fixed offset">Filter lembaga</p>' +
						'<div class="btn-collapse right">' +
							'<button class="clear" type="reset"><span class="fa fa-refresh"></span></button>' +
							'<button class="clear" type="submit"><span class="fa fa-filter text-yellow"></span></button>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="cards flush">' +
					'<div class="select-box">' +
						'<select id="filter-provinsi">' +
							'<option value="" selected>Provinsi</option>' +
							r_optionDHtml('provinsi') +
						'</select>' +
					'</div>' +
					'<div class="select-box">' +
						'<select id="filter-wilayah">' +
							'<option value="" selected>Wilayah</option>' +
							r_optionDHtml('wilayah') +
						'</select>' +
					'</div>' +
					'<div class="select-box">' +
						'<select id="filter-kecamatan">' +
							'<option value="" selected>Kecamatan</option>' +
							r_optionDHtml('kecamatan') +
						'</select>' +
					'</div>' +
					'<div class="select-box">' +
						'<select id="filter-kelurahan">' +
							'<option value="" selected>Kelurahan</option>' +
							r_optionDHtml('kelurahan') +
						'</select>' +
					'</div>' +
					'<div class="space-box"></div>' +
				'</div>' +
			'</form>';
		break;
	}

	return html;
}

function r_f1FormProposal(packet){
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  		= '';
		body  		= '';
		part		= ['',''];
		content 	= '';
		data 		= [];
		selectItems = [];
		dataHead	= [
			{'idFilter': '1', 'form':'Tujuan'},
			{'idFilter': '2', 'form':'RAB'},
			{'idFilter': '3', 'form':'Persyaratan'},
		];

		//Cookie set
		if(packet == undefined || packet == "" || packet == null || packet == "start"){
			packet = profile_look_reader();
		}

		profile_look_set(packet);
	
		dataGrup = [];
		dataTemp = [];
		dataAllLembaga = [];
		dataLegalitas = [];
		kodeBentukLembaga = "";

		//-- get kode bentuk lembaga for legalitas
		var bentukLembaga = r_bentukLembagaReader();
		dataLegalitas = p_getData('f1','f1114','',bentukLembaga[0]);
		if(dataLegalitas != null){ 
			dataLegalitas = dataLegalitas.feedData;
		}else{
			dataLegalitas.feedData = null;
		}
		//-- get data koleksi
		dataKoleksi = p_getData('f1', 'f117','');

		//option list 
		optionBatch = [
			{'selector': 'edit-card', 			'icon': 'pencil', 'label': 'Ubah data'},
			{'selector': 'delete-card', 		'icon': 'trash',  'label': 'Hapus data'},
		]; 

		//--open
		head	= 
		'<div class="row head">' +
			'<div class="container">' +
				'<div class="col-md-8 col-md-offset-2">' +
					'<div class="tab-header">' +
						'<ul>';
		
		for(var loop = 0; loop < dataHead.length; loop++){
			head = head + '<li class="tab-navigator" tab-headIndex="' + dataHead[loop].idFilter + '">' + dataHead[loop].form + '</li>';
			state = "";
		}
		
		head = head +
						'</ul>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>';
		
		//open
		body =  '<div class="row no-head"><div class="container">';
		
		// KELEMBAGAAN =======================================================================
		//=======================================================================
		//=======================================================================
		body = body + '<div class="col-md-8 col-md-offset-2 tab-container" tab-contentIndex="1">';
		body = body + 
		'<form id="f-proposal-create" f-group = "f1" f-target = "f111">' +
			'<div class="cards title">' +
				'<div class="cards-header">' +
					'<h4>Proposal</h4>' +
					'<p class="offset">Keperluan sistem untuk mengelola proposal.</p>' +
					'<p class="offset"><small>(*) <i>Mandatory atau kolom yang wajib diisi.</i>.</small></p>' +
					'<div class="btn-collapse right">' +
						'<button class="clear" type="reset"><span class="fa fa-refresh"></span></button>' +
						'<button class="clear" type="submit"><span class="fa fa-check-circle-o"></span></button>' +
					'</div>' +
				'</div>' +
			'</div>' +
			'<div class="cards flush">' +
				'<div class="row default">';
		
		//left
		body = body + 
		'<div class="col-md-12">' +
			'<div class="input-box">' +
				'<input name="tujuan" placeholder="Tujuan (*)" tabindex="1" type="text" value="" />' +
			'</div>' +
			'<div class="input-box rows-2">' +
				'<textarea name="alamat" placeholder="Latar belakang pengajuan (*)" tabindex="1" class="rows-2"></textarea>' +
			'</div>' +
		'</div>' +

		'<div class="col-md-6">' +
			'<div class="input-box">' +
				'<input name="nominal" terbilang-name="nominal_terbilang" placeholder="Nominal pengajuan (*)" tabindex="2" type="text" value="" />' +
			'</div>' +
		'</div>' +
		'<div class="col-md-12">' +
			'<div class="input-box">' +
				'<p><i name="nominal_terbilang"></i></p>' +
			'</div>' +
		'</div>' +
		'<div class="col-md-12">' +
			'<div class="input-box">' +
				'<div class="icon-box both">' +
					'<label class="browser-box" id="v-proposal">' +
						'<p class="placeholder" name="imageName">berkas belum diunggah...</p>' +
						'<input preview-id="v-proposal" name="imageUrl" type="file" accept="application/pdf" tabindex="5" />' +
						'<input browser-state="fileState" name="fileState" type="hidden" tabindex="1" value="add" />' +
					'</label>' +
					'<button type="button" browser-id="v-proposal" class="browser-clear clear"><i class="fa fa-times-circle"></i></button>' +
					'<span class="left fa fa-paperclip text-purple"></span>' +
				'</div>' +
			'</div>' +
		'</div>';
		
		//right
		body = body + 
		'</form>'+
		'<div class="clearfix">&nbsp;</div>';
		body = body + '</div></div></div>';
		body = body + '<div class="clearfix tab-container" tab-contentIndex="1">&nbsp;</div>';
		
		
		// LEGALITAS =======================================================================
		//=======================================================================
		//=======================================================================
		body = body + 
		'<!--div class="col-md-12 tab-container" tab-contentIndex="3">' +
			'<div class="cards-label">' +
				'<p><strong>Legalitas (3)</strong></p>' +
			'</div>' +
		'</div-->';
		
		//render
		body = body + '<div class="col-md-8 col-md-offset-2 tab-container" tab-contentIndex="3" id="legalitas-frame"><div class="row default">';

		body = body + '</div></div>';
		body = body + '<div class="clearfix tab-container"  tab-contentIndex="3">&nbsp;</div>';
		
		// SEJARAH =======================================================================
		//=======================================================================
		//=======================================================================
		body = body + '<div class="col-md-8 col-md-offset-2 tab-container" tab-contentIndex="2">';
		body = body +
		'<form id="f-sejarah-create" f-group = "f1" f-target = "f112">'+
			'<div class="cards">' +
				'<div class="cards-header">' +
					'<h4>RAB</h4>' +
					'<p class="offset">Detail anggaran rencana untuk diajukan (Rp).</p>' +
					'<div class="btn-collapse right">' +
						'<button class="clear" type="reset"><span class="fa fa-refresh"></span></button>' +
						'<button class="clear" type="submit"><span class="fa fa-check-circle-o"></span></button>' +
					'</div>' +
				'</div>' +
			'</div>' +
			'<div class="cards">' +
				'<div class="cards-header">' +
					'<h4>Total anggaran</h4>' +
					'<h3>1.000.000</h3>' +
				'</div>' +
				'<div class="summary-box">' +
					'<div class="caption">' + 
						'<span>terbilang</span>' +
					'</div>' +
					'<div class="counter-block"><i>Satu juta rupiah</i></div>' + 
				'</div>' +
			'</div>' +
			'<div class="cards flush">' +
				'<div class="row default">' +
					'<div class="col-md-6">' +
						'<div class="input-box">' +
							'<input name="noreg" tabindex="1" type="hidden" value="" />' +
							'<input name="uraian" placeholder="Uraian (*)" tabindex="1" type="text" value="" />' +
						'</div>' +
						'<div class="input-box">' +
							'<input name="satuan" placeholder="Satuan (*)" tabindex="1" type="text" value="" />' +
						'</div>' +
					'</div>' +
					'<div class="col-md-6">' +
						'<div class="input-box">' +
							'<input name="volume" placeholder="Volume (*)" tabindex="1" type="text" value="" />' +
						'</div>' +
						'<div class="input-box">' +
							'<input name="harga" placeholder="Harga satuan (*)" tabindex="1" type="text" value="" />' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>';
			
		//right
		body = body +
		'</form>'+
		'<div class="clearfix">&nbsp;</div>';

		body = body + '</div>';
		

		body = body + '<div id="section-bantuan">';
		body = body + '</div></div>';
		body = body + '<div class="clearfix tab-container" tab-contentIndex="2">&nbsp;</div>';

		//--
		// CLOSING
		//=====================================================================================
		body	= body + '</div></div>';
		content = '<section id="">' + head + body + '</section>';
		//--close
		
		//--gen
		var temp = 3;
		if(String(r_getCookie('TABAH_userLevel')) == '1'){ temp = 2; }
		headPage.html(r_headPageHtml(temp, 'Form proposal'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');
		r_f1legaitasGenerator(dataLegalitas); //generate legalitas form
		$("#preload").remove();
		
		//--command reactor
		navito = ((String(r_getCookie('TABAH_userLevel')) == '1') ? 12 : 1);
		$(".back-button").unbind().on('click', function(){ r_navigateTo(navito); });
		
		// $(".reset").unbind().on('click', function(){ clearTargetForm('f-kelembagaan-create'); });
		/*tab reader*/
		if(r_tabReader() == null){
			r_tabSet(1);
			$('[tab-headIndex = "1"]').addClass('active');
			$('[tab-contentIndex = "1"]').addClass('active');
		}else{
			$('[tab-headIndex = "' + r_tabReader() + '"]').addClass('active');
			$('[tab-contentIndex = "' + r_tabReader() + '"]').addClass('active');
		}

		tabActivator();
		datePickerActivator();
		fileBrowserActivator();
		imagePreviewActivator();
		r_navbarReactor();
		autoCompleteActivator("f111_lingkupArea", sourcesData, sourcesDetailData, "lingkupArea");
		autoCompleteActivator("f114_lingkupArea", sourcesData, sourcesDetailData, "lingkupArea");
		autoCompleteActivator("hirarkiLembaga", dataAllLembaga[0], dataAllLembaga, "hirarkiLembaga");

		//form reactor
		p_formHandler("f-kelembagaan-create" , "addData");
		p_formHandler("f-sejarah-create" , "addData");
		p_formHandler("f-bantuan-create" , "addData");
		p_formHandler("f-kepengurusan-create" , "addData");
		p_formHandler("f-kegiatanUsaha-create" , "addData");
		p_formHandler("f-koleksi-create" , "addData");
		p_formHandler("f-prestasi-create" , "addData");
		p_formHandler("f-hirarki-create" , "addData");

		for(loop=0; loop<maxForm; loop++){
			p_formHandler("f-sarana-create-" + loop , "addData");
			p_formHandler("f-usaha-create-" + loop , "addData");

			$('#f-sarana-create-' + loop + " [type=reset]").unbind().on("click", function(e){
				e.preventDefault(); 
				if($("#" + $(this).attr('p-container') + " [name=p-id]").val() != ""){
					showOptionConfirm('delete');
					clearPacket();
					pContainer		= $(this).attr('p-container');
					pGroup 			= $(this).attr('p-group');
					pTarget			= $(this).attr('p-target')
					pId				= $("#" + pContainer + " [name=p-id]").val();
					pLabel			= $(this).attr('p-label');
					pReferencesKey	= $("#" + pContainer + " [name=noreg]").val();
					$(".option-yes").unbind().on("click", function(){ 
						hideOptionList(); 
						if(p_removeData(pGroup, pTarget, pId, pReferencesKey) == 'success'){ 
							$("#" + pContainer + " [browser-id=v-sarana" + pLabel + "]").css('display', 'none'); 
							$("#" + pContainer + " [viewer-id=v-sarana" + pLabel + "]").removeClass('changed');
							$("#" + pContainer + " [viewer-id=v-sarana" + pLabel + "]").attr('src', "img/sources/picture.png");
							$("#" + pContainer + " [name=imageName]").html("berkas belum diunggah...");
							p_formHandler(pContainer , "addData");
							clearTargetFormNoreg(pContainer, $('#' + pContainer + ' [name="noreg"]').val());
							clearPacket();
						}; 
					});
				}
			});

			$('#f-usaha-create-' + loop + " [type=reset]").unbind().on("click", function(e){
				e.preventDefault(); 
				if($("#" + $(this).attr('p-container') + " [name=p-id]").val() != ""){
					showOptionConfirm('delete');
					clearPacket();
					pContainer		= $(this).attr('p-container');
					pGroup 			= $(this).attr('p-group');
					pTarget			= $(this).attr('p-target')
					pId				= $("#" + pContainer + " [name=p-id]").val();
					pLabel			= $(this).attr('p-label');
					pReferencesKey	= $("#" + pContainer + " [name=noreg]").val();
					$(".option-yes").unbind().on("click", function(){ 
						hideOptionList(); 
						if(p_removeData(pGroup, pTarget, pId, pReferencesKey) == 'success'){ 
							$("#" + pContainer + " [browser-id=v-usaha" + pLabel + "]").css('display', 'none'); 
							$("#" + pContainer + " [viewer-id=v-usaha" + pLabel + "]").removeClass('changed');
							$("#" + pContainer + " [viewer-id=v-usaha" + pLabel + "]").attr('src', "img/sources/picture.png");
							$("#" + pContainer + " [name=imageName]").html("berkas belum diunggah...");
							p_formHandler(pContainer , "addData");
							clearTargetFormNoreg(pContainer, $('#' + pContainer + ' [name="noreg"]').val());
							clearPacket();
						}; 
					});
				}
			});

			currencyFormatActivator("[name=nominal]");
		}
		//generate data for editing
		if(packet != "" && packet != null){ r_f1FormKelembagaanDataGenerator(packet); }		
		// r_f1FormKelembagaanDataGenerator('00030200110');		
		//$("input[name=noreg]").val('00030200110');
	});
}


//F1 DETAIL LEMBAGA
//=====================================
function r_f1DetailLembaga(packet) { 
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part	= ['',''];
		content = '';
	
		if(packet == undefined || packet == "" || packet == null || packet == "start"){
			packet = profile_look_reader();
		}

		profile_look_set(packet);
		
		//data = p_getData('f1', 'f1111', '', '12121300001');
		data = p_getData('f1', 'f1111', '', packet);
		data = data.feedData;
		
		//-- set option list on a session
		if(data != null && data.option != undefined){
			optionBatch = data.option;
		}else{
			r_navigateTo(99); return false;
		}
		
		//--open
		head	= '';
		body	= '<div class="row no-head"><div class="container">';
		part[0] = '<div class="col-md-3">';
		part[1] = '<div class="col-md-9">';
		
		//--left
		if(data.profile[0] != null){
			var temPic = "";
			temPic = (data.profile[0].avatar != "") ? 'img/logo/' + data.profile[0].avatar : 'img/logo/avatar-5.jpg';
			part[0] = part[0] +
			'<div class="cards clear">' +
				'<div class="cards-banner-blank long smalltron-ground">' +
					'<div class="user-frame">' +
						'<img src="' + temPic + '">' +
						'<p class="caption">' +
							'<span class="big">' + data.profile[0].nama + '</span>' +
							'<span>Yayasan</span>' +
						'</p>' +
						'<button class="btn-option btn-default click-option" ' + 
							'p-group		="f1"' + 
							'p-target		="f111"' +
							'p-id="' + data.profile[0].noreg + '" p-label="' + data.profile[0].nama + '"><i class="fa fa-ellipsis-h"></i></button>' +
					'</div>' +
				'</div>' +
			'</div>' +
			'<div class="cards flush">' +
				'<div class="desc-frame">' +
					'<div class="desc-box flush">' +
						'<p class="text-set">' + data.profile[0].catatan + '</p>' +
					'</div>' +
					'<div class="desc-box i-left">' +
						'<div class="icon-set"><span class="fa fa-phone"></span></div>' +
						'<p class="text-set">' + data.profile[0].telp + '</p>' +
					'</div>' +
					'<div class="desc-box i-left">' +
						'<div class="icon-set"><span class="fa fa-envelope"></span></div>' +
						'<p class="text-set">' + data.profile[0].email + '</p>' +
					'</div>' +
					'<div class="desc-box i-left">' +
						'<div class="icon-set"><span class="fa fa-globe"></span></div>' +
						'<p class="text-set">' + data.profile[0].sosialMedia + '</p>' +
					'</div>' +
					'<div class="desc-box i-left">' +
						'<div class="icon-set"><span class="fa fa-map-marker"></span></div>' +
						'<p class="text-set">' + data.profile[0].alamat + '</p>' +
					'</div>' +
					'<div class="desc-box i-left">' +
						'<p class="text-set"><span class="text-cyan click" id="go-maps" m-lng="' + data.profile[0].langitude + '" m-lat="' + data.profile[0].latitude + '">Lihat maps</span></p>' +
					'</div>' +
				'</div>' +
			'</div>';
				
			//--render data
			for(var loop = 0; loop < data.detail.length; loop++){
				//--right
				if(data.detail[loop].group == 'card'){
					part[1] = part[1] +
					'<div class="cards">' +
						'<div class="cards-header">' +
							'<p class="fixed">' + data.detail[loop].groupName + '</p>' +
							'<div class="btn-collapse right">' +
								'<button class="toggle-click clear" toggle-target="' + data.detail[loop].groupId+ '-group" type="button"><span class="fa fa-chevron-down"></span></button>' +
							'</div>' +
						'</div>' +
					'</div>';
					
					var endLoopY = 0;
					switch(data.detail[loop].type){
						case 'table'		: part[1] = part[1] + '<div class="cards flush toggle-content ' + data.detail[loop].groupId + '-group">' + '<div class="desc-frame">';  endLoopY = data.detail[loop].items.length; break;
						case 'list'			: part[1] = part[1] + '<div class="cards flush toggle-content ' + data.detail[loop].groupId + '-group">' + '<div class="row">'; endLoopY = data.detail[loop].items.length; break;
						case 'table-list'	: part[1] = part[1] + '<div class="cards flush toggle-content ' + data.detail[loop].groupId + '-group">' + '<div class="row default">'; endLoopY = data.detail[loop].items[0].set.length;  break;
					}
					
					
					for(var loopY = 0; loopY < endLoopY; loopY++){	
						switch(data.detail[loop].type){
							case 'table'	:
								part[1] = part[1] +
								'<div class="desc-box">' +
									'<div class="labels"><p class="text-set">' + data.detail[loop].items[loopY].label + '</p></div>' +
									'<div class="divider"><p class="text-set">' + data.detail[loop].items[loopY].text + '</p></div>' +
								'</div>';
							break;
							case 'list'	:
								part[1] = part[1] +
								'<div class="list-box">' +
									'<div class="list-icon bg-' + data.detail[loop].items[loopY].color + '"><span class="fa fa-' + data.detail[loop].items[loopY].icon + '"></span></div>' +
									'<p class="list-text">' + data.detail[loop].items[loopY].text + '</p>' +
								'</div>';
							break;
							case 'table-list'	:
									 if(data.detail[loop].items[0].set[loopY].size == "large") { part[1] = part[1] + '<div class="col-md-4">'; }
								else if(data.detail[loop].items[0].set[loopY].size == "medium"){ part[1] = part[1] + '<div class="col-md-3">'; }
								else if(data.detail[loop].items[0].set[loopY].size == "small") { part[1] = part[1] + '<div class="col-md-2">'; }
								
								var classAdd = "";
								if(loopY > 0){ classAdd = "clear"; }
								part[1] = part[1] +
								'<div class="list-box ' + classAdd + '">';
								
								if(data.detail[loop].items[0].set[loopY].form == "text-icon"){ 
									part[1] = part[1] +
									'<div class="list-icon bg-' + data.detail[loop].items[0].set[loopY].color + '"><span class="fa fa-' + data.detail[loop].items[0].set[loopY].icon + '"></span></div>' +
									'<p class="list-text"><strong>' + data.detail[loop].items[0].set[loopY].text + '</strong></p>';
								}else if(data.detail[loop].items[0].set[loopY].form == "text"){
									part[1] = part[1] +
									'<p class="list-text">' + data.detail[loop].items[0].set[loopY].text + '</p>';
								}else if(data.detail[loop].items[0].set[loopY].form == "button"){
									part[1] = part[1] +
									'<button type="button" class="clear list-text btn-link">' + data.detail[loop].items[0].set[loopY].text + '</button>';
								}
								
								part[1] = part[1] + 
									'</div>' +
								'</div>';
							break;
						}
					}
					
					part[1] = part[1] +
						'</div>' +
					'</div>';
					
				}else if(data.detail[loop].group == "img-viewer"){
					part[1] = part[1] +
					'<div class="cards-label plus">' +
						'<p>' +
							'<strong>' + data.detail[loop].groupName + ' (' + data.detail[loop].items.length + ')</strong>' +
						'</p>' +
					'</div>' +
					'<div class="row default">';
					for(var loopY = 0; loopY < data.detail[loop].items.length; loopY++){
						var size = "";
						if(
							   data.detail[loop].items[loopY].picture != "saranaPrasarana/picture.png"
							&& data.detail[loop].items[loopY].picture != "usaha/picture.png"){
							size = "changed";
						}	

						part[1] = part[1] +
						'<div class="col-md-3">' +
							'<div class="tumb-cards">' +
								'<div class="picture-box">' +
									'<img class="pic-default ' + size + '" src="img/' + data.detail[loop].items[loopY].picture + '" />' +
								'</div>' +
								'<div class="desc-box">' +
									'<p>' + data.detail[loop].items[loopY].desc + '</p>' +
								'</div>' +
							'</div>' +
						'</div>';
					}
					part[1] = part[1] + '</div>';
				}	
			}

		}else{
			part[1] = part[1] + 
			'<div class="cards">' +
				'<div class="cards-header">' +
					'<p class="fixed offset text-black">Data tidak ditemukan.</p>' +
				'</div>' +
			'</div>';
		}
		
		part[0] = part[0] + '</div>';
		part[1] = part[1] + '</div>';
		body	= body 	  + part[0] + part[1] + '</div></div>';
		content = '<section id="kelembagaan">' + head + body + '</section>';
		//--close
		
		//--gen
		var temp = 3;
		if(String(r_getCookie('TABAH_userLevel')) == '1'){ temp = 0; }
		headPage.html(r_headPageHtml(temp, 'Profil lembaga'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');
		$("#preload").remove();
		
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(r_pagePreviousReader()); });
		$(".click-option").unbind().on("click", function(){ 
			//packet session
			clearPacket();
			pGroup 			= $(this).attr('p-group');
			pTarget			= $(this).attr('p-target');
			pId				= $(this).attr('p-id');
			pLabel			= $(this).attr('p-label');
			showOptionList(); 

			//-- popup
			$("#verification-card").unbind().on("click", function(){ hideOptionList(); r_navigateTo(13, $(this).attr('p-id')); });
			$("#user-card").unbind().on("click", function(){ hideOptionList(); r_navigateTo(46); });
			$("#edit-card").unbind().on("click", function(){ hideOptionList(); r_pageSet(1); r_navigateTo(15, $(this).attr('p-id')); });
			$("#delete-card").unbind().on("click", function(){ 
				hideOptionList(); 
				showOptionConfirm('delete');
				$(".option-yes").unbind().on("click", function(){ 
					hideOptionList(); 
					if(p_removeData(pGroup, pTarget, pId) == 'success'){ 
						r_navigateTo(r_pagePreviousReader());
					}; 
				});
			});

			$("#logout-card").unbind().on("click", function(){ hideOptionList(); r_clearCookies(); r_navigateTo(); });
		});

		$("#go-maps").unbind().on("click", function(){ 
			openMaps($(this).attr('m-lng'),$(this).attr('m-lat'));
		});

		toggleBoxActivator();
		r_navbarReactor();
	});
}

//F1 FORM KELEMBAGAAN


function r_f1FormKelembagaanDataGenerator(packet){
	
	data = p_getData('f1', 'f1112', '', packet);
	data = data.feedData;

	//kelembagaan
	var bentukLembaga = r_bentukLembagaReader();
	var tex = '<option value="' + data.kelembagaan.kodeBentukLembaga + '" selected>' + data.kelembagaan.namaBentukLembaga + '</option>';
	$("#f-kelembagaan-create [name=bentukLembaga]").html('').append(tex);

	$("#f-kelembagaan-create [name=noreg]").val(data.kelembagaan.noRegistrasi);
	$("#f-kelembagaan-create [name=nama]").val(data.kelembagaan.nama);
	$("#f-kelembagaan-create [name=alamat]").val(data.kelembagaan.alamat);
	$("#f-kelembagaan-create [name=rt]").val(data.kelembagaan.noRt);
	$("#f-kelembagaan-create [name=rw]").val(data.kelembagaan.noRw);
	$("#f-kelembagaan-create [name=kelurahan]").val(data.kelembagaan.namaKelurahan);
	$("#f-kelembagaan-create [name=kodeKelurahan]").val(data.kelembagaan.kodeKelurahan);
	$("#f-kelembagaan-create [name=kecamatan]").val(data.kelembagaan.namaKecamatan);
	$("#f-kelembagaan-create [name=kodeKecamatan]").val(data.kelembagaan.kodeKecamatan);
	$("#f-kelembagaan-create [name=wilayah]").val(data.kelembagaan.namaWilayah);
	$("#f-kelembagaan-create [name=kodeWilayah]").val(data.kelembagaan.kodeWilayah);
	$("#f-kelembagaan-create [name=provinsi]").val(data.kelembagaan.namaProvinsi);
	$("#f-kelembagaan-create [name=kodeProvinsi]").val(data.kelembagaan.kodeProvinsi);
	$("#f-kelembagaan-create [name=telp]").val(data.kelembagaan.noTelp);
	$("#f-kelembagaan-create [name=email]").val(data.kelembagaan.email);
	$("#f-kelembagaan-create [name=langitude]").val(data.kelembagaan.langitude);
	$("#f-kelembagaan-create [name=latitude]").val(data.kelembagaan.latitude);
	$("#f-kelembagaan-create [name=medsos]").val(data.kelembagaan.mediaSosial);
	$("#f-kelembagaan-create [name=bentukLembaga]").val(data.kelembagaan.kodeBentukLembaga);
	$("#f-kelembagaan-create [name=bidangGerak]").val(data.kelembagaan.kodeBidangGerak);
	$("#f-kelembagaan-create [name=jumlahPengurus]").val(data.kelembagaan.jumlahPengurus);
	$("#f-kelembagaan-create [name=npwp]").val(data.kelembagaan.noNpwp);
	$("#f-kelembagaan-create [name=afiliasi]").val(data.kelembagaan.noNpwp);
	$("#f-kelembagaan-create [name=visi]").val(data.kelembagaan.visiLembaga);
	$("#f-kelembagaan-create [name=misi]").val(data.kelembagaan.misiLembaga);
	$("#f-kelembagaan-create [viewer-id=v-logo]").attr('src',(data.kelembagaan.urlGambarLogo != "" && data.kelembagaan.urlGambarLogo != null) ? 'img/logo/'+data.kelembagaan.urlGambarLogo : "img/sources/picture.png");
	$("#f-kelembagaan-create [name=imageName]").html((data.kelembagaan.urlGambarLogo != "" && data.kelembagaan.urlGambarLogo != null) ? data.kelembagaan.urlGambarLogo : "berkas belum diunggah...");
	$("#f-kelembagaan-create [name=catatan]").val(data.kelembagaan.catatanLain);

	$("#f-kelembagaan-create [name=kelurahan]").attr('readonly', 'readonly');
	if(data.kelembagaan.urlGambarLogo != "" && data.kelembagaan.urlGambarLogo != null){ 
		$("[viewer-id=v-logo]").removeClass('changed').addClass('changed'); 
		$("[browser-id=v-logo]").css('display', 'block'); 
	}

	//legalitas
	$(".f-legalitas-create [name=noreg]").val(data.kelembagaan.noRegistrasi);
	r_f1legaitasGenerator(data.legalitas);

	//sejarah
	$("#f-sejarah-create [name=noreg]").val(data.kelembagaan.noRegistrasi);
	$("#f-sejarah-create [name=sejarah]").val(data.sejarah.deskripsi);
	$("#f-sejarah-create [name=tanggalBerdiri]").val(data.sejarah.tanggalDidirikan);
	$("#f-sejarah-create [name=kepemilikan]").val(data.sejarah.kepemilikan);
	$("#f-sejarah-create [name=statusTanah]").val(data.sejarah.statusTanah);
	$("#f-sejarah-create [name=sertifikasi]").val((data.sejarah.statusSertifikasi != "" && data.sejarah.statusSertifikasi != null) ? data.sejarah.statusSertifikasi : "Belum");
	$("#f-sejarah-create [name=luasTanah]").val(data.sejarah.luasTanah);
	$("#f-sejarah-create [name=satuanT]").val(data.sejarah.satuanLuasTanah);
	$("#f-sejarah-create [name=luasBangun]").val(data.sejarah.luasBangunan);
	$("#f-sejarah-create [name=satuanB]").val(data.sejarah.satuanLuasBangunan);
	$("#f-sejarah-create [name=kondisiBangunan]").val((data.sejarah.kondisiBangunan != "" && data.sejarah.kondisiBangunan != null) ? data.sejarah.kondisiBangunan : "Baik");
	$("#f-sejarah-create [name=saranaPrasarana]").val((data.sejarah.statusSarana != "" && data.sejarah.statusSarana != null) ? data.sejarah.statusSarana : "Tidak ada");
	$("#f-sejarah-create [name=imageName]").html((data.sejarah.urlGambarStrukturKepengurusan != "") ? data.sejarah.urlGambarStrukturKepengurusan : "berkas belum diunggah...");
	$("#f-sejarah-create [name=imageUrl]").val("");
	$("#f-sejarah-create [name=bahasa]").val(data.sejarah.bahasaPengantar);
	$("#f-sejarah-create [name=sensus]").val((data.sejarah.statusSensus != "" && data.sejarah.statusSensus != null) ? data.sejarah.statusSensus : "Belum");
	$("#f-sejarah-create [name=bantuan]").val((data.sejarah.statusBantuanPemerintah != "" && data.sejarah.statusBantuanPemerintah != null) ? data.sejarah.statusBantuanPemerintah : "Belum");
	$("#f-sejarah-create [name=kondisiGeo]").val(data.sejarah.kondisiGeografis);
	$("#f-sejarah-create [name=potensi]").val(data.sejarah.potensiWilayah);
	$("#f-sejarah-create [name=jenisWilayah]").val(data.sejarah.jenisWilayah);
	$("#f-sejarah-create [name=catatan]").val(data.sejarah.catatanLain);

	if(data.sejarah.length > 0 && data.sejarah.urlGambarStrukturKepengurusan != ""){ 
		$("[browser-id=s-org]").css('display', 'block'); 
	}

	//kepengurusan
	$("#f-kepengurusan-create [name=noreg]").val(data.kelembagaan.noRegistrasi);
	$("#f-kepengurusan-create [name=penanggungJawab]").val(data.kepengurusan.penanggungJawab);
	$("#f-kepengurusan-create [name=alamat]").val(data.kepengurusan.alamat);
	$("#f-kepengurusan-create [name=rt]").val(data.kepengurusan.noRt);
	$("#f-kepengurusan-create [name=rw]").val(data.kepengurusan.noRw);
	$("#f-kepengurusan-create [name=kodeKelurahan]").val(data.kepengurusan.kodeKelurahan);
	$("#f-kepengurusan-create [name=kelurahan]").val(data.kepengurusan.namaKelurahan);
	$("#f-kepengurusan-create [name=kodeKecamatan]").val(data.kepengurusan.kodeKecamatan);
	$("#f-kepengurusan-create [name=kecamatan]").val(data.kepengurusan.namaKecamatan);
	$("#f-kepengurusan-create [name=kodeWilayah]").val(data.kepengurusan.kodeWilayah);
	$("#f-kepengurusan-create [name=wilayah]").val(data.kepengurusan.namaWilayah);
	$("#f-kepengurusan-create [name=kodeProvinsi]").val(data.kepengurusan.kodeProvinsi);
	$("#f-kepengurusan-create [name=provinsi]").val(data.kepengurusan.namaProvinsi);
	$("#f-kepengurusan-create [name=telp]").val(data.kepengurusan.noTelp);
	$("#f-kepengurusan-create [name=wargaNegara]").val((data.kepengurusan.kewarganegaraan == "" || data.kepengurusan.kewarganegaraan == null) ? 'WNI' : data.kepengurusan.kewarganegaraan);
	$("#f-kepengurusan-create [name=tempatLahir]").val(data.kepengurusan.tempatLahir);
	$("#f-kepengurusan-create [name=tanggalLahir]").val(data.kepengurusan.tempatLahir);
	$("#f-kepengurusan-create [name=jenisKelamin]").val(data.kepengurusan.jenisKelamin);
	$("#f-kepengurusan-create [name=agama]").val(data.kepengurusan.agama);
	$("#f-kepengurusan-create [name=jabatanLain]").val(data.kepengurusan.jabatanLain);
	$("#f-kepengurusan-create [name=pendidikan]").val(data.kepengurusan.pendidikan);
	$("#f-kepengurusan-create [name=kompetensi]").val(data.kepengurusan.kompetensi);
	$("#f-kepengurusan-create [name=catatan]").val(data.kepengurusan.catatan);


	//usaha
	$("#f-kegiatanUsaha-create [name=noreg]").val(data.kelembagaan.noRegistrasi);
	$("#f-kegiatanUsaha-create [name=namaUsaha]").val(data.usaha.namaUsaha);
	$("#f-kegiatanUsaha-create [name=jenisUsaha]").val(data.usaha.jenisUsaha);
	$("#f-kegiatanUsaha-create [name=jumlahPekerja]").val(data.usaha.jumlahPekerja);
	$("#f-kegiatanUsaha-create [name=detailUsaha]").val(data.usaha.detailUsaha);
	$("#f-kegiatanUsaha-create [name=catatan]").val(data.usaha.catatan);

	//visualisasi usaha 
	for(loop=0; loop<maxForm; loop++){
		if(data.vUsaha[loop] != null){
			$("#f-usaha-create-" + loop + " [name=noreg]").val(data.vUsaha[loop].noreg);
			$("#f-usaha-create-" + loop + " [name=p-id]").val(data.vUsaha[loop].idData);
			$("#f-usaha-create-" + loop + " [name=keterangan]").val(data.vUsaha[loop].deskripsi);
		
			if(data.vUsaha[loop].urlGambar != ""){ 
				$("#f-usaha-create-" + loop + " [browser-id=v-usaha" + loop + "]").css('display', 'block'); 
				$("#f-usaha-create-" + loop + " [viewer-id=v-usaha" + loop + "]").removeClass('changed').addClass('changed'); 
				$("#f-usaha-create-" + loop + " [viewer-id=v-usaha" + loop + "]").attr('src',(data.vUsaha[loop].urlGambar != "") ? 'img/usaha/'+data.vUsaha[loop].urlGambar : "img/sources/picture.png");
				$("#f-usaha-create-" + loop + " [name=imageName]").html((data.vUsaha[loop].urlGambar != "") ? data.vUsaha[loop].urlGambar : "berkas belum diunggah...");
			}
		}else{
			$("#f-usaha-create-" + loop + " [name=noreg]").val(data.kelembagaan.noRegistrasi);
		}
	}

	//bantuan
	$("#f-bantuan-create [name=noreg]").val(data.kelembagaan.noRegistrasi);
	r_f1SejarahBantuanDataGenerator(data.bantuan);

	//sarana 
	for(loop=0; loop<maxForm; loop++){
		if(data.sarana[loop] != null){
			$("#f-sarana-create-" + loop + " [name=noreg]").val(data.sarana[loop].noreg);
			$("#f-sarana-create-" + loop + " [name=p-id]").val(data.sarana[loop].idData);
			$("#f-sarana-create-" + loop + " [name=keterangan]").val(data.sarana[loop].deskripsi);
		
			if(data.sarana[loop].urlGambar != ""){ 
				$("#f-sarana-create-" + loop + " [browser-id=v-sarana" + loop + "]").css('display', 'block'); 
				$("#f-sarana-create-" + loop + " [viewer-id=v-sarana" + loop + "]").removeClass('changed').addClass('changed'); 
				$("#f-sarana-create-" + loop + " [viewer-id=v-sarana" + loop + "]").attr('src',(data.sarana[loop].urlGambar != "") ? 'img/saranaPrasarana/'+data.sarana[loop].urlGambar : "img/sources/picture.png");
				$("#f-sarana-create-" + loop + " [name=imageName]").html((data.sarana[loop].urlGambar != "") ? data.sarana[loop].urlGambar : "berkas belum diunggah...");
			}
		}else{
			$("#f-sarana-create-" + loop + " [name=noreg]").val(data.kelembagaan.noRegistrasi);
		}
	}

	//koleksi
	$("#f-koleksi-create [name=noreg]").val(data.kelembagaan.noRegistrasi);
	r_f1KoleksiDataGenerator(data.koleksi);

	//hirarki
	$("#f-hirarki-create [name=noreg]").val(data.kelembagaan.noRegistrasi);
	r_f1HirarkiDataGenerator(data.hirarki);

	//prestasi
	$("#f-prestasi-create [name=noreg]").val(data.kelembagaan.noRegistrasi);
	r_f1PrestasiDataGenerator(data.prestasi);

	//form reactor
	p_formHandler("f-kelembagaan-create" , "updateData");
	p_formHandler("f-sejarah-create" , "updateData");
	p_formHandler("f-kepengurusan-create" , "updateData");
	p_formHandler("f-kegiatanUsaha-create" , "updateData");
	for(loop=0; loop<maxForm; loop++){
		if(data.vUsaha[loop] != null){
			p_formHandler("f-usaha-create-" + loop, "updateData");
		}else{
			p_formHandler("f-usaha-create-" + loop, "addData");
		}

		if(data.sarana[loop] != null){
			p_formHandler("f-sarana-create-" + loop, "updateData");
		}else{
			p_formHandler("f-sarana-create-" + loop, "addData");
		}
	}
}


//F1 LEGALITAS
//=====================================
function r_f1legaitasGenerator(dataFecth){
	var genHtml 	= "";
	var fileChecker	= "";
	if(dataFecth != null && dataFecth.items != undefined){
		for(var loop=0; loop<dataFecth.items.length; loop++){
			
			fileChecker = (dataFecth.items[loop].urlFile != "") ? dataFecth.items[loop].urlFile : 'berkas belum diunggah...';

			genHtml = genHtml + 
			'<form id="f-legalitas-create-' + loop + '" f-group = "f1" f-target = "f120">' +
				'<div class="cards flush ">' +
					'<div class="cards-header">' +
						'<h5>' + dataFecth.items[loop].namaLegalitas + '</h5>' +
						'<div class="btn-collapse right">' +
							'<button class="clear" type="reset"' + 
								'p-label		="' + dataFecth.items[loop].namaLegalitas + '"' + 
								'p-id			="' + dataFecth.items[loop].kodePersyaratan + '"' +
								'p-referencesKey="' + dataFecth.items[loop].noRegistrasi + '"' +
								'p-group		="f1"' + 
								'p-target		="f120"' +
								'p-container	="f-legalitas-create-' + loop + '">' +
							'<span class="fa fa-refresh"></span></button>' +
							'<button class="clear" type="submit"><span class="fa fa-check-circle-o"></span></button>' +
						'</div>' + 
					'</div>' +
					'<div class="input-box">' +
						'<input name="noreg" tabindex="5" type="hidden" value="' + dataFecth.noRegistrasi + '" />' +
						'<input name="kodePersyaratan" tabindex="5" type="hidden" value="' + dataFecth.items[loop].kodePersyaratan + '" />' +
						'<input name="nomorLegalitas" placeholder="Nomor (*)" tabindex="5" type="text" value="' + dataFecth.items[loop].noLegalitas + '" />' +
					'</div>' +
					'<div class="input-box">' +
						'<div class="icon-box left">' +
							'<input name="tanggalLegalitas" class="date" placeholder="Tanggal (*)" tabindex="5" type="text" value="' + dataFecth.items[loop].tanggalLegalitas + '" />' +
							'<span class="fa fa-calendar"></span>' +
						'</div>' + 
					'</div>' +
					'<div class="input-box">' +
						'<div class="icon-box both">' +
							'<label class="browser-box" id="legalitas-' + dataFecth.items[loop].kodePersyaratan + '">' +
								'<p class="placeholder" name="imageName">' + fileChecker + '</p>' +
								'<input name="imageUrl" accept="image/*" type="file" tabindex="5" />' +
								'<input browser-state="fileState" name="fileState" type="hidden" tabindex="5" value="add" />' +
							'</label>' +
							'<button type="button" browser-id="legalitas-' + dataFecth.items[loop].kodePersyaratan + '" class="browser-clear clear"><i class="fa fa-times-circle"></i></button>' +
							'<span class="left fa fa-paperclip text-purple"></span>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</form>';
		}

		$("#legalitas-frame").html(genHtml);

		for(var loop=0; loop<dataFecth.items.length; loop++){
			p_formHandler('f-legalitas-create-' + loop,'addData');
			if(dataFecth.items[loop].urlFile != ""){ 
				$("[browser-id=legalitas-" + dataFecth.items[loop].kodePersyaratan + "]").css('display', 'block'); 
			}

			$('#f-legalitas-create-' + loop + " [type=reset]").unbind().on("click", function(e){
				e.preventDefault(); 
				showOptionConfirm('delete');
				clearPacket();
				pGroup 			= $(this).attr('p-group');
				pTarget			= $(this).attr('p-target')
				pId				= $(this).attr('p-id');
				pLabel			= $(this).attr('p-label');
				pContainer		= $(this).attr('p-container');
				pReferences		= $(this).attr('p-references');
				pReferencesKey	= $(this).attr('p-referencesKey');
				$(".option-yes").unbind().on("click", function(){ 
					if(p_removeData(pGroup, pTarget, pId, pReferencesKey) == 'success'){ 
						hideOptionList(); 
						$("#" + pContainer + " [browser-id=legalitas-" + pId + "]").css('display', 'none'); 
						$("#" + pContainer + " [name=imageName]").html("berkas belum diunggah...");
						clearTargetFormId(pContainer, $('#' + pContainer + ' input[name="noreg"]').val(), $('#' + pContainer + ' input[name="kodePersyaratan"]').val(), "kodePersyaratan");
						clearPacket();
					}; 
				});
			});
		}

		//command reactor
		datePickerActivator();
		fileBrowserActivator();
	}
}

//F1 SEJARAH
//=====================================
function r_f1SejarahBantuanDataGenerator(data){
	var genHtml = "";
	if(data != null){ 
		//render
		for(counter = 0; counter < data.length; counter++){
			genHtml = genHtml +
			'<div id=bantuan-'+ data[counter].idData +' class="cards">' +
				'<div class="row default">' +
					'<div class="col-xs-3">' +
						'<div class="list-box">' +
							'<div class="list-icon bg-red"><span class="fa fa-handshake-o"></span></div>' +
							'<p class="list-text">' + data[counter].tahun + '</p>' +
						'</div>' +
					'</div>' +
					'<div class="col-xs-4">' +
						'<div class="list-box clear">' +
							'<p class="list-text">' + data[counter].bantuanDari + '</p>' +
						'</div>' +
					'</div>' +
					'<div class="col-xs-5">' +
						'<div class="list-box clear">' +
							'<p class="list-text">' + data[counter].deskripsi + '</p>' +
							'<div class="list-button click-option"' + 
								'p-label		="' + data[counter].bantuanDari + '"' + 
								'p-id			="' + data[counter].idData + '"' +
								'p-referencesKey="' + data[counter].noreg + '"' +
								'p-group		="f1"' + 
								'p-target		="f121"' +
								'p-container	="bantuan-' + data[counter].idData + '">' +
								'<span class="fa fa-ellipsis-v"></span>' +
							'</div>' +
						'</div>' +
					'</div>' +
					'<div class="clearfix"></div>' +
				'</div>' +
			'</div>';
		}
	} else {
		genHtml = genHtml +
		'<div class="cards">' +
			'<div class="cards-header">' +
				'<p class="fixed offset text-black">Data tidak ditemukan.</p>' +
			'</div>' +
		'</div>';
	}	


	$("#f-bantuan-list").append(genHtml);

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
		$("#delete-card").unbind().on("click", function(){ 
			hideOptionList(); 
			showOptionConfirm('delete');
			$(".option-yes").unbind().on("click", function(){ 
				hideOptionList(); 
				if(p_removeData(pGroup, pTarget, pId, pReferencesKey) == 'success'){ 
					$('#' + pContainer).remove(); 
					clearPacket();
				}; 
			});
		});
	});
}

//F1 VERIFIKASI LEMBAGA
//=====================================
function r_f1VerifikasiLembaga(packet) {
	if(packet == undefined || packet == "" || packet == null || packet == "start"){
		packet = profile_look_reader();
	}

	profile_look_set(packet);

	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part	= ['',''];
		content = '';
		data 	= p_getData('f1','f151', '', packet);
		data 	= data.feedData;
		
		placeImg = data.kelembagaan.noreg;
		placeImg = placeImg.substr((placeImg.length-1), 1);
		temPic   = (data.kelembagaan.picture != "") ? 'img/logo/' + data.kelembagaan.picture : 'img/logo/avatar-' + placeImg + '.jpg';

		checkedTotal = 0;
		checkedCounter = 0;

		//--open
		head	= '';
		
		body	= '<div class="row no-head"><div class="container">';
		body	= body + '<div class="col-md-10 col-md-offset-1">';
		body	= body + 
		'<div class="cards clear min" id="' + data.kelembagaan.noreg + '-group">' +
			'<div class="description-box">' +
				'<div class="">' +
					'<img class="icon-set" src="' + temPic + '"/>' +
					'<p class="title-set">' + data.kelembagaan.bentukLembaga + ' ' + data.kelembagaan.nama + '</p>' +
					'<div class="text-set">' +
						'<span class="id-set">' + data.kelembagaan.noreg + '</span>' +
						'<span class="desc-text">' + data.kelembagaan.alamat + '</span>' +
					'</div>' +
				'</div>' +
				// '<button class="click-option btn-set toggle-click clear" toggle-target="' + data.kelembagaan.noreg + '-group" type="button"><span class="fa fa-chevron-down"></span></button>' +
			'</div>' +
		'</div>';

		var tempR = ((data.kelembagaan.statusValid == "valid") ? 'checked' : '');
		body = body +
		'<div class="cards ' + data.kelembagaan.noreg + '-group flush">' +
			'<div class="list-box clear">' +
				'<p class="list-text text-green">KONFIRMASI KEABSAHAN DATA</p>' +
				'<div class="switch-box clear fixed-position right">' +
					'<input id="valid-button" p-referencesKey="' + data.kelembagaan.noreg + '" class="userActivator" type="checkbox" ' + tempR + ' />' +
					'<label for="valid-button"></label>' +
				'</div>' +
			'</div>' +
		'</div>';

		body = body +
		'<div class="cards title">' +
			'<div class="cards-header">' +
				'<h6 class="text-purple"><b>Kelengkapan Legalitas</b></h6>' +
				// '<div class="btn-collapse right">' +
				// 	'<button class="clear" type="submit"><span class="fa fa-check-circle-o"></span></button>' +
				// '</div>' +
			'</div>' +
		'</div>' +
		'<div class="row default">' +
			'<div class="col-xs-12">';

		//--render data
		var stat = 0;
		var divider = "";

		/*legalitas*/
		var legalitas = (data != null && data.legalitas.items != null) ? data.legalitas.items : [];
		for(var loop = 0; loop < legalitas.length; loop++){	
			checkedTotal = checkedTotal + 1;
			divider = "";
			if(loop == (legalitas.length - 1)){ divider = 'flush'; }

			body = body +
			'<div class="cards ' + divider + '">' +
				'<div class="row default">' +
					'<div class="col-md-7">' +
						'<div class="list-box clear">' +
							'<p class="list-text parent">' + legalitas[loop].namaLegalitas + '</p>';

			tempc = "";
			if(legalitas[loop].urlFile != ""){ stat = 1; tempc = 'img/legalitas/' + legalitas[loop].urlFile; }
			body = body + '<button type="button" class="btn-link clear" preview-target="' + tempc + '">Pratinjau (' + stat + ')</button>';
			stat = 0;
			
			tempS = ((legalitas[loop].catatan != "" && legalitas[loop].catatan != null) ? "fa-active-success" : "");
			tempB = ((legalitas[loop].catatan != "" && legalitas[loop].catatan != null) ? "reset" : "submit");
			tempC = ((legalitas[loop].statusVerifikasi == "1") ? "checked" : "");
			if(legalitas[loop].statusVerifikasi == "1") checkedCounter = checkedCounter + 1;
			body = body +	
							'<div class="check-box fixed-position right">' +
							  '<input id="lv-' + legalitas[loop].kodePersyaratan + '" p-id="' + legalitas[loop].kodePersyaratan + '" p-referencesKey="' + data.legalitas.noRegistrasi + '" type="checkbox" ' + tempC + '>' +
							  '<label for="lv-' + legalitas[loop].kodePersyaratan + '"><span class="inner"></span><span class="icon"></span></label>' +
							'</div>' +
						'</div>' +
						'<div class="space-box hidden-md hidden-lg visible-sm-block visible-xs-block"></div>' +
					'</div>' +
					'<div class="col-md-5">' +
						'<form id="f-cl-create-' + legalitas[loop].kodePersyaratan + '" f-group="f1" f-target="f151">' +
							'<div class="list-box input-clear">' +
								'<div class="input-box pop-right">' +
									'<input placeholder="" name="kode" tabindex="1" type="hidden" value="' + legalitas[loop].kodePersyaratan + '" />' +
									'<input placeholder="" name="noreg" tabindex="1" type="hidden" value="' + data.legalitas.noRegistrasi + '" />' +
									'<input placeholder="Catatan revisi (*)" name="catatan" class="catatan" tabindex="1" type="text" value="' + legalitas[loop].catatan + '" />' +
								'</div>' +
								'<div class="list-remove right" p-id=""><button class="clear" type="' + tempB + '" p-id="f-cl-create-' + legalitas[loop].kodePersyaratan + '"><span class="fa fa-thumb-tack ' + tempS + '"></span></button></div>' +
							'</div>' +
							'<div class="space-box hidden-md hidden-lg visible-sm-block visible-xs-block"></div>' +
						'</form>' +
					'</div>' +
					'<div class="clearfix"></div>' +
				'</div>' +
			'</div>';
				
		}

		/*poin verifikasi*/
		body = body +
		'<div class="cards title">' +
			'<div class="cards-header">' +
				'<h6 class="text-purple"><b>Kelengkapan lainnya</b></h6>' +
				// '<div class="btn-collapse right">' +
				// 	'<button class="clear" type="submit"><span class="fa fa-check-circle-o"></span></button>' +
				// '</div>' +
			'</div>' +
		'</div>';

		var verifikasi = (data != null && data.verifikasi.items != null) ? data.verifikasi.items : [];
		for(var loop = 0; loop < verifikasi.length; loop++){	
			checkedTotal = checkedTotal + 1;
			body = body +
			'<div class="cards">' +
				'<div class="row default">' +
					'<div class="col-md-7">' +
						'<div class="list-box clear">' +
							'<p class="list-text parent">' + verifikasi[loop].namaVerifikasi + '</p>';
			
			// if(verifikasi[loop].urlFile != ""){ stat = 1; }
			// body = body + '<button type="button" class="btn-link clear">Pratinjau (' + stat + ')</button>';
			// stat = 0;
			if(verifikasi[loop].statusVerifikasi == "1") checkedCounter = checkedCounter + 1;
			tempC = ((verifikasi[loop].statusVerifikasi == "1") ? "checked" : "");
			tempS = ((verifikasi[loop].catatan != "" && verifikasi[loop].catatan != null) ? "fa-active-success" : "");
			tempB = ((verifikasi[loop].catatan != "" && verifikasi[loop].catatan != null) ? "reset" : "submit");
			body = body +	
							'<div class="check-box fixed-position right">' +
							  '<input id="vr-' + verifikasi[loop].kodeVerifikasi + '" p-id="' + verifikasi[loop].kodeVerifikasi + '" p-referencesKey="' + data.verifikasi.noRegistrasi + '" type="checkbox" ' + tempC + '>' +
							  '<label for="vr-' + verifikasi[loop].kodeVerifikasi + '"><span class="inner"></span><span class="icon"></span></label>' +
							'</div>' +
						'</div>' +
						'<div class="space-box hidden-md hidden-lg visible-sm-block visible-xs-block"></div>' +
					'</div>' +
					'<div class="col-md-5">' +
						'<form id="f-cv-create-' + verifikasi[loop].kodeVerifikasi + '" f-group="f1" f-target="f152">' +
							'<div class="list-box input-clear">' +
								'<div class="input-box pop-right">' +
									'<input placeholder="" name="kode" tabindex="1" type="hidden" value="' + verifikasi[loop].kodeVerifikasi + '" />' +
									'<input placeholder="" name="noreg" tabindex="1" type="hidden" value="' + data.verifikasi.noRegistrasi + '" />' +
									'<input placeholder="Catatan revisi (*)" name="catatan" class="catatan" tabindex="1" type="text" value="' + verifikasi[loop].catatan + '" />' +
								'</div>' +
								'<div class="list-remove right"><button class="clear" type="' + tempB + '" p-id="f-cv-create-' + verifikasi[loop].kodeVerifikasi + '"><span class="fa fa-thumb-tack ' + tempS + '"></span></button></div>' +
							'</div>' +
							'<div class="space-box hidden-md hidden-lg visible-sm-block visible-xs-block"></div>' +
						'</form>' +
						'<div class="space-box hidden-md hidden-lg visible-sm-block visible-xs-block"></div>' +
					'</div>' +
					'<div class="clearfix"></div>' +
				'</div>' +
			'</div>';
				
		}
		
		body = body + 
				'</div>' +
			'<div class="clearfix"></div>' +
		'</div>';

		body	= body + '</div></div></div>';
		content = '<section id="">' + head + body + '</section>';
		//--close
		
		//--gen
		headPage.html(r_headPageHtml(3, 'Verifikasi'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');
		$("#preload").remove();
		
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(r_pagePreviousReader()); });
		$("[preview-target]").unbind().on('click', function(){ showPreviewBox($(this).attr('preview-target')); });

		r_navbarReactor();
		// toggleBoxActivator();
		
		/* legalitas*/
		for(var loop = 0; loop < legalitas.length; loop++){	
			tempS = ((legalitas[loop].catatan != "" && legalitas[loop].catatan != null) ? "fa-active-success" : "");
			if(tempS == "") { p_formHandler('f-cl-create-' + legalitas[loop].kodePersyaratan,'addData'); }
			else { 
				$("#f-cl-create-" + legalitas[loop].kodePersyaratan + " button").unbind().on('click', function(){ 
					$(this).children('span').removeClass('fa-active-success'); 
					$(this).attr('type', 'submit').unbind(); 
					$("#" + $(this).attr('p-id') + " .catatan").attr('value', '');
					$("#" + $(this).attr('p-id') + " input").unbind();
					p_formHandler($(this).attr('p-id'),'addData');
					return false;
				}); 

				$("#f-cl-create-" + legalitas[loop].kodePersyaratan + " input").on("keypress", function(event) { return event.keyCode != 13; });
			}


			$('#lv-' + legalitas[loop].kodePersyaratan).on('click', function(){
				hideOptionList(); 
				showOptionConfirm('status');
				clearPacket();
				pTarget			= $(this);
				pId 			= $(this).attr('p-Id');
				pReferencesKey 	= $(this).attr('p-referencesKey');
				checkedStatus  	= ($(this).prop('checked') == true ? '1' : '0');
				$(".option-yes").unbind().on("click", function(){ 
					hideOptionList(); 
					if(p_changeData('f1', 'f117', pId, pReferencesKey, checkedStatus) == 'success'){ 
						state = (pTarget.prop('checked') == true ? false : true);
						pTarget.prop('checked', state);

						if(pTarget.prop('checked') == true) checkedCounter = checkedCounter + 1; else checkedCounter = checkedCounter - 1;
						clearPacket();
					}; 
					
				});
				 return false;
			});
		}

		/* verifikasi */
		for(var loop = 0; loop < verifikasi.length; loop++){	
			tempS = ((verifikasi[loop].catatan != "" && verifikasi[loop].catatan != null) ? "fa-active-success" : "");
			if(tempS == "") { p_formHandler('f-cv-create-' + verifikasi[loop].kodeVerifikasi,'addData'); }
			else { 
				$("#f-cv-create-" + verifikasi[loop].kodeVerifikasi + " button").unbind().on('click', function(){ 
					$(this).children('span').removeClass('fa-active-success'); 
					$(this).attr('type', 'submit').unbind(); 
					$("#" + $(this).attr('p-id') + " .catatan").attr('value', '');
					$("#" + $(this).attr('p-id') + " input").unbind();
					p_formHandler($(this).attr('p-id'),'addData');
					return false;
				}); 

				$("#f-cv-create-" + verifikasi[loop].kodeVerifikasi + " input").on("keypress", function(event) { return event.keyCode != 13; });
			}


			$('#vr-' + verifikasi[loop].kodeVerifikasi).on('click', function(){
				hideOptionList(); 
				showOptionConfirm('status');
				clearPacket();
				pTarget			= $(this);
				pId 			= $(this).attr('p-Id');
				pReferencesKey 	= $(this).attr('p-referencesKey');
				checkedStatus  	= ($(this).prop('checked') == true ? '1' : '0');
				$(".option-yes").unbind().on("click", function(){ 
					hideOptionList(); 
					if(p_changeData('f1', 'f118', pId, pReferencesKey, checkedStatus) == 'success'){ 
						state = (pTarget.prop('checked') == true ? false : true);
						pTarget.prop('checked', state);

						if(pTarget.prop('checked') == true) checkedCounter = checkedCounter + 1; else checkedCounter = checkedCounter - 1;
						clearPacket();
					}; 
					
				});
				 return false;
			});
		}


		$('#valid-button').unbind().on('click', function(){
			if(checkedCounter == checkedTotal){
				hideOptionList(); 
				showOptionConfirm('status');
				clearPacket();
				pTarget			= $(this);
				pReferencesKey 	= $(this).attr('p-referencesKey');
				checkedStatus  	= ($(this).prop('checked') == true ? '1' : '0');
				$(".option-yes").unbind().on("click", function(){ 
					hideOptionList(); 
					if(p_changeData('f1', 'f199', '', pReferencesKey, checkedStatus) == 'success'){ 
						state = (pTarget.prop('checked') == true ? false : true);
						pTarget.prop('checked', state);
						clearPacket();
					}; 
				});
				
				return false;
			}else{
				showNotification('danger', 'failure', 'Perlu melengkapi semua verifikasi!');
				return false;
			}
		});

	});
}

//F1 KOLEKSI
//=====================================
function r_f1KoleksiLembaga() {
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
		body	= body + '<div id ="koleksi" class="col-md-8 col-md-offset-2">';
		
		body	= body + '</div></div></div>';
		content = '<section id="">' + head + body + '</section>';
		//--close
		
		//--gen
		accm = 5;
		if(r_getCookie('TABAH_login') == 'yes') { accm = 4; }
		headPage.html(r_headPageHtml(accm, 'Koleksi'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');
		$("#preload").remove();
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(r_pagePreviousReader()); });
		searchBoxActivator();
		r_f1KoleksiGenerator();
		$(".search-input").on("keyup", function(){ 
			r_f1KoleksiGenerator($(this).val()); 
		});
		r_navbarReactor();
	});
}

function r_f1KoleksiGenerator(keyword){
	genHtml = "";
	
	if(keyword == null || keyword == ''){
		data = p_getData('f1','f141','');
		$('#koleksi').html('');
	}else{
		 data = p_getData('f1','f141',keyword);
		$('#koleksi').html('');
	}
	console.log(data);
	if(data.feedData != null){
		genHtml = genHtml + '<div id = "daftarKoleksi">';
		for(var loop = 0; loop < data.feedData.length; loop++){	
			genHtml = genHtml +
			'<div class=" cards">' +
				'<div class="row default">' +
					'<div class="col-xs-7">' +
						'<div class="list-box">' +
							'<div class="list-icon bg-green"><span class="fa fa-book"></span></div>' +
							'<p class="list-text"><strong>' + data.feedData[loop].title + '</strong></p>' +
						'</div>' +
					'</div>' +
					'<div class="col-xs-5">' +
						'<div class="list-box clear-small">' +
							'<p class="list-text">(' + data.feedData[loop].group + ') &nbsp; ' + data.feedData[loop].owner + '</p>' +
						'</div>' +
					'</div>' +
					'<div class="clearfix"></div>' +
				'</div>' +
			'</div>';
		}
		genHtml = genHtml + '</div>';
	}else{
		genHtml = genHtml +
		'<div class="cards">' +
			'<div class="cards-header">' +
				'<p class="fixed offset text-black">Data tidak ditemukan.</p>' +
			'</div>' +
		'</div>';
	}
	
	$("#koleksi").append(genHtml);
}

function r_f1KoleksiDataGenerator(data){
	var genHtml = "";
	if(data != null && data[0] != null){
		//render
		for(counter = 0; counter < data.length; counter++){
			genHtml = genHtml +
			'<div id=koleksi-'+ data[counter].idData +' class="cards">' +
				'<div class="row default">' +
					'<div class="col-xs-4">' +
						'<div class="list-box">' +
							'<div class="list-icon bg-green"><span class="fa fa-book"></span></div>' +
							'<p class="list-text">' + data[counter].judulKoleksi + '</p>' +
						'</div>' +
					'</div>' +
					'<div class="col-xs-5">' +
						'<div class="list-box">' +
							'<p class="list-text">' + data[counter].deskripsi + '</p>' +
						'</div>' +
					'</div>' +
					'<div class="col-xs-3">' +
						'<div class="list-box clear">' +
							'<p class="list-text">' + data[counter].jenisKoleksi + '</p>' +
							'<div class="list-button click-option"' + 
								'p-label		="' + data[counter].judulKoleksi + '"' + 
								'p-id			="' + data[counter].idData + '"' +
								'p-referencesKey="' + data[counter].noreg + '"' +
								'p-group		="f1"' + 
								'p-target		="f118"' +
								'p-container	="koleksi-' + data[counter].idData + '">' +
								'<span class="fa fa-ellipsis-v"></span>' +
							'</div>' +
						'</div>' +
					'</div>' +
					'<div class="clearfix"></div>' +
				'</div>' +
			'</div>';
		}
	} else { 
		genHtml = genHtml +
		'<div class="cards" id="f-koleksi-empty-list">' +
			'<div class="cards-header">' +
				'<p class="fixed offset text-black">Data tidak ditemukan.</p>' +
			'</div>' +
		'</div>';
	}	

	$("#f-koleksi-empty-list").remove();
	$("#f-koleksi-list").append(genHtml);

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
		$("#delete-card").unbind().on("click", function(){ 
			hideOptionList(); 
			showOptionConfirm('delete');
			$(".option-yes").unbind().on("click", function(){ 
				hideOptionList(); 
				if(p_removeData(pGroup, pTarget, pId, pReferencesKey) == 'success'){ 
					$('#' + pContainer).remove(); 
					clearPacket();
				}; 
			});
		});
	});	
}


//F1 PRESTASI
//=====================================
function r_f1PrestasiLembaga() {
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part	= ['',''];
		content = '';	
		data 	= p_getData('f1', 'f119');
		//--open
		head	= '';
		body	= '<div class="row no-head"><div class="container">';
		body	= body + '<div id ="section-prestasi" class="col-md-8 col-md-offset-2">';
	
		body	= body + '</div></div></div>';

		content = '<section id="">' + head + body + '</section>';
		//--close
		
		//--gen
		accm = 5;
		if(r_getCookie('TABAH_login') == 'yes') { accm = 4; }
		headPage.html(r_headPageHtml(accm, 'Prestasi'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');
		$("#preload").remove();
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(r_pagePreviousReader()); });
		searchBoxActivator();
		
		r_f1PrestasiGenerator(data, "list");
		$(".search-input").on("keyup", function(){ 
			$("#section-prestasi").html("");
			r_f1PrestasiGenerator(p_getData('f1', 'f119', $(this).val()), "list"); 
		});

		$(".prestasi-list").unbind().on("click", function(){ r_navigateTo(12, $(this).attr("p-id")); });
		r_navbarReactor();
	});
}

function r_f1PrestasiGenerator(data, type){
	var genHtml = "";
	if(data.feedData != null){
		//render
		for(counter = 0; counter < data.feedData.length; counter++){

			if(type == "" || type == undefined || type == null){
				genHtml = genHtml +
				'<div id=prestasi'+data.feedData[counter].idData+' class="cards">' +
					'<div class="list-box">' +
						'<div class="list-icon bg-yellow"><span class="fa fa-trophy"></span></div>' +
						'<p class="list-text">'+data.feedData[counter].deskripsi+'</p>' +
						'<div id='+data.feedData[counter].idData+' class="list-remove"><span class="fa fa-trash"></span></div>' +
					'</div>' +
				'</div>';
			}else{
				genHtml = genHtml +
				'<div class=" cards prestasi-list click" p-id="' + data.feedData[counter].noreg + '">' +
					'<div class="row default">' +
						'<div class="col-xs-7">' +
							'<div class="list-box">' +
								'<div class="list-icon bg-yellow"><span class="fa fa-trophy"></span></div>' +
								'<p class="list-text"><strong>' + data.feedData[counter].deskripsi + '</strong></p>' +
							'</div>' +
						'</div>' +
						'<div class="col-xs-5">' +
							'<div class="list-box clear-small">' +
								'<p class="list-text">('+ data.feedData[counter].namaBentukLembaga + ") " + data.feedData[counter].nama + '</p>' +
							'</div>' +
						'</div>' +
						'<div class="clearfix"></div>' +
					'</div>' +
				'</div>';
			}
		}

		genHtml = genHtml + '</div>';
	} else {
		genHtml = genHtml +
		'<div class="cards">' +
			'<div class="cards-header">' +
				'<p class="fixed offset text-black">Data tidak ditemukan.</p>' +
			'</div>' +
		'</div>';
	}	

	$("#section-prestasi").append(genHtml);	
}

function r_f1PrestasiDataGenerator(data){
	var genHtml = "";
	if(data != null && data[0] != null){
		//render
		for(counter = 0; counter < data.length; counter++){
			genHtml = genHtml +
			'<div id=koleksi-'+ data[counter].idData +' class="cards">' +
				'<div class="row default">' +
					'<div class="col-xs-12">' +
						'<div class="list-box">' +
							'<div class="list-icon bg-yellow"><span class="fa fa-trophy"></span></div>' +
							'<p class="list-text">' + data[counter].deskripsi + '</p>' +
							'<div class="list-button click-option"' + 
								'p-label		="' + data[counter].deskripsi + '"' + 
								'p-id			="' + data[counter].idData + '"' +
								'p-referencesKey="' + data[counter].noreg + '"' +
								'p-group		="f1"' + 
								'p-target		="f119"' +
								'p-container	="koleksi-' + data[counter].idData + '">' +
								'<span class="fa fa-ellipsis-v"></span>' +
							'</div>' +
						'</div>' +
					'</div>' +
					'<div class="clearfix"></div>' +
				'</div>' +
			'</div>';
		}
	} else {
		genHtml = genHtml +
		'<div class="cards" id="f-prestasi-empty-list">' +
			'<div class="cards-header">' +
				'<p class="fixed offset text-black">Data tidak ditemukan.</p>' +
			'</div>' +
		'</div>';
	}	

	$("#f-prestasi-empty-list").remove();
	$("#f-prestasi-list").append(genHtml);

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
		$("#delete-card").unbind().on("click", function(){ 
			hideOptionList(); 
			showOptionConfirm('delete');
			$(".option-yes").unbind().on("click", function(){ 
				hideOptionList(); 
				if(p_removeData(pGroup, pTarget, pId, pReferencesKey) == 'success'){ 
					$('#' + pContainer).remove(); 
					clearPacket();
				}; 
			});
		});
	});	
}

//F1 HIRARKI
//=====================================
function r_f1HirarkiDataGenerator(data){
	var genHtml = "";
	var genHtml_parent = "";
	var genHtml_child = "";
	if(data != null){
		//render
		for(counter = 0; counter < data.length; counter++){
			if(data[counter].hirarki == '0'){
				genHtml_parent = genHtml_parent +
				'<div id=hirarki-parent-'+ data[counter].noregTarget +' class="cards">' +
					'<div class="row default">' +
						'<div class="col-xs-12">' +
							'<div class="list-box">' +
								'<p class="list-text">' + data[counter].namaLembaga + '</p>' +
								'<div class="list-button click-option"' + 
									'p-label		="' + data[counter].namaLembaga + '"' + 
									'p-id			="' + data[counter].noreg + '"' +
									'p-referencesKey="' + data[counter].noregTarget + '"' +
									'p-group		="f1"' + 
									'p-target		="f122"' +
									'p-container	="hirarki-parent-' + data[0].noregTarget + '">' +
									'<span class="fa fa-ellipsis-v"></span>' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<div class="clearfix"></div>' +
					'</div>' +
				'</div>';
			}else{
				genHtml_child = genHtml_child +
				'<div id=hirarki-child-'+ data[counter].noregTarget +' class="cards">' +
					'<div class="row default">' +
						'<div class="col-xs-12">' +
							'<div class="list-box">' +
								'<p class="list-text">' + data[counter].namaLembaga + '</p>' +
								'<div class="list-button click-option"' + 
									'p-label		="' + data[counter].namaLembaga + '"' + 
									'p-id			="' + data[counter].noreg + '"' +
									'p-referencesKey="' + data[counter].noregTarget + '"' +
									'p-group		="f1"' + 
									'p-target		="f122"' +
									'p-container	="hirarki-child-' + data[counter].noregTarget + '">' +
									'<span class="fa fa-ellipsis-v"></span>' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<div class="clearfix"></div>' +
					'</div>' +
				'</div>';
			}
		}
	} else {
		genHtml_parent = genHtml_parent +
		'<div class="cards" id="f-hirarki-empty-list-parent">' +
			'<div class="cards-header">' +
				'<p class="fixed offset text-black">Data tidak ditemukan.</p>' +
			'</div>' +
		'</div>';

		genHtml_child = genHtml_child +
		'<div class="cards" id="f-hirarki-empty-list-child">' +
			'<div class="cards-header">' +
				'<p class="fixed offset text-black">Data tidak ditemukan.</p>' +
			'</div>' +
		'</div>';
	}	

	if(genHtml_parent != "") { $("#f-hirarki-empty-list-parent").remove(); }
	if(genHtml_child != "") { $("#f-hirarki-empty-list-child").remove(); }
	
	$("#f-hirarki-list-parent").append(genHtml_parent);
	$("#f-hirarki-list-child").append(genHtml_child);

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
		$("#delete-card").unbind().on("click", function(){ 
			hideOptionList(); 
			showOptionConfirm('delete');
			$(".option-yes").unbind().on("click", function(){ 
				hideOptionList(); 
				if(p_removeData(pGroup, pTarget, pId, pReferencesKey) == 'success'){ 
					$('#' + pContainer).remove(); 
					clearPacket();
				}; 
			});
		});
	});	
}