var question = ["antrop","duc","erg , org , urg","log , leg ","phag","pre-, (pro- , prae-)","re- (red-)","se-","tom , ( tm )","syn-","auto, (tauto)","de-","eu-","gen,(gon, gn)","iatr","path","per-","phil","phob","xen","ag","bio","ced,(ceed)","cid","crat","dys-","gam","gyn(ec)","pan(panta)","trop","an-","ander","branch","epi-","mal,(male)","nom","plec","phot,(phos)","reg","soph","apo-","con-","frag","glot(glos)","lat","miso","mono","pel","pend(pond)","phyt","ad-","graph(gram)","in-,en-","op","ped(paed)","ped (pod, pus)","zo","som","anti-","den(odon)","ex-(ec-)","flec","hypo-","mit","par","proto","super, hyper","cyn(can)","col","hema (em)","hetero","homo-(homeo-)","poly","pyr","seg","tele-","theo","ante-","anth","aster","copro","greg","iso","mani","meta-","meter","multi","ana-","cata-","dis- (di-)","chrom","fer, pher (phor)","hyd(r)","later","morph","stat (stit, st)","tag (tang)","arch","cad","ero","mort","peter","post","rh, rrh","son","spir","vor","ambi, amphi","brad(y)","dendr","equi","lith, lit","stru, struc","ten","top","ven","vir","av","alg","dem","fac","gnos (gnor, gn)","grad","leg","rapt","sal","solv","ab-, abs-","cap, cup","cere, cre","cosm","cub (cumb)","en-, in-","prag","sed","sub-","trans-(tra)-","card, cord","dog, (doc)","fa, pha, (fe, phe)","fid","idio","mit, mis","ob-","secu, sequ","sim,sem","volv","apt,","di, dy, du","dactyl","infra-","mant","men, (min,mn)","nec (noc)","semi-,hemi","tract","dic","fin","merg","para","pter","sper,(spor)","ten, tend","uter, hyster","heli","voc (vok)","ac (acer, acerb)","cent","chron","dia-","geo","ichthy","longi","ornith","pon (pos)","tu","brev","lab","loc","loqu, locu","lud","mach","tac","tach (tachy)","sol","sol (solar)","aug","dol","lig","nav","sol, hol","therm","phon"
			   ];

var answer = ["'man , human being'","'lead , pull'","'work'","'speak , write , study'","'eat'","'before , forward'","'again , back , down'","'apart'","'cut'","'together , with'","'self'","'away, down, from'","'good, well'","'birth, origin'","'treat'","'feel,suffer,illness'","'through,very'","'love'","'fear'","'strange'","'act'","'life'","'go, let go'","'cut, kill'","'govern","'bad'","'marriage, sexual union'","'woman,female'","'all'","'turn, change'","'lacking,not'","'man,male'","'short'","'on'","'bad'","'law'","'fold'","'light'","'straight, lead'","'wise'","'away","'co-'together,with'","'frang,'break'","'tongue, speech'","'carry'","'hate'","'one'","'push'","'hang'","'plant'","'to,toward'","'write'","'not, lacking'","'eye, look'","'child, training'","'foot'","'animal'","'body'","'against, opposite'","'tooth'","'out, away'","'blend,turn'","'under, not enough'","'go'","'beget, produce'","'first'","'over, too much'","'dog'","'live, grow'","'blood'","'different'","'same'","'many, much'","'fire'","'cut, spilt'","'far'","'god'","'before, old'","'flower'","'star'","'dung'","'flock'","'equal'","'intense desire'","'beyond'","'measure'","'many'","'back, again'","'down, away'","'away, not'","'colour'","'bear, send'","'water'","'worship'","'form'","'stay, stand'","'touch, feel'","'first, govern'","'fall'","'physical love'","'death'","'rock'","'after, behind'","'flow'","'sound'","'breathe'","'eat'","'both, on both sides'","'slow'","'tree, bush'","'even'","'stone'","'build'","'hold'","'place'","'bring, come'","'male, man'","'bird, fly'","'pain'","'people'","'do, make'","'know'","'step, go'","'choose'","'burst'","'jump'","'loosen'","'from, away'","'take, contain'","'come forth, grow'","'universe, world'","'lie'","'in, into'","'do'","'sit, stay'","'down, under'","'across, beyond'","'heart, agree'","'teach, praise'","'speak'","'trust'","'peculiar'","'send, do","'to, toward'","'follow'","'same, one'","'turn'","'fit'","'two'","'finger'","'below'","'prophesy'","'think'","'death, harm'","'half'","'drag, pull'","'speak'","'end'","'dip, plunge'","'beside, beyond'","'wing, feather'","'seed, scatter'","'stretch'","'womb'","'sun'","'speak, call'","'sharp, tip'","'hundred'","'time'","'through, across'","'earth'","'fish'","'long'","'bird'","'place, put'","'instruct'","'short'","'seize, grasp'","'place'","'speak'","'play'","'battle'","'arrange'","'fast'","'alone, single'","'sun'","'increase'","'suffer'","'bind'","'boat, sail'","'whole'","'hot, warm'","'sound, speech sound'"
			 ];

var initialProgressString = "Card 1 of " + question.length + " ";

var loadCard =function(cardIndex) {
	$('#front').text(question[cardIndex]);
	$('#back').text(answer[cardIndex]);
}

var loadProgress = function(cardIndex, totalCards) {
	var progressStr = "Card " + cardIndex + " of " + totalCards + " ";
	$('#progress').text(progressStr);
	
	$('#front_no').text(cardIndex);
}

var cardFlip = function() {
	$('#card').toggleClass('flipped');
}



$(function() {
	var cardIndex = 1;
	console.log(cardIndex);
	$('.add_modal').hide();
	$('.search_modal').hide();
	$('.view_card').hide();
	$('.info_modal').hide();
	
	var lastcard = localStorage.getItem("LastCard");
				
	$('#lastcard').text(lastcard);
	
	// Loading the first card
	loadCard(0);
	
	// Loading initial progress
	loadProgress(1, question.length);
	
	// Card flip event
	$('#card').click(cardFlip);
	
	
	$("#nextbtn").click(function() {
		if ($('#card').hasClass('flipped')) {
			$('#card').removeClass('flipped');
			setTimeout(function() {
				loadCard(cardIndex);
			}, 200);
		} else {
		loadCard(cardIndex);	
		};
		
		localStorage.setItem("LastCard", cardIndex);
		
		loadProgress(++cardIndex,question.length);
		
		if (cardIndex >= question.length) {
			cardIndex = 1;
		}
	});
	$("#prevbtn").click(function() {
		if ($('#card').hasClass('flipped')) {
			$('#card').removeClass('flipped');
			setTimeout(function() {
				loadCard(cardIndex);
			}, 200);
		} else {
		loadCard(cardIndex-1);	
		};
		
		loadProgress(--cardIndex+1,question.length);
		
		if (cardIndex < 1) {
			cardIndex = 1;
		}
	});
	
	$('#showinfo').click(function(){
		$('.info_modal').show();
	});
	$('#closeinfo').click(function(){
		$('.info_modal').hide();
	});
	
	// Adding cards
	$('#submit').click(function(e) {
		e.preventDefault();
		var newQuestion = $('#newQuestion').val();
		var newAnswer = $('#newAnswer').val();
		if (newQuestion == "" || newAnswer == "") {
			alert("Please enter some text");
		} else {
			question[question.length] = newQuestion;
			answer[answer.length] = newAnswer;
			loadProgress(cardIndex, question.length);
		};
		$('#newQuestion').val('');
		$('#newAnswer').val('');
	});
	
	
	$('#closesearch').click(function(){
		$('.search_modal').hide();
	});
	$('#closeadd').click(function(){
		$('.add_modal').hide();
	});
	
	$('#addbtn').click(function() {
		$('.add_modal').show();
	});
	
	$('#searchbtn').click(function() {
		$('.search_modal').show();
		console.log('running');
		
		question.forEach(function(questions) {
			  //console.log(questions);
			  $("#morphemes").append('<option value="'+questions+'" class="form-control"></option>');
				
			});
			
		$('#search_word').change(function(){
			
			var word = $('#search_word').val();
			console.log(word);
			
			var a = question.indexOf(word);
			console.log(a);
			
			var meaning = answer[a]
			console.log(meaning);
			
			$('#card_no').text(a+1);
			$('#morpheme_searched').text(word);
			$('#meaning').text(meaning);
			
			
			
			
			
			$('.view_card').show();
			$('.view_card').click(function() {
				localStorage.setItem("cardIndex", a+1);
				
				$('#front').text(question[a]);
				$('#back').text(answer[a]);
				var progressStr = "Card " + (a+1) + " of " + question.length + " ";
				$('#progress').text(progressStr);
				$('#front_no').text(a+1);
				
				var cardIndex = a + 1;
				$('.search_modal').hide();
				
				
			});	
			
			
			
			
		  });
		  	
	});
	
	
	// Deleting a card
	$('#delete').click(function(e) {
		e.preventDefault();
		question.splice(cardIndex-1, 1);
		answer.splice(cardIndex-1, 1);
		if (cardIndex >= question.length) {
			cardIndex = 1;
		}
		loadCard(cardIndex -1);
		loadProgress(cardIndex, question.length);
	})
});
