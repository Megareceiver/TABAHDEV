//F3 AUTHENTICATION
//=====================================
function r_f3Anggota() {
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part	= ['',''];
		content = '';
		data = p_getData('f3', 'userList'); 
		data = data.feedData;
		
		//--open
		head	= '';
		body	= '<div class="row no-head"><div class="container">';
		part[1] = '<div class="col-md-8 col-md-offset-2">';
		
		//--render data
		var tempP 	= "";
		var tempR 	= "";
		var tempL 	= "";
		var tempH 	= "";
		var placeImg= "";
	
		if(data!= null && data.length != 0){
			for(var loop = 0; loop < data.length; loop++){	
				placeImg 	= (data[loop].noRegistrasi != "") ? data[loop].noRegistrasi : data[loop].idData;
				placeImg 	= placeImg.substr((placeImg.length-1), 1);

				tempL	 	= (data[loop].noRegistrasi != "") ? 'Lembaga :: ' : '';
				temPic   	= (data[loop].urlGambar != "" && data[loop].urlGambar != null) ? 'img/avatar/' + data[loop].urlGambar : 'img/avatar/avatar-' + placeImg + '.jpg';
				

				if(tempH != data[loop].userLevel){
					part[1] = part[1] +
					'<div class="cards-label ' + ((loop > 0) ? 'plus' : '') + '">' +
						'<p><strong>Anggota Level ' + data[loop].userLevel + '</strong></p>' +
					'</div>';

					tempH = data[loop].userLevel;
				}

				part[1]  	= part[1] +
				'<div class="cards clear" id="' + data[loop].idData + '-group">' +
					'<div class="description-box">' +
						'<div class="">' +
							'<img class="icon-set" src="' + temPic + '"/>' +
							'<p class="title-set">' + data[loop].nama + '</p>' +
							'<div class="text-set">' +
								'<span class="id-set">' + data[loop].jabatan + '</span>' +
								'<span class="desc-text">' + data[loop].email + '</span>' +
							'</div>' +
						'</div>' +
						'<button class="click-option btn-set toggle-click clear" toggle-target="' + data[loop].idData + '-group" type="button"><span class="fa fa-chevron-down"></span></button>' +
					'</div>' +
				'</div>';

				part[1] = part[1] + 
				'<div class="cards toggle-content ' + data[loop].idData + '-group">' +
					'<div class="list-box clear">' +
						'<p class="list-text">';

							part[1] = part[1] + 
							'<span class="click text-cyan" id="' + data[loop].idData  + '-group-edit"' +
								'p-referencesKey="' + data[loop].username + '"' +
								'p-container	="' + data[loop].idData + '-group">Ubah</span> &nbsp; | &nbsp;'

							part[1] = part[1] + 
							'<span class="click text-pink"id="' + data[loop].idData  + '-group-hapus"' +
								'p-label		="' + data[loop].nama + '"' + 
								'p-id			="' + data[loop].username+ '"' +
								'p-referencesKey=""' +
								'p-group		="f3"' + 
								'p-target		="f31"' +
								'p-container	="' + data[loop].idData + '-group">Hapus</span>' +
						'</p>' +
					'</div>' +
				'</div>';
			}
		}else{
			part[1] = part[1] +
			'<div class="cards">' +
				'<div class="cards-header">' +
					'<p class="fixed offset text-black">Data tidak ditemukan.</p>' +
				'</div>' +
			'</div>';
		}
		
		part[1] = part[1] + '</div>';
		body	= body 	  + part[0] + part[1] + '</div></div>';
		content = '<section id="">' + head + body + '</section>';
		//--close
		
		//--gen
		headPage.html(r_headPageHtml(4, 'Anggota'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');
		
		var uac = r_getCookie('TABAH_userLevel');
		if(uac == '3' || uac == '7') footPage.html(r_footPageHtml('add'));
		$("#preload").remove();
		
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(4); });
		$("#add-button").unbind().on('click', function(){ profile_look_set(""); r_navigateTo(413); });

		for(var loop = 0; loop < data.length; loop++){	
			$('#' + data[loop].id + '-group-edit').unbind().on("click", function(e){
				clearPacket();
				pReferencesKey	= $(this).attr('p-referencesKey');
				hideOptionList(); 
				r_f3userSectionEditor(pReferencesKey); 
			});

			$('#' + data[loop].id + '-group-hapus').unbind().on("click", function(e){
				e.preventDefault(); 
				if($("#" + $(this).attr('p-container') + " [name=p-id]").val() != ""){
					showOptionConfirm('delete');
					clearPacket();
					pContainer		= $(this).attr('p-container');
					pGroup 			= $(this).attr('p-group');
					pTarget			= $(this).attr('p-target');
					pId				= $(this).attr('p-id');
					pLabel			= $(this).attr('p-label');
					pReferencesKey	= $(this).attr('p-referencesKey');
					$(".option-yes").unbind().on("click", function(){ 
						hideOptionList(); 
						if(p_removeData(pGroup, pTarget, pId, pReferencesKey) == 'success'){ 
							$("#" + pContainer + ", ." + pContainer).remove();
							clearPacket();
						}; 
					});
				}
			});
		}

		$(".userActivator").unbind().on("click", function(){ 
			hideOptionList(); 
			showOptionConfirm('status');
			clearPacket();
			pTarget	= $(this);
			pId 	= $(this).attr('pId');
			pReferencesKey = (pTarget.prop('checked') == true ? '1' : '0');
			$(".option-yes").unbind().on("click", function(){ 
				hideOptionList(); 
				if(p_changeData('f3', 'f311', pId, pReferencesKey) == 'success'){ 
					state = (pTarget.prop('checked') == true ? false : true);
					pTarget.prop('checked', state);
					clearPacket();
				}; 
				
			});
			 return false;
		});
		
		searchBoxActivator();
		toggleBoxActivator();
		r_navbarReactor();
	});
}

//F3 FORM USER
//=====================================
function r_f3FormUser(packet) {
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part	= ['','','',''];
		content = '';

		//Cookie set
		if(packet == undefined || packet == "" || packet == null || packet == "start"){
			packet = profile_look_reader();
		}

		profile_look_set(packet);

		//-- get data lingkup area
		dataTemp 		  	= p_getData('f4', 'f401', '');
		sourcesData 	  	= (dataTemp.feedData != null) ? dataTemp.feedData[0] : ""; 
		sourcesDetailData 	= (dataTemp.feedData != null) ? dataTemp.feedDataDetail : "";

		dataTemp 		  	= p_getData('f4', 'f412', '');
		sourcesWilayah 		= (dataTemp.feedData != null) ? dataTemp.feedData[0] : "";
		sourcesWilayahDetail= (dataTemp.feedData != null) ? dataTemp.feedDataDetail : "";

		counter = 0;
		data = p_getData('f4', 'f431', '');
		data = data.feedData;
		if(data != null && data.length > 0){ counter = data.length; }
		
		//--open
		head = '';
		body = '<div class="row no-head"><div class="container"><div id="section-bentukLembaga" class="col-md-8 col-md-offset-2">';
		body = body + 
		'<form id="f-user-create" f-group="f3" f-target="f31">' +
			'<div class="cards">' +
				'<div class="cards-header">' +
					'<h4>Form Anggota</h4>' +
					'<p class="offset">form untuk menambahkan data anggota dan untuk akses ke aplikasi.</p>' +
					'<div class="btn-collapse right">' +
						// '<button class="clear" type="reset"><span class="fa fa-refresh"></span></button>' +
						'<button class="clear" type="submit"><span class="fa fa-check-circle-o"></span></button>' +
					'</div>' +
				'</div>' +
			'</div>' +
			'<div class="cards flush">' +
				'<div class="row default">' +
					'<div class="col-md-6">' +
						'<div class="input-box">' +
							'<input placeholder="Nama user (*)" name="nama" tabindex="1" type="text" value="" />' +
						'</div>' +
						'<div class="input-box">' +
							'<input placeholder="Jabatan" name="jabatan" tabindex="1" type="text" value="" />' +
						'</div>' +
						'<div class="input-box rows-2">' +
							'<textarea name="alamat" placeholder="Alamat" tabindex="1" class="rows-2"></textarea>' +
						'</div>' +
						'<div class="input-box">' +
							'<input name="noTelp" placeholder="Telp" tabindex="2" type="text" value="" />' +
						'</div>' +
						'<div class="input-box">' +
							'<input name="email" placeholder="Email (*)" tabindex="2" type="text" value="" />' +
						'</div>' +
						'<div class="input-box">' +
							'<input name="username" placeholder="Username (*)" tabindex="2" type="text" value="" />' +
						'</div>' +
						'<div class="input-box">' +
							'<input name="password" placeholder="Password (*)" tabindex="2" type="password" value="" />' +
						'</div>' +
						'<div class="input-box">' +
							'<input name="re-password" placeholder="Password ulang (*)" tabindex="2" type="password" value="" />' +
						'</div>' +
					'</div>' +
					'<div class="col-md-6">' +
						'<div class="input-box">' +
							'<p>Pilih foto</p>' +
						'</div>' +
						'<div class="picture-box">' +
							'<img viewer-id="v-user" class="pic-default" src="img/sources/picture.png" />' +
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
					'<div class="clearfix">&nbsp;</div>' +
					'<div class="col-md-12">' +
						'<div class="empty-box flush"></div>' +
					'</div>' +
				'</div>' +
			'</div>' ;

		body	= body + '</form></div></div></div>';
		content = '<section id="">' + head + body + '</section>';
		//--close
		
		//--gen
		headPage.html(r_headPageHtml(3, 'Form Anggota'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');
		$("#preload").remove();
		
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(412); });
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
				r_f4userSectionEditor(pTarget, pId, pLabel, pReferences, pDecription); 
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

		fileBrowserActivator();
		imagePreviewActivator();
		r_navbarReactor();

		//form reactor
		p_formHandler("f-user-create" , "addData");

		//generate data for editing
		if(packet != "start" && packet != "" && packet != null){ r_f3FormUserDataGenerator(packet); }	
	});
}

function r_f3userSectionEditor(username){
	r_navigateTo(31, username);
} 


function r_f3FormUserDataGenerator(packet){
	data = p_getData('f3', 'f311', '', packet);
	data = data.feedData;
	
	$("#f-user-create [name=noreg]").val(data.user.noRegistrasi);
	$("#f-user-create [name=nama]").val(data.user.nama);
	$("#f-user-create [name=jabatan]").val(data.user.jabatan);
	$("#f-user-create [name=alamat]").val(data.user.alamat);
	$("#f-user-create [name=rt]").val(data.user.noRt);
	$("#f-user-create [name=rw]").val(data.user.noRw);
	$("#f-user-create [name=kelurahan]").val(data.user.namaKelurahan);
	$("#f-user-create [name=kodeKelurahan]").val(data.user.kodeKelurahan);
	$("#f-user-create [name=kecamatan]").val(data.user.namaKecamatan);
	$("#f-user-create [name=kodeKecamatan]").val(data.user.kodeKecamatan);
	$("#f-user-create [name=wilayah]").val(data.user.namaWilayah);
	$("#f-user-create [name=kodeWilayah]").val(data.user.kodeWilayah);
	$("#f-user-create [name=provinsi]").val(data.user.namaProvinsi);
	$("#f-user-create [name=kodeProvinsi]").val(data.user.kodeProvinsi);
	$("#f-user-create [name=telp]").val(data.user.noTelp);
	$("#f-user-create [name=email]").val(data.user.email);
	$("#f-user-create [name=username]").val(data.user.username);
	$("#f-user-create [name=userLevel]").val(data.user.userLevel);
	$("#f-user-create [name=lingkupArea]").val(data.user.lingkupArea);
	$("#f-user-create [name=batasArea]").val(data.user.batasArea);
	$("#f-user-create [name=idBatasArea]").val(data.user.idBatasArea);
	$("#f-user-create [viewer-id=v-user]").attr('src',(data.user.urlGambar != "" && data.user.urlGambar != null) ? 'img/avatar/'+data.user.urlGambar : "img/sources/picture.png");
	$("#f-user-create [name=imageName]").html((data.user.urlGambar != "" && data.user.urlGambar != null) ? data.user.urlGambar : "berkas belum diunggah...");

	$("#f-user-create [name=username]").attr('readonly', 'readonly');
	if(data.user.urlGambar != "" && data.user.urlGambar != null){ 
		$("[viewer-id=v-user]").removeClass('changed').addClass('changed'); 
		$("[browser-id=v-user]").css('display', 'block'); 
	}

	if(data.user.noRegistrasi != "" && data.user.noRegistrasi != null){
		$("#f-user-create [viewer-id=v-user]").attr('src',(data.user.urlGambar != "" && data.user.urlGambar != null) ? 'img/logo/'+data.user.urlGambar : "img/sources/picture.png");
	}

	$(':checkbox').each(function() { this.checked = false; });

	//form reactor
	p_formHandler("f-user-create" , "updateData");
}

function r_f3pencairan(){
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part 	= ['',''];
		content = '';
		// data    =  p_getData('f1', 'ft111', '', 'single');
		
		// //-- set option list on a session
		// optionBatch = ((typeof data.feedData.option != "undefined" && (data.feedData.option instanceof Array) && data.feedData.option.length > 0 ? data.feedData.option : null));
		// data 		= ((typeof data.feedData.data != "undefined" && (data.feedData.data instanceof Array) && data.feedData.data.length > 0 ? data.feedData.data : null));
		optionBatch = [
			{'selector': 'view-card', 			'icon': 'check', 'label': 'Pencairan selesai (tidak aktif)'},
		]; 

		//--start
		body	= '<div class="row no-head"><div class="container">';
		part[0] = '<div class="col-md-3">';
		part[1] = '<div class="col-md-8" id="proposal-list">';

		data = [
			{ reffProposal: "PRP1201632211200001", idData: "1", nama: "Lembaga 1", noRegistrasi: "32211200001", noTelp: "085794867714", email: "megareceiver@gmail.com", alamat: "Jl. Cibangkong 51A/120 RT. 004 / RW. 012 Cibangkong Batununggal Kota Bandung Jawa Barat", nominalAwal: "Rp. 75,000,000", nominal: "Rp. 53,000,000", tujuan: "Renovasi Masjid", status: "Pencairan selesai" },
		];
		// part[1] = part[1] + r_f1ProposalGenerator(data);
		part[1] = part[1] +
		'<div class="cards flush">' +
			'<div class="cards-header">' +
				'<p class="fixed offset text-black">Download data lembaga dalam proses pencairan.</p>' +
				'<a href="download/templatePencairan.xlsx" class="btn btn-success" download><span class="fa fa-file-excel-o"></span> &nbsp; Download excel</a>' +
				'<p>&nbsp;</p>' +
			'</div>' +
		'</div>';

		part[1] = part[1] +
		'<div class="cards-label plus">' +
			'<p>' +
				'<strong> Dalam proses pencairan (0)</strong>' +
			'</p>' +
		'</div>';

		part[1] = part[1] +
		'<div class="cards-label plus">' +
			'<p>' +
				'<strong> Pencairan selesai (' + data.length + ')</strong>' +
			'</p>' +
		'</div>';

		for(var loop = 0; loop < data.length; loop++){	
			part[1]  = part[1] +
			'<div id="proposal-' + data[loop].idData + '" class="cards clear">' +
				'<div class="description-box">' +
					'<div class="click-frame">' +
						'<div class="icon-set bg-green"><span class="fa fa-check"></span></div>' +
						'<p class="title-set">' + data[loop].nama + '</p>' +
						'<div class="text-set">' +
							'<span class="id-set">' + data[loop].noRegistrasi + '</span>' +
							'<span class="desc-text">' + data[loop].nominal + '</span>' +
						'</div>' +
					'</div>' +
					'<button type="button" class="click-option btn-set" ' + 
						'p-label		="' + data[loop].nama + '"' + 
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
								'<div class="list-icon"><span class="fa fa-key"></span></div>' +
								'<p class="list-text">' + data[loop].reffProposal + '</p>' +
							'</div>' +
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
								'<div class="list-icon"><span class="fa fa-money"></span></div>' +
								'<p class="list-text">Pencairan : <b class="text-green">' + data[loop].nominal + '</b></p>' +
							'</div>' +
							'<div class="list-box">' +
								'<div class="list-icon"><span class="fa fa-check"></span></div>' +
								'<p class="list-text">Status : ' + data[loop].status + '</p>' +
							'</div>' +
						'</div>' +
						'<div class="clearfix"></div>' +
					'</div>' +
					'<!--div class="list-box foot">' +
						'<button type="button" class="clear list-text btn-link detail-click" p-id="">Lihat selengkapnya</button>' +
					'</div-->' +
				'</div>' +
			'</div>';
		}

		//--left
		part[0] = part[0] + r_f1FilterForm('lingkupArea');
		part[0] = part[0] + '</div>';
		part[1] = part[1] + '</div>';

		body	= body 	  + part[0] + part[1] + '</div></div>';
		content = '<section id="proposal">' + head + body + '</section>';
		//--close
		
		//--gen
		headPage.html(r_headPageHtml(4, 'Daftar Pencairan'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');

		$("#preload").remove();
		
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(0); });
		detailBoxActivator();
		searchBoxActivator();
		r_navbarReactor();

		r_f1ProposalEventActivator();
	});
}

function r_f3pelaporan(){
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part 	= ['',''];
		content = '';
		// data    =  p_getData('f1', 'ft111', '', 'single');
		
		// //-- set option list on a session
		// optionBatch = ((typeof data.feedData.option != "undefined" && (data.feedData.option instanceof Array) && data.feedData.option.length > 0 ? data.feedData.option : null));
		// data 		= ((typeof data.feedData.data != "undefined" && (data.feedData.data instanceof Array) && data.feedData.data.length > 0 ? data.feedData.data : null));
		data = [
			{ reffProposal: "PRP1201632211200001", idData: "1", nama: "Lembaga 1", noRegistrasi: "32211200001", status: "Sudah upload" },
		];

		//--start
		body	= '<div class="row no-head"><div class="container">';
		part[0] = '<div class="col-md-3">';
		part[1] = '<div class="col-md-8" id="proposal-list">';
		
		// part[1] = part[1] + r_f1ProposalGenerator(data);
		part[1] = part[1] +
		'<div class="cards-label plus">' +
			'<p>' +
				'<strong> Laporan (' + data.length + ')</strong>' +
			'</p>' +
		'</div>';

		for(var loop = 0; loop < data.length; loop++){	
			part[1]  = part[1] +
			'<div id="proposal-' + data[loop].idData + '" class="cards clear">' +
				'<div class="description-box">' +
					'<div class="click-frame">' +
						'<div class="icon-set bg-purple"><span class="fa fa-archive"></span></div>' +
						'<p class="title-set">' + data[loop].nama + '</p>' +
						'<div class="text-set">' +
							'<span class="id-set">' + data[loop].noRegistrasi + '</span>' +
							'<span class="desc-text">' + data[loop].status + '</span>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="detail-box">' +
					'<div class="row">' +
						'<div class="col-md-6">' +
							'<div class="list-box">' +
								'<div class="list-icon"><span class="fa fa-key"></span></div>' +
								'<p class="list-text">' + data[loop].reffProposal + '</p>' +
							'</div>' +
						'</div>' +
						'<div class="col-md-6">' +
							'<div class="list-box">' +
								'<div class="list-icon"><span class="fa fa-files-o"></span></div>' +
								'<p class="list-text text-purple"><a href="upload/laporan/' + data[loop].noRegistrasi + '_laporan.pdf" download>' + data[loop].noRegistrasi + '_1_laporan.pdf</a></p>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>';
		}

		//--left
		part[0] = part[0] + r_f1FilterForm('lingkupArea');
		part[0] = part[0] + '</div>';
		part[1] = part[1] + '</div>';

		body	= body 	  + part[0] + part[1] + '</div></div>';
		content = '<section id="proposal">' + head + body + '</section>';
		//--close
		
		//--gen
		headPage.html(r_headPageHtml(4, 'Pelaporan'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');

		$("#preload").remove();
		
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(0); });
		detailBoxActivator();
		searchBoxActivator();
		r_navbarReactor();

		r_f1ProposalEventActivator();
	});
}
