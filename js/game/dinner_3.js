// Plot points:
// Trying to stay overnight.
// Reveal - hippie parents, reading poetry, ...(?)
// Threats -- date your tutor, changing school(?)
// He's distracting you. Movie & Hippies.
// Oh my god, you've been reading my texts!...

function Start_Dinner_3(){

	n("Мам.");

	Choose({
		"Именно поэтому я больше учусь с Джеком.": Tutor,
		"Послушай, я правда пытаюсь. ": Tutor,
		"Мои оценки в порядке.": Tutor
	});

}

function Tutor(message){

	n(message);
	m("Я волнуюсь за тебя. У Джека не очень хорошее влияние.");

	if($.hippies){
		m("Я думаю, что его родители могут быть даже наркоманами...");
		n("Что заставило тебя сказать это--");
	}else if($.im_a_poet){
		m("Он не занимается ничем кроме поэзии.");
		n("Что заставило тебя сказать это--");
	}
	
	m("Я нашла для тебя домашнего репетитора.");
	n("...что?");

	if($.studying_subject!=$.studying_subject_2){
		m("Она подтянет твои знания по предметам "+$.studying_subject+" и "+$.studying_subject_2+".");
	}else{
		m("Она подтянет твои знания по предмету "+$.studying_subject+".");
	}

	m("Репетитора зовут Клэр. Она Кавказка: умная и симпатичная. Между прочим, вы с ней одного возраста.");

	Choose({
		"Ты пытаешься предотвратить мою встречу с Джеком?": Tutor_Seeing,
		"Ты пытаешься свести меня с ней?": Tutor_Matchmake,
		"Мы можем поговорить о репетиторстве в другой раз?": Tutor_Forget
	});

}

function Tutor_Seeing(message){
	n(message);
	m("Прошу прощения, <i>встреча</i> с Джеком?");
	m("Будь осторожен в своих словах. Ты произносишь их как будто...");
	
	Choose({
		"Как будто мы встречаемся? Точно. Так и есть.": function(message){
			n(message);
			m(". . .");
			n(". . .");
			n("...Эй? ");
			m(". . .");
			n("Мам?");
			m(". . .");
			Threat_School();
		},
		"Я всего лишь хотел встретиться с ним.": function(message){
			n(message);
			m("Ладно. Просто проясняю некоторые вещи.");
			n("Ага.");
			m(". . .");
			m("Клэр действительно милая.");
			n("Конечно.");
			m("И у неё дерзкая грудь.");
			Threat_Tutor();
		},
		"Мы. Не. Парочка.": function(message){
			n(message);
			m(". . .");
			m("Допустим.");
			m("Я никогда такого не говорила, но... окей.");
			n("Мы друзья.");

            if($.relationship=="friend"){
                m("\"Хорошие друзья\"...");
            }
            if($.relationship=="best friend"){
                m("\"ЛУЧШИЕ друзья\"...");
            }

			Threat_Tutor();

		}
	});
}

function Tutor_Matchmake(message){
	n(message);
	m("Замечательно, если это то, чего ты хотел, я надеюсь!");
	n("нееееет.");
	m("Не стесняйся! Ты становишься мужчиной.");
	m("И когда придёт время, вырастишь для меня внуков.");

	Choose({
		"Прекрати! Я ещё даже не виделся с Клэр!": function(message){
			n(message);
			m("Ещё!");
			m("Она придёт завтра!");
			n("Что? Но я же обещал Джеку--");
			m("Я прогладила твою лучшую одежду, чтобы ты произвёл хорошее первое впечатление.");
			Threat_Tutor();
		},
		"Вероятность  - 50 на 50, потому что я би.": function(message){

			$.admit_bisexuality = true;

			n(message);
			m("Ам. Би? ...");

			Show("nicky","dinner_nicky_defiant");

			n("Я БИСЕКСУАЛЕН");
			n("То есть У МЕНЯ ЕСТЬ СЕКСУАЛЬНОЕ ВЛЕЧЕНИЕ К МУЖЧИНАМ И К ЖЕНЩИНАМ.");
			m(". . .");
			n(". . .");
			Threat_School();
		},
		"Нет. Я не хочу иметь детей. Никогда.": function(message){
			n(message);
			m("Ты передумаешь, когда подрастёшь.");
			m("Воспитывать ребёнка замечательно. Твои дети будут смотреть на тебя с гордостью!");
			n("...конечно, ты самовлюблённая.");
			m("Что ты такое говоришь?");
			n("Ничего.");
			m(". . .");
			Threat_Tutor();
		}
	});
}

function Tutor_Forget(message){
	n(message);
	m("Нет, потому что я уже запланировала встречу. Клэр придёт завтра.");
	n("Что?!");
	n("Нет. Я обещал учиться с Джеком завтра.");
	m(". . .");
	m("Как долго ты хочешь оставаться у него дома?");

	Choose({
		"На целую ночь.": function(message){
			n(message);
			m(". . .");
			n(". . .");
			n("...Мам?");
			n("Ничего странного. Друзья постоянно устраивают ночёвки.");
			m(". . .");
			Threat_School();
		},
		"Только после обеда.": function(message){
			n(message);
			if($.lying_about_hanging_out){
				m("Я знала это. Я поймала тебя на лжи ранее.");
				n("А?");
			}else{
				m("...Я так и знала.");
			}
			m("Ты просто болтаешься с ним.");
			Threat_Tutor();
		},
		"Может быть, час или около того.": function(message){
			n(message);
			m("Этого недостаточно, чтобы действительно учиться.");
			if($.lying_about_hanging_out){
                m("Я знала это. Я поймала тебя на лжи ранее.");
                n("А?");
			}
			m("Ты просто болтаешься с ним.");
			Threat_Tutor();
		}
	});
}

function Threat_Tutor(){
	
	Show("nicky","dinner_nicky_defiant");
	
	n(". . .");
	m("Клэр будет обучать тебя каждый день после школы, начиная с завтрашнего дня.");

	Choose({
		"Каждый день?! А что насчёт моих друзей?!":function(message){
			n(message);
			m("Дорогой, я твой друг!");
			n(". . .");
			m("Также, Клэр может быть твоим другом. А может даже больше.");
			n(". . .");
			n("Мы закончили?");
			m("Просто... ещё одна вещь.");
			Plot_Twist();
		},
		"Ладно, но мои выходные свободны, не так ли?": function(message){
			n(message);
			m("Да.");
			n("Окей. Хорошо, что теперь все улажено.");
			m("...Да.");
			n(". . .");
            m("Просто... ещё одна вещь.");
			Plot_Twist();
		},
		"Что, если просто НЕ учиться с Клэр?": function(message){
			n(message);
			m("Ну, если ты хочешь позависать с ней, это тоже хорошо.");
			m("Всё, чтобы сделать тебя более мужественным.");
			n("Угх.");
			m("О.");
			m("Ещё одна вещь.");
			Plot_Twist();
		}
	});

}

function Threat_School(){

	$.changing_schools = true;
	
	m("Ты поменяешь школу.");

	Show("nicky","dinner_nicky_outrage");

	n("ЧЕГО?!");
	m("Я считаю, что не Джек, а вся школа плохо влияет на тебя.");
	n("ТЫ СЕРЬЁЗНО.");
	m("Вся Канадская культура путает тебя в том, кем ты являешься на самом деле.");

	Show("nicky","dinner_nicky_defiant");

	Choose({
		"Нет, это ТВОЯ Азиатская культура двинутая!": function(message){
			n(message);
			m("Грубиян!");
			m("Это и ТВОЯ культура тоже!");
			n(". . .");
			Plot_Twist();
		},
		"Ты не можешь поступить так со своим РЕБЁНКОМ!": function(message){
			n(message);
			m("Не груби мне!");
			m("Я твоя МАТЬ и поэтому вправе делать с тобой все, что я захочу!");
			n(". . .");
			Plot_Twist();
		},
		"Как бы то ни было, во всех школах есть странные люди.": function(message){
			n(message);
			m("Не будь таким грубым!");
			m("И смотри, я могу изменить своё решение и начну учить тебя на дому.");
			n(". . .");
			Plot_Twist();
		}
	});

}

function Plot_Twist(){

	m("Вчера, во сколько времени ты якобы учился с Джеком?");
	m("Я знаю о вашей тайной встрече в кинотеатре.");

	Show("nicky","dinner_nicky_sit");
	n(". . .");

	Show("clock_time","clock_1920");

	Choose({
		"О, Боже. Ты читала мои тексты.": function(message){
			n(message);
			m("Да. Видишь, каким умным ты можешь быть, когда не с Джеком?");
			Plot_Twist_2();
		},
		"Нет. Мы учились.": function(message){
			n(message);
			m("Ты очень упрямый мальчик.");
			m("Я читала твои текстовые сообщения.");
			Plot_Twist_2();
		},
		"С чего ты взяла?": function(message){
			n(message);
			m("Потому что я прочитала твои текстовые сообщения.");
			Plot_Twist_2();
		}
	});

}

function Plot_Twist_2(){

	n(". . .");
	m("Перед обедом. Я была наверху в твоей комнате.");

	// Dinner_1
	m("Ты закричал из кухни '"+$.what_you_called_out+"', пока я разблокировала твой телефон...");
	m("И прочитала, что вы с Джеком отправляли друг другу.");
	m("Я твоя мама. Я имею право.");

	n(". . .");

	if($.im_a_poet){
		m("Странная поэзия?");
	}
	if($.hippies){
		m("Разговор о курении марихуаны?");
	}
	if($.im_a_poet || $.hippies){
		m("Помогать тебе лгать собственной матери?");
		m("Что еще ты делал за моей спиной?");
	}

	Choose({
		"Это должно быть плохой сон.": function(message){
			n(message);
			m("Как этот фильм 'Неправда'?");
			n("Он... он называется 'Начало'.");
			m("Не разговаривай со мной.");
			Plot_Twist_3();
		},
		"Прости меня. Мне очень жаль.": function(message){
			n(message);
			m("Я прощаю тебя.");
			m("Ты моё дитя, конечно, я прощаю тебя.");
			Plot_Twist_3();
		},
		"Я ненавижу тебя.": function(message){
			n(message);
			m("Все в порядке.");
			m("Я по прежнему люблю тебя, Ник.");
			Plot_Twist_3();
		},
	});

}

function Plot_Twist_3(){
	Start_Dinner_4();
}
