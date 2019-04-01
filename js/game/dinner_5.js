// Dad's home!
// Calm conversation about going to the movies.
// Mother brings up tutoring and/or school. (if you try to bring anyting up, it'll skip to this.)
// Argue or agree?
// Everything in the past hour comes crashing back.
// You can attempt to blame them, too. (but they justify it all)
// Agree (calm dinner) --- Stressed Dinner, storms off --- Punches you in the damn face.

function Start_Dinner_5(){

	PlaySound("sfx","dinner_door");
	
	f("Эй, Циин! Эй, Ник!");
	f("Я уже дома!");
	
	Show("dad","dad_serious");

	m("Привет, дорогой.");
	n("Здарова, пап, как прошёл твой день?");

	f("Остался сверхурочно. Надеюсь, босс заметит это перед обзором производительности.");
	f("На самом деле, я просто играл в веб-игры весь день. Хаха!");
	n("Ха ха.");

	f("Ник, почему <i>твои</i> веб-игры не весёлые?");

	Choose({
		"Я считал свои игры весёлыми...": function(message){
			n(message);
			f("Ну тогда, у тебя есть больное восприятие веселья, не так ли? Хаха!");
			n(". . .");
			Casual();
		},
		"Не все игры должны быть весёлыми.": function(message){
			n(message);
			f("О да. Ты прав.");
			f("ПЛОХИЕ игры не веселят. Хаха!");
			n(". . .");
			Casual();
		},
		"Это моё ИСКУССТВО!": function(message){
			n(message);
			f("Пффт. Какая польза от искусства?");
			f("Знаешь, следующее, к чему ты придёшь - это написание плохой поезии, или чего-нибудь ещё.");
			n(". . .");
			Casual();
		}
	});

}

function Casual(){
	
	f("Эй, Ци, что это за соус в твоей тарелке?");
	f("Эм...");

	Show("clock_time","clock_1950");

	Choose({
		"Это рвота.": function(message){
			
			n(message);

			$.grounded = 2;
			f("Ник! Наказан на одну неделю!");
			f("Не оскорбляй свою маму глупыми шутками.");
			f("Её кулинарные блюда и так вполне оскорбительны. Хаха! ");

			Casual_2();

		},
		"Не ешь это! Оно...действительно не очень.": function(message){
			
			n(message);

			$.grounded = 1;
			f("Ник! Наказан на один день!");
			f("Покажи немного уважения к своей матери. Верю, что она научится готовить!");
			f("Но судя по всему, в нашем случае ей поможет только чудо! Хаха!");

			Casual_2();

		},
		"Почему бы тебе не попробовать, папа?": function(message){
			
			n(message);

			$.grounded = 0;
			m("Ник...");
			f("Ничего страшного, если я попробую!");
			f("[ест с ложки]");
			f(". . .");
			n(". . .");
			m(". . .");
			f("Ну, на этот раз ты приготовила ещё хуже. Хаха!");

			Casual_2();

		}
	});

}

function Casual_2(){
	
	m("Дорогой...");
	f("Итак, сын! Как дела в школе?");

	Choose({
		"В школе всё нормально.": function(message){

			n(message);

			f("Действительно всё нормально?");
			if($.studying_subject!=$.studying_subject_2){
				f("А что насчёт твоих плохих оценок по предметам  "+$.studying_subject+" и "+$.studying_subject_2+"?");
			}else{
				f("А что насчёт твоих плохих оценок по предмету "+$.studying_subject+"?");
			}

			m("Мы с Ником говорили об этом.");
			Getting_A_Tutor();

		},
		"Завтра я буду учиться у друга дома.": function(message){
			n(message);

			$.tried_talking_about_it = true;

			if($.grounded>0){

				if($.grounded==1){
					f("Неужели ты забыл? Я наказал тебя на завтра.");
				}
				if($.grounded==2){
					f("Неужели ты забыл? Я наказал тебя на целую неделю.");
				}
				f("Ты, должно быть, унаследовал тупость своей матери. Хаха!");
				
				n("Аам. Я...");

				$.grounded++;
				if($.grounded==2){
					f("Я передумал. Теперь ты наказан на целую неделю.");
				}
				if($.grounded==3){
					f("Я передумал. Теперь ты наказан на ДВЕ недели.");
				}

			}

			m("Говоря про учёбу...");
			Getting_A_Tutor();

		},
		"ПАПА Я БИСЕКСУАЛ И ТРАХАЛ ДЖЕКА.": function(message){
			$.tried_talking_about_it = true;

			Show("nicky","dinner_nicky_outrage");
			n("ПАПА Я БИ --");
			Show("nicky","dinner_nicky_sit");

			m("БИАТЛОНИСТ!");
            m("Ой.. то есть, ВЕЛОСИПЕДИСТ!");
            m("Ник будет ездить на велосипеде в школу каждый день, начиная со следующей недели.");
			f("О, Боже!");
			f("Ты мог бы, конечно, немного похудеть, а иначе как ты заполучишь девушку?");
			f("Ты должен был унаследовать полноту от своей матери. Хаха!");
			n("Ха ха.");
			m("Говоря про школу...");
			Getting_A_Tutor();
		}

	});

}

function Getting_A_Tutor(){

	m("Мы обсуждали, вероятно, получение домашнего репетитора.");
	f("О! Та самая девочка Клэр?");

	// Oh dang!
	Show("nicky","dinner_nicky_defiant");

	switch($.promise_silence){
		case "yes":
			n("Мама, мы обещали не говорить об этом...");
			if($.tried_talking_about_it){
				m("Ты <i>только что</i> пытался поговорить об этом.");
			}
			break;
		case "no":
			n("Мама, ты сказала, что мы не будем говорить об этом...");
			m("Ты тот, кто не обещал не говорить!");
			break;
		case "tit for tat":
			n("Мама, ты сказала, что не будешь говорить об этом, если я не расскажу про...");
			if($.tried_talking_about_it){
				m("Ты <i>только что</i> пытался поговорить об этом.");
			}
			break;
	}

	f("Вы что-то не договариеваете?...");
	f("Я глава в доме. Вам лучше не скрывать от меня секреты.");
	m("О... Нику по-настоящему нравится Клэр.");

	Choose({
		"Что?! Ничего подобного!": function(message){
			n(message);
			f("Не стыдись своих чувств.");
			Getting_A_Tutor_2();
		},
		"Ладно. Вы поймали меня. Я влюблён в Клэр.": function(message){
			n(message);
			Getting_A_Tutor_2();
		},
		"У меня есть парень.": function(message){
			n(message);
			f("Да, сынок! Ты станешь  парнем для девушки!");
			n("<i>Есть</i>. У меня <i>есть</i> --");
			Getting_A_Tutor_2();
		}
	});

}

function Getting_A_Tutor_2(){
	
	f("Сынок, ты становишься мужчиной!");
	f("Если б я был в твоём возрасте, то бросил бы твою матерь и погнался бы за Клэр тоже! Хаха!");

	n("Ты говоришь очень странные вещи, чувак.");
	f("Дерзишь мне? Будь осторожен, не то я надеру тебе уши, мальчик!");

	if($.changing_schools){
		m("Мы также думали о смене школы для Ника.");
		m("Возможно, в школу Клэр.");
	}
	if($.studying_subject!=$.studying_subject_2){
		m("Клэр будет обучать Ника каждый день после школы по предметам  "+$.studying_subject+" и "+$.studying_subject_2+".");
	}else{
		m("Клэр будет обучать Ника каждый день после школы по предмету "+$.studying_subject+".");
	}

	f("Ник, так ли это всё? Да или нет?");
	m("Ему нравится эта иде--");
	f("Заткнись, Ци. Я спросил у своего сына.");
	m(". . .");

	Show("dad","dad_threat");

	f("Мистер Никлаус Лиоу.");
	if($.changing_schools){
		f("Ты хочешь поменять школу, чтобы преследовать свою горячую подругу-репетитора?");
	}else{
		f("Ты хочешь провести все своё послешкольное время со своей горячей подругой-репетитором?");
	}

	n("Это сложно, я--");
	f("Без пидорских невнятных ответов.");
	f("Да. Или. Нет.");

	n(". . .");

	Choose({
		"Да.": Agree_With_Dad,
		"Нет.": Argue_With_Dad
	});

}

function Agree_With_Dad(){
	
	n("...Да.");

	f("Хм.");
	f("Вы двое, кажется, приняли это важное жизненное решение очень охотно!");
	f("Так охотно, что сделали это менее чем за час и попытались скрыть от меня. Какая неожиданность.");
	m(". . .");
	n(". . .");

	f("Ник, ты сделал что-то непослушное, не так ли?");
	f("Что ты делал..?");

	Choose({
		"Я провалил свои экзамены.": function(message){
			
			n(message);

			f("...О.");
			f("Даааа, тебе нужно повысить свои оценки.");

			Show("dad","dad_serious");

			f("Или ты застрял в учебной работе, как твоя мать! Ха-ха!");
			n(". . .");
			Agreeable_Ending();

		},
		"У меня был секс с Джеком.": function(message){
			
			n(message);
			
			Show("mom","mom_cry");
			m("[рыдает]");
			f(". . .");
			Argument_Ending();

		},
		"У меня был секс с Клэр.": function(message){
			
			n(message);
			
			m("...Ник!");
			f(". . .");
			f("   Хххххоооооорошо.");
			m("...Дорогой!");
			f("Погоди, эм, она не забеременела от тебя случайно?");
			n("Нет. Я же не глупец.");
			
			Show("dad","dad_serious");

			f("Хорошо. В противном случае ты застрял бы в течение следующих двух десятилетий, воспитывая ребенка, как я! Ха-ха!");
			n("Ха ха.");
			Agreeable_Ending();

		}
	});

}

function Agreeable_Ending(){

	$.father_oblivious = true;

	f("На мгновение, Ник, я думал, что ты куришь травку со своим одноклассником-хиппи Джеком или что-то в этом роде!");

	Show("nicky","dinner_nicky_sit");
	n(". . .");
	f("Ну!");
	f("Кто хочет посмотреть фильм в эти выходные? Я слышал, что 'Начало' - впечатляющая киноработа.");

	Choose({	
		"Давайте посмотрим! Я ещё не видел его.": function(message){
			n(message);
			f("Тогда это в наших планах!");
			f("Эй, Ник, ты знаешь кто играет в фильме?");
			n("Эм. Леонардо ДиКаприо?");
			f("Нет, нет, Эллен Пейдж.");
			f("Разве Клэр не похожа слегка на неё?");
			n("Думаю.");
			Dinner_Ending();
		},
		"Ам... как насчёт другого фильма...": function(message){
			n(message);
			f(" 'Начало' слишком сложное для тебя?");
			n("Эй...");
			if($.studying_subject!=$.studying_subject_2){
				f("Конечно, я понимаю, что у тебя провалы по предметам "+$.studying_subject+" и "+$.studying_subject_2+"...");
			}else{
				f("Конечно, я понимаю, что у тебя проблемы с предметом. "+$.studying_subject+"...");
			}
			f("Но погнали, это же всего лишь какое то <i>кино</i>!");
			f("Ты не мог унаследовать так много тупости от своей матери! Хаха!");
			n("Ха ха");
			Dinner_Ending();
		},
		"Я уже смотрел 'Начало'.": function(message){
			n(message);
			f("О, хо, я вижу...");
			f("Ты устроил небольшое кино-свидание со своим специальным другом - Клэр, верно?");
			n("О да.");
			n("Свидание с моим специальным другом.");
			Dinner_Ending();
		}
	});

}

function Argue_With_Dad(){

	n("...Нет.");

	f("Извините?");
	n("Нет. Мама делает всё это, чтобы я никогда больше не увиделся с Джеком.");
	f("Джек.");
	n("Мой друг.");

	Choose({
		"Мой парень.": function(message){
			
			n(message);

			Show("mom","mom_cry");
			m("[рыдает]");

			m("Посмотри, что Джек сделал с нашим сыном!");
			f("Этот ребёнок выбрал свой жизненный стиль, но я не позволю тебе следовать за этим стилем, Ник.");
			Argument_Ending();
		},
		"Мама хейтит его, ибо он бывает как гей.": function(message){

			n(message);

			Show("mom","mom_cry");
			m("[рыдает]");

			f("Из-за тебя плачет мама.");
			if($.hippies){
				m("И его родители - наркоманы!");
			}
			f("Этот ребёнок выбрал свой жизненный стиль, но я не позволю тебе следовать за этим стилем, Ник.");
			Argument_Ending();
		},
		"Мама хейтит его, ибо она СЧИТАЕТ его геем.": function(message){

			n(message);

			Show("mom","mom_cry");
			m("[рыдает]");

			m("Джек ЯВЛЯЕТСЯ геем!");
			if($.hippies){
				m("И его родители - наркоманы!");
			}
			f("Этот ребёнок выбрал свой жизненный стиль, но я не позволю тебе следовать за этим стилем, Ник.");
			Argument_Ending();
		}
	});

}

function Argument_Ending(){

	$.father_oblivious = false;

	n(". . .");

	if($.top_or_bottom=="top"){
		m("Джек действует в роли женщины, а не он ...");
	}
	switch($.what_are_you){
		case "bisexual":
			m("Ник не совсем гей. Он сам сказал мне, что его по-прежнему привлекают девушки!");
			n(". . .");
			break;
		case "confused":
			m("Немного раньше Ник сказал мне, что он был просто сбит с толку!");
			f("О, ясно, кем он является.");
			n(". . .");
			break;
		case "son":
			n("Послушай, как я сказал маме только что, Я твой СЫН, разве этого недоста--");
			break;
	}
	
	f("Ник, ты поменяешь школу.");
	n(". . .");
	m("хныыы... хныыы... хныыы...");

	f("Мы с мамой будем периодически проверять твои электронные письма.");
	n(". . .");
	m("оуввв... оуввв...");

	f("Клянусь, если я должен заплатить Клэр, чтобы ты осознал свою гетеросексуальность, я буду.");
	n(". . .");

	Show("mom","mom_sit");
	if($.crying=="anger"){
		m("Когда я плакала ранее, он обвинял меня в притворности!");
		f("Ци, заткнись. Сейчас речь не о тебе.");
	}
	if($.crying=="mocking"){
		m("Когда я плакала ранее, он издевался надо мной!");
		f("Ци, заткнись. Сейчас речь не о тебе.");
	}

	f("Ну что, Ник.");
	f("Не хочешь ли ты сказать что-нибудь, обо всём, об этом?");

	Choose({
		"Да. К чёрту это, и к чёрту тебя.": function(message){

			n("Да.");
			n("К ЧЁРТУ это.");
			n("И К ЧЁРТУ тебя.");
			
			Show("nicky","dinner_nicky_outrage");
			n("Идите ВЫ нахуй, эгоистичные слизистые куски ГОВ--");
			
			Dinner_Ending_Punch();

		},
		"Нет. Я принимаю свое наказание.": function(message){

			n(message);
			f("Хорошо. По крайней мере, ты воспринимаешь это как мужчина.");
			n(". . .");

			Show("dad","dad_serious");

			m("сопит...");
			f("А сейчас я ухожу в бар и получу что-нибудь действительно съедобное.");

			Show("dad",null);

			f("Сладкая дорогая милая? Твоя кулинария - дрянь собачья.");
			PlaySound("sfx","dinner_door");

			m(". . .");
			
			Show("mom","mom_cry");

			m("БААААУУУУУ");
			
			Dinner_Ending();

		},
		"Ты не можешь причинить мне боль.": function(message){

			n(message);
			f(". . .");
			m("Дорогой, нет...");
			f("Сильные слова, сынок.");
			m("Милый, пожалуйста, не надо!");
			f("По крайней мере, ты сопротивляешься мне. Как мужчина.");
			m("Пожалуйста! Это моя вина! Не--");
			f("Лед снимет отёк.");
			m("ДОРОГОЙ!");
			
			Dinner_Ending_Punch();

		}
	});

}

function Dinner_Ending_Punch(){

	Wait(500);

	queue(ClearDialogue,0);

	StopSound("clock");
	PlaySound("sfx","dinner_punch");

	Show("dad",null);
	Show("mom","mom_cry");
	Show("nicky","dinner_nicky_punched");
	Show("dinner_punch_arm","dinner_punch_arm",{x:0,y:300});
	
	$.punched = true;
	Dinner_Ending();	
	
}

function Dinner_Ending(){

	Wait(500);

	queue(ClearDialogue,0);

	Wait(500);

	PlaySound("clock","dinner_meowing",{loop:-1});
	Show("clock","clock_meowing");
	Show("clock_time","clock_2000");

	Wait(1000);

	Clear();
	Start_Jack_2();

}

