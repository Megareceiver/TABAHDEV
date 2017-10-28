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
		headPage.html(r_headPageHtml(4, 'Lolos verifikasi'));
		mainPage.html(content).animate({'opacity': '1'},'fast','linear');

		$("#preload").remove();
		
		//--command reactor
		$(".back-button").unbind().on('click', function(){ r_navigateTo(0); });
		detailBoxActivator();
		searchBoxActivator();
		r_navbarReactor();
	});
}
