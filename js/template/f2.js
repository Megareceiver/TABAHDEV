//F2
//=====================================
function r_f2lolosVerifikasi(){
	$("body").prepend(preload);
	$('main.parent').animate({'opacity': '0.6'},'fast','linear', function(){
		mainPage.html('');
		head  	= '';
		body  	= '';
		part 	= ['',''];
		content = '';
		// data    =  p_getData('f1', 'ft111', '', 'single');
		
		//-- set option list on a session
		// optionBatch = ((typeof data.feedData.option != "undefined" && (data.feedData.option instanceof Array) && data.feedData.option.length > 0 ? data.feedData.option : null));
		// data 		= ((typeof data.feedData.data != "undefined" && (data.feedData.data instanceof Array) && data.feedData.data.length > 0 ? data.feedData.data : null));
		//option list 
		optionBatch = [
			{'selector': 'view-card', 			'icon': 'check', 'label': 'Masukan ke daftar pencairan (tidak aktif)'},
		]; 

		//--start
		body	= '<div class="row no-head"><div class="container">';
		part[0] = '<div class="col-md-3">';
		part[1] = '<div class="col-md-8" id="proposal-list">';
		
		// part[1] = part[1] + r_f1ProposalGenerator(data);

		data = [
			{ reffProposal: "PRP1201632211200001", idData: "1", nama: "Lembaga 1", noRegistrasi: "32211200001", noTelp: "085794867714", email: "megareceiver@gmail.com", alamat: "Jl. Cibangkong 51A/120 RT. 004 / RW. 012 Cibangkong Batununggal Kota Bandung Jawa Barat", nominalAwal: "Rp. 75,000,000", nominal: "Rp. 53,000,000", tujuan: "Renovasi Masjid", status: "Pencairan selesai" },
		];

		part[1] = part[1] +
		'<div class="cards-label">' +
			'<p>' +
				'<strong> Belum pencairan (0)</strong>' +
			'</p>' +
		'</div>';

		part[1] = part[1] +
		'<div class="cards-label plus">' +
			'<p>' +
				'<strong> Riwayat verifikasi Pencairan (' + data.length + ')</strong>' +
			'</p>' +
		'</div>';

		for(var loop = 0; loop < data.length; loop++){	
			part[1]  = part[1] +
			'<div id="proposal-' + data[loop].idData + '" class="cards clear">' +
				'<div class="description-box">' +
					'<div class="click-frame">' +
						'<div class="icon-set bg-yellow"><span class="fa fa-check"></span></div>' +
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
		headPage.html(r_headPageHtml(4, 'Lolos verifikasi'));
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
