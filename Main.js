$(document).ready(function()
{
	$('ul.nav2 li a:first').addClass('active');
	$('.secciones div').hide();
	$('.secciones div:first').show();

	$('ul.nav2 li a').click(function()
		{
			$('ul.pest li a').removeClass('actives');
			$('ul.pest2 li a').removeClass('actives');
			$('ul.pest3 li a').removeClass('actives');
			$('ul.pest li a:first').addClass('actives');
			$('.pestcont main').hide();
			$('.pestcont main:first').show();
			$('ul.pest2 li a:first').addClass('actives');
			$('.pestcont2 main').hide();
			$('.pestcont2 main:first').show();
			$('ul.pest3 li a:first').addClass('actives');
			$('.pestcont3 main').hide();
			$('.pestcont3 main:first').show();
			$('ul.nav2 li a').removeClass('active');
			$(this).addClass('active');
			$('.secciones div').hide();

			var activeTab = $(this).attr('href');
			$(activeTab).show();
			return false;
		});
});

$(document).ready(function()
{
	$('ul.pest li a:first').addClass('actives');
	$('.pestcont main').hide();
	$('.pestcont main:first').show();

	$('ul.pest li a').click(function()
	{
		$('ul.pest li a').removeClass('actives');
		$(this).addClass('actives');
		$('.pestcont main').hide();

		var activeTbs = $(this).attr('href');
		$(activeTbs).show();
		return false;
	});
});

$(document).ready(function()
{
	$('ul.pest2 li a:first').addClass('actives');
	$('.pestcont2 main').hide();
	$('.pestcont2 main:first').show();

	$('ul.pest2 li a').click(function()
	{
		$('ul.pest2 li a').removeClass('actives');
		$(this).addClass('actives');
		$('.pestcont2 main').hide();

		var activeTbs = $(this).attr('href');
		$(activeTbs).show();
		return false;
	});
});

$(document).ready(function()
{
	$('ul.pest3 li a:first').addClass('actives');
	$('.pestcont3 main').hide();
	$('.pestcont3 main:first').show();

	$('ul.pest3 li a').click(function()
	{
		$('ul.pest3 li a').removeClass('actives');
		$(this).addClass('actives');
		$('.pestcont3 main').hide();

		var activeTbs = $(this).attr('href');
		$(activeTbs).show();
		return false;
	});
});