// PLOT BEATS:
// 1) In medias res talking about Inception
// 2) Thanks for movie, we still up to stay over tomorrow night?
// 3) You need to stop hiding... // Can't even CALL.
// Weave in previous bits of convo pieces.
// Also, FULL CIRCLE with the Inception!
// OKAY, TOO CONVOLUTED, CUT OUT THE DIFFERENT FAMILIES & TYPO parts.

function Start_Jack_1(){
	
	/////// SET UP SCENE ////////

	Show("background","bedroom");
	Show("us","bedroom_us_1");
	Show("light","bedroom_light_1",{x:0,y:159});

	PlaySound("bg","bedroom_1",{loop:-1});
    PlaySound("bg","bedroom_jazz",{loop:-1, volume:0.4});

	/////////////////////////////

	j("И когда он объявил,");
	j("'Я выкупил всю авиакомпанию'");
	j("Это было бесценно!");
	n("Разве он так говорил?");
	n("Я прослушал момент, с которого все смеялись в кинотеатре.");
	j("Тебе либо нужны субтитры, либо, чаще чистить уши.");
	j("И как ты воспринимаешь концовку?");

	Choose({
		"Это был всего лишь сон.": Inception_Dream,
		"Он должен вернуться в настоящий мир!": Inception_Awake,
        "Без разницы. Кобб окончательно освободился." : Inception_Neither,
	});

}

function Inception_Dream(message){

	$.inception_answer = "dream";

	n(message);
	j("Неужели вся его история искупления была неправдой?");
	n("Да, это большая ложь.");
	j("Ты немного приуныл, не так ли?");

	Choose({
		"Ага, я просто мешок грусти.": Sadsack,
		"Иногда... но не тогда, когда я с тобой.": function(message){
			$.im_a_poet = true;

			n(message);
			j("Ах, Никки, ты чудесный поэт.");
			n("Принеси мне немного французского хлеба и вина,");
			n("потому что это самая сырная вещь, которую я когда-либо говорил.");
			j("Притворюсь, что я не слушал.");
			n("В любом случае...");
			Thanks();
		},
		"Я просто реалист.": function(message){
			$.hippies = true;

			n(message);
			j("В твоей жизни необходимо больше позитивных размышлений.");
			n("И ТЕБЕ нужно перестать быть новоявленным хиппи.");
			n("Во всяком случае...");
			Thanks();
		}
	});

}
function Inception_Awake(message){

	$.inception_answer = "awake";
	$.im_a_poet = true;

	n(message);
	n("В противном случае весь фильм был бы всего лишь ложью.");
	n("В чём смысл жить ложью?");
	j("Ах, Никки, ты прекрасный поэт.");
	j("Я так понимаю, тебе понравился фильм?");

	Choose({
		"Не уверен.": function(message){
			n(message);
			Thanks();
		},
		"Сюжет был слишком запутанным.": function(){
			n("Мххх, время от времени сюжет был слишком запутанным.");
			j("Скорее всего так было задумано создателями.");
			n("Значит, миссия выполнена.");
			n("Во всяком случае...");
			Thanks();
		},
		"БУУУУУУУУУУУУМ": function(message){
			n(message);
			j("Буду считать, что ты сказал мне 'да'.");
			Thanks();
		}
	});

}
function Inception_Neither(message){

	$.inception_answer = "neither";

	n(message);
	j("Оу?");
	n("Он даже не удосужился посмотреть, упал ли тотем!");
	n("Ложь, правда или полуправда... Кобба это больше не волнует.");
	n("Имеет значение лишь то, что он, наконец, счастлив.");
	j("Ты или весьма поэтичен, или весьма подавлен.");

	Choose({
		"Не знал о своих поэтических способностях.": function(message){

			$.im_a_poet = true;

			n("Я поэт,");
			n("и даже не осознавал этого.");
			j("Ты лирическое чудо, ясное доказательство писательского дарования.");
			n("Это преувеличение.");
			n("Во всяком случае...");
			Thanks();

		},
		"Неа, я просто грусти мешок.": Sadsack,
		"Или мы оба такие.":function(message){

			$.hippies = true;
			$.im_a_poet = true;

			n(message);
			n("ПОЭЗИЯ - ЭТО БОЛЬ. ИСКУССТВО - ЭТО СТРАДАНИЯ.");
			j("Ты говоришь как моя мама.");
			n("Твои родители <i>такие</i> новоявленные хиппи.");
			n("В любом случае...");
			Thanks();

		}
	});

}

function Sadsack(message){
	
	$.sadsack = true;

	n(message);
	j("Оу, печально слышать это.");
	j("Надеюсь, наше маленькое свидание в кино тебя взбодрило?");
	n("Ещё бы!");
	Thanks();

}

function Thanks(){
	
	n("Спасибо, что взял меня на кинопоказ 'Начало'!");
	j("С радостью, Никки.");
	j("Ты просто обязан спародировать 'Начало' в своей странной веб игре!");
	n("Ммм, очень даже возможно.");
	n("Давай встретимся завтра вечером!");

	j("Конечно, только ...");
	n("Надеюсь, я смогу убедить родителей, чтобы они отпустили меня на ночь.");

	j("Я бы хотел, чтобы ты не говорил папе и маме, что мы учились, когда на самом деле мы проводили время в кино.");
	n("Я притворюсь, что мы будем зубрить конспекты всю ночь -- хах?");

	j("Ты не сможешь долго скрывать это.");
	n("Джек...");

	Choose({
		"Они никогда не узнают правду.": function(message){
			$.coming_out_readiness="no";
			n(message);
			j("В самом деле, никогда?");
			Hiding();
		},
		"Надеюсь, я тоже смогу рассказать родителям...": function(){
			$.coming_out_readiness="yes";
			n("Надеюсь, я тоже смогу рассказать своим родителям.");
			Hiding();
		},
		"Я не готов сообщить им об этом.": function(message){
			$.coming_out_readiness="maybe";
			n(message);
			j("Я могу помочь тебе подготовиться.");
			Hiding();
		}
	});

}

function Hiding(){

	j("Никки, продолжая прятаться, ты разъедаешь свою душу.");

	if($.inception_answer=="awake"){
		j("Ты же говорил, что нет смысла жить ложью?");
	}
	if($.inception_answer=="dream"){
		j("Это... как ты выразился... 'большая ложь'?");
	}

	if($.sadsack){
		j("Когда ты сказал, что чувствуешь себя мешком грусти,");
		j("Я знал, что ты не шутишь, на самом деле.");
	}

	n("Джек, да ты серьёзно?");
	j("Я признался перед родителями в прошлом году.");
	if($.hippies){
		n("Это НЕ справедливое сравнение.");
		n("КАК Я УЖЕ ГОВОРИЛ, ты и твои родители - кучка хиппи.");
		n("Когда я у вас дома, я не могу сказать, является ли дым ладаном или марихуаной.");
		j("Эй! Мы курим травку только через день!");
		n("Хех.");
		j("Дело в том, что мои родители приняли мой каминг-аут.");
	}else{
		j("И они меня очень поддержали!");
	}

	j("Ты сейчас в Канаде. И многие люди здесь ЛГБТ-дружелюбны.");
	j("Почему ты считаешь, что твои родители не поддержат тебя в этом?");

	Choose({
		"Азиатские родители обычно очень гомофобны.": Hiding_2,
		"Я не знаю... Наверное не пробовал ...": Hiding_2,
		"Они не поддерживают ничего, кроме УЧЁБЫ.": Hiding_2
	});

}

function Hiding_2(message){
	
	n(message);

	if($.coming_out_readiness=="no"){
		n("Ну нет же... Они никогда не смогут узнать, никогда.");
	}

	j("У тебя есть проблемы с доверием.");
	j("Ты даже пишешь мне сообщения, а не звонишь...");
	j("...потому что думаешь, что твои родители могут подслушать наши разговоры.");

	n("Так и будет!");

	j("Это способ общения...");
	j("...неточный, безличный, ненастоящий по сравнению с живым общением.");

	if($.im_a_poet){
		n("Хаха. Очевидно, ты поэт-любитель, как и я.");
	}else{
		n("Это не так уж плохо...");
	}

	if($.coming_out_readiness=="yes"){
		j("Ты сам сказал, что хотел бы признаться родителям.");
		j("Расскажи им.");
	}else{
		j("Никки.");
	}
	j("Расскажи своим родителям про нас. Сегодня вечером.");

	Choose({
		"Вечером?! Чёрт возьми, нет.": Hiding_3,
		"Вздохну... и постараюсь изо всех сил.": Hiding_3,
		"Я просто осторожно намекну на это.": Hiding_3
	});

}

function Hiding_3(message){
	
	n(message);
	j(". . .");
	n("Я не хочу слишком сильно их пугать.");
	n("Все ещё нужно убедить родителей, чтобы остаться у тебя на ночь завтра вечером.");
	n("Скажу им, что снова буду учить с тобой уроки.");
	j(". . .");
	n("Пришло время обеда. Я сейчас планирую спуститься вниз.");

	j("Эй... Я согласен.");
	n("А?");
	j("Согласен с твоими мыслями о конце фильма.");
	switch($.inception_answer){
		case "dream": j("Я думаю, Кобб все еще мечтал, живя во лжи."); break;
		case "awake": j("Я думаю, Кобб воссоединился со своей настоящей семьей, в реальном мире."); break;
		case "neither": j("Я думаю, что это не имеет значения, пока Кобб счастлив."); break;
	}
	n("Оу.");
	j("Ладно.");
	if($.coming_out_readiness=="maybe"){
		j("Надеюсь, ты передумал о своей 'неготовности тоже признаться родителям'.");
	}
	j("Удачи. Напишешь через час?");

	var insult = "";
	if($.hippies) insult+="новоявленный хиппи";
	if($.im_a_poet) insult+=" чудесный поэт";
	n("Увидимся.");
	if(insult!=""){
		n("Ты"+insult+".");
	}else{
		n("умник");
	}

	Jack_1_End();

}

function Jack_1_End(){
	Clear();
	Start_Dinner_1();
}
