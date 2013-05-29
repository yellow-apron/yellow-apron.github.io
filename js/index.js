$(function() {
	/*jMenu*/
	$("#jMenu").jMenu({
		openClick: false
		,ulWidth: 'auto'
		,effects: {
			effectSpeedOpen: 20
			,effectSpeedClose: 20
			,effectTypeOpen: 'slide'
			,effectTypeClose: 'hide'
			,effectOpen: 'linear'
			,effectClose: 'linear'
		}
		,TimeBeforeOpening: 0
		,TimeBeforeClosing: 0
		,animatedText: true
		,paddingLeft: 1
	});
	/**
	*$('.navbar-button ul').menu({role:'listbox'});
	*document.getElementById('main').setAttribute('style', 'display:inline-block');
	*/
	$('.navbar-inner a').on('click', function() {
		$('.navbar-inner li.libeenclicked').removeClass('libeenclicked')
		$('.navbar-inner .abeenclicked').removeClass('abeenclicked')
		$(this).addClass('abeenclicked');
	});
	$('.navbar-inner li').on('click', function() {
		$(this).addClass('libeenclicked');
	});
	$('.navbar-inner a[href]').on('click', function() {
		$('.sections .section').hide();
		$($(this).attr('href')).show();
	});
	$('.navbar-inner a[href="#main"]').click();
})

